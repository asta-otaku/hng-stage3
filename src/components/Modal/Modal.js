import React, { useContext } from "react";
import image1 from "../../assets/home/Frame 195.png";
import image2 from "../../assets/home/Frame 196.png";
import * as MdIcons from "react-icons/md";
import { MetaMaskContent } from "../../utils/context";

const Modal = () => {
  const { displayMeta, setDisplayMeta } = useContext(MetaMaskContent);

  return (
    <div
      id="popup-modal"
      tabIndex="-1"
      className=" overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 md:inset-0 h-screen w-screen  md:h-full"
    >
      <div
        className="bg-black h-screen w-screen fixed z-[10] opacity-20"
        onClick={() => {
          setDisplayMeta(!displayMeta);
        }}
      ></div>
      <div className="flex justify-center items-center relative p-4 w-full h-full md:h-auto z-50 lg:h-screen">
        <div className="relative bg-white dark:bg-black rounded-lg shadow  w-[95%] lg:w-[50%]">
          <div className="flex justify-between items-center px-5 mt-5 pb-3 ">
            <p className="font-bold dark:text-white">Connect Wallet</p>
            <button
              type="button"
              className=" text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-800 dark:hover:text-white"
              onClick={() => {
                setDisplayMeta(!displayMeta);
              }}
            >
              <svg
                aria-hidden="true"
                className="w-5 h-5"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                  clipRule="evenodd"
                ></path>
              </svg>
              <span className="sr-only">Close modal</span>
            </button>
          </div>
          <hr className="w-full " />
          <div className="p-6 text-center">
            <p className="mb-5 text-sm font-normal text-gray-500 dark:text-gray-400 w-full text-left">
              Choose your preferred wallet:
            </p>

            <button
              data-modal-toggle="popup-modal"
              type="button"
              className="flex justify-between mb-5 items-center w-[100%] text-gray-500 bg-white hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-200 rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10  dark:text-gray-300 dark:border-gray-500 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-600"
            >
              <img src={image1} alt="metamask" />
              <div className="text-3xl">
                <MdIcons.MdNavigateNext />
              </div>
            </button>
            <button
              data-modal-toggle="popup-modal"
              type="button"
              className="flex justify-between items-center w-[100%] text-gray-500 bg-white hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-200 rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10  dark:text-gray-300 dark:border-gray-500 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-600"
            >
              <img src={image2} alt="metamask" />
              <div className="text-3xl">
                <MdIcons.MdNavigateNext />
              </div>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
