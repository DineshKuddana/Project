import Link from "next/link";
import React from "react";

const Navbar = () => {
    return (
        <nav className="flex justify-between items-center p-6 bg-green-400">
            <div className="font-bold text-2xl">Visual Craft</div>
            <div>
                <ul className="flex gap-6 items-center">
                    <li>Home</li>
                    <li>About</li>
                    <li>Contact</li>
                    <li><Link href="/dashboard"><button className="bg-white p-2 rounded-md hover:bg-gray-200">Login</button></Link></li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;
