import React from "react";
import { CustomInput, CustomBtn } from "./index";
import { Link } from "react-router-dom";
const Login = () => {
  return (
    <div className="max-w-screen-sm mx-3 my-5  sm:mx-auto px-5 py-5  shadow-lg bg-white  rounded-lg ">
      <h1 className=" text-center text-white dark:text-black font-bold mb-2 text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl   ">
        Sign in to your account
      </h1>
      <p className="text-center text-[#7180A2] font-semibold">
        Don't have any account?{" "}
        <Link to="/signup">
          <span className="underline text-[#3182CE] font-bold">Sign Up</span>
        </Link>
      </p>
      <div className="">
        <div className="w-full    ">
          <CustomInput
            label="Email"
            placeholder="Email Address"
            className="pl-2"
          />
        </div>
        <div className="w-full  ">
          <CustomInput
            label="Password"
            placeholder="password"
            className="pl-2"
          />
        </div>
        <div>
          <CustomBtn className="w-full bg-[#3182CE] hover:bg-[#2B6CB0]">
            Sign in
          </CustomBtn>
        </div>
      </div>
    </div>
  );
};

export default Login;
