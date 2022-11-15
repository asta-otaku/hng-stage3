import React, { useContext } from "react";
import Header from "./HeaderComponents/Header";
import Footer from "./FooterComponents/Footer";
import Card from "../utils/Card";
import { MetaMaskContent } from "../utils/context";
import F1 from "../assets/place/F1.png";
import F2 from "../assets/place/F2.png";
import F3 from "../assets/place/F3.png";
import F4 from "../assets/place/F4.png";
import F5 from "../assets/place/F5.png";
import F6 from "../assets/place/F6.png";
import F7 from "../assets/place/F7.png";
import F8 from "../assets/place/F8.png";
import F9 from "../assets/place/F9.png";
import F10 from "../assets/place/F10.png";
import F11 from "../assets/place/F11.png";
import F12 from "../assets/place/F12.png";
import F13 from "../assets/place/F13.png";
import F14 from "../assets/place/F14.png";
import F15 from "../assets/place/F15.png";
import F16 from "../assets/place/F16.png";
import Modal from "./Modal/Modal";
import * as AiIcons from "react-icons/ai";

function PlaceToStay() {
  const { displayMeta } = useContext(MetaMaskContent);
  return (
    <div className="pt-5 font-main-font">
      <Header />
      <div className="flex w-full justify-between mt-10 mb-5 lg:px-16 lg:items-center">
        <div className=" flex items-center justify-between w-48 border-[2px] border-gray-400 mx-4 my-5 rounded-lg py-1 px-5 lg:hidden">
          <p className="text-small">Restaurant</p>
          <div>
            <AiIcons.AiOutlineDown />
          </div>
        </div>
        <div className="hidden lg:flex lg:w-[85%]">
          <p className="lg:mr-16 ">Resturant</p>
          <p className="lg:mr-16 ">Cottage</p>
          <p className="lg:mr-16 ">Castle</p>
          <p className="lg:mr-16 ">fantast city</p>
          <p className="lg:mr-16 ">Carbins</p>
          <p className="lg:mr-16 ">Off-grid</p>
          <p className="lg:mr-16 ">Farm</p>
        </div>
        <div className=" flex  items-center justify-between w-36 border-[2px] border-gray-400 mx-4 my-5 rounded-lg py-1 px-5 lg:w-[15%]">
          <p className="text-small">location</p>
          <div>
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M21.9999 5L10.9999 5"
                stroke="#333333"
                stroke-width="1.5"
                stroke-miterlimit="10"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M6.99985 5H1.99985"
                stroke="#333333"
                stroke-width="1.5"
                stroke-miterlimit="10"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M21.9999 12H16.9999"
                stroke="#333333"
                stroke-width="1.5"
                stroke-miterlimit="10"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M12.9999 12H1.99985"
                stroke="#333333"
                stroke-width="1.5"
                stroke-miterlimit="10"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M21.9999 19H10.9999"
                stroke="#333333"
                stroke-width="1.5"
                stroke-miterlimit="10"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M6.99985 19H1.99985"
                stroke="#333333"
                stroke-width="1.5"
                stroke-miterlimit="10"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M10.9999 21V17"
                stroke="#333333"
                stroke-width="1.5"
                stroke-miterlimit="10"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M10.9999 7V3"
                stroke="#333333"
                stroke-width="1.5"
                stroke-miterlimit="10"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M13.0001 14V10"
                stroke="#333333"
                stroke-width="1.5"
                stroke-miterlimit="10"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </div>
        </div>
      </div>
      <div className="w-auto mx-10 flex flex-col lg:flex-row lg:flex-wrap lg:mx-12 lg:mb-16 justify-between">
        <Card pic={F1} />
        <Card pic={F2} />
        <Card pic={F3} />
        <Card pic={F4} />
        <Card pic={F5} />
        <Card pic={F6} />
        <Card pic={F7} />
        <Card pic={F8} />
        <Card pic={F9} />
        <Card pic={F10} />
        <Card pic={F11} />
        <Card pic={F12} />
        <Card pic={F13} />
        <Card pic={F14} />
        <Card pic={F15} />
        <Card pic={F16} />
      </div>
      {displayMeta && <Modal />}
      <Footer />
    </div>
  );
}

export default PlaceToStay;
