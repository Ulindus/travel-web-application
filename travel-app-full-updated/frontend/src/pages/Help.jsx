import { useNavigate } from "react-router-dom";

export default function Help() {
  const navigate = useNavigate();

  const faqs = [
    { id: 1, question: "How do I cancel my reservation?" },
    { id: 2, question: "Room Booking Cancellation Terms and Conditions" },
    { id: 3, question: "How to cancel unpaid Room Booking Payments" },
    { id: 4, question: "Room bookings are cancelled automatically" }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-teal-500 text-white px-4 py-6">
        <h1 className="text-lg font-semibold">How can we help?</h1>
      </div>

      {/* Search */}
      <div className="px-4 mt-4">
        <input
          placeholder="What is your question?"
          className="w-full rounded-full px-4 py-2 bg-gray-100 outline-none"
        />
      </div>

      {/* FAQ List */}
      <div className="px-4 mt-6">
        <h2 className="text-sm font-semibold text-gray-700 mb-3">
          Paying for a reservation
        </h2>

        {faqs.map(faq => (
          <div
            key={faq.id}
            onClick={() => navigate(`/faq/${faq.id}`)}
            className="py-4 border-b text-sm cursor-pointer"
          >
            {faq.question}
          </div>
        ))}
      </div>
    </div>
  );
}
