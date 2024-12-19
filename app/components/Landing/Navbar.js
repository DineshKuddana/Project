'use client'
import Link from "next/link";
import React, { useState } from "react";

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <nav className="flex justify-between items-center p-6 ">
            <div className="font-bold text-4xl">Prashna AI</div>
            <div className="hidden md:flex">
                <ul className="flex gap-6 items-center">
                    <li className="cursor-pointer hover:underline">Home</li>
                    <li className="cursor-pointer hover:underline">About</li>
                    <li className="cursor-pointer hover:underline">Contact</li>
                    <li>
                        <Link href="/dashboard">
                            <button className=" px-4 py-2 rounded-md hover:bg-gray-300 bg-gray-200 transition text-black">
                                Login
                            </button>
                        </Link>
                    </li>
                </ul>
            </div>
            <div className="md:hidden">
                <button onClick={toggleMenu} className="text-2xl">
                    ☰
                </button>
            </div>
            {isMenuOpen && (
                <div
                    className="absolute top-16 left-0 w-full bg-blue-500 text-white flex flex-col items-start p-4 md:hidden"
                >
                    <ul className="flex flex-col gap-4 w-full">
                        <li className="cursor-pointer hover:underline">Home</li>
                        <li className="cursor-pointer hover:underline">About</li>
                        <li className="cursor-pointer hover:underline">Contact</li>
                        <li>
                            <Link href="/dashboard">
                                <button className="  px-4 py-2 rounded-md  hover:bg-gray-300 bg-gray-200  text-black w-full">
                                    Login
                                </button>
                            </Link>
                        </li>
                    </ul>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
