import Head from 'next/head';

import { QuestionCard } from '../components';

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

          <QuestionCard />
        </div>
      </main>
    </div>
  )
}
