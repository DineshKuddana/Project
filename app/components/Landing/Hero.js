import Link from "next/link";
import React from "react";
import Image from "next/image";
import img1 from "@/assets/image-1.svg";

function Hero() {
  return (
    <div className="hero-section flex flex-wrap items-center justify-between px-8 lg:px-16 mt-16 lg:mt-32 py-8 lg:mx-16">
      {/* Left Container */}
      <div className="left-container max-w-lg">
        <h1 className="left-heading text-4xl lg:text-5xl font-bold">
          Introducing PrashnaAI✨
        </h1>
        <h2 className="left-sub-heading text-xl lg:text-2xl text-gray-600 font-medium mt-4">
          Transform PDFs & URLs into Questions Instantly!
        </h2>
        <p className="left-para text-base lg:text-lg mt-4 text-gray-700">
          Unlock the potential of your documents and web links by turning them
          into multiple-choice, true/false, or fill-in-the-blank questions.
          Perfect for educators, professionals, and lifelong learners.
        </p>
        <Link href="/dashboard">
          <button className="start-btn px-6 py-3 lg:py-4 mt-6 rounded-full bg-blue-500 text-white text-sm lg:text-base font-semibold hover:bg-blue-600 transition">
            Start for free
          </button>
        </Link>
      </div>

      {/* Right Container */}
      <div className="right-container w-full lg:w-1/2 mt-8 lg:mt-0 flex items-center justify-center">
        <Image src={img1} alt="Illustration" className="max-w-4xl h-auto" />
      </div>
    </div>
  );
}

export default Hero;
