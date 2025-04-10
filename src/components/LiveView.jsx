import React, { useEffect, useRef, useState } from "react";
import Hls from "hls.js";
import Navbar from "./Navbar.jsx";
import Footer from "./Footer.jsx";
import Tracking from "./Tracking.jsx";

const LiveView = () => {
  const videoRef = useRef(null);
  const [streamError, setStreamError] = useState(false);
  const streamURL = "https://queueview.ca:8081/hls/eric/index.m3u8";

  useEffect(() => {
    const video = videoRef.current;

    if (Hls.isSupported()) {
      const hls = new Hls();
      hls.loadSource(streamURL);
      hls.attachMedia(video);

      hls.on(Hls.Events.MANIFEST_PARSED, () => {
        video.play().catch(() => setStreamError(true));
      });

      hls.on(Hls.Events.ERROR, (_, data) => {
        if (data.fatal) {
          console.error("HLS Error:", data);
          setStreamError(true);
          hls.destroy();
        }
      });
    } else if (video.canPlayType("application/vnd.apple.mpegurl")) {
      video.src = streamURL;
      video.addEventListener("loadedmetadata", () => {
        video.play().catch(() => setStreamError(true));
      });
      video.addEventListener("error", () => {
        console.error("Native video playback error");
        setStreamError(true);
      });
    } else {
      setStreamError(true);
    }

    return () => {
      video?.removeEventListener("error", () => setStreamError(true));
    };
  }, []);

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />

      {/* Main Content */}
      <main className="flex-grow">
        <h1 className="text-center text-2xl font-bold mt-4 mb-6">
          Raspberry Pi Live Feed
        </h1>
        <div className="flex flex-col items-center">
          <div className="flex justify-center w-3/4 mb-6" style={{ height: '50vh' }}>
            {streamError ? (
              <img
                src="\assets\right_back.png"
                alt="We'll be right back"
                className="w-full h-full object-contain"
              />
            ) : (
              <video
                ref={videoRef}
                controls
                className="w-full h-full"
                playsInline
                muted
              />
            )}
          </div>
          <Tracking />
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default LiveView;