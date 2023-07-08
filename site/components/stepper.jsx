import { Stepper, Step, StepLabel } from "@mui/material";

const MyStepper = (props) => {
  return (
    <>
      <Stepper activeStep={props.activeStep} alternativeLabel sx={{my:2}}>
        {props.steps.map((label, index) => (
          <Step key={label}>
            <StepLabel>{/* Step Content */}</StepLabel>
          </Step>
        ))}
      </Stepper>
    </>
  );
};

export default MyStepper;
