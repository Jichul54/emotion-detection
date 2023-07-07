"use client";
import React from "react";
import Image from "next/image";
import Header from "../components/header";
import Container from "@mui/material/Container";

export default function Home() {
  return (
    <body>
      <Header />
      <Container maxWidth="sm">
        <div className="parallax-content baner-content" id="home">
          <div className="container">
            <div className="row">
              <div className="col-lg-8  offset-lg-2">
                <h3 className="mt-5"> Real Time Emotion Detection</h3>
                <img src="http://localhost:8080/video_feed" width="100%" />
              </div>
            </div>
          </div>
        </div>
      </Container>
    </body>
  );
}
