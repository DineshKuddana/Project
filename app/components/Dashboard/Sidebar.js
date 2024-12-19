'use client'
import React from "react";
import Link from "next/link";
import Image from "next/image";

import { Montserrat } from "next/font/google";
import { ImageIcon, LayoutDashboard, MessageSquare, VideoIcon , Music , Code , Settings} from "lucide-react";
import { useUser, UserButton } from "@clerk/nextjs";

const montserrat = Montserrat({ weight: "600", subsets: ["latin"] });

const routes = [
  {
    label: "Dashboard",
    icon: LayoutDashboard,
    href: "/dashboard",
    color: "text-sky-400",
  },
  {
    label: "Saved",
    icon: ImageIcon,
    href: "/saved",
    color: "text-pink-700",
  },
  // {
  //   label: "Conversation",
  //   icon: MessageSquare,
  //   href: "/conversation",
  //   color: "text-violet-600",
  // },

  // {
  //   label: "Image Generation",
  //   icon: ImageIcon,
  //   href: "/image",
  //   color: "text-pink-700",
  // },

  // {
  //   label: "Video Generation",
  //   icon: VideoIcon,
  //   href: "/video",
  //   color: "text-orange-700",
  // },

  // {
  //   label: "Music Generation",
  //   icon: Music,
  //   href: "/music",
  //   color: "text-emerald-400",
  // },

  
  // {
  //   label: "Code Generation",
  //   icon: Code,
  //   href: "/code",
  //   color: "text-purple-400",
  // },


  {
    label: "Settings",
    icon: Settings,
    href: "/settings",
    color: "text-white-400",
  },

];

function Sidebar() {
  const {user}=useUser();
  return (
    <div className="space-y-4 py-4 flex flex-col h-full bg-[#111827] text-white">
      <div className="px-3 py-2 flex-1">
        <Link href="/dashboard" className="flex items-center pl-3 mb-14">
          {/* <div className="relative w-12 h-12 mr-4">
            <Image fill alt="logo" src={Logo} />
          </div> */}
          <h1 className={`text-2xl font-bold ${montserrat.className}`}>
            Visual Craft
          </h1>
        </Link>

        <div className="space-y-1">
          {routes.map((route) => (
            <Link
              href={route.href}
              key={route.href}
              className="text-sm group flex p-3 w-full justify-start font-medium cursor-pointer hover:text-white hover:bg-white/10 rounded-lg transition"

            >
              <div className="flex items-center flex-1">
                <route.icon className={`h-5 w-5 mr-3 ${route.color}`} />
                {route.label}
              </div>
            </Link>
          ))}
        </div>
      </div>
      <div className="m-2 px-6 py-4 cursor-pointer flex items-center hover:text-white hover:bg-white/10 rounded-lg transition">
        <UserButton/>
        {user ? (
        <div className="ml-2">
          <p>Welcome, {user.firstName} {user.lastName}!</p>
        </div>
      ) : (
        <p>Loading...</p>
      )}
      </div>
    </div>
  );
}

export default Sidebar;
