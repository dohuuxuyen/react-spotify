import React from "react";
import AudioPlayer from "react-h5-audio-player";
import "react-h5-audio-player/lib/styles.css";

const Playing = () => {
  return (
    <div>
      <AudioPlayer
        src=""
        showSkipControls={true}
        showJumpControls={false}
        className="!bg-[#111827] w-[15vh]"
      />
    </div>
  );
};

export default Playing;
