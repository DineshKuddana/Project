import React, { useState, useEffect } from 'react';
import './step3.css';

const Step3 = ({ setCanContinue }) => {
  const [questionType, setQuestionType] = useState('');
  const [difficulty, setDifficulty] = useState('');
  const [numQuestions, setNumQuestions] = useState('');

  // Function to validate if all selections are made
  const validateSelections = () => {
    if (questionType && difficulty && numQuestions) {
      setCanContinue(true); // Enable Finish button if all selections are valid
    } else {
      setCanContinue(false); // Disable Finish button if any selection is missing
    }
  };

  // Track changes to dropdowns and validate selections
  useEffect(() => {
    validateSelections();
  }, [questionType, difficulty, numQuestions]);

  return (
    <div className="step3-container">
      <div className="step3-row">
        {/* Question Type Dropdown */}
        <div className="step3-box">
          <label>Select Question Type</label>
          <select
            className="step3-dropdown"
            value={questionType}
            onChange={(e) => setQuestionType(e.target.value)}
          >
            <option value="">Select...</option>
            <option value="mcq">MCQs</option>
            <option value="true_false">True or False</option>
            <option value="fill_in_the_blanks">Fill in the Blanks</option>
          </select>
        </div>

        {/* Difficulty Level Dropdown */}
        <div className="step3-box">
          <label>Select Difficulty Level</label>
          <select
            className="step3-dropdown"
            value={difficulty}
            onChange={(e) => setDifficulty(e.target.value)}
          >
            <option value="">Select...</option>
            <option value="easy">Easy</option>
            <option value="medium">Medium</option>
            <option value="hard">Hard</option>
          </select>
        </div>

        {/* Number of Questions Dropdown */}
        <div className="step3-box">
          <label>Select Number of Questions</label>
          <select
            className="step3-dropdown"
            value={numQuestions}
            onChange={(e) => setNumQuestions(e.target.value)}
          >
            <option value="">Select...</option>
            <option value="2">2 Questions</option>
            <option value="4">4 Questions</option>
            <option value="6">6 Questions</option>
          </select>
        </div>
      </div>

      
    </div>
  );
};

export default Step3;
