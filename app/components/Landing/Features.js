import React from "react";
import Image from "next/image";
import feature1 from "@/assets/feature-1.png";
import feature2 from "@/assets/feature-2.png";
import feature3 from "@/assets/feature-3.png";

const Features = () => {
  return (
    <div className="py-20 bg-gray-50 mx-6">
      <h1 className="text-5xl font-bold text-center mb-16">
        What the App Can Do
      </h1>
      <div className="flex flex-wrap justify-center gap-20">
        {/* Feature 1 */}
        <div className="flex flex-col lg:flex-row items-center max-w-5xl gap-12">
          <Image
            src={feature1}
            alt="Extract Questions"
            className="w-full lg:w-96 h-auto"
          />
          <div className="info max-w-lg">
            <h2 className="text-3xl font-bold mb-6">
              <span className="text-blue-500">Extract Questions</span> from PDFs,
              URLs, or Text
            </h2>
            <p className="text-gray-700 text-lg leading-8">
              Turn any document, webpage, or text input into a set of
              well-structured questions. Whether it's for educational,
              professional, or personal use, our tool ensures efficiency and
              accuracy.
            </p>
          </div>
        </div>

        {/* Feature 2 */}
        <div className="flex flex-col lg:flex-row items-center max-w-5xl gap-12">
          <Image
            src={feature2}
            alt="Create Multiple Question Types"
            className="w-full lg:w-96 h-auto"
          />
          <div className="info max-w-lg">
            <h2 className="text-3xl font-bold mb-6">
            Supports 
              <span className="text-blue-500"> Multiple
              Question Formats</span>{" "}
            </h2>
            <p className="text-gray-700 text-lg leading-8">
            Create diverse question types,
including
multiple-choice, true/false, and fill-in-
the-blank,
tailored to suit your needs and
preferences.
            </p>
          </div>
        </div>

        {/* Feature 3 */}
        <div className="flex flex-col lg:flex-row items-center max-w-5xl gap-12">
          <Image
            src={feature3}
            alt="Simplify Assessments"
            className="w-full lg:w-96  h-auto"
          />
          <div className="info max-w-lg">
            <h2 className="text-3xl font-bold mb-6">
             Skip the tedious
work of promting
            </h2>
            <p className="text-gray-700 text-lg leading-8">              
Prashna ai create stellar and onpoint
questions from the url or pdfs
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;
