import { useState, useEffect } from "react";

import AppContext from "/context/AppContext";

// Style
import "/styles/style.scss";

function MyApp({ Component, pageProps }) {
  const [currentQuestion, setCurrentQuestion] = useState(null);
  const [answeredBuffer, setAnsweredBuffer] = useState([]);
  const [questionsNumber, setQuestionsNumber] = useState(null);

  useEffect(() => {
    getQuestionsCount();
  }, []);

  useEffect(() => {
    questionsNumber ? getNextQuestion() : null;
  }, [questionsNumber]);

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

  const getNextQuestion = async () => {
    let nextId = getRandomQuestionId();
    updateBuffer(nextId);
    await getQuestion(nextId);
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
