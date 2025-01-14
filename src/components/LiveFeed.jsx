import React, { useEffect, useRef } from "react";
import Hls from "hls.js";

const LiveFeed = () => {
  const videoRef = useRef(null);

  useEffect(() => {
    if (Hls.isSupported()) {
      const hls = new Hls();
      hls.loadSource("https://demo.unified-streaming.com/k8s/features/stable/video/tears-of-steel/tears-of-steel.ism/.m3u8");
      hls.attachMedia(videoRef.current);
      hls.on(Hls.Events.MANIFEST_PARSED, () => {
        videoRef.current.play();
      });
    } else if (videoRef.current.canPlayType('application/vnd.apple.mpegurl')) {
      videoRef.current.src = "https://demo.unified-streaming.com/k8s/features/stable/video/tears-of-steel/tears-of-steel.ism/.m3u8";
      videoRef.current.addEventListener('loadedmetadata', () => {
        videoRef.current.play();
      });
    }
  }, []);

  return (
    <div>
      <h1>Raspberry Pi Live Feed</h1>
      <video
        ref={videoRef}
        controls
        style={{ width: "100%", height: "100%" }}
        playsInline
        muted
      />
    </div>
  );
};

export default LiveFeed;
