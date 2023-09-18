import React from 'react'
import TopBar from '../compomemts/Navigation/TopBar'
import Navigation from '../compomemts/Navigation/Navigation'
import MainCrosel1 from '../compomemts/HomeCarosel/MainCrosel1'
import About from '../compomemts/About'
import Cta from '../compomemts/Cta'
import Why from '../compomemts/Why'
import How from '../compomemts/How'
import Relocated from '../compomemts/Relocated'
import { Testimonials } from '../compomemts/Testimonials'
import Faq from '../compomemts/Faq'
import Blog from '../compomemts/Blog'
import Footer from '../compomemts/Footer'
import ScrollToTop from '../compomemts/ScrollToTop'

function Home() {
  return (
    <div>
        <TopBar  />
        <Navigation />
        <MainCrosel1 />
        <About />
        <Cta />
        <Why />
        <How />
        <Relocated />
        <Testimonials />
        <Faq />
        <Blog />
        <Footer />
        <ScrollToTop />
    </div>
  )
}

export default Home