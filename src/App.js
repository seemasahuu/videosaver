import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./Home";
import Navbar from "./Navbar";
import Nav from "./Nav";
import Saver from "./Saver";
import Videoviewpage from "./Videoviewpage";
function App() {
  return (
    <div className="  bg-slate-200 w-full h-screen">
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/Saver" element={<Saver />} />
        <Route path="/Videoviewpage" element={<Videoviewpage/>} />

        <Route path="/Navbar" element={<Navbar />} />
        <Route path="/Nav" element={<Nav />} />
      </Routes> 
    </div>
  );
}

export default App;
