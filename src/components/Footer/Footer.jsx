import React from "react";
import { Logo } from "../index";

const Footer = () => {
  return (
    <footer>
      {/* <div className="bg-orange-400  p-6  sm:flex   ">
        <div className=" flex flex-col  justify-between md:w-1/2 lg:w-5/12 border-2  ">
          <div>Logo</div>
          <div>
            <p>© Copyright 2023. All Rights Reserved by DevUI.</p>
          </div>
        </div>
        <div className=" md:w-1/2 lg:w-5/12 border-2  ">
          <div>
            <h3 className="text-gray-500 mb-9 font-semibold text-xs">
              COMPANY
            </h3>
          </div>
          <div>
            <ul>
              <li className="  text-base font-medium text-gray-900 hover:text-gray-700 mb-4">
                Features
              </li>
              <li className=" text-base font-medium text-gray-900 hover:text-gray-700 mb-4">
                Pricing
              </li>
              <li className=" text-base font-medium text-gray-900 hover:text-gray-700 mb-4">
                Affiliate Program
              </li>
              <li className=" text-base font-medium text-gray-900 hover:text-gray-700 mb-4">
                Press Kit
              </li>
            </ul>
          </div>
        </div>
        <div className=" md:w-1/2 lg:w-5/12 border-2">
          <div>
            <h3 className="text-gray-500 mb-9 font-semibold text-xs">
              SUPPORT
            </h3>
          </div>
          <div>
            <ul>
              <li className=" text-base font-medium text-gray-900 hover:text-gray-700 mb-4">
                Account
              </li>
              <li className=" text-base font-medium text-gray-900 hover:text-gray-700 mb-4">
                Help
              </li>
              <li className=" text-base font-medium text-gray-900 hover:text-gray-700 mb-4">
                Contact Us
              </li>
              <li className=" text-base font-medium text-gray-900 hover:text-gray-700 mb-4">
                Customer Support
              </li>
            </ul>
          </div>
        </div>
        <div className=" md:w-1/2 lg:w-5/12 border-2">
          <div>
            <h3 className="text-gray-500 mb-9 font-semibold text-xs">LEGALS</h3>
          </div>
          <div>
            <ul>
              <li className=" text-base font-medium text-gray-900 hover:text-gray-700 mb-4">
                Terms & Conditions
              </li>
              <li className=" text-base font-medium text-gray-900 hover:text-gray-700 mb-4">
                Privacy Policy
              </li>
              <li className=" text-base font-medium text-gray-900 hover:text-gray-700 mb-4">
                Licensing
              </li>
            </ul>
          </div>
        </div>
      </div> */}
      <div className="bg-gray-300 flex flex-wrap  p-6 gap-5 sm:gap-0 ">
        <div
          className="  flex flex-col justify-between  w-full text-center
         md:w-1/2 lg:w-1/4 md:text-left">
          <div className="cursor-pointer">
            <Logo />
          </div>
          <div>
            <p className="text-gray-500 text-lg font-medium md:text-sm">
              © Copyright 2023. All Rights Reserved by DevUI.
            </p>
          </div>
        </div>
        <div className="w-full md:w-1/2 lg:w-1/4  text-center mt-10 md:mt-0 ">
          <div>
            <h3 className="text-gray-500 text-lg mb-9 font-semibold md:text-xs">
              COMPANY
            </h3>
          </div>
          <div>
            <ul>
              <li className="cursor-pointer  text-lg  md:text-base font-medium text-gray-900 hover:text-gray-700 mb-4">
                Features
              </li>
              <li className="cursor-pointer  text-lg  md:text-base font-medium text-gray-900 hover:text-gray-700 mb-4">
                Pricing
              </li>
              <li className=" cursor-pointer text-lg  md:text-base font-medium text-gray-900 hover:text-gray-700 mb-4">
                Affiliate Program
              </li>
              <li className=" cursor-pointer text-lg  md:text-base font-medium text-gray-900 hover:text-gray-700 ">
                Press Kit
              </li>
            </ul>
          </div>
        </div>
        <div className=" mt-10   w-full md:w-1/2 lg:w-1/4 text-center md:mt-4 lg:mt-0">
          <div>
            <h3 className="text-gray-500 text-lg mb-9  font-semibold md:text-xs">
              SUPPORT
            </h3>
          </div>
          <div>
            <ul>
              <li className="cursor-pointer text-lg  md:text-base font-medium text-gray-900 hover:text-gray-700 mb-4">
                Account
              </li>
              <li className="cursor-pointer text-lg  md:text-base font-medium text-gray-900 hover:text-gray-700 mb-4">
                Help
              </li>
              <li className="cursor-pointer text-lg  md:text-base font-medium text-gray-900 hover:text-gray-700 mb-4">
                Contact Us
              </li>
              <li className="cursor-pointer text-lg  md:text-base font-medium text-gray-900 hover:text-gray-700 ">
                Customer Support
              </li>
            </ul>
          </div>
        </div>
        <div className="w-full md:w-1/2 lg:w-1/4 mt-10 text-center md:mt-4 lg:mt-0">
          <div>
            <h3 className="text-gray-500 text-lg mb-9 font-semibold md:text-xs">
              LEGALS
            </h3>
          </div>
          <div>
            <ul>
              <li className="cursor-pointer text-lg  md:text-base font-medium text-gray-900 hover:text-gray-700 mb-4">
                Terms & Conditions
              </li>
              <li className="cursor-pointer text-lg  md:text-base font-medium text-gray-900 hover:text-gray-700 mb-4">
                Privacy Policy
              </li>
              <li className="cursor-pointer text-lg  md:text-base font-medium text-gray-900 hover:text-gray-700 mb-4">
                Licensing
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
