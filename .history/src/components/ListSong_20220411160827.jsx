import React from "react";
import { AiOutlineCloudDownload } from "react-icons/ai";

const ListSong = () => {
  return (
    <div className="col-span-2  ">
      <table className="w-full">
        <thead className="">
          <tr>
            <th>#</th>
            <th>Title</th>
            <th>Author</th>
            <th>
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
