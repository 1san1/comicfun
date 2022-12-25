import Head from 'next/head'
import Link from 'next/link'

export default function Home() {
  return (
    <div>
      <Head>
        <title>ComicFun | Cartoon yourself with JavaScript</title>
        <meta name="description" content="Turn your profile picture into a comic book style picture! Cartoon yourself with JavaScript." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        completed pages: <br/>
        <Link href="/tool" className="underline text-blue-500">tool page</Link>
      </main>
    </div>
  )
}
