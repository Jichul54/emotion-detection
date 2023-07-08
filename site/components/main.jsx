import React, { useState, useEffect } from "react";
import Container from "@mui/material/Container";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import MyStepper from "./stepper";
import Buttons from "./buttons";
import Confirm from "./confirm";

export default function Main() {
  const steps = [
    "研究の目的",
    "動画１",
    "アンケート１",
    "次の説明",
    "動画２",
    "アンケート２",
  ];

  const [activeStep, setActiveStep] = useState(0);
  const [isAgreed, setIsAgreed] = useState(false);

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const agreeChangeHandler = (event) => {
    setIsAgreed(event.target.checked);
  };

  const [contents, setContents] = useState(null);

  useEffect(() => {
    // Function to set contents based on activeStep
    const updateContents = () => {
      if (activeStep === 0) {
        setContents(<Confirm agreeChangeHandler={agreeChangeHandler} />);
      } else if (activeStep === 1) {
        setContents(<h3>step2</h3>);
      } else if (activeStep === 2) {
        setContents(<h3>step3</h3>);
      } else if (activeStep === 3) {
        setContents(<h3>step4</h3>);
      } else if (activeStep === 4) {
        setContents(<h3>step5</h3>);
      } else if (activeStep === 5) {
        setContents(<h3>step6</h3>);
      }
    };

    updateContents(); // Call the function to set initial contents
  }, [activeStep]);

  return (
    <Container maxWidth="sm">
      <Paper variant="outlined" sx={{ my: 3, p: 2 }}>
        <MyStepper steps={steps} activeStep={activeStep} />
        <Typography variant="h5" sx={{ marginY: 3 }} align="center">
          {steps[activeStep]}
        </Typography>

        <Container>{contents}</Container>

        <Buttons
          steps={steps}
          activeStep={activeStep}
          handleNext={handleNext}
          handleBack={handleBack}
          style={{ float: "right" }}
          disabled={!isAgreed}
        />
      </Paper>
    </Container>
  );
}
