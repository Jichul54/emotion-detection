import React from "react";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";

export default function Buttons(props) {
    return (
      <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
        <Button disabled={props.activeStep === 0} onClick={props.handleBack}>
          Back
        </Button>
        <Button
          disabled={props.activeStep === props.steps.length - 1}
          onClick={props.handleNext}
          color="primary"
        >
          Next
        </Button>
      </Box>
    );
}