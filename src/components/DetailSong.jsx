import React, { useContext } from "react";
import { Songs } from "../Context";

const DetailSong = () => {
  const { song } = useContext(Songs);
  return (
    <div className="col-span-1 p-3">
      <h2 className="text-[#38BDF8] font-bold">Playing Now</h2>
      <h2 className="text-[#a3a3a3] text-2xl">{song.name}</h2>
      <div className="flex items-center justify-center mt-16">
        <img src={song.links.images[0].url} alt="avatar" className="w-64" />
      </div>
      <div className="flex justify-evenly items-center h-24">
        <img
          src={song.links.images[1].url}
          alt="avatar"
          className="w-16 rounded-full"
        />
        <span className="text-xl text-[#fff]">{song.author}</span>
      </div>
    </div>
  );
};

export default DetailSong;
