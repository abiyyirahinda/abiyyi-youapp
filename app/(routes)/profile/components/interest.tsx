"use client";
import { Input } from "@/components/ui/input";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";
interface UserData {
  interests: string[];
}


const Interest = () => {
  const [isFormVisible, setIsFormVisible] = useState(false);
  const [userData, setUserData] = useState<UserData | null>(null);
  const [accessToken, setAccessToken] = useState<string | null>(null);
  const [interest, setInterest] = useState<string>("");
  const router = useRouter();

  const handlePencilClick = () => {
    router.push("/interest");
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
    <div className={`${isFormVisible}  relative p-2 `}>
      <div className="bg-[#0e191f] rounded-[14px]">
        <div className="flex items-center justify-between px-6 py-3">
          <div className="text-white">
            <p className="font-semibold text-lg">Interest</p>
          </div>
          <div className="cursor-pointer text-white">
            <svg
              onClick={handlePencilClick}
              xmlns="http://www.w3.org/2000/svg"
              width="17"
              height="17"
              viewBox="0 0 17 17"
              fill="none"
            >
              <path
                d="M9.39254 2.55001L3.57712 8.70542C3.35754 8.93917 3.14504 9.39959 3.10254 9.71834L2.84045 12.0133C2.74837 12.8421 3.34337 13.4088 4.16504 13.2671L6.44587 12.8775C6.76462 12.8208 7.21087 12.5871 7.43045 12.3463L13.2459 6.19084C14.2517 5.12834 14.705 3.91709 13.1396 2.43667C11.5813 0.970423 10.3984 1.48751 9.39254 2.55001Z"
                stroke="white"
                strokeWidth="1.0625"
                strokeMiterlimit="10"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M8.422 3.57709C8.72658 5.53209 10.3132 7.02667 12.2824 7.225"
                stroke="white"
                strokeWidth="1.0625"
                strokeMiterlimit="10"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M2.125 15.5833H14.875"
                stroke="white"
                strokeWidth="1.0625"
                strokeMiterlimit="10"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
        </div>
        <div className="px-6 pb-3">
          {isFormVisible ? null : (
            <div className="flex flex-col text-white">
            {(userData?.interests === null || userData?.interests.length === 0) && (
              <div className="text-white text-opacity-50 py-4">
                Add in your about to help others know you better
              </div>
            )}
          
            {userData?.interests && (
              <div className="flex gap-x-2">
                {userData.interests.map((interest, index) => (
                  <div
                    key={index}
                    className="inline-flex items-start gap-[10px] px-[16px] py-[8px] rounded-[100px] relative bg-[#FFFFFF0F]"
                  >
                    <div
                      className="[font-family:'Inter-SemiBold',Helvetica] w-fit mt-[-1.00px] tracking-[0] text-[14px] font-semibold text-center leading-[normal] relative text-white"
                    >
                      {interest}
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
          )}

        </div>
      </div>
    </div>
  );
};

export default Interest;
