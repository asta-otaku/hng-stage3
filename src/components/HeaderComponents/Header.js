import React, { useState, useEffect, useContext } from "react";
import * as FiIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import { MetaMaskContent } from "../../utils/context";
import { Link } from "react-router-dom";

export default function Header() {
  const getWindowSize = () => {
    const { innerWidth } = window;
    return { innerWidth };
  };

  const [windowSize, setWindowSize] = useState(getWindowSize());

  let mobile = true;
  const [clickNav, setClickNav] = useState(false);

  useEffect(() => {
    function handleWindowResize() {
      setWindowSize(getWindowSize());
    }

    window.addEventListener("resize", handleWindowResize);

    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, []);

  if (windowSize.innerWidth >= 1024) {
    mobile = true;
  } else if (windowSize.innerWidth <= 1024 && clickNav) {
    mobile = true;
  } else {
    mobile = false;
  }

  const { displayMeta, setDisplayMeta } = useContext(MetaMaskContent);

  return (
    <div className="relative flex justify-between items-center">
      <div className="mx-4 lg:mx-16">
        <svg
          width="120"
          height="20"
          viewBox="0 0 233 38"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M44.8972 6.66377V36.6989H51.3463V17.7048L58.7358 30.438H63.4831L70.8726 17.7048V36.6989H77.3217V6.66377H71.2757L61.199 24.008L51.1671 6.66377H44.8972ZM81.8233 25.4886C81.8233 32.257 86.7945 37.3334 93.9153 37.3334C98.3491 37.3334 102.962 35.2606 104.664 31.2418L99.0656 29.5497C97.9012 31.3264 96.1994 32.3416 93.9601 32.3416C90.5564 32.3416 88.6755 29.9727 88.1828 27.0115H105.156V25.5309C105.156 18.7624 100.812 13.7284 93.6018 13.7284C86.5258 13.7284 81.8233 19.1431 81.8233 25.4886ZM93.6018 18.2971C96.6024 18.2971 98.3043 20.4122 98.7074 23.035H88.2724C88.8098 20.4122 90.6012 18.2971 93.6018 18.2971ZM107.084 14.3629V19.1431H111.114V29.5497C111.114 34.3722 114.025 37.3334 119.041 37.3334C121.012 37.3334 123.027 36.8681 124.729 35.8528L123.609 31.411C122.534 31.834 121.46 32.1724 120.295 32.1724C118.101 32.1724 117.384 30.6918 117.384 28.8305V19.1431H123.833V14.3629H117.384V6.74838H111.114V14.3629H107.084ZM135.548 37.3334C138.235 37.3334 141.101 36.3181 142.535 34.0761L142.714 36.6989H148.312V23.1619C148.312 17.3241 143.968 13.7284 138.056 13.7284C133.712 13.7284 129.009 15.9281 127.979 20.2007L133.578 21.2583C134.249 19.4816 136.041 18.5932 137.966 18.5932C140.698 18.5932 142.221 20.3699 142.221 22.8658V24.1772C140.385 23.5426 138.817 23.2042 136.847 23.2042C132.144 23.2042 127.128 25.3617 127.128 30.3534C127.128 34.7952 131.249 37.3334 135.548 37.3334ZM133.309 30.0573C133.309 27.8152 135.951 27.1807 137.877 27.1807C138.638 27.1807 139.355 27.2653 140.116 27.3922C140.878 27.5614 141.549 27.7729 142.221 28.0267V28.2383C142.221 30.988 139.803 32.7647 137.071 32.7647C135.324 32.7647 133.309 31.9609 133.309 30.0573ZM153.308 5.14087V36.6989H159.086L159.265 33.7799C160.922 36.1489 163.609 37.3334 166.565 37.3334C173.506 37.3334 177.806 31.4533 177.806 25.404C177.806 19.3547 173.641 13.7284 166.923 13.7284C163.967 13.7284 161.37 14.9551 159.578 17.1972V5.14087H153.308ZM165.445 19.0585C169.252 19.0585 171.401 22.2312 171.401 25.5309C171.401 28.8728 169.162 32.0032 165.445 32.0032C161.683 32.0032 159.489 28.7882 159.489 25.5309C159.489 22.1889 161.728 19.0585 165.445 19.0585ZM181.911 14.3629V36.6989H188.181V23.8811C188.181 21.1314 190.107 19.0585 193.018 19.0585C196.108 19.0585 197.228 21.4698 197.228 24.0503V36.6989H203.498V23.2888C203.498 18.0856 200.676 13.7284 194.854 13.7284C191.988 13.7284 189.346 14.8705 187.868 17.2395L187.689 14.3629H181.911ZM208.503 5.14087V36.6989H214.28L214.459 33.7799C216.116 36.1489 218.803 37.3334 221.759 37.3334C228.701 37.3334 233 31.4533 233 25.404C233 19.3547 228.835 13.7284 222.117 13.7284C219.161 13.7284 216.564 14.9551 214.772 17.1972V5.14087H208.503ZM220.639 19.0585C224.446 19.0585 226.596 22.2312 226.596 25.5309C226.596 28.8728 224.356 32.0032 220.639 32.0032C216.877 32.0032 214.683 28.7882 214.683 25.5309C214.683 22.1889 216.922 19.0585 220.639 19.0585Z"
            fill="url(#paint0_linear_0_1)"
          />
          <path
            d="M39.1871 35.7153V33.7323C39.1871 33.3357 38.9072 33.0713 38.4873 33.0713H37.0878V17.2077H39.1871C39.6069 17.2077 39.8868 16.9433 39.8868 16.5467V14.1011C39.8868 13.9028 39.8169 13.7045 39.6069 13.5723L34.2887 9.87082V2.00512C34.2887 1.60853 34.0088 1.34413 33.5889 1.34413H27.9908C27.5709 1.34413 27.291 1.60853 27.291 2.00512V4.91344L21.4129 0.815347C21.133 0.617052 20.8531 0.617052 20.5732 0.815347L2.86905 13.2418H2.79908V13.3079L2.37922 13.5723C2.16929 13.7045 2.09931 13.9028 2.09931 14.1011V16.5467C2.09931 16.9433 2.37921 17.2077 2.79908 17.2077H4.89838V33.0713H3.49885C3.07898 33.0713 2.79908 33.3357 2.79908 33.7323V35.7153H0V37.0372H3.49885H38.4873H41.9861V35.7153H39.1871ZM32.8891 2.6661V3.32708H28.6905V2.6661H32.8891ZM28.6905 4.64905H32.8891V8.87934L28.6905 5.90492V4.64905ZM3.49885 14.5638H31.4896V13.2418H5.17829L20.9931 2.13797L38.4873 14.4323V15.8864H36.388H5.59815H3.49885V14.5638ZM6.29792 17.2077H35.6882V33.0713H18.194V23.8176H19.5935V22.4956H17.4942H9.79677H7.69746V23.8176H9.097V33.0713H6.29792V17.2077ZM10.4965 23.8176H16.7945V33.0713H10.4965V23.8176ZM4.19861 35.7153V34.3933H5.59815H9.79677H17.4942H36.388H37.7875V35.7153H4.19861Z"
            fill="url(#paint1_linear_0_1)"
          />
          <defs>
            <linearGradient
              id="paint0_linear_0_1"
              x1="79.587"
              y1="8.57475"
              x2="192.672"
              y2="25.566"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#DC3E88" />
              <stop offset="0.418735" stopColor="#B840AE" />
              <stop offset="1" stopColor="#843FE8" />
            </linearGradient>
            <linearGradient
              id="paint1_linear_0_1"
              x1="7.74304"
              y1="4.54617"
              x2="33.5317"
              y2="5.31171"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#DC3E88" />
              <stop offset="0.418735" stopColor="#B840AE" />
              <stop offset="1" stopColor="#843FE8" />
            </linearGradient>
          </defs>
        </svg>
      </div>
      <div className="flex items-center lg:flex-row-reverse">
        <div
          className="bg-bgColorOne text-xs py-2 px-4 text-white rounded lg:mr-16 lg:text-base hover:bg-white hover:text-bgColorOne"
          role="button"
          onClick={() => {
            setDisplayMeta(!displayMeta);
          }}
        >
          Connect wallet
        </div>
        {mobile && (
          <div className="fixed lg:relative lg:bg-white lg:text-gray-800 lg:h-14 lg:flex lg:items-center lg:w-[560px] top-0 left-0 z-10 text-white bg-bgColorOne h-screen w-screen lg:z-0">
            <div className="pt-5 px-3 w-full flex justify-end lg:hidden">
              <div
                onClick={() => {
                  setClickNav(false);
                }}
              >
                <AiIcons.AiOutlineClose />
              </div>
            </div>
            <ul className="absolute mt-24 mx-7 lg:mt-0 lg:flex lg:w-full lg:justify-around lg:ml-[-14rem]">
              <li className="my-5 lg:my-0">
                <Link to="/">Home</Link>
              </li>
              <li className="my-5 lg:my-0">
                <Link to="placetostay">Place to stay</Link>
              </li>
              <li className="my-5 lg:my-0">NFTs</li>
              <li className="my-5 lg:my-0">Community</li>
            </ul>
          </div>
        )}
        <div
          className="text-bgColorOne ml-1 mr-4 lg:hidden"
          onClick={() => {
            setClickNav(true);
          }}
        >
          <FiIcons.FaBars />
        </div>
      </div>
    </div>
  );
}
