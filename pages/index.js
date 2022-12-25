import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'

export default function Home() {
  return (
    <div>
      <Head>
        <title>ComicFun | Cartoon yourself with JavaScript</title>
        <meta name="description" content="Turn your profile picture into a comic book style portrait! Cartoonify yourself with JavaScript." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <header className="px-3 py-5 border-b border-gray-300">
          <div className="flex justify-between items-center gap-4 max-w-screen-xl mx-auto">
            <Link href="/" className="text-2xl font-semibold text-gray-900">
              ComicFun 😂
            </Link>
            <ul className="flex gap-8">
              <li>
                <Link href="/tool" className="underline-offset-2 decoration-2 hover:underline">
                  Portrait Tool
                </Link>
              </li>
              <li>
                <Link href="/" className="underline-offset-2 decoration-2 hover:underline">
                  How It Works
                </Link>
              </li>
              <li>
                <Link href="/" className="underline-offset-2 decoration-2 hover:underline">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/" className="underline-offset-2 decoration-2 hover:underline">
                  Github
                </Link>
              </li>
            </ul>
            <Link href="/tool" className="px-4 py-2 bg-violet-500 hover:bg-violet-400 text-white rounded transition">
              Launch Tool
            </Link>
          </div>
        </header>
        <section className="px-3">
          <div className="grid grid-cols-5 items-center gap-8 max-w-screen-xl mx-auto py-20">
            <div className="md:col-span-3">
              <h1 className="text-6xl font-semibold text-gray-900 mb-8">
                Turn your profile picture into a comic book style portrait
              </h1>
              <p className="text-lg text-gray-500 mb-14">
                Cartoonify yourself for free!  Create a free cartoon profile picture, then easily export the photo to use or share on social media.
              </p>
              <div className="my-4">
                <Link href="/tool" className="px-8 py-4 mr-4 bg-violet-500 hover:bg-violet-400 text-white rounded transition">
                  Cartoonify Yourself
                </Link>
                <Link href="/" className="px-8 py-4 text-gray-900 underline-offset-2 decoration-2 rounded hover:underline">
                  How It Works
                </Link>
              </div>
            </div>
            <div className="md:col-span-2">
              <Image src="/images/portrait-preview.jpg" height={564} width={705} alt="Portrait preview" />
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}
