import React from "react";
import { Link } from "react-router-dom";

function Start() {
  return (
    <div className="min-h-screen flex flex-col justify-between bg-gradient-to-b from-primary to-[#7EE8FA]">
      <div className="pt-16 px-6 text-white">
        <div className="inline-flex items-center gap-2 mb-10">
          <div className="h-10 w-10 rounded-2xl bg-white/20 flex items-center justify-center font-bold text-xl">
            T
          </div>
          <span className="font-semibold text-lg">Travelio</span>
        </div>
        <h1 className="text-3xl font-semibold mb-3">
          Your smart travel companion
        </h1>
        <p className="text-sm text-white/90 max-w-xs">
          Discover destinations, plan trips, and book stays in one beautiful experience.
        </p>
      </div>

      <div className="px-6 pb-10">
        <Link
          to="/login"
          className="block w-full text-center bg-white text-primary font-semibold py-3 rounded-full shadow-lg"
        >
          Get Started
        </Link>
      </div>
    </div>
  );
}

export default Start;
