import React from "react";
import { FaDownload } from "react-icons/fa";

const ListSong = () => {
  return (
    <div className="col-span-2  ">
      <table className="w-full">
        <thead className="text-[#fff] h-12">
          <tr>
            <th className="w-[10%]">#</th>
            <th className="w-[60%] text-left ">Title</th>
            <th className="w-[20%]">Author</th>
            <th className="w-[10%] ">
              <FaDownload className="ml-6" />
            </th>
          </tr>
        </thead>
        <tbody className="text-center">
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
