"use client";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import { Input } from "@/components/ui/input";
import toast from "react-hot-toast";
import { Router } from "lucide-react";

interface UserData {
  email: string;
  username: string;
  name: string;
  birthday: string;
  horoscope: string;
  zodiac: string;
  height?: number;
  weight?: number;
  gender: string;
  interests: string[];
}

const InterestComponents = () => {
  const router = useRouter();
  const [inputValue, setInputValue] = useState("");
  const [interests, setInterests] = useState<string[]>([]);
  const [accessToken, setAccessToken] = useState<string | null>(null);
  const [userData, setUserData] = useState<UserData | null>(null);

  const handleInputChange = (e: any) => {
    setInputValue(e.target.value);
  };

  const handleInputKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" && inputValue.trim() !== "") {
      setInterests((prevInterests) => [...prevInterests, inputValue.trim()]);
      setInputValue("");
    }
  };
  const handleSubmit = async () => {
    try {
      if (!accessToken) {
        toast.error("No access token");
        return;
      }

      const response = await fetch(
        "https://techtest.youapp.ai/api/updateProfile",
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
            "x-access-token": accessToken,
          },
          body: JSON.stringify({
            interests: interests,
          }),
        }
      );
      if (response.ok) {
        toast.success("Profile updated successfully");
        router.push("/profile");
      } else {
        const errorMessage = await response.text();
        toast.error(`Failed to update profile: ${errorMessage}`);
      }
    } catch (error) {
      console.error("Update profile error:", error);
      toast.error("An error occurred while updating the profile");
    }
  };
  const toLogin = () => {
    router.push("/register");
  };
  useEffect(() => {
    const storedAccessToken = localStorage.getItem("access_token");

    if (!storedAccessToken) {
      toast.error("No access token");
      return;
    }

    // Set the access token to the state
    setAccessToken(storedAccessToken);
  }, []);
  useEffect(() => {
    const fetchProfileData = async () => {
      try {
        if (!accessToken) {
          return;
        }

        const response = await fetch(
          "https://techtest.youapp.ai/api/getProfile",
          {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
              "x-access-token": accessToken,
            },
          }
        );

        if (response.ok) {
          const data = await response.json();
          setUserData(data.data);
        } else {
          const errorMessage = await response.text();
          toast.error(`Failed to fetch profile: ${errorMessage}`);
        }
      } catch (error) {
        console.error("Fetch profile error:", error);
        toast.error("An error occurred while fetching the profile");
      }
    };
    fetchProfileData();
  }, [accessToken]);

  return (
    <>
      <div className="flex items-center  justify-between  pt-[81px] px-[18px]">
        <div className="flex items-center marker">
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
        <div className=" flex">
          <p
            onClick={handleSubmit}
            className=" cursor-pointer bg-gradient-to-r from-[#ABFFFD] via-[#4599DB] to-[#AADAFF] bg-clip-text text-transparen[background:linear-gradient(180deg,rgb(171.06,255,253.43)_0%,rgb(69,153,219)_100%,rgb(170,217.6,255)_100%)] [-webkit-background-clip:text]  [-webkit-text-fill-color:transparent] [text-fill-color:transparent] [font-family:'Inter-SemiBold',Helvetica] font-semibold text-transparent text-[14px] text-right tracking-[0] leading-[normal]"
          >
            Save
          </p>
        </div>
      </div>
      <div className="flex flex-col p-10">
        <div className="tex-xl font-bold text-transparent bg-gradient-to-r from-[#94783E] via-[#F3EDA6] to-[#D5BE88] bg-clip-text">
          Tell everyone about yourself
        </div>

        <div className="text-white font-bold ">
          <h1>What interest you?</h1>
        </div>
        <div className="pt-10 w-full ">
          <input
            type="text"
            placeholder=""
            className="rounded-sm h-16 w-full bg-[#D9D9D90F] outline-none"
            value={inputValue}
            onChange={handleInputChange}
            onKeyDown={handleInputKeyDown}
          />

          <div>
            {interests.map((interest, index) => (
              <div
                key={index}
                className="inline-flex items-start gap-[7px] pl-[8px] pr-[4px] py-[8px] relative bg-[#ffffff1a] rounded-[4px]"
              >
                <div className="relative w-fit mt-[-1.00px] [font-family:'Inter-SemiBold',Helvetica] font-semibold text-white text-[12px] tracking-[0] leading-[normal]">
                  {interest}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default InterestComponents;
