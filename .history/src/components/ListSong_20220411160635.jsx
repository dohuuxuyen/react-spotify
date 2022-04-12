import React from "react";
import { AiOutlineCloudDownload } from "react-icons/ai";

const ListSong = () => {
  return (
    <div className="col-span-2">
      <table>
        <thead>
          <tr>
            <th>#</th>
            <th>Title</th>
            <th>Author</th>
            <th>
              <AiOutlineCloudDownload />
            </th>
          </tr>
        </thead>
      </table>
    </div>
  );
};

export default ListSong;
