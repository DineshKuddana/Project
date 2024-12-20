import React from "react";

const HowItWorks = () => {
  return (
    <div className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-8">
        {/* Heading */}
        <h1 className="text-5xl font-bold text-center mb-16">How It Works</h1>

        {/* Steps */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 bg-gray-200 rounded-3xl p-8">
          {/* Step 1 */}
          <div className="text-center lg:text-left bg-gray-50 rounded-3xl p-8">
            <div className="mb-4">
              <span className="text-blue-500 text-3xl font-bold">1</span>
            </div>
            <h2 className="text-2xl font-bold mb-4">Upload your file or paste a URL</h2>
            <p className="text-gray-700 text-lg leading-7">
              Simply drag and drop your PDF, paste a URL, or type in text. Our
              system quickly analyzes the content, ensuring precision and
              accuracy for question generation.
            </p>
          </div>

          {/* Step 2 */}
          <div className="text-center lg:text-left  bg-gray-50 rounded-3xl p-8">
            <div className="mb-4">
              <span className="text-blue-500 text-3xl font-bold">2</span>
            </div>
            <h2 className="text-2xl font-bold mb-4">Select your question type</h2>
            <p className="text-gray-700 text-lg leading-7">
              Choose from multiple-choice, true/false, or fill-in-the-blank
              formats. Customize the difficulty level or let the app decide for
              you, creating a seamless experience.
            </p>
          </div>

          {/* Step 3 */}
          <div className="text-center lg:text-left  bg-gray-50 rounded-3xl p-8">
            <div className="mb-4">
              <span className="text-blue-500 text-3xl font-bold">3</span>
            </div>
            <h2 className="text-2xl font-bold mb-4">Download or share instantly</h2>
            <p className="text-gray-700 text-lg leading-7">
              Once the questions are generated, download them instantly or
              share them with your team. Effortless integration with your
              workflow saves time and boosts productivity.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HowItWorks;
