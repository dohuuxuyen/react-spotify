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
        className="!bg-[#111827] h-[15vh] !text-[#fff]"
      />
    </div>
  );
};

export default Playing;
