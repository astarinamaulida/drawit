import React from "react";
import "./index.css";
import Navbar from "./components/Navbar";
import { Routes, Route } from "react-router-dom";
import LandingPage from "./components/LandingPage";
import DrawPage from "./components/DrawPage";

function App() {
  return (
    <div className="container">
      <LandingPage />
      <div className="App">
        <Routes>
          <Navbar />
          <Route path="/draw" element={<DrawPage />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
