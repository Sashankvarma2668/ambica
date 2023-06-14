import React from "react";
import styles from "../styles/Home.module.css";
import pic from "/flex-ui-assets/logos/pic2.png";
import about from "/flex-ui-assets/logos/about.png";
import Image from "next/image";

const About = () => {
  return (
    <>
      <section className="py-20 xl:pt-24 my-4 mx-2 xl:pb-28 bg-green-100">
        <div className="container px-4 mx-auto">
          <div className="flex flex-wrap -mx-4">
            <div className="w-full px-4 mb-14">
              <div className="flex flex-wrap justify-between items-center">
                <div className="w-full lg:w-1/2 mb-10 lg:mb-0">
                  {/* <span className="inline-block py-px px-2 mb-4 text-xs leading-5 text-green-500 bg-green-100 font-medium uppercase rounded-9xl">Mr. Venkata Siva Kalyan. D (COO)</span> */}
                  <h3 className=" text-3xl md:text-4xl text-gr-500 font-bold tracking-tighter">
                    About{" "}
                    <span className="pl-2 text-green-500">Ambica BioKare</span>
                  </h3>
                </div>
              </div>
            </div>
            <div className="w-full lg:w-2/3 px-4 mb-5 lg:mb-0">
              <p className="mb-6 text-lg font-medium leading-7 text-gray-700">
                Founded by Experts from Nutrition and wellness industry, we are
                dedicated to fulfill the promise of healthy living within in all
                aspects and stages of life through better nutrition support
                Ambica Biokare is focusing on health from all the aspects of life
                through better nutritional support.{" "}
              </p>
              {/* <h3 className="mb-4 text-2xl lg:text-3xl font-semibold text-gray-800">Header 1</h3> */}
              <p className="mb-5 text-lg font-medium leading-7 text-gray-700">
                Ambica Biokare is focusing on health from all the aspects of life
                through better nutritional support. For us Wellness is not just
                only the absence of disease but means total wellness including
                Physical, Mental and Spiritual health, leading to happier life
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
              <p className="text-lg font-medium leading-7 text-gray-700">
                We believe &quot;Health is a relationship between you and your body
                and we at Ambica Biokare will make this relationship stronger&quote;.
              </p>
            </div>
            <div className="w-full  lg:w-1/3 ">
              <Image className="w-full shadow-xl" src={about} alt="" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
