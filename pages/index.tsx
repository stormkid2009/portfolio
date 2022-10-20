import type { NextPage } from 'next'
import Head from 'next/head'
import HeaderContainer from '../components/header/container'
import MainContainer from '../components/main/container'
import FooterContainer from '../components/footer/container'


// {styles.container}
const Home: NextPage = () => {
  return (
    <div className= "text-palette-text bg-space-img bg-cover flex flex-col items-center font-mono">
      <Head>
        <meta name="description" content="my portfolio app content about me as a web developer" />
        
        <link rel="apple-touch-icon" sizes="180x180" href="/favicon_io/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon_io/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon_io/favicon-16x16.png" />
        <link rel="manifest" href="/favicon_io/site.webmanifest" />
      </Head>
      <HeaderContainer />
      <MainContainer />
      <FooterContainer />
    </div>
  )
}

export default Home
