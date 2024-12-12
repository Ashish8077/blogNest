import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const Protected = ({ children, authentication = true }) => {
  const navigate = useNavigate();
  const [loader, setLoader] = useState(true);
  const authStatus = useSelector((state) => state.auth.status);
  useEffect(() => {
    // Check authentication status
    if (authentication && !authStatus) {
      // If authentication is required but the user is not authenticated, redirect to login
      navigate("/login");
    } else if (!authentication && authStatus) {
      // If authentication is not required but the user is authenticated, redirect to home
      navigate("/");
    }
    setLoader(false);
  }, [authStatus, navigate, authentication]);

  useEffect(() => {});

  return loader ? <h1>Loading...</h1> : <>{children}</>;
};

export default Protected;
