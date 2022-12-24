import Head from 'next/head'

export default function Home() {
  return (
    <div>
      <Head>
        <title>ComicFun | Cartoon yourself with JavaScript</title>
        <meta name="description" content="Turn your profile picture into a comic book style picture! Cartoon yourself with JavaScript." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1 className="text-3xl font-semibold text-blue-500">
          ComicFun - coming soon!
        </h1>
      </main>
    </div>
  )
}
