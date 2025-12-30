import { useParams, useNavigate } from "react-router-dom";

export default function FAQDetail() {
  const { id } = useParams();
  const navigate = useNavigate();

  const answers = {
    1: "You can cancel your reservation from My Trips before check-in.",
    2: "Cancellation terms depend on the hotel and booking type.",
    3: "Unpaid bookings are cancelled automatically after some time.",
    4: "Bookings without payment confirmation are auto-cancelled."
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <button
        onClick={() => navigate(-1)}
        className="px-4 py-4 text-teal-500 text-sm"
      >
        ← Back
      </button>

      <div className="px-4">
        <h1 className="text-lg font-semibold mb-2">FAQ Detail</h1>
        <p className="text-sm text-gray-700">
          {answers[id] || "No details available."}
        </p>
      </div>
    </div>
  );
}
