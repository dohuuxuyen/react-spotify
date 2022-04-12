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
      <div className="gird grid-cols-3 gap-x-5 max-w-6xl mx-auto">
        <div>
          <div className="h-96">
            <img
              src="https://images.unsplash.com/photo-1552733407-5d5c46c3bb3b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=480&q=80"
              alt=""
              className="w-full h-full rounded-lg object-cover"
            />
          </div>
          <h3 className="text-xl text-center font-medium my-4">
            Enjoy the great cold
          </h3>
          <span className="block text-center">6.789 properties</span>
        </div>
        <div className="w-72 inline-block">
          <div className="h-96">
            <img
              src="https://images.unsplash.com/photo-1552733407-5d5c46c3bb3b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=480&q=80"
              alt=""
              className="w-full h-full rounded-lg object-cover"
            />
          </div>
          <h3 className="text-xl text-center font-medium my-4">
            Enjoy the great cold
          </h3>
          <span className="block text-center">6.789 properties</span>
        </div>
        <div className="w-72 inline-block">
          <div className="h-96">
            <img
              src="https://images.unsplash.com/photo-1552733407-5d5c46c3bb3b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=480&q=80"
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
