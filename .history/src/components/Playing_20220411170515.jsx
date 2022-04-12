import React from "react";
import AudioPlayer from "react-h5-audio-player";
import "react-h5-audio-player/lib/style.css";

const Playing = () => {
  return (
    <div>
      <AudioPlayer
        src={SAMPLE_MP3_URL}
        showSkipControls={true}
        showJumpControls={false}
      />
    </div>
  );
};

export default Playing;
