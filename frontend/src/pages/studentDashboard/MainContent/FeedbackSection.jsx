import { useState } from "react";

export default function FeedbackSection() {
  const [feedback, setFeedback] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Send `feedback` to backend API here (POST)
    setSubmitted(true);
    setFeedback("");
  };

  return (
    <div className="bg-white rounded-xl shadow p-5">
      <h3 className="text-lg font-semibold mb-3">Give Feedback</h3>
      <form onSubmit={handleSubmit} className="space-y-3">
        <textarea
          className="w-full border rounded p-2 text-sm"
          rows="3"
          placeholder="Tell us how we can improve..."
          value={feedback}
          onChange={(e) => setFeedback(e.target.value)}
        ></textarea>
        <button
          type="submit"
          className="bg-blue-600 text-white px-4 py-2 text-sm rounded hover:bg-blue-700"
        >
          Submit Feedback
        </button>
        {submitted && (
          <p className="text-green-600 text-sm mt-2">Thank you for your feedback!</p>
        )}
      </form>
    </div>
  );
}
