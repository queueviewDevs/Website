import React, { useEffect, useRef } from "react";
import Hls from "hls.js";
import Navbar from "./Navbar.jsx";
import Footer from "./Footer.jsx";
const LiveView = () => {
  const videoRef = useRef(null);

  useEffect(() => {
    if (Hls.isSupported()) {
      const hls = new Hls();
      hls.loadSource(   
        "https://demo.unified-streaming.com/k8s/features/stable/video/tears-of-steel/tears-of-steel.ism/.m3u8"
      );
      hls.attachMedia(videoRef.current);
      hls.on(Hls.Events.MANIFEST_PARSED, () => {
        videoRef.current.play();
      });
    } else if (videoRef.current.canPlayType("application/vnd.apple.mpegurl")) {
      videoRef.current.src =
        "https://demo.unified-streaming.com/k8s/features/stable/video/tears-of-steel/tears-of-steel.ism/.m3u8";
      videoRef.current.addEventListener("loadedmetadata", () => {
        videoRef.current.play();
      });
    }
  }, []);

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />

      {/* Main Content */}
      <main className="flex-grow">
        <h1 className="text-center text-2xl font-bold mt-4 mb-6">
          Raspberry Pi Live Feed
        </h1>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "60vh",
          }}
        >
          <video
            ref={videoRef}
            controls
            style={{ width: "70%", height: "100%" }}
            playsInline
            muted
          />
        </div>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default LiveView;