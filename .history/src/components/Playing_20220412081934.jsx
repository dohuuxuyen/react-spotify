import React, { useContext } from "react";
import AudioPlayer from "react-h5-audio-player";
import "react-h5-audio-player/lib/styles.css";
import { Songs } from "../Context";

const Playing = () => {
  const { song, handleSetSong } = useContext(Songs);

  const handleClickNext = () => {
    handleSetSong(song + 1);
  };

  const handleClickPre = () => {};
  return (
    <div>
      <AudioPlayer
        src={song.url}
        showSkipControls={true}
        showJumpControls={false}
        onClickNext={handleClickNext}
        onClickPrevious={handleClickPre}
        className="!bg-[#111827] h-[15vh] !text-[#fff]"
      />
    </div>
  );
};

export default Playing;
