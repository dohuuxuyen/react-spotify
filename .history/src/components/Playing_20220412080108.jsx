import React, { useContext } from "react";
import AudioPlayer from "react-h5-audio-player";
import "react-h5-audio-player/lib/styles.css";
import { Songs } from "../Context";

const Playing = () => {
  const { song } = useContext(Songs);
  return (
    <div>
      <AudioPlayer
        src={song.Url}
        showSkipControls={true}
        showJumpControls={false}
        className="!bg-[#111827] h-[15vh] !text-[#fff]"
      />
    </div>
  );
};

export default Playing;
