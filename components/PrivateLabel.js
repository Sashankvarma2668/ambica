import React from 'react'
import Image from 'next/image'
import pic from '../public/images/priv.jpeg'

const PrivateLabel = () => {
  return (
    <div>
         <section className="py-20 xl:pt-24 xl:pb-28 bg-green-100 ">
      <div className="container px-4 mx-auto">
        <div className="flex flex-wrap -mx-4">
          <div className="w-full px-4 mb-14">
            <div className="flex flex-wrap justify-between items-center">
              <div className="w-full lg:w-1/2 mb-10 lg:mb-0">
                <span className="inline-block py-px px-2 mb-4 text-xs leading-5 text-green-500 bg-green-100 font-medium uppercase rounded-9xl">SERVICE 01</span>
                <h3 className="mb-4 text-3xl md:text-4xl text-gray-900 font-bold tracking-tighter">Private Labels</h3>
                
              </div>
              <div className="w-full lg:w-auto">
                <div className="flex flex-wrap lg:justify-center items-center -mb-2">
    
    </div>
              </div>
            </div>
          </div>
          <div className="w-full lg:w-1/2 px-4 mb-5 lg:mb-0">
            <p className="mb-6 text-lg font-medium leading-7 text-gray-500">We offer our best in class products to our corporate clients on their brands and provide a complete solution for all technical and market support activities, including food safety, regulatory compliance and handling customer for both domestic and export markets.</p>
            
            
            <ol className="mb-5 list-decimal list-inside text-lg font-medium leading-7 text-gray-500">
              
              
              
            </ol>
            <p className="text-lg font-medium leading-7 text-gray-500">Pre-Clinical and stability studies are essential to match the claims and guaranteeing the shelf life of all the formulations in Nutraceuticals, Pharmaceutical &amp; AYUSH. We are a Team of experts with having a proven expertise in conducting pre-formulation &amp; post formulation studies. To have formulations and ingredients with clear advantages, better health claims, robust IP creation, stabilities, Nutritional justification, provide safety and efficacy of the products, stability &amp; analytical studies are essential. The Pre-formulation studies helps in creating better and proven products and helps in saving unnecessary expenditure involved in product development. It also ensure better success rate of new products and formulations.</p>
          </div>
          <div className="w-full lg:w-1/2 px-4">
            <Image  className="w-full" src={pic} alt=""/>
          </div>
        </div>
      </div>
    </section>
      
    </div>
  )
}

export default PrivateLabel
