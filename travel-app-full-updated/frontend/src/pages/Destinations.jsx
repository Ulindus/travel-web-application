import React from "react";
import { Link } from "react-router-dom";
import destinations from "../data/destinations.js";

function Destinations() {
  return (
    <div className="pb-24 min-h-screen bg-light">
      <header className="px-4 pt-5 flex items-center gap-3">
        <Link to="/home" className="text-lg">←</Link>
        <div>
          <h1 className="text-lg font-semibold text-slate-900">
            Destinations
          </h1>
          <p className="text-xs text-slate-500">
            Choose your next adventure
          </p>
        </div>
      </header>

      <main className="px-4 mt-4 space-y-3">
        {destinations.map((d) => (
          <Link
            key={d.id}
            to={`/destinations/${d.id}`}
            className="flex bg-white rounded-2xl overflow-hidden shadow-sm"
          >
            <img
              src={d.image}
              alt={d.name}
              className="w-24 h-24 object-cover"
            />
            <div className="p-3 flex-1 flex flex-col justify-between">
              <div>
                <h3 className="font-semibold text-[15px]">{d.name}</h3>
                <p className="text-xs text-slate-500">{d.country}</p>
              </div>
              <div className="flex justify-between items-end text-xs mt-1.5">
                <span className="text-slate-500">
                  ⭐ {d.rating} • {d.reviews} reviews
                </span>
                <span className="font-semibold text-primary">
                  ${d.priceFrom}
                </span>
              </div>
            </div>
          </Link>
        ))}
      </main>
    </div>
  );
}

export default Destinations;
