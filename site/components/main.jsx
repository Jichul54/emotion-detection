import React from "react";
import Container from "@mui/material/Container";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import Image from "next/image";
import Stepper from "./stepper";
import { ST } from "next/dist/shared/lib/utils";

export default function Main() {
  return (
    <Container maxWidth="sm">
      <Paper variant="outlined" sx={{ my: 3, p: 2 }}>
        <Typography variant="h4" align="center">
          Group 1
        </Typography>
        <Stepper></Stepper>
        <h3 className="mt-5"> Real Time Emotion Detection</h3>
        <img src="http://localhost:8080/video_feed" width="100%" />
      </Paper>
    </Container>
  );
}
