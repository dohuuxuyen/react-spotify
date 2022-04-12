import React from "react";
import { FaSpotify } from "react-icons/fa";

const Navbar = () => {
  return (
    <div className="flex items-center justify-center text-3xl h-[20vh] bg-[#111827] text-[#fff]">
      <FaSpotify />
      <span className="ml-5">Spotify</span>
    </div>
  );
};

export default Navbar;
