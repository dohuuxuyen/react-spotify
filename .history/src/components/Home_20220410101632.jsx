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
      <div className="gird grid-cols-3 max-w-6xl mx-auto">
        <div className="w-72">
          <div className="h-96">
            <img
              src="https://hotgirlviet.vn/wp-content/uploads/2021/02/Vicky-Thien-Tran-01.jpg"
              alt=""
              className="w-full h-full rounded-lg object-cover"
            />
          </div>
          <h3 className="text-xl text-center font-medium my-4">
            Enjoy the great cold
          </h3>
          <span className="block text-center">6.789 properties</span>
        </div>
      </div>
    </div>
  );
};

export default Home;
