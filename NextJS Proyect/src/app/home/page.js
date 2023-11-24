"use client";
import HomeView from "@/app/home/components/HomeView";
import React from "react";
import Navbar from "@/components/Navbar";

const Page = () => {

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <div className="flex flex-1 justify-between ">
        <HomeView />
      </div>
    </div>
  );
};

export default Page;
