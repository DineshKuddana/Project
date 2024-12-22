import React, { useState, useEffect } from 'react';
import './step2.css';

const Step2 = ({ selectedStep1, setCanContinue, setStep2Data }) => {
  const [inputValue, setInputValue] = useState(''); // Track input value
  const [fileValue, setFileValue] = useState(null); // Track file input values

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
          <>
            <input
              type="file"
              accept=".pdf"
              className="step2-input"
              required
              onChange={handleFileChange}
            />
            {/* Placeholder value for PDF input */}
            {!fileValue && <p>Default PDF: 'default_pdf_url'</p>}
          </>
        );
      case 5:
        return (
          <>
            <input
              type="file"
              accept="audio/*"
              className="step2-input"
              required
              onChange={handleFileChange}
            />
            {/* Placeholder value for Audio input */}
            {!fileValue && <p>Default Audio: 'default_audio_url'</p>}
          </>
        );
      case 6:
        return (
          <>
            <input
              type="file"
              accept="video/*"
              className="step2-input"
              required
              onChange={handleFileChange}
            />
            {/* Placeholder value for Video input */}
            {!fileValue && <p>Default Video: 'default_video_url'</p>}
          </>
        );
      default:
        return <p>Please select an option in Step 1.</p>;
    }
  };

  // Update the input value state for text inputs
  const handleInputChange = (event) => {
    const value = event.target.value;
    setInputValue(value);
    setStep2Data(value); // Pass the input value to the parent component
    console.log('Input value changed:', value); // Log the input value
  };

  // Update the state based on file input (just set canContinue to true if any file is selected)
  const handleFileChange = (event) => {
    if (event.target.files.length > 0) {
      const file = event.target.files[0];
      setFileValue(file); // Store the selected file
      setCanContinue(true);
      setStep2Data(file); // Pass the file to the parent component
      console.log('File selected:', file); // Log the file object
    } else {
      setFileValue(null); // Reset if no file is selected
      setCanContinue(false);
      console.log('No file selected'); // Log when no file is selected
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
