import React from "react";
import { Link } from "react-router-dom";

export default function LandingPage() {
  return (
    <div>
      <div className="fixed h-full w-full flex items-center justify-center bg-cyan-400">
        <Link to="/draw">
          <img className="w-80" alt="drawit logo" src="/drawit_logo.png" />
        </Link>
      </div>
    </div>
  );
}
