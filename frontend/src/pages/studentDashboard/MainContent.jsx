import WelcomeBanner from "./MainContent/WelcomeBanner";
import TodaysClassSchedule from "./MainContent/TodaysClassSchedule";
import RecentTestSummary from "./MainContent/RecentTestSummary";
import RecentAnnouncements from "./MainContent/RecentAnnouncements";
import FeedbackSection from "./MainContent/FeedbackSection";


export default function MainContent() {
  return (
    <main className="p-6 space-y-6">
      <WelcomeBanner />
      <TodaysClassSchedule />
      <RecentTestSummary />
      <RecentAnnouncements />
      <FeedbackSection />
    </main>
  );
};