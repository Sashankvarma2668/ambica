import React from "react";
import Image from "next/image";
import Logo from "/flex-ui-assets/logos/amb.gif";

const Footer = () => {
  return (
    <>
      <section className="mx-2 bg-green-100 ">
        <div className="container px-4 mx-auto">
          <div className="flex flex-wrap pt-24 pb-12 -mx-4">
            <div className="w-full md:w-1/2 lg:w-4/12 px-4 mb-16 lg:mb-0">
              <a className="inline-block mb-4" href="#">
                <Image className="" height={80} width={100} src={Logo} alt="" />
              </a>
              <p className="text-base md:text-lg text-gray-500 font-medium lg:w-64">
                Join us in our mission to become the leading R&D player in the
                global wellness and Nutrition industry
              </p>
            </div>
            <div className="w-full md:w-1/2 lg:w-4/12 px-4 mb-16 lg:mb-0">
              <h3 className="mb-5 text-lg font-bold text-gray-900">Services</h3>
              <ul>
                <li className="mb-4">
                  <a
                    className="inline-block text-gray-500 hover:text-gray-600 font-medium"
                    href="#"
                  >
                    Concept to Consumer Model
                  </a>
                </li>
                <li className="mb-4">
                  <a
                    className="inline-block text-gray-500 hover:text-gray-600 font-medium"
                    href="#"
                  >
                    Co-Branding{" "}
                  </a>
                </li>
                <li className="mb-4">
                  <a
                    className="inline-block text-gray-500 hover:text-gray-600 font-medium"
                    href="#"
                  >
                    Research and Development
                  </a>
                </li>
               
                <li className="mb-4">
                  <a
                    className="inline-block text-gray-500 hover:text-gray-600 font-medium"
                    href="#"
                  >
                    Private Labelling
                  </a>
                  
                </li>
                <li className="mb-4">
                  <a
                    className="inline-block text-gray-500 hover:text-gray-600 font-medium"
                    href="#"
                  >
                    Contact Us
                  </a>
                </li>
              </ul>
            </div>
            {/* <div className="w-full md:w-1/4 lg:w-2/12 px-4 mb-16 lg:mb-0">
                        <h3 className="mb-5 text-lg font-bold text-gray-900">Remaining</h3>
                        <ul>
                          <li className="mb-4"><a className="inline-block text-gray-500 hover:text-gray-600 font-medium" href="#">Blog</a></li>
                          <li className="mb-4"><a className="inline-block text-gray-500 hover:text-gray-600 font-medium" href="#">Newsletter</a></li>
                          <li className="mb-4"><a className="inline-block text-gray-500 hover:text-gray-600 font-medium" href="#">Help Centre</a></li>
                          <li className="mb-4"><a className="inline-block text-gray-500 hover:text-gray-600 font-medium" href="#">Careers</a></li>
                          <li><a className="inline-block text-gray-500 hover:text-gray-600 font-medium" href="#">Support</a></li>
                        </ul>
                      </div> */}
            <div className="w-full md:w-1/3 lg:w-4/12 px-4">
              <h3 className="mb-5 text-lg font-bold text-gray-900">
                Newsletter
              </h3>
              <div className="flex flex-wrap">
                <div className="w-full lg:flex-1 py-1 lg:py-0 lg:mr-3">
                  <input
                    className="px-3 w-full h-12 text-gray-900 outline-none placeholder-coolGray-500 border border-coolGray-200 focus:ring-2 focus:ring-green-500 focus:ring-opacity-50 rounded-lg shadow-xsm"
                    placeholder="Your email"
                  />
                </div>
                <div className="w-full lg:w-auto py-1 lg:py-0">
                  <a
                    className="inline-block py-4 px-5 w-full leading-4 text-green-50 font-medium text-center bg-green-500 hover:bg-green-600 focus:ring-2 focus:ring-green-500 focus:ring-opacity-50 rounded-md shadow-sm"
                    href="#"
                  >
                    Subscribe
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="border-b border-coolGray-100"></div>
        <p className="py-10 md:pb-16 text-sm text-gray-400 font-medium text-center">
          © 2023 Ambica BioKare. All rights reserved.
        </p>
      </section>
    </>
  );
};

export default Footer;
