"use client";
import React, { useState, useEffect } from "react";
import { Input } from "../../../../components/ui/input";
import { Button } from "../../../../components/ui/button";
import { useRouter } from "next/navigation";

import toast from "react-hot-toast";

const Register = () => {
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [isFormValid, setIsFormValid] = useState(false);

  const router = useRouter();

  useEffect(() => {
    // check valid
    if (email && username && password && confirmPassword) {
      setIsFormValid(true);
    } else {
      setIsFormValid(false);
    }
  }, [email, username, password, confirmPassword]);

  const handleRegister = async () => {
    if (password !== confirmPassword) {
      // Show toast when passwords do not match
      toast.error("Passwords do not match");
      return;
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      // Show alert if the email format is not valid
      alert("Please enter a valid email address.");
      return;
    }

    // Prepare the data to be sent in the request
    const requestData = {
      email,
      username,
      password,
    };

    try {
      // Make a POST request to the API
      const response = await fetch("https://techtest.youapp.ai/api/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(requestData),
      });

      // Check if the request was successful (status code 2xx)
      if (response.ok) {
        toast.success("Registration successful");
        router.push("/login");
      } else {
        // Registration failed, show an error message
        const errorMessage = await response.text();
        toast.error(`Registration failed: ${errorMessage}`);
      }
    } catch (error) {
      // Handle any network or other errors
      console.error("Registration error:", error);
      toast.error("An error occurred during registration");
    }
  };
  const HaveAccount = () => {
    router.push("/login");
  };

  return (
    <>
      <div className="flex items-center pt-[81px] pl-[18px]">
        <svg
        onClick={HaveAccount}
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
        <p onClick={HaveAccount} className="text-white font-inter text-base font-bold cursor-pointer">Back</p>
      </div>
      <div className="ml-10 mt-20">
        <h1 className="text-white font-inter font-bold text-[24px]">
          Register
        </h1>
      </div>
      <form>
        <div className="flex items-center flex-col gap-y-4 p-6">
          <Input
            type="email"
            placeholder="Enter Email"
            className="border-none h-[51px] text-white"
            style={{ background: "rgba(255, 255, 255, 0.06)" }}
            value={email}
            autoComplete="email"
            onChange={(e) => setEmail(e.target.value)}
            id="email" // Add id attribute
          />
          <Input
            type="text"
            placeholder="Create Username"
            className="border-none h-[51px] text-white"
            style={{ background: "rgba(255, 255, 255, 0.06)" }}
            value={username}
            autoComplete="username"
            onChange={(e) => setUsername(e.target.value)}
            id="username" // Add id attribute
          />
          <Input
            type="password"
            placeholder="Create Password"
            className="border-none h-[51px] text-white"
            style={{ background: "rgba(255, 255, 255, 0.06)" }}
            value={password}
            autoComplete="new-password"
            onChange={(e) => setPassword(e.target.value)}
            id="password" // Add id attribute
          />
          <Input
            type="password"
            placeholder="Confirm Password"
            className="border-none h-[51px] text-white"
            style={{ background: "rgba(255, 255, 255, 0.06)" }}
            value={confirmPassword}
            autoComplete="new-password"
            onChange={(e) => setConfirmPassword(e.target.value)}
            id="confirmPassword" // Add id attribute
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
          onClick={isFormValid ? handleRegister : undefined}
          disabled={!isFormValid}
        >
          Register
        </Button>
      </div>
      <div className="flex gap-x-1 items-center justify-center pt-12">
        <p className="text-white ">Have an accout?</p>
        <p
          onClick={HaveAccount}
          className="cursor-pointer justify-center items-center  text-transparent font-inter font-medium bg-gradient-to-r from-[#94783E] to-[#D5BE88] bg-clip-text"
        >
          Login here
        </p>
      </div>
    </>
  );
};

export default Register;
