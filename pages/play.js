import Head from "next/head";
import { useContext, useEffect } from "react";
import { useRouter } from "next/router";

import AppContext from "/context/AppContext";

import { QuestionCard, Button } from "/components";

export default function Play() {
  const router = useRouter();
  const { currentQuestion, getNextQuestion, getDowngradedQuestion } =
    useContext(AppContext);

  // Send to "/" if no question loaded
  useEffect(() => {
    if (currentQuestion === null) {
      router.push("/");
    }
  }, [currentQuestion]);

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
          {currentQuestion !== null && currentQuestion !== undefined ? (
            <QuestionCard question={currentQuestion} />
          ) : null}
          <div className="play-buttons">
            <Button
              action={() => getDowngradedQuestion(currentQuestion.level_id)}
              disabled={currentQuestion.level_name === "easy"}
            >
              Downgrade
            </Button>
            <Button action={getNextQuestion}>Next</Button>
          </div>
        </div>
      </main>
    </div>
  );
}
