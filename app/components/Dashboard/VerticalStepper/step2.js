import React, { useState, useEffect } from 'react';
import './step2.css';

const Step2 = ({ selectedStep1, setCanContinue }) => {
  const [inputValue, setInputValue] = useState(''); // Track input value

  // Function to render the appropriate input field
  const renderInput = () => {
    switch (selectedStep1) {
      case 1:
        return (
          <input
            type="text"
            placeholder="Enter text"
            className="step2-input"
            required
            value={inputValue}
            onChange={handleInputChange}
          />
        );
      case 2:
        return (
          <textarea
            placeholder="Enter topic"
            className="step2-textarea"
            required
            value={inputValue}
            onChange={handleInputChange}
          />
        );
      case 3:
        return (
          <input
            type="url"
            placeholder="Enter URL"
            className="step2-input"
            required
            value={inputValue}
            onChange={handleInputChange}
          />
        );
      case 4:
        return (
          <input
            type="file"
            accept=".pdf"
            className="step2-input"
            required
            onChange={handleFileChange}
          />
        );
      case 5:
        return (
          <input
            type="file"
            accept="audio/*"
            className="step2-input"
            required
            onChange={handleFileChange}
          />
        );
      case 6:
        return (
          <input
            type="file"
            accept="video/*"
            className="step2-input"
            required
            onChange={handleFileChange}
          />
        );
      default:
        return <p>Please select an option in Step 1.</p>;
    }
  };

  // Update the input value state for text inputs
  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  // Update the state based on file input (just set canContinue to true if any file is selected)
  const handleFileChange = (event) => {
    if (event.target.files.length > 0) {
      setCanContinue(true);
    } else {
      setCanContinue(false);
    }
  };

  // Enable or disable the Continue button based on input content
  useEffect(() => {
    if (selectedStep1 !== 4 && selectedStep1 !== 5 && selectedStep1 !== 6) {
      // For text or textarea inputs, enable Continue if there's content
      setCanContinue(inputValue.trim() !== '');
    }
  }, [inputValue, selectedStep1, setCanContinue]);

  return <div className="step2-container">{renderInput()}</div>;
};

export default Step2;
