import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import pic from '../public/images/ctc.jpeg'

const Ctc = () => {
  return (
    <section className="py-20 mt-4 xl:pt-24 xl:pb-28 bg-green-100 " >
    <div className="container px-4 mx-auto">
      <div className="flex flex-wrap -mx-4">
        <div className="w-full px-4 mb-14">
          <div className="flex flex-wrap justify-between items-center">
            <div className="w-full lg:w-1/2 mb-10 lg:mb-0">
              <span className="inline-block py-px px-2 mb-4 text-xs leading-5 text-green-500 bg-green-100 font-medium uppercase rounded-9xl">SERVICE 03</span>
              <h3 className="mb-4 text-3xl md:text-4xl text-gray-900 font-bold tracking-tighter">Concept to Consumer (CTC) Model</h3>
              
            </div>
            <div className="w-full lg:w-auto">
              <div className="flex flex-wrap lg:justify-center items-center -mb-2">
  
  </div>
            </div>
          </div>
        </div>
        <div className="w-full lg:w-1/2 px-4 mb-5 lg:mb-0">
          <p className="mb-6 text-lg font-medium leading-7 text-gray-500">At Ambica Biokare, our main focus is on the CTC (Client-based Technology Consulting) model. This model drives our approach to development projects, wherein we work closely with our clients to align their current and future business strategies with innovative product concepts. We provide a comprehensive solution by developing these concepts into finished products that complement our clients&apos; existing business models. By offering a one-stop solution for all development needs, we empower our clients to stay ahead in their industries and achieve their strategic objectives.</p>
          
          
          <ol className="mb-5 list-decimal list-inside text-lg font-medium leading-7 text-gray-500">
            
            
            
          </ol>
          <p className="text-lg font-medium leading-7 text-gray-500">We take pride in our ability to understand our client unique requirements and tailor our services accordingly. Through the CTC model, we collaborate closely with our clients, leveraging their business models to identify new product opportunities. Our experienced team then develops these concepts into tangible products, utilizing our technical expertise and industry insights. By seamlessly integrating our solutions into our clients&apos; operations, we enable them to enhance their competitiveness, meet market demands, and achieve sustainable growth.</p>
        </div>
        <div className="w-full lg:w-1/2 px-4">
          <Image  className="w-full" src={pic} alt=""/>
        </div>
      </div>
    </div>
  </section>
  )
}

export default Ctc
