import React, { useEffect, useState } from "react";
import { CustomInput, CustomBtn } from "./index";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { login as authLogin } from "../store/authSlice";
import authService from "../appwrite/auth";
import { useDispatch } from "react-redux";
const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { register, handleSubmit } = useForm();
  const [error, setError] = useState();

  const login = async (data) => {
    try {
      setError("");
      const session = await authService.login(data);

      if (session.message) {
        const userData = await authService.getCurrentUser();
        if (userData) {
          dispatch(authLogin(userData));
          navigate("/");
        }
      } else if (session.error) {
        setError(session.error);
      }
    } catch (error) {
      console.log(error.message);
      setError(error.message);
    }
  };
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
      {error && <p className="text-red-600 mt-8 text-center">{error}</p>}
      <form onSubmit={handleSubmit(login)}>
        <div className="w-full    ">
          <CustomInput
            label="Email"
            placeholder="Email Address"
            type="email"
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
            label="Password"
            placeholder="password"
            type="password"
            className="pl-2"
            {...register("password", {
              required: true,
            })}
          />
          <div>
            <CustomBtn
              type="submit"
              className="w-full bg-[#3182CE] hover:bg-[#2B6CB0]">
              Sign in
            </CustomBtn>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Login;
