import React from "react";
import { AiOutlineUser, AiOutlineMail } from "react-icons/ai";
const Navbar = () => {
  return (
    <div className="h-[70px] ">
      <div className="flex items-center ">
        <h1 className="text-[40px] font-bold ml-10">Portfolio</h1>
        <div className="flex">
          <div>
            <AiOutlineUser />
            <span>+84 703393996</span>
          </div>
          <div>
            <AiOutlineMail />
            <span>dohuuxuyen96@gmail.com</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
