import React, { useState } from "react";

const Accordion = ({ heading, data }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b">
      {/* Accordion Header */}
      <button
        className="w-full flex justify-between items-center py-4 text-left text-lg font-semibold text-gray-800"
        onClick={() => setIsOpen(!isOpen)}
      >
        {heading}
        <span className={`transition-transform duration-300 ${isOpen ? "rotate-180" : "rotate-0"}`}>
          ▼
        </span>
      </button>

      {/* Accordion Content */}
      {isOpen && (
        <div className="py-4 text-gray-600 text-base">
          {data}
        </div>
      )}
    </div>
  );
};

export default Accordion;
