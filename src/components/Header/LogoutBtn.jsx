import React from "react";
import { logout } from "../../store/authSlice";
import authService from "../../appwrite/auth";
import { useDispatch } from "react-redux";

const LogoutBtn = () => {
  const dispatch = useDispatch();
  const logoutHandler = async () => {
    try {
      authService.logout().then(() => {
        dispatch(logout());
      });
    } catch (error) {
      console.error("Logout failed:", error);
    }
  };
  return (
    <button
      onClick={logoutHandler}
      className="inline-block px-6 py-2 duration-200 hover:bg-blue-600 rounded-full hover:text-white">
      Logout
    </button>
  );
};

export default LogoutBtn;
