import React from "react";
import AudioPlayer from "react-h5-audio-player";

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
