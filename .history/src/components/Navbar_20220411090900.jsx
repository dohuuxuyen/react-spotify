import React from "react";

import { AiOutlineUser, AiOutlineMail } from "react-icons/ai";
const Navbar = ({ openMenu, setOpenMenu }) => {
  return (
    <div
      className={
        "h-[70px] text-[#15023A] bg-[#fff] ease-ease duration-500 " +
        (openMenu && "active")
      }
    >
      <div className="flex items-center justify-between mx-10">
        <div className="flex">
          <h1 className="text-[40px] font-bold  cursor-pointer">Portfolio</h1>
          <div className="flex cursor-pointer ">
            <div className="flex items-center ml-10">
              <AiOutlineUser className="text-[24px] mr-3" />
              <span className="">+84 703393996</span>
            </div>
            <div className="flex items-center ml-10">
              <AiOutlineMail className="text-[24px] mr-3" />
              <span>dohuuxuyen96@gmail.com</span>
            </div>
          </div>
        </div>
        <div
          className="w-[40px] h-[32px] flex flex-col justify-between cursor-pointer menuXx "
          onClick={() => setOpenMenu(!openMenu)}
        >
          <span className="w-full h-[3px] bg-[#15023A]"></span>
          <span className="w-full h-[3px] bg-[#15023A]"></span>
          <span className="w-full h-[3px] bg-[#15023A]"></span>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
