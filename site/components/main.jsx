import React, { useState } from "react";
import Container from "@mui/material/Container";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import Image from "next/image";
import MyStepper from "./stepper";
import Buttons from "./buttons";

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

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  return (
    <Container maxWidth="sm">
      <Paper variant="outlined" sx={{ my: 3, p: 2 }}>
        <MyStepper steps={steps} activeStep={activeStep} />
        <Typography variant="h5" sx={{ marginTop:2}} align="center">{steps[activeStep]}</Typography>
        <h3 className="mt-5"> Real Time Emotion Detection</h3>
        <img src="http://localhost:8080/video_feed" width="100%" />
        <Buttons
          steps={steps}
          activeStep={activeStep}
          handleNext={handleNext}
                  handleBack={handleBack}
                  style={{float: "right"}}
        />
      </Paper>
    </Container>
  );
}
