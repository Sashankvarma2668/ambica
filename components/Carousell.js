import React from "react";
import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

import styles from "../styles/Home.module.css";
import { Transition } from "@headlessui/react";
import Goback from "../pages/images/goback.png";
import Head from "next/head";
import Logo from "/flex-ui-assets/logos/amb.gif";
import pic from "/flex-ui-assets/images/headers/headera.jpg";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import pic1 from "/flex-ui-assets/images/headers/image1.png";
import pic2 from "/flex-ui-assets/images/headers/image2.png";
import pic3 from "/flex-ui-assets/images/headers/image3.png";
import pic4 from "/flex-ui-assets/images/headers/image4.png";
import Icon from "./Icon";
import Icon2 from "./Icon2";
import Icon3 from "./Icon3";
import Icon4 from "./Icon4";

const Carousell = () => {
  const styles = {
    box: "bg-green-700 p-4 cursor-pointer text-center",
    active: "bg-green-900",
  };

  const [selectedSlide, setSelectedSlide] = useState(0);
  const [isAnimationStarted, setAnimationStarted] = useState(false);
  const [isImageLoaded, setImageLoaded] = useState(false);

  const handleBoxClick = (slideIndex) => {
    setSelectedSlide(slideIndex);
    setAnimationStarted(false);
  };

  const handleImageLoad = () => {
    setImageLoaded(true);
    setTimeout(() => {
      setAnimationStarted(true); // Set animation flag after 1 second delay
    }, 1000);
  };

  useEffect(() => {
    if (isAnimationStarted) {
      // Add your animation logic here
      const textElement = document.getElementById("description-text");
      if (textElement) {
        textElement.classList.add("animate-text"); // Apply the CSS animation class
      }
    }
  }, [selectedSlide, isAnimationStarted]);

  useEffect(() => {
    const interval = setInterval(() => {
      setSelectedSlide((prevSlide) => (prevSlide + 1) % 4);
      setImageLoaded(false);
      setAnimationStarted(false);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const [isHovered1, setIsHovered1] = useState(false);

  const handleMouseEnter1 = () => {
    setIsHovered1(true);
  };

  const handleMouseLeave1 = () => {
    setIsHovered1(false);
  };

  const [isHovered2, setIsHovered2] = useState(false);

  const handleMouseEnter2 = () => {
    setIsHovered2(true);
  };

  const handleMouseLeave2 = () => {
    setIsHovered2(false);
  };

  const [isHovered3, setIsHovered3] = useState(false);

  const handleMouseEnter3 = () => {
    setIsHovered3(true);
  };

  const handleMouseLeave3 = () => {
    setIsHovered3(false);
  };

  const [isHovered4, setIsHovered4] = useState(false);

  const handleMouseEnter4 = () => {
    setIsHovered4(true);
  };

  const handleMouseLeave4 = () => {
    setIsHovered4(false);
  };

  const textStyle = {
    padding: "10px", // Add any desired padding
    border: `1px solid ${isHovered ? "#02522a" : "#21965c03"}`, // Replace #00ff00 with your desired border color
    borderRadius: "20px", // Add the border radius value to round the corners
    background: isHovered ? "#21965cbf" : "transparent", // Replace #00ff00 with your desired background color
    color: isHovered ? "#ffffff" : "#000000",
    transition: "border 0.1s ease-in-out, background 0.1s ease-in-out",
  };

  const textStyle1 = {
    padding: "10px", // Add any desired padding
    border: `1px solid ${isHovered1 ? "#02522a" : "#21965c03"}`, // Replace #00ff00 with your desired border color
    borderRadius: "20px", // Add the border radius value to round the corners
    background: isHovered1 ? "#21965cbf" : "transparent", // Replace #00ff00 with your desired background color
    color: isHovered1 ? "#ffffff" : "#000000",
    transition: "border 0.1s ease-in-out, background 0.1s ease-in-out",
  };
  const textStyle2 = {
    padding: "10px", // Add any desired padding
    border: `1px solid ${isHovered2 ? "#02522a" : "#21965c03"}`, // Replace #00ff00 with your desired border color
    borderRadius: "20px", // Add the border radius value to round the corners
    background: isHovered2 ? "#21965cbf" : "transparent", // Replace #00ff00 with your desired background color
    color: isHovered2 ? "#ffffff" : "#000000",
    transition: "border 0.1s ease-in-out, background 0.1s ease-in-out",
  };
  const textStyle3 = {
    padding: "10px", // Add any desired padding
    border: `1px solid ${isHovered3 ? "#02522a" : "#21965c03"}`, // Replace #00ff00 with your desired border color
    borderRadius: "20px", // Add the border radius value to round the corners
    background: isHovered3 ? "#21965cbf" : "transparent", // Replace #00ff00 with your desired background color
    color: isHovered3 ? "#ffffff" : "#000000",
    transition: "border 0.1s ease-in-out, background 0.1s ease-in-out",
  };
  const textStyle4 = {
    padding: "10px", // Add any desired padding
    border: `1px solid ${isHovered4 ? "#02522a" : "#21965c03"}`, // Replace #00ff00 with your desired border color
    borderRadius: "20px", // Add the border radius value to round the corners
    background: isHovered4 ? "#21965cbf" : "transparent", // Replace #00ff00 with your desired background color
    color: isHovered4 ? "#ffffff" : "#000000",
    transition: "border 0.1s ease-in-out, background 0.1s ease-in-out",
  };
  return (
    <div>
      <div className="pt-20 flex flex-col items-center">
        <div className="w-full pt-6 pb-2 ">
          <Carousel
            showThumbs={false}
            showArrows={true}
            selectedItem={selectedSlide}
            onChange={(index) => setSelectedSlide(index)}
            autoPlay={true}
            interval={5000}
            infiniteLoop={true}
            transitionTime={1000}
          >
            <div>
              <Image
                src={pic1}
                alt=""
                onLoad={handleImageLoad}
                className={isImageLoaded ? "fade-in" : ""}
              />
              {selectedSlide === 0 && (
                <div id="description-text" className="text-animation">
                  <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center text-white text-center font-bold">
                    d
                  </div>
                </div>
              )}
            </div>
            <div>
              <Image className="" src={pic2} alt="" />
            </div>
            <div>
              <Image className="" src={pic3} alt="" />
            </div>
            <div>
              <Image className="" src={pic4} alt="" />
            </div>
          </Carousel>
        </div>

        <div className="grid grid-cols-4 gap-1 w-3/4">
          <div
            className={`${styles.box} ${
              selectedSlide === 0 ? styles.active : ""
            }`}
            onClick={() => handleBoxClick(0)}
          >
            <div className="flex items-center justify-center px-16 mb-2">
              <Icon />
            </div>
            <span className="block text-white text-center font-bold">
              MEDICAL NUTRITION
            </span>
          </div>

          <div
            className={`${styles.box} ${
              selectedSlide === 1 ? styles.active : ""
            }`}
            onClick={() => handleBoxClick(1)}
          >
            <div className="flex items-center justify-center px-16 mb-2">
              <Icon2 />
            </div>
            <span className="block text-white text-center font-bold">
              WELLNESS NUTRITION
            </span>
          </div>

          <div
            className={`${styles.box} ${
              selectedSlide === 2 ? styles.active : ""
            }`}
            onClick={() => handleBoxClick(2)}
          >
            <div className="flex items-center justify-center px-16 mb-2">
              <Icon3 />
            </div>
            <span className="block text-white text-center font-bold">
              AYURCEUTICALS
            </span>
          </div>

          <div
            className={`${styles.box} ${
              selectedSlide === 3 ? styles.active : ""
            }`}
            onClick={() => handleBoxClick(3)}
          >
            <div className="flex items-center justify-center px-16 mb-2">
              <Icon4 />
            </div>
            <span className="block text-white text-center font-bold">
              NUTRICOSMETICS
            </span>
          </div>
        </div>
      </div>
      <div className="py-12 my-4 mt-24 bg-green-100 md:py-28">
        <div className="container px-4 mx-auto">
          <div className="flex flex-wrap xl:items-center -mx-4">
            <div className="w-full md:w-1/2 px-4 mb-16 md:mb-0">
              <span className="inline-block py-px px-4 py-4 mb-4 text-xl leading-5 text-white bg-green-500 uppercase rounded-9xl">
                AMBICA BIOKARE
              </span>
              <h1 className="mb-6 mt-4 text-xl md:text-2xl lg:text-md leading-tight font-bold tracking-tight">
                Our Vision
              </h1>
              <p className="mb-8 text-lg md:text-xl text-gray-500 font-medium">
                We have a vision to create Denovo Ingredients and Formulations,
                which will take human Health & Wellness to unchartered levels,
                so that they continue to pursue the unlimited possibilities in
                their chosen path of life.
              </p>
              <h1 className="mb-6 text-xl md:text-2xl lg:text-md leading-tight font-bold tracking-tight">
                Our Mission
              </h1>
              <p className="mb-8 text-lg md:text-xl text-gray-500 font-medium">
                To be the leading R&D player in the global wellness and
                Nutrition industry To set up world class manufacturing
                facilities for the wellness, nutrition and cosmetics sectors in
                INDIA by 2021
              </p>
              <div className="flex flex-wrap">
                <div className="w-full md:w-auto py-1 md:py-0 md:mr-4">
                  <a
                    className="inline-block py-5 px-7 w-full text-base md:text-lg leading-4 text-green-50 font-medium text-center bg-green-500 hover:bg-green-600 focus:ring-2 focus:ring-green-500 focus:ring-opacity-50 border border-green-500 rounded-md shadow-sm"
                    href="#"
                  >
                    Request a Demo
                  </a>
                </div>
                <div className="w-full md:w-auto py-1 md:py-0">
                  <a
                    className="inline-block py-5 px-7 w-full text-base md:text-lg leading-4 text-gray-800 font-medium text-center bg-white hover:bg-coolGray-100 focus:ring-2 focus:ring-coolGray-200 focus:ring-opacity-50 border border-coolGray-200 rounded-md shadow-sm"
                    href="#"
                  >
                    Sign Up
                  </a>
                </div>
              </div>
            </div>
            <div className="w-full md:w-1/2 px-4">
              <div className="relative mx-auto md:mr-0 max-w-max">
                <img
                  className="absolute z-10 -left-14 -top-12 w-28 md:w-auto"
                  src="flex-ui-assets/elements/circle3-yellow.svg"
                  alt=""
                />
                <img
                  className="absolute z-10 -right-7 -bottom-8 w-28 md:w-auto"
                  src="flex-ui-assets/elements/dots3-blue.svg"
                  alt=""
                />
                <Image className="relative rounded-7xl" src={pic} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Carousell;
