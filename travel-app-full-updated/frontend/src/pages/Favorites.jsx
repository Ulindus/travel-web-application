import React from "react";
import destinations from "../data/destinations.js";
import { Link } from "react-router-dom";

function Favorites() {
  const saved = destinations.slice(0, 2);

  return (
    <div className="pb-24 min-h-screen bg-light">
      <header className="px-4 pt-5">
        <h1 className="text-lg font-semibold text-slate-900">Saved</h1>
        <p className="text-xs text-slate-500">
          Your favourite places in one place
        </p>
      </header>

      <main className="px-4 mt-4 space-y-3">
        {saved.map((d) => (
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
              <span className="text-xs text-primary font-semibold mt-1.5">
                View details
              </span>
            </div>
          </Link>
        ))}

        {saved.length === 0 && (
          <p className="text-sm text-slate-500 mt-6 text-center">
            You haven't saved any destinations yet.
          </p>
        )}
      </main>
    </div>
  );
}

export default Favorites;
