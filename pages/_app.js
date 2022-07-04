import { useState, useEffect } from "react";

import AppContext from "/context/AppContext";

// Style
import "/styles/style.scss";

function MyApp({ Component, pageProps }) {
  const [currentQuestion, setCurrentQuestion] = useState(null);
  const [answeredBuffer, setAnsweredBuffer] = useState([]);
  const [filters, setFilters] = useState({
    allowedLevels: [],
    allowedTopics: [],
    allowedCategories: [],
    allowedLanguages: [],
  });
  const [customGame, setCustomGame] = useState(false);

  useEffect(() => {
    getNextQuestion(customGame);
  }, [customGame]);

  // ToDo: Change 0.5 to 0.25 buffer size when many questions
  const updateBuffer = (id) => {
    console.log("Id", id);
    let _answeredBuffer = answeredBuffer;
    if (answeredBuffer.length >= 2) {
      // Remove the first element (oldestQuestion)
      _answeredBuffer.shift();
    }
    setAnsweredBuffer([..._answeredBuffer, id]);
    console.log("Buffer after", answeredBuffer);
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

  const getRandomQuestionNotInBuffer = async () => {
    let response = await fetch(`/api/questions/random`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ notAllowedIds: answeredBuffer }),
    });
    let question = await response.json();
    console.log("Question", question);
    setCurrentQuestion(question);
  };

  const getNextQuestion = async (customGame) => {
    if (customGame === false) {
      console.log("Getting normal question");
      console.log("Buffer before", answeredBuffer);
      await getRandomQuestionNotInBuffer();
    } else {
      console.log("Getting filtered question");
      console.log("Buffer before", answeredBuffer);
      await getFilteredQuestion();
    }
    // updateBuffer(currentQuestion.id);
    if (currentQuestion) updateBuffer(currentQuestion.id);
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

  return (
    <AppContext.Provider
      value={{
        filters: filters,
        setFilters: setFilters,
        customGame,
        setCustomGame,
        answeredBuffer: answeredBuffer,
        currentQuestion: currentQuestion,
        getQuestion: getQuestion,
        getNextQuestion: getNextQuestion,
        getDowngradedQuestion: getDowngradedQuestion,
      }}
    >
      <Component {...pageProps} />
    </AppContext.Provider>
  );
}

export default MyApp;
