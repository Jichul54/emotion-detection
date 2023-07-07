import { Stepper, Step, StepLabel, Button } from "@mui/material";
import { useState } from "react";

const steps = ["1", "2", "3","4","5","6"]; // Array of step labels

const MyStepper = () => {
  const [activeStep, setActiveStep] = useState(0); // State to track the active step

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  return (
    <>
      <Stepper activeStep={activeStep} alternativeLabel>
        {steps.map((label, index) => (
          <Step key={label}>
            <StepLabel>{/* Step Content */}</StepLabel>
          </Step>
        ))}
      </Stepper>
      <div>
        <Button disabled={activeStep === 0} onClick={handleBack}>
          Back
        </Button>
        <Button
          disabled={activeStep === steps.length - 1}
          onClick={handleNext}
          variant="text"
          color="primary"
        >
          Next
        </Button>
      </div>
    </>
  );
};

export default MyStepper;
