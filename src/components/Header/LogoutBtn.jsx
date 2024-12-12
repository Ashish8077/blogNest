import React from "react";
import { logout } from "../../store/authSlice";
import authService from "../../appwrite/auth";
import { useDispatch } from "react-redux";

const LogoutBtn = () => {
  const dispatch = useDispatch();
  const logoutHandler = async () => {
    try {
      const response = await authService.logout();
      if (response.success) {
        dispatch(logout());
      } else {
        console.error("Logout failed:", response.error); // Handle any errors
      }
    } catch (error) {
      console.error("An error occurred during logout:", error.message);
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
