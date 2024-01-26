"use client";
import React, { useState, useEffect } from "react";
import { Input } from "../../../../components/ui/input";
import { Button } from "../../../../components/ui/button";

import toast from "react-hot-toast";
import { useRouter } from "next/navigation";

const Login = () => {
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isFormValid, setIsFormValid] = useState(false);

  const router = useRouter();

  useEffect(() => {
    // check valid
    if ((username || email) && password) {
      setIsFormValid(true);
    } else {
      setIsFormValid(false);
    }
    
  }, [username, email, password]);
  const handleLogin = async () => {
    const requestData = {
      username: username || null,
      email: email || "",
      password,
    };

    try {
      const response = await fetch("https://techtest.youapp.ai/api/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(requestData),
      });
      if (response.ok) {
        const responseData = await response.json();

        toast.success("Berhasil Login");
        console.log(responseData.message);
        removeAccessToken();

        const accessToken = responseData.access_token;
        localStorage.setItem("access_token", accessToken);
        console.log("Access Token:", accessToken);
        router.push("/profile");
      } else {
        const errorMessage = await response.text();
        toast.error(`Login failed: ${errorMessage}`);
      }
    } catch (error) {
      console.error("Login error:", error);
      toast.error("An error occurred during login");
    }
  };
  const toLogin = () => {
    router.push("/register");
  };
  const removeAccessToken = () => {
    localStorage.removeItem("access_token");
    console.log("Access Token removed from localStorage");
  };

  

  return (
    <>
      <div className="flex items-center marker pt-[81px] px-[18px]">
        <svg
          onClick={toLogin}
          xmlns="http://www.w3.org/2000/svg"
          width="10"
          height="16"
          viewBox="0 0 10 16"
          fill="none"
          className="text-white mr-2 cursor-pointer"
        >
          <path
            d="M9 1L2 8L9 15"
            stroke="white"
            strokeWidth="2"
            strokeLinecap="round"
          />
        </svg>
        <p
          onClick={toLogin}
          className="text-white font-inter text-base font-bold cursor-pointer"
        >
          Back
        </p>
      </div>
      <div className="ml-10 mt-20">
        <h1 className="text-white font-inter font-bold text-[24px]">Login</h1>
      </div>
      <form>
        <div className="flex items-center flex-col gap-y-4 p-6">
          <Input
            type="text"
            placeholder="Enter Username/Email"
            className="border-none h-[51px] text-white"
            style={{ background: "rgba(255, 255, 255, 0.06)" }}
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <Input
            type="password"
            placeholder="Enter Password"
            className="border-none h-[51px] text-white "
            style={{ background: "rgba(255, 255, 255, 0.06)" }}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
      </form>
      <div className="flex items-center justify-center px-6">
        <Button
          className={`flex h-12 w-full justify-center items-center flex-shrink-0 ${
            isFormValid
              ? "opacity-100 bg-gradient-to-r from-[#62CDCB] to-[#4599DB]"
              : "opacity-30 bg-gradient-to-r from-[#62CDCB] to-[#4599DB]"
          }`}
          onClick={isFormValid ? handleLogin : undefined}
          disabled={!isFormValid}
        >
          Login
        </Button>
      </div>
      <div className="flex gap-x-1 items-center justify-center pt-12">
        <p className="text-white ">No accout?</p>
        <p
          onClick={toLogin}
          className="cursor-pointer justify-center items-center  text-transparent font-inter font-medium bg-gradient-to-r from-[#94783E] to-[#D5BE88] bg-clip-text"
        >
          Register here
        </p>
      </div>
    </>
  );
};

export default Login;
