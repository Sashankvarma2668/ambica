import React from 'react'
import Image from 'next/image'
import RandD from '../components/RandD'
import CoBranding from '../components/CoBranding'
import PrivateLabel from '../components/PrivateLabel'
import Ctc from '../components/Ctc'
import Header from '../components/Header'
import Footer from '../components/Footer'


const services = () => {
  return (
    <div className="">

        <Header/>
        <PrivateLabel/>
        <CoBranding/>
        <Ctc/>
        <RandD/>
        <Footer/>
       
  </div>
  )
}

export default services
