import Head from "next/head";
import { Logo, Button } from "/components";
//import Link from "next/link";
export default function Home() {
  return (
    <div>
      <script async src="https://analytics.devve.space/script.js" data-website-id="68772ed6-5ec0-4c06-97d3-0bdee8326a6e"></script>
      <Head>
        <title>DroonkGame</title>
        <meta name="description" content="A mi me están grabando" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <div className="welcome-screen">
          <div className="logo-container">
            <div className="welcome-logo">
              <Logo />
              <h1>the game</h1>
            </div>
          </div>
          <div className="buttons-container">
            <Button href="/rules">NORMAS</Button>
            <Button href="/config">PARTIDA PERSONALIZADA</Button>
            <Button href="/play">EMPIEZA A JUGAR</Button>
            <Button href="/newQuestions">AÑADE PREGUNTAS</Button>
          </div>
        </div>
      </main>
    </div>
  );
}
