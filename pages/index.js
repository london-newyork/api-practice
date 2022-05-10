import Head from 'next/head'
import { Posts } from "../src/components/Posts/index"

export default function Home(props) {

  return (
    <div>
      <Head>
        <title>Practice API</title>
        <meta name="description" content="Practice API" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Posts />
    </div>
  )
}
