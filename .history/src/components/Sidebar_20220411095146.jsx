import React from "react";
import { Link } from "react-router-dom";

const Sidebar = ({ openMenu, setOpenMenu }) => {
  return (
    <div
      className={
        "w-[300px] h-full fixed top-0 bottom-0 right-[-300px] bg-[#15023A] ease-ease duration-500 " +
        (openMenu && "!right-0")
      }
    >
      <div className="w-[80] h-[40] flex items-center justify-center">
        <Link to="/" className="text-3xl text-[#fff] block mt-10">
          Adsdsdsds
        </Link>
      </div>
    </div>
  );
};

export default Sidebar;
