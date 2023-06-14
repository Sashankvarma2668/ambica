import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Testimonials from '../components/Testimonials'
import About from '../components/About'
import Quote from '../components/Quote'

const about = () => {
  return (
    <div>
        <Header/>
        
        <About/>
        <Quote/>
        <Testimonials/>
        <Footer/>
        
    
    </div>
  )
}

export default about
