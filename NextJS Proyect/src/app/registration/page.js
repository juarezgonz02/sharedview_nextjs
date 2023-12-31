import RegisterForm from "@/app/registration/components/RegisterForm";
import React from "react";
import Navbar from "@/components/Navbar";
import RegisterIMG from "../../../public/Sign up-amico.png";
import Image from "next/image";

const Page = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <div className="flex flex-1 items-center justify-center h-full px-8">
        <div className="flex flex-row items-center justify-evenly w-full">
          <div className="flex flex-col gap-4">
            <div className="flex flex-col gap-2">
              <span className="text-white font-bold text-2xl phone:text-lg">
                Register
              </span>
              <span className="text-base phone:text-sm">
                Already have an account?{" "}
                <a
                  href=""
                  className="text-purple underline hover:text-fuchsia-600"
                >
                  Login now!
                </a>
              </span>
            </div>
            <RegisterForm />
          </div>
          <div className="flex flex-col phone:hidden tablet:hidden">
            <Image src={RegisterIMG} width={500} height={500} alt="logo" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
