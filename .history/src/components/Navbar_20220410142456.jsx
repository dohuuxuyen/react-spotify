import React from "react";
import { AiOutlineUser, AiOutlineMail } from "react-icons/ai";
const Navbar = () => {
  return (
    <div className="">
      <div>
        <h1>Portfolio</h1>
        <div>
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
