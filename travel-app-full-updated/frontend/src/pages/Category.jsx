import { useParams, Link } from "react-router-dom";
import destinations from "../data/destinations.js";

export default function Category() {
  const { type } = useParams();

  // filter local data
  const filteredDestinations = destinations.filter(
    d => d.category.toLowerCase() === type
  );

  return (
    <div className="pb-24 min-h-screen bg-light px-4">
      <h1 className="text-xl font-semibold mt-6 capitalize">
        {type} places
      </h1>

      {filteredDestinations.length === 0 && (
        <p className="text-sm text-slate-500 mt-4">
          No destinations found.
        </p>
      )}

      <div className="grid gap-4 mt-4">
        {filteredDestinations.map(d => (
          <Link
            key={d.id}
            to={`/destinations/${d.id}`}
            className="bg-white rounded-2xl overflow-hidden shadow-sm block"
          >
            <img
              src={d.image}
              alt={d.name}
              className="w-full h-44 object-cover"
            />
            <div className="p-4">
              <div className="flex justify-between items-center mb-1">
                <h3 className="font-semibold text-slate-900">
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
  );
}
