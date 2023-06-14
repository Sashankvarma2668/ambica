import React from "react";
import styles from "../styles/Home.module.css";
import pic from "/flex-ui-assets/logos/pic2.png";
import Image from "next/image";

const Testimonials = () => {
  return (
    <>
      <section className="py-20 xl:pt-24 my-4 mx-2 xl:pb-28 bg-green-100">
        <div className="container px-4 mx-auto">
          <div className="flex flex-wrap -mx-4">
            <div className="w-full px-4 mb-14">
              <div className="flex flex-wrap justify-between items-center">
                <div className="w-full lg:w-1/2 mb-10 lg:mb-0">
                  {/* <span className="inline-block py-px px-2 mb-4 text-xs leading-5 text-green-500 bg-green-100 font-medium uppercase rounded-9xl">Mr. Venkata Siva Kalyan. D (COO)</span> */}
                  <h3 className=" text-3xl md:text-4xl text-green-500 font-bold tracking-tighter">
                    Mr. Venkata Siva Kalyan. D
                  </h3>
                </div>
              </div>
            </div>
            <div className="w-full lg:w-4/5 px-4 mb-5 lg:mb-0">
              <p className="mb-6 text-lg font-medium leading-7 text-gray-700">
                Mr. Venkata Siva Kalyan is a young and dynamic entrant in to the
                Wellness Industry and he strongly believes that &quote;True
                partnership between R&D Teams, Supply chain and Brand Promoters
                is the key to successful new product launch in wellness
                industry&quote;. He holds a Bachelors Degree in Life Sciences and an
                MBA in marketing. Initially, he worked for a couple of years in
                a Multi National Bank in the Capacity of Customer Relationship
                Manager. Realising his passion in life sciences, he switched
                back to Pharma & Nutra sectors and worked for almost a decade in
                different organizations to gain hands on experience. With the
                perfect blend of experience in the domains of life sciences and
                marketing , he has mastered the art of Operations Management,
                Business Networking and Customer Relationship Management.
              </p>
              {/* <h3 className="mb-4 text-2xl lg:text-3xl font-semibold text-gray-800">Header 1</h3> */}
              <p className="mb-5 text-lg font-medium leading-7 text-gray-700">
                Mr. Kalyan is also a Pioneer in Institutional sales, Private
                labels, Public Relations including CSR activities, etc... He is
                specializes in marketing innovative products and dealing with
                technology transfers deals. He has travelled extensively to
                China, Hong Kong, UAE and Europe on business trips and has
                developed rich business contacts in overseas.
              </p>
              {/* <ol className="mb-5 list-decimal list-inside text-lg font-medium leading-7 text-gray-500">
                          <li>
                            <span className="text-lg font-medium leading-8 text-gray-500">Enterprise software for startups</span>
                          </li>
                          <li>
                            <span className="text-lg font-medium leading-8 text-gray-500">Time is money. Stop jumping from tool to tool with all the hassle of integrations.</span>
                          </li>
                          <li>
                            <span className="text-lg font-medium leading-8 text-gray-500">Now you can manage your entire business on one platform.</span>
                          </li>
                        </ol> */}
              {/* <p className="text-lg font-medium leading-7 text-gray-700">With a single point of view, Flex integrates customer data and marketing tools in one flexible cloud platform that lets you get business results wherever they show up.</p> */}
            </div>
            <div className="w-full  lg:w-1/5 ">
              <Image className="w-full shadow-xl" src={pic} alt="" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Testimonials;
