import Head from 'next/head'

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
          <div className="buttons">
          <button
              className="input-button">Normas </button>
            <button
              className="input-button">Empieza a jugar </button>

</div>        
</div>
      </main>
    </div>
  )
}


