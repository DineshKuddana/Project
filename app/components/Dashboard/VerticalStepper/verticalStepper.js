import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import StepContent from '@mui/material/StepContent';
import Button from '@mui/material/Button';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Step1 from './Step1';
import Step2 from './Step2';
import Step3 from './Step3';

const steps = [
  { label: 'Step 1', description: 'Select a data type.' },
  { label: 'Step 2', description: 'Provide the required details.' },
  { label: 'Step 3', description: 'Final confirmation or action.' },
];

export default function VerticalLinearStepper() {
  const [activeStep, setActiveStep] = useState(0);
  const [canContinue, setCanContinue] = useState(false);
  const [selectedStep1, setSelectedStep1] = useState(null);
  const [selectedStep2, setSelectedStep2] = useState('');
  const [step3Data, setStep3Data] = useState({
    questionType: '',
    level: '',
    numQuestions: 0,
  });
  const [finalData, setFinalData] = useState(null); // Store final data
  const [confirmationMessage, setConfirmationMessage] = useState(''); // Store confirmation message

  const sendDataToAPI = async (data) => {
    try {
      console.log('Request Data:', data); // Log the request data
      const response = await fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      const responseData = await response.json();
      console.log('Response:', responseData); // Log the response data
      return responseData; // Return response for further processing
    } catch (error) {
      console.error('Error sending data:', error);
      throw error;
    }
  };

  const handleNext = () => {
    setActiveStep((prev) => prev + 1);
    setCanContinue(false); // Reset "Continue" button for the next step
  };

  const handleBack = () => {
    setActiveStep((prev) => prev - 1);
  };

  const handleReset = () => {
    setActiveStep(0);
    setSelectedStep1(null); // Reset selection
    setSelectedStep2(''); // Reset Step 2 input
    setStep3Data({ questionType: '', level: '', numQuestions: 0 }); // Reset Step 3 data
    setConfirmationMessage(''); // Reset confirmation message
  };

  const handleFinish = async () => {
    const formData = {
      step1Data: selectedStep1,
      step2Data: selectedStep2,
      step3Data: step3Data, // Collect data from Step 3 dynamically
    };

    try {
      // Send the data to the API
      const responseData = await sendDataToAPI(formData);

      // Display a detailed success message with response data
      setConfirmationMessage(
        `Data submitted successfully!`
      );

      // Store the final data for display
      setFinalData(formData);

      // Move to confirmation screen
      setActiveStep(steps.length);
    } catch (error) {
      setConfirmationMessage('Failed to submit data. Please try again.');
    }
  };

  return (
    <Box sx={{ maxWidth: 500 }}>
      {activeStep < steps.length ? (
        <Stepper activeStep={activeStep} orientation="vertical">
          {steps.map((step, index) => (
            <Step key={step.label}>
              <StepLabel>{step.label}</StepLabel>
              <StepContent>
                <Typography>{step.description}</Typography>
                {activeStep === 0 && (
                  <Step1 setCanContinue={setCanContinue} setSelectedStep1={setSelectedStep1} />
                )}
                {activeStep === 1 && (
                  <Step2
                    setCanContinue={setCanContinue}
                    selectedStep1={selectedStep1}
                    setSelectedStep2={setSelectedStep2}
                  />
                )}
                {activeStep === 2 && (
                  <Step3
                    step3Data={step3Data}
                    setStep3Data={setStep3Data}
                    setCanContinue={setCanContinue}
                  />
                )}
                <Box sx={{ mb: 2 }}>
                  <div>
                    <Button
                      variant="contained"
                      onClick={activeStep === 2 ? handleFinish : handleNext}
                      disabled={
                        (activeStep === 0 && !canContinue) ||
                        (activeStep === 1 && !canContinue) ||
                        (activeStep === 2 && !canContinue)
                      }
                      sx={{ mt: 1, mr: 1 }}
                    >
                      {index === steps.length - 1 ? 'Finish' : 'Continue'}
                    </Button>
                    <Button
                      disabled={index === 0}
                      onClick={handleBack}
                      sx={{ mt: 1, mr: 1 }}
                    >
                      Back
                    </Button>
                  </div>
                </Box>
              </StepContent>
            </Step>
          ))}
        </Stepper>
      ) : (
        <Paper square elevation={0} sx={{ p: 3 }}>
          <Typography>
            {confirmationMessage || "All steps completed - you're finished!"}
          </Typography>
          {finalData && (
            <Box>
              <Typography variant="h6" sx={{ mt: 2 }}>
                Final Submitted Data:
              </Typography>
              <pre style={{ backgroundColor: '#f4f4f4', padding: '10px' }}>
                {JSON.stringify(finalData, null, 2)}
              </pre>
            </Box>
          )}
          <Button onClick={handleReset} sx={{ mt: 1, mr: 1 }}>
            Reset
          </Button>
        </Paper>
      )}
    </Box>
  );
}
