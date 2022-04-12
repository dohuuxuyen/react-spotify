import React from "react";
import { AiOutlineUser, AiOutlineMail } from "react-icons/ai";
const Navbar = () => {
  return (
    <div className="h-[70px] ">
      <div className="flex items-center ">
        <h1 className="text-[40px] font-bold ml-10">Portfolio</h1>
        <div className="flex text-[24px]">
          <div className="flex items-center">
            <AiOutlineUser />
            <span>+84 703393996</span>
          </div>
          <div className="flex items-center">
            <AiOutlineMail />
            <span>dohuuxuyen96@gmail.com</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
