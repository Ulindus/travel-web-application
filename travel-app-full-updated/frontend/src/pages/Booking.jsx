import { useParams, useNavigate } from "react-router-dom";
import { useContext, useState } from "react";
import destinations from "../data/destinations.js";
import { AuthContext } from "../context/AuthContext.jsx";

export default function Booking() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { token } = useContext(AuthContext);

  const destination = destinations.find(d => d.id === Number(id));

  const [dateFrom, setDateFrom] = useState("2025-01-01");
  const [dateTo, setDateTo] = useState("2025-01-07");
  const [guests, setGuests] = useState(1);
  const [loading, setLoading] = useState(false);

  if (!destination) {
    return <div className="p-6">Destination not found</div>;
  }

  const handleBooking = async () => {
    if (!token) {
      alert("Please login to continue");
      navigate("/login");
      return;
    }

    setLoading(true);

    try {
      const res = await fetch("http://localhost:5000/api/booking", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`
        },
        body: JSON.stringify({
          destinationId: destination.id,
          destinationName: destination.name,
          dateFrom,
          dateTo,
          guests,
          totalPrice: destination.priceFrom * guests
        })
      });

      if (!res.ok) throw new Error();

      alert("Booking successful!");
      navigate("/my-trips");
    } catch {
      alert("Booking failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="pb-24 min-h-screen bg-light">
      {/* IMAGE */}
      <img
        src={destination.image}
        alt={destination.name}
        className="w-full h-64 object-cover"
      />

      {/* CONTENT */}
      <div className="bg-white rounded-t-3xl -mt-8 px-5 pt-6">
        <div className="flex justify-between items-start">
          <div>
            <h1 className="text-xl font-semibold">{destination.name}</h1>
            <p className="text-xs text-slate-500">Indonesia</p>
          </div>
          <div className="text-right">
            <p className="text-primary font-semibold text-lg">
              ${destination.priceFrom}
            </p>
            <p className="text-xs text-slate-400">per person</p>
          </div>
        </div>

        <p className="text-sm text-slate-500 mt-2">
          ⭐ {destination.rating} • {destination.duration}
        </p>

        <p className="text-sm text-slate-600 mt-3">
          Bali is a tropical paradise known for its lush rice terraces,
          iconic temples, and serene beaches.
        </p>

        {/* DATES */}
        <div className="mt-4 space-y-3">
          <div>
            <label className="text-xs font-medium">From</label>
            <input
              type="date"
              value={dateFrom}
              onChange={e => setDateFrom(e.target.value)}
              className="w-full mt-1 p-3 rounded-xl border"
            />
          </div>

          <div>
            <label className="text-xs font-medium">To</label>
            <input
              type="date"
              value={dateTo}
              onChange={e => setDateTo(e.target.value)}
              className="w-full mt-1 p-3 rounded-xl border"
            />
          </div>

          <div>
            <label className="text-xs font-medium">Guests</label>
            <input
              type="number"
              min="1"
              value={guests}
              onChange={e => setGuests(Number(e.target.value))}
              className="w-full mt-1 p-3 rounded-xl border"
            />
          </div>
        </div>

        {/* BOOK BUTTON */}
        <button
          onClick={handleBooking}
          disabled={loading}
          className="mt-6 w-full bg-primary text-white py-4 rounded-xl font-semibold disabled:opacity-50"
        >
          {loading ? "Booking..." : "Book now"}
        </button>
      </div>
    </div>
  );
}
