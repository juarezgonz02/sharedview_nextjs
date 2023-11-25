"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import LogoSharedView from "../../public/ICONO.png";
import { LoginOutlined } from "@ant-design/icons";
import Link from "next/link";

const Clock = () => {
    const [date, setDate] = useState("");

    const getCurrentDate = () => {
        const currentDate = new Date();
        const day = currentDate.toDateString();
        const hour =
            currentDate.getHours().toString().padStart(2, "0") +
            ":" +
            currentDate.getMinutes().toString().padStart(2, "0");
        return `${hour} - ${day}`;
    };

    useEffect(() => {
        const interval = setInterval(() => {
            setDate(getCurrentDate());
        }, 1000);
        return () => clearInterval(interval);
    }, []);

    return <span className="text-gray-400 text-sm tablet:text-xs">{date}</span>;
};



const Navbar = ({ username }) => {
    return (
        <div className="flex flex-row items-center justify-between py-4 top-0 w-full px-8">
            <div className="flex items-center gap-4">
                <Image src={LogoSharedView} width={60} height={60} alt="logo" />
                <div className="flex flex-row phone:hidden">
                    <span className="text-purple font-bold text-lg tablet:text-base">
                        Shared
                    </span>
                    <span className="font-bold text-lg tablet:text-base">View</span>
                </div>
            </div>
            <div className="flex flex-row items-center gap-4">
                {username ? (
                    <>
                        <div className="phone:hidden">
                            <Clock />
                        </div>
                        <span className="text-white font-bold tablet:text-sm">
                            {username}
                        </span>
                        <Link href="/logout">
                            <LoginOutlined
                                style={{ fontSize: "20px", marginTop: "5px" }}
                            />
                        </Link>
                    </>
                ) : (
                    <div className="phone:flex">
                        <Clock />
                    </div>
                )}
            </div>
        </div>
    );
};

export default Navbar;
