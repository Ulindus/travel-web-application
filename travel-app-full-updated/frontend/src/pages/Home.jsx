import React, { useState } from "react";
import { Link } from "react-router-dom";
import destinations from "../data/destinations.js";

function Home() {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("Popular");

  // 🔍 Filter logic
  const filteredDestinations = destinations.filter((d) => {
    const matchSearch = d.name
      .toLowerCase()
      .includes(search.toLowerCase());

    const matchCategory =
      category === "Popular" || d.category === category.toLowerCase();

    return matchSearch && matchCategory;
  });

  return (
    <div className="pb-24 min-h-screen bg-light">
      {/* Header */}
      <div className="flex justify-between items-center px-4 pt-5">
        <div>
          <p className="text-xs text-slate-500">Good morning</p>
          <h1 className="text-xl font-semibold text-slate-900">
            Discover
          </h1>
        </div>
        <img
          src="https://i.pravatar.cc/40"
          alt="profile"
          className="w-10 h-10 rounded-full"
        />
      </div>

      {/* Search */}
      <div className="px-4 mt-4">
        <div className="flex items-center gap-2 bg-white rounded-xl px-4 py-3 shadow-sm">
          <span className="text-slate-400 text-lg">🔍</span>
          <input
            type="text"
            placeholder="Search destination"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="flex-1 text-sm outline-none bg-transparent"
          />
        </div>
      </div>

      {/* Categories */}
      <div className="flex gap-3 px-4 mt-5 overflow-x-auto no-scrollbar">
        {["Popular", "Beach", "Mountain", "City"].map((item) => (
          <button
            key={item}
            onClick={() => setCategory(item)}
            className={`px-4 py-2 rounded-full text-xs font-medium whitespace-nowrap ${
              category === item
                ? "bg-primary text-white"
                : "bg-white text-slate-600"
            }`}
          >
            {item}
          </button>
        ))}
      </div>

      {/* Places */}
      <div className="px-4 mt-6">
        <h2 className="font-semibold text-lg text-slate-900 mb-3">
          {category} places
        </h2>

        {filteredDestinations.length === 0 && (
          <p className="text-sm text-slate-500">
            No destinations found.
          </p>
        )}

        <div className="grid gap-4">
          {filteredDestinations.map((d) => (
            <Link
              to={`/destinations/${d.id}`}
              key={d.id}
              className="bg-white rounded-2xl overflow-hidden shadow-sm block"
            >
              <img
                src={d.image}
                alt={d.name}
                className="w-full h-44 object-cover"
              />
              <div className="p-4">
                <div className="flex justify-between items-center mb-1.5">
                  <h3 className="font-semibold text-slate-900 text-[15px]">
                    {d.name}
                  </h3>
                  <span className="text-xs text-slate-500">
                    ⭐ {d.rating}
                  </span>
                </div>
                <p className="text-xs text-slate-500">
                  From ${d.priceFrom} • {d.duration}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Home;
