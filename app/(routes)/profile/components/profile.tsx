"use client";
import { useRouter } from "next/navigation";
import React, { useState, useEffect } from "react";
import toast from "react-hot-toast";
import { format, differenceInYears, isValid, parse } from "date-fns";

import { DayPicker } from "react-day-picker";

import "react-day-picker/dist/style.css";

import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import Interest from "./interest";

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

const Profile = () => {
  const css = `
  .rdp-dropdown {
    background-color: #0E191F
  }
  .rdp {
    --rdp-accent-color: #2d5267;
  }
  .rdp-button_reset:focus-visible {
    /* Make sure to reset outline only when :focus-visible is supported */
    outline: none;
  }
  
  .rdp-button {
    border: 2px solid transparent;
  }
  
  .rdp-button[disabled]:not(.rdp-day_selected) {
    opacity: 0.25;
  }
  
  .rdp-button:not([disabled]) {
    cursor: pointer;
  }
  
  .rdp-button:focus-visible:not([disabled]) {
    color: inherit;
    background-color: #2d5267;
    border: var(--rdp-outline);
  }
  
  .rdp-button:hover:not([disabled]):not(.rdp-day_selected) {
    background-color: #2d5267;
  }
  `;
  const router = useRouter();

  const [initialName, setInitialName] = useState("");
  const [initialGender, setInitialGender] = useState("");
  const [initialDate, setInitialDate] = useState<Date | undefined>();
  const [initialHeight, setInitialHeight] = useState("");
  const [initialWeight, setInitialWeight] = useState("");

  const [userData, setUserData] = useState<UserData | null>(null);
  const [accessToken, setAccessToken] = useState<string | null>(null);
  const [selectedImage, setSelectedImage] = useState<File | null>(null);
  const [previewImageUrl, setPreviewImageUrl] = useState<string | null>(null);
  const [isFormVisible, setIsFormVisible] = useState(false);

  const [name, setName] = useState("");
  const [gender, setGender] = useState("");

  const [date, setDate] = React.useState<Date>();
  const [height, setHeight] = useState("");
  const [weight, setWeight] = useState("");
  const [weightWithUnit, setWeightWithUnit] = useState("");
  const [heightWithUnit, setHeightWithUnit] = useState("");

  const [horoscope, setHoroscope] = useState("");

  const [zodiac, setZodiac] = useState("");
  const [isHoroscopeFetched, setIsHoroscopeFetched] = useState(false);
  const [isZodiacFetched, setIsZodiacFetched] = useState(false);

  const [isGenderFetched, setIsGenderFetched] = useState(false);

  const [selectedGender, setSelectedGender] = useState<string>("");
  const [heightInput, setHeightInput] = useState<string>("");
  const [weightInput, setWeightInput] = useState<string>("");
  const [uploadedImageUrl, setUploadedImageUrl] = useState<string | null>(null);

  const saveImage = async (username: string, image: File) => {
    try {
      const imageUrl = URL.createObjectURL(image);
      setUploadedImageUrl(imageUrl);

      // Save the image URL to localStorage
      const imageKey = `profile_image_${username}`;
      localStorage.setItem(imageKey, imageUrl);

      // You may want to send the image to a server and save it there as well
      // Example: const response = await fetch("YOUR_SERVER_ENDPOINT", { method: "POST", body: image });

      toast.success("Image saved successfully");
    } catch (error) {
      console.error("Save image error:", error);
      toast.error("Failed to save image");
    }
  };

  const fetchImage = (username: string) => {
    // Fetch the image URL from localStorage
    const savedImage = localStorage.getItem(`profile_image_${username}`);
    if (savedImage) {
      setUploadedImageUrl(savedImage);
    }
  };
  useEffect(() => {
    // Fetch the image when the profile component mounts
    if (userData?.username) {
      fetchImage(userData.username);
    }
  }, [userData?.username]);

  useEffect(() => {
    const imageKey = `profile_image_${userData?.username}`;
    const savedImage = localStorage.getItem(imageKey);
    if (savedImage) {
      setUploadedImageUrl(savedImage);
    }
  }, [userData?.username]);

  useEffect(() => {
    // Set initial data when userData changes
    if (userData) {
      setInitialName(userData.name || "");
      setInitialGender(userData.gender || "");

      if (userData.birthday) {
        setInitialDate(
          isValid(parse(userData.birthday, "ddMMyyyy", new Date()))
            ? parse(userData.birthday, "ddMMyyyy", new Date())
            : undefined
        );
      }
    }
  }, [userData]);
  const resetForm = () => {
    setName(initialName);
    setGender(initialGender);
    setDate(initialDate);
    setHeight(initialHeight);
    setWeight(initialWeight);
  };

  useEffect(() => {
    const storedGender = localStorage.getItem(`gender_${userData?.username}`);
    const storedHeight = localStorage.getItem(`height_${userData?.username}`);
    const storedWeight = localStorage.getItem(`weight_${userData?.username}`);

    if (storedGender) {
      setSelectedGender(storedGender);
      setIsGenderFetched(true);
    }

    if (storedHeight) {
      setHeightInput(storedHeight);
      setHeightWithUnit(`${storedHeight} cm`);
    }

    if (storedWeight) {
      setWeightInput(storedWeight);
      setWeightWithUnit(`${storedWeight} kg`);
    }
  }, [userData?.username]);

  useEffect(() => {
    const storedHoroscope = localStorage.getItem(
      `horoscope_${userData?.username}`
    );
    const storedZodiac = localStorage.getItem(`zodiac_${userData?.username}`);

    if (storedHoroscope) {
      setHoroscope(storedHoroscope);
      setIsHoroscopeFetched(true);
    }

    if (storedZodiac) {
      setZodiac(storedZodiac);
      setIsZodiacFetched(true);
    }
  }, [userData?.username]);

  const handleNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = event.target.value;
    setName(inputValue);
  };
  const handleGenderChange = (value: string) => {
    setSelectedGender(value);
    setIsGenderFetched(true);
    localStorage.setItem(`gender_${userData?.username}`, value);
  };
  const handleHeightChange = (event: any) => {
    let inputValue = event.target.value;
    inputValue = inputValue.replace(/[^0-9]/g, "");
    setHeightInput(inputValue);
    setHeightWithUnit(`${inputValue} cm`);
    localStorage.setItem(`height_${userData?.username}`, inputValue);
  };
  const handleWeightChange = (event: any) => {
    let inputValue = event.target.value;
    inputValue = inputValue.replace(/[^0-9]/g, "");
    setWeightInput(inputValue);
    setWeightWithUnit(`${inputValue} kg`);
    localStorage.setItem(`weight_${userData?.username}`, inputValue);
  };
  const handlePencilClick = () => {
    setIsFormVisible(!isFormVisible);

    // Reset form fields when hiding the form
    if (!isFormVisible) {
      resetForm();
    }
  };
  const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files && event.target.files[0];

    if (file) {
      setPreviewImageUrl(URL.createObjectURL(file));
      setSelectedImage(file);
      const imageKey = `profile_image_${userData?.username}`;
      localStorage.setItem(imageKey, URL.createObjectURL(file));
    }
  };
  const handleSelectAnotherFile = () => {
    setSelectedImage(null);
    setPreviewImageUrl(null);

    const fileInput = document.getElementById("file_input") as HTMLInputElement;
    if (fileInput) {
      fileInput.value = "";
    }
  };
  const formattedDate = date ? format(date, "ddMMyyyy") : "DDMM YYY";
  useEffect(() => {
    // Check if date is not null before calling fetchHoroscope
    if (date) {
      fetchHoroscope();
      fetchZodiac();
    }
  }, [date, formattedDate]);

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
          const imageKey = `profile_image_${data.data?.username}`;
          const savedImage = localStorage.getItem(imageKey);
          if (savedImage) {
            setUploadedImageUrl(savedImage);
          }
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

  const fetchHoroscope = async () => {
    try {
      const response = await fetch(
        "https://grave-wakeful-hovercraft.glitch.me/api/horoscope",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            birthdate: formattedDate,
          }),
        }
      );

      if (response.ok) {
        const responseData = await response.json();
        setHoroscope(responseData.zodiac);
        setIsHoroscopeFetched(true);
        localStorage.setItem(
          `horoscope_${userData?.username}`,
          responseData.zodiac
        );
      } else {
        toast.error("gagal");
      }
    } catch (error) {
      toast.error("error");
    }
  };
  const fetchZodiac = async () => {
    try {
      const response = await fetch(
        "https://grave-wakeful-hovercraft.glitch.me/api/zodiac",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            birthdate: formattedDate,
          }),
        }
      );

      if (response.ok) {
        const responseData = await response.json();
        // toast.success(responseData.zodiac);
        setZodiac(responseData.zodiac);
        setIsZodiacFetched(true);
        localStorage.setItem(
          `zodiac_${userData?.username}`,
          responseData.zodiac
        );
      } else {
        toast.error("gagal");
      }
    } catch (error) {
      toast.error("error");
    }
  };
  const handleBack = () => {
    router.push("/login");
  };
  const handleSaveAndUpdate = async () => {
    try {
      if (!accessToken) {
        toast.error("No access token");
        return;
      }
      await fetchHoroscope();

      const response = await fetch(
        "https://techtest.youapp.ai/api/updateProfile",
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
            "x-access-token": accessToken,
          },
          body: JSON.stringify({
            name: name, // Replace with the actual data you want to send
            birthday: formattedDate, // Replace with the actual data you want to send
            height: parseInt(heightInput), // Assuming height is a string, convert it to an integer
            weight: parseInt(weightInput), // Assuming weight is a string, convert it to an integer
          }),
        }
      );
      if (selectedImage && userData?.username) {
        saveImage(userData.username, selectedImage);
      }
      if (response.ok) {
        toast.success("Profile updated successfully");
        setIsFormVisible(false);
        window.location.reload();
      } else {
        const errorMessage = await response.text();
        toast.error(`Failed to update profile: ${errorMessage}`);
      }
    } catch (error) {
      console.error("Update profile error:", error);
      toast.error("An error occurred while updating the profile");
    }
  };
  useEffect(() => {
    // Check if date is not null before calling fetchHoroscope
    if (date) {
      const fetchHoroscopeAndZodiac = async () => {
        await Promise.all([fetchHoroscope(), fetchZodiac()]);
        setIsHoroscopeFetched(true);
        setIsZodiacFetched(true);
      };

      fetchHoroscopeAndZodiac();
    }
  }, [date, formattedDate]);

  return (
    <>
      <style>{css}</style>
      <div className="grid grid-cols-3 grid-rows-1 pb-4 pt-[81px] px-[18px]">
        <AlertDialog>
          <AlertDialogTrigger asChild>
            <div className="flex items-center">
              <svg
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
              <p className="text-white font-inter text-base font-bold cursor-pointer">
                Back
              </p>
            </div>
          </AlertDialogTrigger>
          <AlertDialogContent>
            <AlertDialogHeader>
              <AlertDialogTitle>
                Are you sure you want to logout?
              </AlertDialogTitle>
            </AlertDialogHeader>
            <AlertDialogFooter>
              <AlertDialogCancel>Cancel</AlertDialogCancel>
              <AlertDialogAction onClick={handleBack}>
                Continue
              </AlertDialogAction>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialog>

        <div className="flex items-center justify-center ">
          <h1 className="text-white font-inter font-semibold text-xl">
            @{userData?.username}
          </h1>
        </div>
      </div>
      <div className="relative p-2">
        <div className="bg-[#162329] rounded-[16px] h-64 w-full relative">
          {uploadedImageUrl && (
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
              <img
                className="w-full h-full object-cover rounded-[16px]"
                src={uploadedImageUrl}
              />
            </div>
          )}
          <div className="text-white">
            <div className=" font-bold px-4 absolute bottom-2">
              @{userData?.name},
              {userData?.birthday &&
              isValid(parse(userData.birthday, "ddMMyyyy", new Date()))
                ? ` ${differenceInYears(
                    new Date(),
                    parse(userData.birthday, "ddMMyyyy", new Date())
                  )}`
                : ""}
              {isGenderFetched && (
                <div className="font-medium row-start-2 pb-2">
                  {selectedGender}
                </div>
              )}
              {isHoroscopeFetched && (
                <div className="flex flex-row gap-x-3 ">
                  <div className="bg-white bg-opacity-[0.06] backdrop-blur-sm p-4 rounded-full">
                    {horoscope}
                  </div>
                  <div className="bg-white bg-opacity-[0.06] backdrop-blur-sm p-4 rounded-full">
                    {zodiac}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      <div className={`${isFormVisible}  relative p-2 `}>
        <div className="   bg-[#0e191f] rounded-[14px]">
          <div className="flex items-center justify-between px-6 py-3">
            <div className="text-white">
              <p className="font-semibold text-lg">About</p>
            </div>

            <div className="cursor-pointer text-white ">
              {isFormVisible ? (
                <p
                  onClick={handleSaveAndUpdate}
                  style={{
                    background:
                      "var(--Golden, linear-gradient(74deg, #94783E -6.8%, #F3EDA6 16.76%, #F8FAE5 30.5%, #FFE2BE 49.6%, #D5BE88 78.56%, #F8FAE5 89.01%, #D5BE88 100.43%)",
                    backgroundClip: "text",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    cursor: "pointer",
                  }}
                  className="text-sm"
                >
                  Save & Update
                </p>
              ) : (
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
              )}
            </div>
          </div>
          {isFormVisible && (
            <div className="flex items-center">
              <label
                className="block cursor-pointer custom-upload-btn p-4 text-center text-sm text-gray-900"
                htmlFor="file_input"
              >
                {previewImageUrl ? (
                  <div className="w-[57px] h-[57px] rounded-lg overflow-hidden flex-shrink-0 relative">
                    <img
                      className="w-full h-full object-cover"
                      src={previewImageUrl}
                      alt="Preview"
                      style={{ position: "relative" }}
                    />
                  </div>
                ) : (
                  <div className="flex items-center gap-x-4">
                    <span className="block text-sm font-medium ">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="57"
                        height="57"
                        viewBox="0 0 57 57"
                        fill="none"
                      >
                        <rect
                          width="57"
                          height="57"
                          rx="17"
                          fill="white"
                          fillOpacity="0.08"
                        />
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M30 20C30 19.4477 29.5523 19 29 19C28.4477 19 28 19.4477 28 20V28H20C19.4477 28 19 28.4477 19 29C19 29.5523 19.4477 30 20 30H28V38C28 38.5523 28.4477 39 29 39C29.5523 39 30 38.5523 30 38V30H38C38.5523 30 39 29.5523 39 29C39 28.4477 38.5523 28 38 28H30V20Z"
                          fill="url(#paint0_linear)"
                        />
                        <defs>
                          <linearGradient
                            id="paint0_linear"
                            x1="15.5"
                            y1="35.4706"
                            x2="44.4962"
                            y2="27.1976"
                            gradientUnits="userSpaceOnUse"
                          >
                            <stop offset="0.0237305" stopColor="#94783E" />
                            <stop offset="0.216904" stopColor="#F3EDA6" />
                            <stop offset="0.329505" stopColor="#F8FAE5" />
                            <stop offset="0.486109" stopColor="#FFE2BE" />
                            <stop offset="0.723574" stopColor="#D5BE88" />
                            <stop offset="0.809185" stopColor="#F8FAE5" />
                            <stop offset="0.902849" stopColor="#D5BE88" />
                          </linearGradient>
                        </defs>
                      </svg>
                    </span>
                    <input
                      className="hidden"
                      id="file_input"
                      type="file"
                      accept="image/*"
                      onChange={handleImageChange}
                    />
                    <p className="text-white">Upload Image</p>
                  </div>
                )}
              </label>
              {selectedImage && (
                <p
                  onClick={handleSelectAnotherFile}
                  className="text-white cursor-pointer"
                >
                  Upload Image
                </p>
              )}
            </div>
          )}
          {isFormVisible && (
            <form className="text-white text-sm mt-2 grid p-4 gap-y-4">
              <label className="flex flex-  row">
                <p
                  className="flex items-center opacity-30 w-[75%]"
                  style={{ whiteSpace: "nowrap" }}
                >
                  Display Name:
                </p>
                <Input
                  type="text"
                  placeholder="Enter Name"
                  className="h-[36px] text-white border border-white border-opacity-20 "
                  style={{
                    background: "rgba(255, 255, 255, 0.06)",
                    textAlign: "right",
                  }}
                  value={name}
                  onChange={handleNameChange}
                />
              </label>
              <label className="flex flex-row">
                <p
                  className="flex items-center opacity-30 w-[78%]"
                  style={{ whiteSpace: "nowrap" }}
                >
                  Gender:
                </p>
                <Select
                  value={selectedGender}
                  onValueChange={handleGenderChange}
                >
                  <SelectTrigger
                    className=" flex justify-end  border border-white border-opacity-20"
                    style={{
                      background: "rgba(255, 255, 255, 0.06)",
                    }}
                  >
                    <SelectValue placeholder="Select Gender" />
                  </SelectTrigger>
                  <SelectContent className="bg-[#0e191f]">
                    <SelectGroup className="flex flex-col">
                      <SelectItem
                        className="text-white justify-end"
                        value="Male"
                      >
                        Male
                      </SelectItem>
                      <SelectItem
                        className="text-white justify-end"
                        value="Female"
                      >
                        Female
                      </SelectItem>
                    </SelectGroup>
                  </SelectContent>
                </Select>
              </label>
              <label className="flex flex-row">
                <p
                  className="flex items-center opacity-30 w-[79.5%]"
                  style={{ whiteSpace: "nowrap" }}
                >
                  Birthday:
                </p>
                <Popover>
                  <PopoverTrigger asChild>
                    <Button
                      style={{
                        background: "rgba(255, 255, 255, 0.06)",
                      }}
                      variant={"outline"}
                      className={cn(
                        "w-full justify-end text-left font-normal text-white border border-white border-opacity-20",
                        !date && "text-white"
                      )}
                    >
                      {date ? (
                        format(date, "dd MM yyy")
                      ) : (
                        <span>DD MM YYY</span>
                      )}
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent
                    className="w-full p-0 bg-[#0E191F]"
                    align="start"
                  >
                    <DayPicker
                      captionLayout="dropdown-buttons"
                      fromYear={1800}
                      toYear={2024}
                      mode="single"
                      selected={date}
                      onSelect={setDate}
                      className="text-white bg-[#0E191F]"
                      classNames={{
                        caption_label: "#0E191F p-6 flex items-center",
                      }}
                    />
                  </PopoverContent>
                </Popover>
              </label>
              <label className="flex flex-row">
                <p
                  className="flex items-center opacity-30 w-3/4"
                  style={{ whiteSpace: "nowrap" }}
                >
                  Horoscope:
                </p>
                <Input
                  type="text"
                  placeholder="Horoscope"
                  className=" h-[36px] text-white border border-white border-opacity-50 "
                  style={{
                    background: "rgba(255, 255, 255, 0.06)",
                    textAlign: "right",
                  }}
                  autoComplete="off"
                  id="horoscope"
                  disabled
                  value={horoscope || ""}
                />
              </label>
              <label className="flex flex-row">
                <p
                  className="flex items-center opacity-30 w-3/4"
                  style={{ whiteSpace: "nowrap" }}
                >
                  Zodiac:
                </p>
                <Input
                  type="text"
                  placeholder="Zodiac"
                  className="h-[36px] text-white border border-white border-opacity-50 "
                  style={{
                    background: "rgba(255, 255, 255, 0.06)",
                    textAlign: "right",
                  }}
                  autoComplete="off"
                  id="zodiac"
                  disabled
                  value={zodiac || ""}
                />
              </label>

              <label className="flex flex-row">
                <p
                  className="flex items-center opacity-30 w-3/4"
                  style={{ whiteSpace: "nowrap" }}
                >
                  Height:
                </p>
                <Input
                  placeholder="Add Height"
                  className="h-[36px] text-white border border-white border-opacity-20 "
                  style={{
                    background: "rgba(255, 255, 255, 0.06)",
                    textAlign: "right",
                  }}
                  value={heightWithUnit}
                  onChange={handleHeightChange}
                />
              </label>

              <label className="flex flex-row">
                <p
                  className="flex items-center opacity-30 w-3/4"
                  style={{ whiteSpace: "nowrap" }}
                >
                  Weight:
                </p>
                <Input
                  placeholder="Add Weight"
                  className="h-[36px] text-white border border-white border-opacity-20 "
                  style={{
                    background: "rgba(255, 255, 255, 0.06)",
                    textAlign: "right",
                  }}
                  value={weightWithUnit}
                  onChange={handleWeightChange}
                />
              </label>
            </form>
          )}

          <div className=" px-6 pb-3 ">
            {isFormVisible ? null : (
              <div className="flex flex-col text-white gap-x-2">
                {(!userData || !userData.name) && (
                  <div className="text-white text-opacity-50 py-4">
                    Add in your about to help others know you better
                  </div>
                )}
                {isHoroscopeFetched && (
                  <div className="flex flex-col">
                    <p className="">
                      Birthday:{" "}
                      {userData?.birthday &&
                      isValid(parse(userData.birthday, "ddMMyyyy", new Date()))
                        ? `${format(
                            parse(userData.birthday, "ddMMyyyy", new Date()),
                            "dd / MM / yyyy"
                          )} (Age ${differenceInYears(
                            new Date(),
                            parse(userData.birthday, "ddMMyyyy", new Date())
                          )})`
                        : ""}
                    </p>

                    <p>Horoscope: {horoscope}</p>
                  </div>
                )}
                {isZodiacFetched && (
                  <div className="flex flex-col">
                    <p>Zodiac: {zodiac}</p>
                    <p>Height: {userData?.height} cm</p>
                    <p>Weight: {userData?.weight} kg</p>
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
      <Interest />
    </>
  );
};

export default Profile;
