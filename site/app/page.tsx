import Image from "next/image";

export default function Home() {
  return (
    <body>
      <div className="parallax-content baner-content" id="home">
        <div className="container">
          <div className="row">
            <div className="col-lg-8  offset-lg-2">
              <h3 className="mt-5"> Real Time Emotion Detection</h3>
              <video
                src="http://localhost:5000/video_feed"
                width="100%"
                autoPlay
              />
            </div>
          </div>
        </div>
      </div>
    </body>
  );
}
