import React from 'react'
import Image from 'next/image'
import pic from '../public/images/research.jpeg'

const RandD = () => {
  return (
    <div>
                    
    <section className="py-20 mt-4 mb-4 xl:pt-24 xl:pb-28  bg-green-100 " >
      <div className="container px-4 mx-auto">
        <div className="flex flex-wrap -mx-4">
          <div className="w-full px-4 mb-14">
            <div className="flex flex-wrap justify-between items-center">
              <div className="w-full lg:w-1/2 mb-10 lg:mb-0">
                <span className="inline-block py-px px-2 mb-4 text-xs leading-5 text-green-500 bg-green-100 font-medium uppercase rounded-9xl">SERVICE 04</span>
                <h3 className="mb-4 text-3xl md:text-4xl text-gray-900 font-bold tracking-tighter">Research &amp; Development</h3>
                
              </div>
              <div className="w-full lg:w-auto">
                
              </div>
            </div>
          </div>
          <div className="w-full lg:w-1/2 px-4 mb-5 lg:mb-0">
            <p className="mb-6 text-lg font-medium leading-7 text-gray-500">Ambica Biokare is Pioneer in Development of best in classNutraceutical, Ayurceutical and Cosmeceutical Products in the following categories</p>
            
            
            <ol className="mb-5 list-decimal list-inside text-lg font-medium leading-7 text-gray-500">
              <li>
                <span className="text-lg font-medium leading-8 text-gray-500">Supplements for General wellness and lifestyle</span>
              </li>
              <li>
                <span className="text-lg font-medium leading-8 text-gray-500">Fitness and endurance products</span>
              </li>
              <li>
                <span className="text-lg font-medium leading-8 text-gray-500">Certified organic supplements</span>
              </li>
              <li>
                <span className="text-lg font-medium leading-8 text-gray-500">Protein Bars, Gummies and Chocolates for general wellness and for specific health condition</span>
              </li>
              <li>
                <span className="text-lg font-medium leading-8 text-gray-500">Nutrition beverages ( RTD) and shots ( small volume RTDs)</span>
              </li>
              <li>
                <span className="text-lg font-medium leading-8 text-gray-500">Ayurcetical formulations</span>
              </li>
              <li>
                <span className="text-lg font-medium leading-8 text-gray-500">Pre and Probiotic products</span>
              </li>
              <li>
                <span className="text-lg font-medium leading-8 text-gray-500">Immunity Boosters and Immnotherapy products</span>
              </li>
              <li>
                <span className="text-lg font-medium leading-8 text-gray-500">Nutrition and HSN Care products for cancer patients</span>
              </li>
              <li>
                <span className="text-lg font-medium leading-8 text-gray-500">Bariatric supplemtns – Pre and Post operative care</span>
              </li>
              <li>
                <span className="text-lg font-medium leading-8 text-gray-500">Nutri / Ayur cosmetics – Oral & Topical products</span>
              </li>
              <li>
                <span className="text-lg font-medium leading-8 text-gray-500">Food fortification and Premixes</span>
              </li>
              <li>
                <span className="text-lg font-medium leading-8 text-gray-500">Foods for special medical purposes ( FSMP) – Oral and enteral supplements</span>
              </li>
            </ol>
            <p className="text-lg font-medium leading-7 text-gray-500">Team of experts at Ambica Biokare with extensive research experience are focusing their efforts to create products that can lead the industry as beacon and reference. A multidimensional R&amp;D approach to create novel product formats and unique packaging and its subsequent clinical studies on native population, offer unique advantages to our clients vis-à-vis the competition in both Indian and export markets.
    Ambica Biokare has several patents to its credit in Nutrition, Wellness and Medical Nutrition categories and many more are being filed for the new products pipeline</p>
          </div>
          <div className="w-full lg:pt-20 lg:w-1/2 px-4">
            <Image height="600" className="w-full" src={pic} alt=""/>
          </div>
        </div>
      </div>
    </section>
      
    </div>
  )
}

export default RandD
