import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./components/navbar/Navbar";
import SearchBox from "./components/search/SearchBox";
import Home from "./pages/Home";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />

        <Routes>
          <Route element={<Home />} path={"/"} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
