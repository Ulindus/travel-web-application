import React, { useEffect, useState, useContext } from "react";
import { AuthContext } from "../context/AuthContext.jsx";

export default function MyTrips() {
  const { token } = useContext(AuthContext);
  const [bookings, setBookings] = useState([]);
  const [loading, setLoading] = useState(true);

  // FETCH BOOKINGS
  useEffect(() => {
    if (!token) return;

    const fetchBookings = async () => {
      try {
        const res = await fetch(
          "http://localhost:5000/api/booking/my",
          {
            headers: {
              Authorization: `Bearer ${token}`
            }
          }
        );

        const data = await res.json();
        setBookings(data || []);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchBookings();
  }, [token]);

  // CANCEL BOOKING
  const cancelBooking = async (id) => {
    const confirm = window.confirm(
      "Are you sure you want to cancel this booking?"
    );
    if (!confirm) return;

    try {
      const res = await fetch(
        `http://localhost:5000/api/booking/${id}`,
        {
          method: "DELETE",
          headers: {
            Authorization: `Bearer ${token}`
          }
        }
      );

      if (!res.ok) throw new Error();

      // UPDATE STATUS IN UI
      setBookings((prev) =>
        prev.map((b) =>
          b._id === id ? { ...b, status: "cancelled" } : b
        )
      );

      alert("Booking cancelled");
    } catch (err) {
      alert("Cancel failed");
    }
  };

  if (!token) return <div className="p-6">Please login</div>;
  if (loading) return <div className="p-6">Loading...</div>;

  return (
    <div className="pb-24 min-h-screen bg-light px-4">
      <h1 className="text-xl font-semibold mt-6">My Trips</h1>

      <div className="mt-4 space-y-4">
        {bookings.length === 0 && (
          <p className="text-sm text-slate-500">
            No bookings yet.
          </p>
        )}

        {bookings.map((b) => (
          <div
            key={b._id}
            className="bg-white rounded-xl p-4 shadow-sm"
          >
            <div className="flex justify-between items-start">
              <div>
                <h3 className="font-semibold">
                  {b.destinationName}
                </h3>
                <p className="text-xs text-slate-500">
                  {b.dateFrom} → {b.dateTo}
                </p>
                <p
                  className={`text-xs mt-1 ${
                    b.status === "cancelled"
                      ? "text-red-500"
                      : "text-green-600"
                  }`}
                >
                  Status: {b.status}
                </p>
              </div>

              <div className="text-right">
                <p className="font-semibold text-primary">
                  ${b.totalPrice}
                </p>
                <p className="text-xs text-slate-400">
                  {b.guests} guests
                </p>
              </div>
            </div>

            {/* CANCEL BUTTON */}
            {b.status === "active" && (
              <button
                onClick={() => cancelBooking(b._id)}
                className="mt-4 w-full bg-red-500 text-white py-2 rounded-lg text-sm"
              >
                Cancel Booking
              </button>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
