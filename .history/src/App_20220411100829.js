import { useState } from "react";
import Navbar from "./components/Navbar";
import "./App.css";
import Sidebar from "./components/Sidebar";
import Intro from "./components/Intro";
import Portfolio from "./components/Portfolio";
import { Route, Routes } from "react-router-dom";

function App() {
  const [openMenu, setOpenMenu] = useState(false);
  return (
    <div>
      <Navbar openMenu={openMenu} setOpenMenu={setOpenMenu} />
      <Sidebar openMenu={openMenu} setOpenMenu={setOpenMenu} />
      <Intro />
      <Portfolio />
    </div>

    <div>
      <Routes>
      <Route path></Route>
    </Routes>
    </div>
  );
}

export default App;
