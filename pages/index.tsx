import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import HeaderContainer from '../components/header/container'
import MainContainer from '../components/main/container'
import FooterContainer from '../components/footer/container'


// {styles.container}
const Home: NextPage = () => {
  return (
    <div className= "text-white bg-space-img bg-cover flex flex-col items-center font-mono">
      <Head>
        <title>WEB DEV ANWAR</title>
        <meta name="description" content="my portfolio app content about me as a web developer" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <HeaderContainer />
      <MainContainer />
      <FooterContainer />
    </div>
  )
}

export default Home
