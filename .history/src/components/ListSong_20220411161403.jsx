import React from "react";
import { AiOutlineCloudDownload } from "react-icons/ai";

const ListSong = () => {
  return (
    <div className="col-span-2  ">
      <table className="w-full">
        <thead className="text-[#fff] leading-6">
          <tr>
            <th className="w-[10%]">#</th>
            <th className="w-[60%] text-left ">Title</th>
            <th className="w-[20%]">Author</th>
            <th className="w-[10%]">
              <AiOutlineCloudDownload />
            </th>
          </tr>
        </thead>
        <tbody>
          <td>1</td>
          <td>1</td>
          <td>1</td>
          <td>1</td>
        </tbody>
      </table>
    </div>
  );
};

export default ListSong;
