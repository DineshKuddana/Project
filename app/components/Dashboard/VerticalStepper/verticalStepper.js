import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import StepContent from '@mui/material/StepContent';
import Button from '@mui/material/Button';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Step1 from './step1';
import Step2 from './step2';
import Step3 from './step3';

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
    setSelectedStep2('');   // Reset Step 2 input
  };

  return (
    <Box sx={{ maxWidth: 500 }}>
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
                <Step2 setCanContinue={setCanContinue} selectedStep1={selectedStep1} setSelectedStep2={setSelectedStep2} />
              )}
              {activeStep === 2 && (
                <Step3 selectedStep1={selectedStep1} selectedStep2={selectedStep2} setCanContinue={setCanContinue} />
              )}
              <Box sx={{ mb: 2 }}>
                <div>
                  <Button
                    variant="contained"
                    onClick={handleNext}
                    disabled={activeStep === 0 && !canContinue && !selectedStep1 || activeStep === 1 && !canContinue || activeStep === 2 && !canContinue}
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
      {activeStep === steps.length && (
        <Paper square elevation={0} sx={{ p: 3 }}>
          <Typography>All steps completed - you're finished</Typography>
          <Button onClick={handleReset} sx={{ mt: 1, mr: 1 }}>
            Reset
          </Button>
        </Paper>
      )}
    </Box>
  );
}
