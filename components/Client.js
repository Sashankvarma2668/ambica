import React from "react";
import styles from "../styles/Home.module.css";
import client1 from "/flex-ui-assets/logos/client1.png";
import client2 from "/flex-ui-assets/logos/client2.png";
import client3 from "/flex-ui-assets/logos/client3.jpeg";
import client4 from "/flex-ui-assets/logos/client4.jpeg";
import client5 from "/flex-ui-assets/logos/client5.jpeg";
import client6 from "/flex-ui-assets/logos/client6.jpeg";
import Image from "next/image";

const Client = () => {
  // const [isHovered, setIsHovered] = useState(false);

  // const handleMouseEnter = () => {
  //   setIsHovered(true);
  // };

  // const handleMouseLeave = () => {
  //   setIsHovered(false);
  // };

  // const shadowColor = isHovered ? '#ff0000' : '#ccc';

  return (
    <>
      <section className="py-20 xl:pt-24 mx-2 bg-green-100">
        <div className="container px-4 mx-auto">
          <div className="mb-8 text-center">
            <span className="inline-block py-px px-2 mb-4 text-lg leading-5 text-green-500 bg-green-100 font-medium uppercase rounded-9xl">
              Our Clients
            </span>
            <h3 className="mb-4 text-4xl md:text-5xl text-gray-900 font-bold tracking-tighter">
              Trusted by some of the top companies in this industry
            </h3>
            <p className="text-lg md:text-xl text-gray-500 font-medium">
              Collaborate with us and join some of the best in the business{" "}
            </p>
          </div>
          <div className="flex flex-wrap justify-center -mx-4">
            <div className="w-1/2 md:w-1/3 lg:w-1/6 px-4 mb-8 lg:mb-0">
              <div className="bg-white pig rounded-md hover:shadow-xl transition duration-200 flex items-center h-32 md:h-36 px-4 md:px-8 rounded-md bg-coolGray-50 shadow-md">
                <Image className="mx-auto" src={client5} alt="" />
              </div>
            </div>
            <div className="w-1/2 md:w-1/3 lg:w-1/6 px-4 mb-8 lg:mb-0">
              <div className="bg-white pig rounded-md hover:shadow-xl transition duration-200 flex items-center h-32 md:h-36 px-4 md:px-8 rounded-md bg-coolGray-50 shadow-md">
                <Image className="mx-auto" src={client2} alt="" />
              </div>
            </div>
            <div className="w-1/2 md:w-1/3 lg:w-1/6 px-4 mb-8 lg:mb-0">
              <div className="bg-white rounded-md hover:shadow-xl transition duration-200 flex items-center h-32 md:h-36 px-4 md:px-8 rounded-md bg-coolGray-50 shadow-md">
                <Image className="mx-auto" src={client3} alt="" />
              </div>
            </div>
            <div className="w-1/2 md:w-1/3 lg:w-1/6 px-4 mb-8 lg:mb-0">
              <div className="bg-white rounded-md hover:shadow-xl transition duration-200 flex items-center h-32 md:h-36 px-4 md:px-8 rounded-md bg-coolGray-50 shadow-md">
                <Image className="mx-auto" src={client4} alt="" />
              </div>
            </div>
            <div className="w-1/2 md:w-1/3 lg:w-1/6 px-4 mb-8 md:mb-0">
              <div className="bg-white rounded-md hover:shadow-xl transition duration-200 flex items-center h-32 md:h-36 px-4 md:px-8 rounded-md bg-coolGray-50 shadow-md">
                <Image
                  className="mx-auto"
                  src={client1}
                  height="36"
                  width=""
                  alt=""
                />
              </div>
            </div>
            <div className="w-1/2 md:w-1/3 lg:w-1/6 px-4">
              <div className="bg-white rounded-md hover:shadow-xl transition duration-200 flex items-center h-32 md:h-36 px-4 md:px-8 rounded-md bg-coolGray-50 shadow-md">
                <Image className="mx-auto" src={client6} alt="" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Client;
