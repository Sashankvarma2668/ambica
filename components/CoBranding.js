import React from 'react'
import Image from 'next/image'
import pic from '../public/images/cobra.jpeg'

const PrivateLabel = () => {
  return (
    <div>
        <section className="py-20 mt-4 xl:pt-24 xl:pb-28 bg-green-100 " >
      <div className="container px-4 mx-auto">
        <div className="flex flex-wrap -mx-4">
          <div className="w-full px-4 mb-14">
            <div className="flex flex-wrap justify-between items-center">
              <div className="w-full lg:w-1/2 mb-10 lg:mb-0">
                <span className="inline-block py-px px-2 mb-4 text-xs leading-5 text-green-500 bg-green-100 font-medium uppercase rounded-9xl">SERVICE 02</span>
                <h3 className="mb-4 text-3xl md:text-4xl text-gray-900 font-bold tracking-tighter">Co-Branding</h3>
                
              </div>
              <div className="w-full lg:w-auto">
                <div className="flex flex-wrap lg:justify-center items-center -mb-2">
    
    </div>
              </div>
            </div>
          </div>
          <div className="w-full lg:w-1/2 px-4 mb-5 lg:mb-0">
            <p className="mb-6 text-lg font-medium leading-7 text-gray-500">As a leading innovator in the healthcare industry, we believe that co-branding is an ideal strategy to maximize the potential of our patented inventions. Through collaboration with established brands, we can offer fully developed products that have undergone rigorous clinical studies. By combining our expertise with that of our partners, we can provide customers with innovative solutions backed by scientific evidence. Co-branding allows us to share brand equity, establishing a unique identity for the co-owned product that captures customer attention and instills trust.</p>
            
            
            <ol className="mb-5 list-decimal list-inside text-lg font-medium leading-7 text-gray-500">
              
              
              
            </ol>
            <p className="text-lg font-medium leading-7 text-gray-500">In addition to the commercial benefits, co-branding empowers us to reach a broader customer base and tap into established distribution networks. By partnering with reputable brands, we can leverage their market presence and expand our reach. Through shared marketing efforts, including joint advertising and cross-promotion, we can maximize the visibility of our co-branded products while minimizing individual marketing costs</p>
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
