import React from "react";
import { ArrowSmDownIcon, ArrowSmUpIcon } from "@heroicons/react/solid";
import Feat1 from "./feat1";
import Feat2 from "./feat2";
import Feat3 from "./feat3";
import Feat4 from "./feat4";
import Feat from "/flex-ui-assets/images/headers/feat.avif";
import Image from "next/image";

const Impact = (props) => {
  return (
    <>
      <section className="py-24 mx-2 bg-green-100 my-8">
        <div className="container px-4 mx-auto">
          <div className="xl:max-w-4xl mb-12 mx-auto text-center">
            <span className="inline-block py-px px-2 mb-4 text-lg leading-5 text-green-500 bg-green-100 font-medium uppercase rounded-full shadow-sm">
              Our Offerings
            </span>
            <h1 className="mb-4 text-3xl md:text-4xl leading-tight font-bold tracking-tighter">
              Gain more insight into how people use our services
            </h1>
            <p className="text-lg md:text-xl text-gray-500 font-medium">
              With our private labelling, co-branding, research and development
              and a CTC model, you can manage every aspect of your health at one
              secure place.
            </p>
          </div>
          <div className="flex flex-wrap -mx-4">
            <div className="w-full lg:w-1/3 px-4 lg:pt-6 mb-8 lg:mb-0">
              <div className="p-8 lg:mb-6 mb-2  md:mb-8 text-center bg-white rounded-md hover:shadow-xl transition duration-200">
                <div className="inline-flex h-16 w-16 mb-6 mx-auto items-center justify-center text-white bg-green-500 rounded-lg">
                  <Feat1 />
                </div>
                <h3 className="mb-4 text-xl md:text-2xl leading-tight font-bold">
                  Research and Development
                </h3>
                <p className="text-gray-500 font-medium">
                  Ambica biokare is Pioneer in Development of best in class
                  Nutraceutical, Ayurceutical and Cosmeceutical Products in the
                  following categories
                </p>
              </div>
              <div className="p-8 text-center bg-white rounded-md hover:shadow-xl transition duration-200">
                <div className="inline-flex h-16 w-16 mb-6 mx-auto items-center justify-center text-white bg-green-500 rounded-lg">
                  <Feat2 />
                </div>
                <h3 className="mb-4 text-xl md:text-2xl leading-tight font-bold">
                  Co-Branding
                </h3>
                <p className="text-gray-500 font-medium">
                  Co-branding is best suited for most of our Patented
                  Inventions. Product is fully developed including clinical
                  studies and offered to clients for marketing with a brand,
                  co-owned by both.
                </p>
              </div>
            </div>
            <div className="w-full lg:w-1/3 lg:py-24 px-4 mb-8 lg:mb-0">
              <Image className="mx-auto" src={Feat} alt="" />
            </div>
            <div className="w-full lg:w-1/3 lg:pt-6 px-4">
              <div className="p-8 lg:mb-6 mb-2 md:mb-8 text-center bg-white rounded-md hover:shadow-xl transition duration-200">
                <div className="inline-flex h-16 w-16 mb-6 mx-auto items-center justify-center text-white bg-green-500 rounded-lg">
                  <Feat3 />
                </div>
                <h3 className="mb-4 text-xl md:text-2xl leading-tight font-bold">
                  Concept to Consumer Model
                </h3>
                <p className="text-gray-500 font-medium">
                  With the CTC Model, We take up development projects for our
                  clients based on their current and future business strategies.
                </p>
              </div>
              <div className="p-8 text-center bg-white rounded-md hover:shadow-xl transition duration-200">
                <div className="inline-flex h-16 w-16 mb-6 mx-auto items-center justify-center text-white bg-green-500 rounded-lg">
                  <Feat4 />
                </div>
                <h3 className="mb-4 text-xl md:text-2xl leading-tight font-bold">
                  Private Labelling
                </h3>
                <p className="text-gray-500 font-medium">
                  We offer our best in class products to our corporate clients
                  on their brands and provide a complete solution for all
                  technical and market support activities, including food safety
                  and customer handling.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Impact;
