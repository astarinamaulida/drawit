import React from "react";
import "./index.css";
import LandingPage from "./components/LandingPage";
import DrawPage from "./components/DrawPage";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="container">
      <div className="App">
        <Routes>
          <Route path="/"     element={<LandingPage />} />
          <Route path="/draw" element={<DrawPage />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
