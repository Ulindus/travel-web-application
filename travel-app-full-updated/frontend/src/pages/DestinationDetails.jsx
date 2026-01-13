import { useParams, useNavigate } from "react-router-dom";
import { useContext, useState } from "react";
import destinations from "../data/destinations.js";
import { AuthContext } from "../context/AuthContext.jsx";

export default function DestinationDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { token } = useContext(AuthContext);

  const destination = destinations.find(d => d.id === Number(id));

  const [dateFrom, setDateFrom] = useState("2025-01-01");
  const [dateTo, setDateTo] = useState("2025-01-07");
  const [guests, setGuests] = useState(1);
  const [loading, setLoading] = useState(false);

  if (!destination) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        Destination not found
      </div>
    );
  }

  const bookNow = async () => {
    if (!token) {
      alert("Please login first");
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
    } catch (err) {
      alert("Booking failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="pb-24 min-h-screen bg-light">
      {/* Header */}
      <header className="px-4 pt-5 flex items-center gap-3">
        <button onClick={() => navigate(-1)} className="text-lg">←</button>
        <h1 className="text-lg font-semibold">{destination.name}</h1>
      </header>

      {/* Image */}
      <img
        src={destination.image}
        alt={destination.name}
        className="w-full h-64 object-cover mt-4"
      />

      {/* Content */}
      <div className="px-4 mt-4 space-y-4">
        <div className="flex justify-between items-center">
          <h2 className="text-xl font-semibold">{destination.name}</h2>
          <span className="text-primary font-semibold">
            ${destination.priceFrom} <span className="text-xs">per person</span>
          </span>
        </div>

        <p className="text-sm text-slate-500">
          ⭐ {destination.rating} • 7 days
        </p>

        <p className="text-sm text-slate-600">
          Bali is a tropical paradise known for its lush rice terraces,
          iconic temples, and serene beaches.
        </p>

        {/* Highlights */}
        <div>
          <h3 className="font-semibold mb-2">Highlights</h3>
          <div className="flex gap-2 flex-wrap">
            <span className="px-3 py-1 text-xs bg-white rounded-full">Ubud Rice Terraces</span>
            <span className="px-3 py-1 text-xs bg-white rounded-full">Uluwatu Temple</span>
            <span className="px-3 py-1 text-xs bg-white rounded-full">Nusa Penida Trip</span>
          </div>
        </div>

        {/* Date From */}
        <div>
          <label className="text-sm font-medium">From</label>
          <input
            type="date"
            value={dateFrom}
            onChange={e => setDateFrom(e.target.value)}
            className="w-full mt-1 px-4 py-3 border rounded-xl"
          />
        </div>

        {/* Date To */}
        <div>
          <label className="text-sm font-medium">To</label>
          <input
            type="date"
            value={dateTo}
            onChange={e => setDateTo(e.target.value)}
            className="w-full mt-1 px-4 py-3 border rounded-xl"
          />
        </div>

        {/* Guests */}
        <div>
          <label className="text-sm font-medium">Guests</label>
          <input
            type="number"
            min="1"
            value={guests}
            onChange={e => setGuests(Number(e.target.value))}
            className="w-full mt-1 px-4 py-3 border rounded-xl"
          />
        </div>

        {/* Book Button */}
        <button
          onClick={bookNow}
          disabled={loading}
          className="mt-4 w-full bg-primary text-white py-3 rounded-xl font-medium disabled:opacity-50"
        >
          {loading ? "Booking..." : "Book now"}
        </button>
      </div>
    </div>
  );
}
