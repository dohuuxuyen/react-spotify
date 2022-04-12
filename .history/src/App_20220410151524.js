import { useState } from "react";
import Navbar from "./components/Navbar";
import "./App.css";

function App() {
  const [openMenu, setOpenMenu] = useState(false);
  return (
    <div>
      <Navbar openMenu={openMenu} setOpenMenu={setOpenMenu} />
    </div>
  );
}

export default App;
