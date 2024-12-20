import React, { useState, useEffect } from 'react';
import './step3.css';

const Step3 = ({ setCanContinue }) => {
  const [questionType, setQuestionType] = useState('');
  const [difficulty, setDifficulty] = useState('');
  const [numQuestions, setNumQuestions] = useState('');

  // Function to validate if all selections are made
  const validateSelections = () => {
    if (questionType && difficulty && numQuestions) {
      setCanContinue(true); // Enable Continue button if all selections are valid
    } else {
      setCanContinue(false); // Disable Continue button if any selection is missing
    }
  };

  // Track changes to dropdowns and validate selections
  useEffect(() => {
    validateSelections();
  }, [questionType, difficulty, numQuestions]);

  return (
    <div className="step3-container">
      <div className="step3-row">
        {/* Question Type Selection */}
        <div className="step3-box">
          <label>Select Question Type</label>
          <div
            className={`step3-option ${questionType === 'mcq' ? 'selected' : ''}`}
            onClick={() => setQuestionType('mcq')}
          >
            MCQs
          </div>
          <div
            className={`step3-option ${questionType === 'true_false' ? 'selected' : ''}`}
            onClick={() => setQuestionType('true_false')}
          >
            True or False
          </div>
          <div
            className={`step3-option ${questionType === 'fill_in_the_blanks' ? 'selected' : ''}`}
            onClick={() => setQuestionType('fill_in_the_blanks')}
          >
            Fill in the Blanks
          </div>
        </div>

        {/* Difficulty Level Selection */}
        <div className="step3-box">
          <label>Select Difficulty Level</label>
          <div
            className={`step3-option ${difficulty === 'easy' ? 'selected' : ''}`}
            onClick={() => setDifficulty('easy')}
          >
            Easy
          </div>
          <div
            className={`step3-option ${difficulty === 'medium' ? 'selected' : ''}`}
            onClick={() => setDifficulty('medium')}
          >
            Medium
          </div>
          <div
            className={`step3-option ${difficulty === 'hard' ? 'selected' : ''}`}
            onClick={() => setDifficulty('hard')}
          >
            Hard
          </div>
        </div>

        {/* Number of Questions Selection */}
        <div className="step3-box">
          <label>Select Number of Questions</label>
          <div
            className={`step3-option ${numQuestions === '2' ? 'selected' : ''}`}
            onClick={() => setNumQuestions('2')}
          >
            2 Questions
          </div>
          <div
            className={`step3-option ${numQuestions === '4' ? 'selected' : ''}`}
            onClick={() => setNumQuestions('4')}
          >
            4 Questions
          </div>
          <div
            className={`step3-option ${numQuestions === '6' ? 'selected' : ''}`}
            onClick={() => setNumQuestions('6')}
          >
            6 Questions
          </div>
        </div>
      </div>
    </div>
  );
};

export default Step3;
