export default function RecentAnnouncements() {
  const announcements = [
    "Math assignment due on Friday.",
    "Physics test postponed to next Monday.",
    "PTM scheduled for next weekend.",
  ];

  return (
    <div className="bg-white rounded-xl shadow p-5">
      <h3 className="text-lg font-semibold mb-3">Recent Announcements</h3>
      <ul className="list-disc pl-5 text-sm space-y-1">
        {announcements.map((note, idx) => (
          <li key={idx}>{note}</li>
        ))}
      </ul>
    </div>
  );
}
