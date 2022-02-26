import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>GuiGui Officiel</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header title="Bonjour!" />
        <p className="description">
          Ceci est un test!
        </p>
      </main>

      <Footer />
    </div>
  )
}
