import "./App.css";
import DetailSong from "./components/DetailSong";
import ListSong from "./components/ListSong";
import Navbar from "./components/Navbar";
import { Songs } from "./Context";
import DataSong from "./data/songs.json";

function App() {
  return (
    <div className="App">
      <Songs.Provider>
        <Navbar />
        <div className="grid grid-cols-3 bg-[#334155] h-[70vh]">
          <DetailSong />
          <ListSong />
        </div>
      </Songs.Provider>
    </div>
  );
}

export default App;
