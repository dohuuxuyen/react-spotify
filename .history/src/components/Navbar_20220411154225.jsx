import React from "react";
import { FaSpotify } from "react-icons/fa";

const Navbar = () => {
  return (
    <div className="flex items-center justify-center text-3xl h-[100px] bg-[#111827] text-[#fff]">
      <FaSpotify />
      <span>Spotify</span>
    </div>
  );
};

export default Navbar;
