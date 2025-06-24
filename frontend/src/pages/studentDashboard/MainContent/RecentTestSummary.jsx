export default function RecentTestSummary() {
  // Sample results
  const results = [
    { subject: "Math", score: "88/100" },
    { subject: "Science", score: "92/100" },
    { subject: "English", score: "85/100" },
  ];

  return (
    <div className="bg-white rounded-xl shadow p-5">
      <h3 className="text-lg font-semibold mb-3">Recent Test Results</h3>
      <ul className="space-y-2">
        {results.map((res, idx) => (
          <li key={idx} className="flex justify-between text-sm border-b pb-1 last:border-0">
            <span>{res.subject}</span>
            <span className="text-green-600 font-semibold">{res.score}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
