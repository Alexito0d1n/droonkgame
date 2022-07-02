import Head from 'next/head'
import {Logo} from "../components";
import Link from "next/link"
export default function Home() {
  return (

    <div>

      <Head>
        <title>DroonkGame</title>
        <meta name="description" content="A mi me están grabando" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <div className='welcome-screen'>
          <h1>DroonkGame</h1>
          <Logo className="logo-container" />
          <div className="buttons">
          <Link href="/rules">
          <button
              className="input-buttons">Normas </button>
          </Link>
          <Link href="/play">
            <button
              className="input-buttons">Empieza a jugar </button>
          </Link>
</div>        
</div>
      </main>
    </div>
  )
}


