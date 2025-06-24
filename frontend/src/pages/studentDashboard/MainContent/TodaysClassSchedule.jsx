export default function TodaysClassSchedule() {
  // Placeholder data
  const classes = [
    { time: "09:00 AM", subject: "Mathematics" },
    { time: "11:00 AM", subject: "Physics" },
    { time: "02:00 PM", subject: "English" },
  ];

  return (
    <div className="bg-white rounded-xl shadow p-5">
      <h3 className="text-lg font-semibold mb-3">Today’s Classes</h3>
      <ul className="space-y-2">
        {classes.map((cls, idx) => (
          <li
            key={idx}
            className="flex justify-between text-sm border-b pb-1 last:border-0"
          >
            <span>{cls.subject}</span>
            <span className="text-gray-500">{cls.time}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
