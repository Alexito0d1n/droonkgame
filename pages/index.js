import Head from "next/head";
import { Logo } from "../components";
import Link from "next/link";
export default function Home() {
  return (
    <div>
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
          <div className="buttons">
            <Link href="/rules">
              <button className="input-buttons">NORMAS</button>
            </Link>
            <Link href="/play">
              <button className="input-buttons">EMPIEZA A JUGAR</button>
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
}
