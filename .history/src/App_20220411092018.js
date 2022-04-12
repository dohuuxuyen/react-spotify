import { useState } from "react";
import Navbar from "./components/Navbar";
import "./App.css";
import Sidebar from "./components/Sidebar";

function App() {
  const [openMenu, setOpenMenu] = useState(false);
  return (
    <div>
      <Navbar openMenu={openMenu} setOpenMenu={setOpenMenu} />
      <Sidebar openMenu={openMenu} setOpenMenu={setOpenMenu} />
    </div>
  );
}

export default App;
