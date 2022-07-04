import { useState, useEffect } from "react";

import AppContext from "/context/AppContext";

// Style
import "/styles/style.scss";

function MyApp({ Component, pageProps }) {
  const [currentQuestion, setCurrentQuestion] = useState(null);
  const [answeredBuffer, setAnsweredBuffer] = useState([]);
  const [questionsNumber, setQuestionsNumber] = useState(null);
  const [filters, setFilters] = useState({
    allowedLevels: [],
    allowedTopics: [],
    allowedCategories: [],
    allowedLanguages: [],
  });
  const [customGame, setCustomGame] = useState(false);

  useEffect(() => {
    getQuestionsCount();
  }, []);

  useEffect(() => {
    questionsNumber ? getNextQuestion(customGame) : null;
  }, [questionsNumber, customGame]);

  // ToDo: Looking for an optimal solution
  const getRandomQuestionId = () => {
    let questionsCount = questionsNumber;
    let candidateId = Math.ceil(Math.random() * questionsCount);
    let i = 0;
    while (answeredBuffer.includes(candidateId) && i < 50) {
      i++;
      candidateId = Math.ceil(Math.random() * questionsCount);
    }
    return candidateId;
  };

  // ToDo: Change 0.5 to 0.25 buffer size when many questions
  const updateBuffer = (newId) => {
    let _answeredBuffer = answeredBuffer;
    if (answeredBuffer.length >= Math.ceil(questionsNumber * 0.5)) {
      // Remove the first element (oldestQuestion)
      _answeredBuffer.shift();
    }
    _answeredBuffer.push(newId);
    setAnsweredBuffer(_answeredBuffer);
  };

  const getQuestion = async (id) => {
    let response = await fetch(`/api/questions/${id}`, {
      method: "GET",
      headers: { "Content-Type": "application/json" },
    });

    let question = await response.json();
    setCurrentQuestion(question);
  };

  const getFilteredQuestion = async () => {
    let response = await fetch(`/api/questions/random`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ ...filters, notAllowedIds: answeredBuffer }),
    });
    try {
      let question = await response.json();
      setCurrentQuestion(question);
    } catch {
      alert("No more questions with your custom filters, setting normal mode");
      setCustomGame(false);
    }
  };

  const getNextQuestion = async (customGame) => {
    if (customGame === false) {
      console.log("Getting normal question");
      let nextId = getRandomQuestionId();
      await getQuestion(nextId);
      updateBuffer(nextId);
    } else {
      console.log("Getting filtered question");
      console.log("Buffer", answeredBuffer);
      await getFilteredQuestion();
      if (currentQuestion) updateBuffer(currentQuestion.id);
    }
  };

  const getDowngradedQuestion = async (previousLevelId) => {
    // Downgrade to any easier level
    // let allowedLevels = [...Array(previousLevelId).keys()];
    // allowedLevels.shift();
    let response = await fetch(`/api/questions/random`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        allowedLevels: [previousLevelId - 1],
      }),
    });
    let question = await response.json();
    setCurrentQuestion(question);
  };

  const getQuestionsCount = async () => {
    let response = await fetch(`/api/questions/count`, {
      method: "GET",
      headers: { "Content-Type": "application/json" },
    });

    let count = await response.json();
    setQuestionsNumber(count);
  };

  return (
    <AppContext.Provider
      value={{
        filters: filters,
        setFilters: setFilters,
        customGame,
        setCustomGame,
        answeredBuffer: answeredBuffer,
        currentQuestion: currentQuestion,
        questionsNumber: questionsNumber,
        getQuestion: getQuestion,
        getNextQuestion: getNextQuestion,
        getDowngradedQuestion: getDowngradedQuestion,
        getQuestionsCount: getQuestionsCount,
      }}
    >
      <Component {...pageProps} />
    </AppContext.Provider>
  );
}

export default MyApp;
