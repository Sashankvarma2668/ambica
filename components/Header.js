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
import pic1 from "/flex-ui-assets/images/headers/image1.jpeg";
import pic2 from "/flex-ui-assets/images/headers/image2.jpeg";
import pic3 from "/flex-ui-assets/images/headers/image3.jpeg";
import pic4 from "/flex-ui-assets/images/headers/image4.jpeg";
import Icon from "./Icon";
import Icon2 from "./Icon2";
import Icon3 from "./Icon3";
import Icon4 from "./Icon4";
import { Fragment } from "react";

const Header = () => {
  const [isDropdownOpen, setDropdownOpen] = useState(false); // State for toggling the dropdown menu

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
    <>
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />{" "}
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />{" "}
        <link
          href="https://fonts.googleapis.com/css2?family=IBM+Plex+Sans:wght@700&family=Oswald:wght@700&display=swap"
          rel="stylesheet"
        />
      </Head>

      <section className="overflow-y-scroll  mt-2 mb-4 mt-2 mx-2">
        <div className="fixed shadow-lg top-0 mb-10 z-20 left-0 w-full bg-tarnarent px-10 lg:px-20 bg-green-400">
          <nav className="flex justify-between pt-2 px-4">
            <div className="flex justify-between items-center w-full">
              <div className="w-1/2 xl:w-1/3">
                <a className="block max-w-max" href="#">
                  <Image
                    className=""
                    height={80}
                    width={100}
                    src={Logo}
                    alt=""
                  />
                </a>
              </div>
              <div className="w-1/2 xl:w-2/3">
                <ul className="hidden xl:flex xl:justify-center">
                  <li className="mr-12">
                    <Link href="/">
                      <a
                        style={textStyle}
                        onMouseEnter={handleMouseEnter}
                        onMouseLeave={handleMouseLeave}
                        className="text-gray-500 hover:text-gray-900 font-medium"
                        href="#"
                      >
                        Home
                      </a>
                    </Link>
                  </li>
                  <li className="mr-12">
                    <Link href="/about">
                      <a
                        style={textStyle1}
                        onMouseEnter={handleMouseEnter1}
                        onMouseLeave={handleMouseLeave1}
                        className="text-gray-500 hover:text-gray-900 font-medium"
                        href="#"
                      >
                        About
                      </a>
                    </Link>
                  </li>
                  <li className="mr-12">
                    <Link href="/services">
                      <a
                        style={textStyle2}
                        onMouseEnter={handleMouseEnter2}
                        onMouseLeave={handleMouseLeave2}
                        className="text-gray-500 hover:text-gray-900 font-medium"
                        href="#"
                      >
                        Services
                      </a>
                    </Link>
                  </li>
                  <li className="relative mr-12">
                    <button
                      className="text-white"
                      onMouseEnter={() => setDropdownOpen(true)} // Open the dropdown menu on mouse enter
                      onMouseLeave={() => setDropdownOpen(false)} // Close the dropdown menu on mouse leave
                    >
                      <a
                        style={textStyle3}
                        onMouseEnter={handleMouseEnter3}
                        onMouseLeave={handleMouseLeave3}
                        className="text-gray-500 hover:text-gray-900 font-medium"
                        href="#"
                      >
                        Products
                      </a>
                    </button>
                    <Transition
                      show={isDropdownOpen} // Added the show prop to handle the visibility of the dropdown menu
                      as={Fragment}
                      enter="transition duration-100 ease-out"
                      enterFrom="transform opacity-0 scale-95"
                      enterTo="transform opacity-100 scale-100"
                      leave="transition duration-75 ease-out"
                      leaveFrom="transform opacity-100 scale-100"
                      leaveTo="transform opacity-0 scale-95"
                      onMouseEnter={() => setDropdownOpen(true)} // Keep the dropdown menu open on mouse enter
                      onMouseLeave={() => setDropdownOpen(false)} // Close the dropdown menu on mouse leave
                    >
                      <div
                        className="origin-top-right absolute right-0 mt-2 w-40 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none"
                        onMouseEnter={() => setDropdownOpen(true)} // Keep the dropdown menu open on mouse enter
                        onMouseLeave={() => setDropdownOpen(false)} // Close the dropdown menu on mouse leave
                      >
                        <div className="py-1">
                          <a
                            href="#"
                            className="block px-4 py-2 text-sm text-gray-700 hover:text-white hover:bg-green-600"
                          >
                            Herbal
                          </a>
                          <Link href="/products">
                            <a
                              href="#"
                              className="block px-4 py-2 text-sm text-gray-700 hover:text-white hover:bg-green-600"
                            >
                              API/Bulk Drugs
                            </a>
                          </Link>
                          <a
                            href="#"
                            className="block px-4 py-2 text-sm text-gray-700 hover:text-white hover:bg-green-600"
                          >
                            Personal Care
                          </a>
                          <a
                            href="#"
                            className="block px-4 py-2 text-sm text-gray-700 hover:text-white hover:bg-green-600"
                          >
                            International
                          </a>
                        </div>
                      </div>
                    </Transition>
                  </li>
                  <li className="mr-12">
                    <Link href="/contact">
                      <a
                        style={textStyle4}
                        onMouseEnter={handleMouseEnter4}
                        onMouseLeave={handleMouseLeave4}
                        className="text-gray-500 hover:text-gray-900 font-medium"
                        href="#"
                      >
                        Contact
                      </a>
                    </Link>
                  </li>
                </ul>
              </div>
              {/* <div className="w-1/2 xl:w-1/3">
                          <div className="hidden xl:flex items-center justify-end"><a className="inline-block py-2 px-4 mr-2 leading-5 text-gray-500 hover:text-gray-900 bg-transparent font-medium rounded-md" href="#">Log In</a><a className="inline-block py-2 px-4 text-sm leading-5 text-green-50 bg-green-500 hover:bg-green-600 font-medium focus:ring-2 focus:ring-green-500 focus:ring-opacity-50 rounded-md" href="#">Sign Up</a></div>
                        </div> */}
            </div>
            <button className="navbar-burger self-center xl:hidden">
              <svg
                width="35"
                height="35"
                viewBox="0 0 32 32"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect
                  className="text-gray-50"
                  width="32"
                  height="32"
                  rx="6"
                  fill="currentColor"
                ></rect>
                <path
                  className="text-gray-500"
                  d="M7 12H25C25.2652 12 25.5196 11.8946 25.7071 11.7071C25.8946 11.5196 26 11.2652 26 11C26 10.7348 25.8946 10.4804 25.7071 10.2929C25.5196 10.1054 25.2652 10 25 10H7C6.73478 10 6.48043 10.1054 6.29289 10.2929C6.10536 10.4804 6 10.7348 6 11C6 11.2652 6.10536 11.5196 6.29289 11.7071C6.48043 11.8946 6.73478 12 7 12ZM25 15H7C6.73478 15 6.48043 15.1054 6.29289 15.2929C6.10536 15.4804 6 15.7348 6 16C6 16.2652 6.10536 16.5196 6.29289 16.7071C6.48043 16.8946 6.73478 17 7 17H25C25.2652 17 25.5196 16.8946 25.7071 16.7071C25.8946 16.5196 26 16.2652 26 16C26 15.7348 25.8946 15.4804 25.7071 15.2929C25.5196 15.1054 25.2652 15 25 15ZM25 20H7C6.73478 20 6.48043 20.1054 6.29289 20.2929C6.10536 20.4804 6 20.7348 6 21C6 21.2652 6.10536 21.5196 6.29289 21.7071C6.48043 21.8946 6.73478 22 7 22H25C25.2652 22 25.5196 21.8946 25.7071 21.7071C25.8946 21.5196 26 21.2652 26 21C26 20.7348 25.8946 20.4804 25.7071 20.2929C25.5196 20.1054 25.2652 20 25 20Z"
                  fill="currentColor"
                ></path>
              </svg>
            </button>
          </nav>
          <div className="navbar-menu hidden fixed top-0 left-0 z-50 w-full h-full bg-coolGray-900 bg-opacity-50">
            <div className="fixed top-0 left-0 bottom-0 w-full w-4/6 max-w-xs bg-white">
              <nav className="relative p-6 h-full overflow-y-auto">
                <div className="flex flex-col justify-between h-full">
                  <a className="inline-block" href="#">
                    <img
                      className="h-8"
                      src="flex-ui-assets/logos/flex-ui-green-light.svg"
                      alt=""
                    />
                  </a>
                  <ul className="py-6">
                    <li>
                      <a
                        className="block py-3 px-4 text-gray-500 hover:text-gray-900 font-medium hover:bg-coolGray-50 rounded-md"
                        href="#"
                      >
                        Product
                      </a>
                    </li>
                    <li>
                      <a
                        className="block py-3 px-4 text-gray-500 hover:text-gray-900 font-medium hover:bg-coolGray-50 rounded-md"
                        href="#"
                      >
                        Features
                      </a>
                    </li>
                    <li>
                      <a
                        className="block py-3 px-4 text-gray-500 hover:text-gray-900 font-medium hover:bg-coolGray-50 rounded-md"
                        href="#"
                      >
                        Pricing
                      </a>
                    </li>
                    <li>
                      <a
                        className="block py-3 px-4 text-gray-500 hover:text-gray-900 font-medium hover:bg-coolGray-50 rounded-md"
                        href="#"
                      >
                        Resources
                      </a>
                    </li>
                  </ul>
                  <div className="flex flex-wrap">
                    <div className="w-full mb-2">
                      <a
                        className="inline-block py-2 px-4 w-full text-sm leading-5 text-gray-500 hover:text-gray-900 bg-transparent font-medium text-center rounded-md"
                        href="#"
                      >
                        Log In
                      </a>
                    </div>
                    <div className="w-full">
                      <a
                        className="inline-block py-2 px-4 w-full text-sm leading-5 text-white bg-green-500 hover:bg-green-600 font-medium text-center focus:ring-2 focus:ring-green-500 focus:ring-opacity-50 rounded-md"
                        href="#"
                      >
                        Sign Up
                      </a>
                    </div>
                  </div>
                </div>
              </nav>
              <a className="navbar-close absolute top-5 p-4 right-3" href="#">
                <svg
                  width="12"
                  height="12"
                  viewBox="0 0 12 12"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M6.94004 6L11.14 1.80667C11.2656 1.68113 11.3361 1.51087 11.3361 1.33333C11.3361 1.1558 11.2656 0.985537 11.14 0.860002C11.0145 0.734466 10.8442 0.66394 10.6667 0.66394C10.4892 0.66394 10.3189 0.734466 10.1934 0.860002L6.00004 5.06L1.80671 0.860002C1.68117 0.734466 1.51091 0.663941 1.33337 0.663941C1.15584 0.663941 0.985576 0.734466 0.860041 0.860002C0.734505 0.985537 0.66398 1.1558 0.66398 1.33333C0.66398 1.51087 0.734505 1.68113 0.860041 1.80667L5.06004 6L0.860041 10.1933C0.797555 10.2553 0.747959 10.329 0.714113 10.4103C0.680267 10.4915 0.662842 10.5787 0.662842 10.6667C0.662842 10.7547 0.680267 10.8418 0.714113 10.9231C0.747959 11.0043 0.797555 11.078 0.860041 11.14C0.922016 11.2025 0.99575 11.2521 1.07699 11.2859C1.15823 11.3198 1.24537 11.3372 1.33337 11.3372C1.42138 11.3372 1.50852 11.3198 1.58976 11.2859C1.671 11.2521 1.74473 11.2025 1.80671 11.14L6.00004 6.94L10.1934 11.14C10.2554 11.2025 10.3291 11.2521 10.4103 11.2859C10.4916 11.3198 10.5787 11.3372 10.6667 11.3372C10.7547 11.3372 10.8419 11.3198 10.9231 11.2859C11.0043 11.2521 11.0781 11.2025 11.14 11.14C11.2025 11.078 11.2521 11.0043 11.286 10.9231C11.3198 10.8418 11.3372 10.7547 11.3372 10.6667C11.3372 10.5787 11.3198 10.4915 11.286 10.4103C11.2521 10.329 11.2025 10.2553 11.14 10.1933L6.94004 6Z"
                    fill="#556987"
                  ></path>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Header;
