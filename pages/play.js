import Head from "next/head";
import { useState, useEffect } from "react";

import { QuestionCard, Button } from "/components";

export default function Play() {
  const [questions, setQuestions] = useState([]);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answered, setAnswered] = useState([]);

  useEffect(() => {
    get_questions();
  }, []);

  const get_questions = async () => {
    let response = await fetch("/api/questions/all", {
      method: "GET",
      headers: { "Content-Type": "application/json" },
    });

    let questions = await response.json();
    setQuestions(questions);
    setCurrentQuestion(0);
  };

  const next_question = () => {
    console.log(currentQuestion, questions.length);
    if (currentQuestion < questions.length - 1) {
      console.log("TRUE");
      let nextCurrentQuestion = currentQuestion + 1;
      setCurrentQuestion(nextCurrentQuestion);
    }
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
          {questions.length > 0 &&
          (currentQuestion !== null || currentQuestion !== undefined) ? (
            <QuestionCard question={questions[currentQuestion]} />
          ) : null}
          <div className="play-buttons">
            <div className="row">
              <Button>Reroll</Button>
              <Button>Reduce</Button>
            </div>
            <div className="row">
              <Button action={() => next_question()}>Next</Button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
