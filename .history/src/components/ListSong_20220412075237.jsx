import React, { useContext, useState } from "react";
import { FaDownload } from "react-icons/fa";
import { Songs } from "../Context";

const ListSong = () => {
  const [idSong, setIdSong] = useState(0);
  const { DataSongs } = useContext(Songs);

  const handlePlaySong = (idSong) => {
    setIdSong(idSong);
  };
  return (
    <div className="col-span-2 overflow-y-scroll">
      <table className="w-full ">
        <thead className="text-[#fff] h-12 ">
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
            <tr
              key={index}
              className={`h-12 bg-[#1E293B] text-[#a3a3a3] hover:bg-slate-600 ${
                idSong === song.id && "text-[green]"
              }`}
              onClick={() => handlePlaySong(song.id)}
            >
              <td>{index + 1}</td>
              <td className="text-left">{song.name}</td>
              <td>{song.author}</td>
              <td>
                <a href={song.links.images.url}>
                  <FaDownload className="mx-auto" />
                </a>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ListSong;
