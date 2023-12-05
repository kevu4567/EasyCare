// import { BrowserRouter } from "react-router-dom";
import Navbar from "./NavBar";
import "./App.css";
import { FaDog, FaUser, FaHeart, FaMicrophone } from "react-icons/fa";
import { GiArchiveResearch } from "react-icons/gi";
import { useState } from "react";
import SearchPage from "./SearchPage";
function App() {

  return (
    <div className="app">
      <Navbar />
      <SearchPage />
      
    </div>
  );
}

export default App;
