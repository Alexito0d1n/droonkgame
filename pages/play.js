import Head from "next/head";
import { useState, useEffect } from "react";

import { QuestionCard } from "/components";

export default function Play() {
  const [questions, setQuestions] = useState([]);
  const [currentQuestion, setCurrentQuestion] = useState(null);
  const [answered, setAnswered] = useState([]);

  useEffect(() => {
    get_questions();
  }, []);

  const get_questions = async () => {
    let response = await fetch("/api/get_questions", {
      method: "GET",
      headers: { "Content-Type": "application/json" },
    });

    let questions = await response.json();
    console.log(questions);
    setQuestions(questions);
    setCurrentQuestion(questions[3]);
  };

  return (
    <div>
      <Head>
        <title>DroonkGame | Play</title>
        <meta name="description" content="A mi me están grabando" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <div className="play-container">
          <h1>DroonkGame</h1>
          {currentQuestion ? <QuestionCard question={currentQuestion} /> : null}
        </div>
      </main>
    </div>
  );
}
