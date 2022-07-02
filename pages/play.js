import Head from "next/head";
import { QuestionCard } from "../components";

export default function Play() {
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
          <QuestionCard />
        </div>
      </main>
    </div>
  );
}
