import React, { useState } from "react";
import { AiOutlineUser, AiOutlineMail, AiOutlineMenu } from "react-icons/ai";
const Navbar = () => {
  const [menu, setMenu] = useState(false);
  return (
    <div className={{menu ? 'navbar active': 'navbar'}}>
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
        <div>
          <AiOutlineMenu className="text-3xl" onClick={setMenu(!false)}/>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
