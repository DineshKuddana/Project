import React, { useState } from 'react';
import './step1.css';

const Step1 = ({ setCanContinue, setSelectedStep1 }) => {
  const [selectedOption, setSelectedOption] = useState(null);

  const boxes = [
    { id: 1, image: 'https://cdn-icons-png.flaticon.com/512/1250/1250674.png', title: 'Text', text: 'Manage and edit your textual data effortlessly.' },
    { id: 2, image: 'https://cdn-icons-png.flaticon.com/512/3135/3135715.png', title: 'Topic', text: 'Categorize and organize topics efficiently.' },
    { id: 3, image: 'https://cdn-icons-png.flaticon.com/512/2659/2659367.png', title: 'URL', text: 'Add and manage web links seamlessly.' },
    { id: 4, image: 'https://cdn-icons-png.flaticon.com/512/3388/3388642.png', title: 'PDF', text: 'Upload and access PDF documents easily.' },
    { id: 5, image: 'https://cdn-icons-png.flaticon.com/512/2535/2535522.png', title: 'Audio', text: 'Streamline and organize your audio files.' },
    { id: 6, image: 'https://cdn-icons-png.flaticon.com/512/609/609803.png', title: 'Video', text: 'Manage and enhance your video content.' },
  ];

  const handleSelection = (title) => {
    setSelectedOption(title);
    setSelectedStep1(title); // Pass the selected title to the parent component
    setCanContinue(true); // Enable the "Continue" button
  };

  return (
    <div className="step1">
      <div className="small-grid-container">
        {boxes.map((box) => (
          <div
            className={`small-grid-box ${selectedOption === box.title ? 'selected' : ''}`}
            key={box.id}
            onClick={() => handleSelection(box.title)}
          >
            <div className="small-box-image-container">
              <img src={box.image} alt={box.title} className="small-box-image" />
            </div>
            <div className="small-box-text-container">
              <h3 className="small-box-title">{box.title}</h3>
              <p className="small-box-text">{box.text}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Step1;
