import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import EventPage from "./pages/eventPage/EventPage";
import Home from "./pages/home/Home";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route element={<Home />} path={"/"} />
          <Route element={<EventPage />} path={"/event"} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
