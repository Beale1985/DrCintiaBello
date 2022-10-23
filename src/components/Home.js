import React from 'react'
import Header from './Header';
import Services from './Services';
import Portfolio from './Portfolio';
import About from './About';
import Footer from './Footer';
import NavBar from './NavBar'

function Home() {
  return (
    <div>
        <NavBar />
        <Header />
        <Services />
        <Portfolio />
        <About />
        <Footer />
    </div>
  )
}

export default Home