import React from "react";

const Home = () => {
  const data = [
    {
      img: "https://hotgirlviet.vn/wp-content/uploads/2021/02/Vicky-Thien-Tran-01.jpg",
      title: "Enjoy the great cold",
      desc: "6,789 properties",
    },
    {
      img: "https://kenh14cdn.com/thumb_w/660/203336854389633024/2022/2/15/photo-4-16449222716821921394023.jpg",
      title: "Enjoy the great hot",
      desc: "1.234 properties",
    },
    {
      img: "https://icdn.dantri.com.vn/thumb_w/640/2020/10/01/hot-girl-anh-the-mat-xinh-nhu-bup-be-goi-cam-bat-ngo-sau-4-nam-noi-tieng-15-1601531729170.jpg",
      title: "Enjoy the great moment",
      desc: "4,567 properties",
    },
  ];
  return (
    <div className=" my-8">
      <h1 className="text-[50px] text-center font-medium  mb-3">
        Live anywhere
      </h1>
      <p className="text-[20px] text-center opacity-50 mb-8">
        Keep calm & travel on
      </p>
      <div className="grid md:grid-cols-1  lg:grid-cols-3 gap-x-5 max-w-6xl mx-auto">
        {data.map((d) => (
          <div className="">
            <div className="h-96">
              <img
                src={d.img}
                alt=""
                className="w-full h-full rounded-lg object-cover"
              />
            </div>
            <h3 className="text-xl text-center font-medium my-4">{d.title}</h3>
            <span className="block text-center mb-5">{d.desc}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
