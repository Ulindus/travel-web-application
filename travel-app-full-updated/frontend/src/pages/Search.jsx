import React from "react";
import destinations from "../data/destinations.js";
import { Link } from "react-router-dom";

function Search() {
  return (
    <div className="pb-24 min-h-screen bg-light">
      <header className="px-4 pt-5">
        <h1 className="text-lg font-semibold text-slate-900">Search</h1>
        <p className="text-xs text-slate-500">
          Find places, hotels and more
        </p>
      </header>

      <div className="px-4 mt-3">
        <div className="flex items-center gap-2 bg-white rounded-xl px-4 py-3 shadow-sm">
          <span className="text-slate-400 text-lg">🔍</span>
          <input
            type="text"
            placeholder="Search destination, city or country"
            className="flex-1 text-sm outline-none bg-transparent"
          />
        </div>
      </div>

      <main className="px-4 mt-4 space-y-2">
        {destinations.map((d) => (
          <Link
            key={d.id}
            to={`/destinations/${d.id}`}
            className="flex justify-between items-center py-2 border-b border-slate-100"
          >
            <div>
              <p className="text-sm font-medium text-slate-800">
                {d.name}
              </p>
              <p className="text-[11px] text-slate-500">{d.country}</p>
            </div>
            <span className="text-xs text-slate-400">›</span>
          </Link>
        ))}
      </main>
    </div>
  );
}

export default Search;
