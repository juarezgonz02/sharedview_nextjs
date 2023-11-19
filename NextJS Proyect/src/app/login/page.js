import LoginForm from "@/components/LoginForm";
import Image from "next/image";
import React from "react";
import LoginIMG from "../../../public/Login-amico.png";
import Navbar from "@/components/Navbar";

const Page = () => {
    return (
        <div className="flex flex-col min-h-screen">
            <Navbar />
            <div className='flex flex-1 items-center justify-center h-full px-8'>
                <div className="flex flex-row items-center justify-evenly w-full">
                    <div className="flex flex-col gap-4">
                        <div className="flex flex-col gap-2">
                            <span className="text-white font-bold text-2xl phone:text-lg">
                                Login
                            </span>
                            <span className="text-base phone:text-sm">
                                Doesn't have an account?{" "}
                                <a
                                    href=""
                                    className="text-purple underline hover:text-purple-500"
                                >
                                    Register now!
                                </a>
                            </span>
                        </div>
                        <LoginForm />
                    </div>
                    <div className="flex flex-col phone:hidden">
                        <Image src={LoginIMG} width={500} height={500} alt="logo" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Page;
