import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Aigen</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header title="Welcome to AiGen" />
        <p className="description">
          the page is under development
        </p>
      </main>

      <Footer />
    </div>
  )
}
