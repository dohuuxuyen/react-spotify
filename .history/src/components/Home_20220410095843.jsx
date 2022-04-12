import React from "react";

const Home = () => {
  return (
    <div className=" my-8">
      <h1 className="text-[50px] text-center font-medium  mb-3">
        Live anywhere
      </h1>
      <p className="text-[20px] text-center opacity-50 mb-8">
        Keep calm & travel on
      </p>
      <div className="gird grid-rows-3 max-w-7xl ">
        <div>
          <div>
            <img
              src="https://hotgirlviet.vn/wp-content/uploads/2021/02/Vicky-Thien-Tran-01.jpg"
              alt=""
            />
          </div>
          <h3>Enjoy the great cold</h3>
          <span>6.789 properties</span>
        </div>
      </div>
    </div>
  );
};

export default Home;
