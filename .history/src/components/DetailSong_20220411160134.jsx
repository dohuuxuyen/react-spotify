import React from "react";

const DetailSong = () => {
  return (
    <div className="col-span-1 p-3">
      <h2 className="text-[#38BDF8] font-bold">Now Playing</h2>
      <h2 className="text-[#a3a3a3] text-2xl">Single me to sleep</h2>
      <div className="flex items-center justify-center mt-16">
        <img
          src="https://i.scdn.co/image/ab6761610000e5ebc02d416c309a68b04dc94576"
          alt="avatar"
          className="w-64"
        />
      </div>
      <div className="flex justify-evenly items-center h-24">
        <img
          src="https://i.scdn.co/image/ab67616d0000b273a108e07c661f9fc54de9c43a"
          alt="avatar"
          className="w-16 rounded-full"
        />
        <span>Alan Walker</span>
      </div>
    </div>
  );
};

export default DetailSong;
