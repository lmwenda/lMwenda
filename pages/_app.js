import Head from 'next/head';
import '../styles/globals.css';
import { motion } from 'framer-motion'
import Header from '../components/Header'

function MyApp({ Component, pageProps, router }) {
  return (
    <motion.div key={router.route} initial="pageInitial" animate="pageAnimate" variants={{
      pageInitial: {
        opacity: 0
      },

      pageAnimate: {
        opacity: 1
      }
    }}> 
      <Head>
        <title>Maetyu - Portfolio</title>
        <link rel="icon" href="/logo.ico" />
      </Head>
      <div className='relative container mx-auto p-6 items-center'>
        <Header />
        <Component {...pageProps} />
      </div>
    </motion.div>
  )
}

export default MyApp;
