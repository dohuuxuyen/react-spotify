import React, { useContext } from "react";
import { FaDownload } from "react-icons/fa";
import { Songs } from "../Context";

const ListSong = () => {
  const { DataSongs } = useContext(Songs);
  return (
    <div className="col-span-2  ">
      <table className="w-full">
        <thead className="text-[#fff] h-12">
          <tr>
            <th className="w-[10%]">#</th>
            <th className="w-[60%] text-left ">Title</th>
            <th className="w-[20%]">Author</th>
            <th className="w-[10%] ">
              <FaDownload className="mx-auto" />
            </th>
          </tr>
        </thead>
        <tbody className="text-center">
          {DataSongs.map((song, index) => (
            <tr>
              <td>1</td>
              <td className="text-left">1</td>
              <td>1</td>
              <td>1</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ListSong;
