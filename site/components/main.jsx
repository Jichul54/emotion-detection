import React from "react";
import Container from "@mui/material/Container";
import Paper from "@mui/material/Paper";
import Image from "next/image";


export default function Main() {
    return (
        <Container maxWidth="sm">
            <Paper variant="outlined" sx={{ my: 3, p: 2 }}>
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
            </Paper>
        </Container>
    );
}