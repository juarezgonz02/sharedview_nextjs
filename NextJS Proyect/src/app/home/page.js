"use client";
import HomeView from "@/app/home/components/HomeView";
import React from "react";
import Navbar from "@/components/Navbar";
import { useState } from "react";

const roomsList = [
  {
    id: 1,
    expDate: "12/12/2021",
    code: "xac-1a3-vds",
    isPrivate: true,
  },
  {
    id: 2,
    expDate: "12/12/2021",
    code: "xac-1a3-vds",
    isPrivate: true,
  },
];

const Page = () => {
  const [rooms, setRooms] = useState(roomsList);

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <div className="flex flex-1 justify-between ">
        <HomeView rooms={rooms} />
      </div>
    </div>
  );
};

export default Page;
