import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { CustomInput, CustomBtn } from "./index";
import { useForm } from "react-hook-form";
import authService from "../appwrite/auth";
import { useDispatch } from "react-redux";
import { login } from "../store/authSlice";

const Signup = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { register, handleSubmit } = useForm();
  const create = async (data) => {
    try {
      const userData = await authService.createAccount(data);
      console.log(userData);
      if (userData) {
        const currentUser = await authService.getCurrentUser();
        if (currentUser) dispatch(login(currentUser));
        navigate("/");
      }
    } catch (error) {}
  };
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
      <form onSubmit={handleSubmit(create)}>
        <div className="w-full">
          <CustomInput
            label="Full Name :"
            placeholder="Full Name"
            className="pl-2"
            {...register("fullname", {
              required: true,
            })}
          />
        </div>
        <div className="w-full  ">
          <CustomInput
            label="Email :"
            type="email"
            placeholder="Email"
            className="pl-2"
            {...register("email", {
              required: true,
              validate: {
                matchPatern: (value) =>
                  /^([A-Z|a-z|0-9](\.|_){0,1})+[A-Z|a-z|0-9]\@([A-Z|a-z|0-9])+((\.){0,1}[A-Z|a-z|0-9]){2}\.[a-z]{2,3}$/.test(
                    value
                  ) || "Please enter a valid email address",
              },
            })}
          />
        </div>
        <div className="w-full  ">
          <CustomInput
            label="Password :"
            type="password"
            placeholder="Password"
            className="pl-2"
            {...register("password", {
              required: true,
              validate: {
                minLength: (value) =>
                  value.length >= 6 ||
                  "Password must be at least 6 characters long",
                uppercase: (value) =>
                  /[A-Z]/.test(value) ||
                  "Password must contain at least one uppercase letter",
                specialChar: (value) =>
                  /[!@#$%^&*(),.?":{}|<>]/.test(value) ||
                  "Password must contain at least one special character",
              },
            })}
          />
        </div>
        <div className="w-full">
          <CustomBtn type="submit" className=" bg-[#3182CE] hover:bg-[#2B6CB0] w-full">
            Create Account
          </CustomBtn>
        </div>
      </form>
    </div>
  );
};

export default Signup;
