import React from "react";
import { Link } from "react-router-dom";
import { CustomInput, CustomBtn } from "./index";

const Signup = () => {
  return (
    <div className="max-w-screen-sm mx-3 my-5  sm:mx-auto px-5 py-5  shadow-lg bg-white  rounded-lg ">
      <h1 className=" text-center text-white dark:text-black font-bold mb-2 text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl   ">
        Sign up to create your account
      </h1>
      <p className="text-center text-[#7180A2] font-semibold">
        Already have an account?{" "}
        <Link to="/login">
          <span className="underline text-[#3182CE] font-bold">Sign in</span>
        </Link>
      </p>
      <div className="">
        <div className="w-full">
          <CustomInput
            label="Full Name :"
            placeholder="Full Name"
            className="pl-2"
          />
        </div>
        <div className="w-full  ">
          <CustomInput label="Email :" placeholder="Email" className="pl-2" />
        </div>
        <div className="w-full  ">
          <CustomInput
            label="Password :"
            placeholder="Password"
            className="pl-2"
          />
        </div>
        <div className="w-full">
          <CustomBtn className=" bg-[#3182CE] hover:bg-[#2B6CB0]">
            Create Account
          </CustomBtn>
        </div>
      </div>
    </div>
  );
};

export default Signup;
