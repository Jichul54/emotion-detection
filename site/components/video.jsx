import React from "react";

export default function Video({ detection }) {
  const video1 = <h3>映像を視聴してください。</h3>;
  return (
    <div style={{ maxWidth: "560px", margin: "0 auto" }}>
      <h3 style={{ textAlign: "center" }}>映像を視聴してください。</h3>
      <div
        style={{ position: "relative", paddingBottom: "56.25%", height: "0", margin:"24px 0px" }}
      >
        <iframe
          src="https://www.youtube.com/embed/dQw4w9WgXcQ"
          frameborder="0"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
          style={{
            position: "absolute",
            top: "0",
            left: "0",
            width: "100%",
            height: "100%",
          }}
        ></iframe>
      </div>
    </div>
  );
}
