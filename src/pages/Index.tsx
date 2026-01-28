import HeroSection from "@/components/HeroSection";
import ScheduleSection from "@/components/ScheduleSection";
import AccommodationSection from "@/components/AccommodationSection";
import RSVPSection from "@/components/RSVPSection";
import Footer from "@/components/Footer";
import XMPieDataLayer from "@/components/xmpie/XMPieDataLayer";

const Index = () => {
  // Configure your XMPie webhook URL here
  // This will be called when the RSVP form is submitted
  const xmpieWebhookUrl = undefined; // e.g., "https://your-xmpie-server.com/api/webhook"

  return (
    <XMPieDataLayer>
      <main className="min-h-screen" data-xmpie-page="landing">
        <HeroSection />
        <ScheduleSection />
        <AccommodationSection />
        <RSVPSection xmpieWebhookUrl={xmpieWebhookUrl} />
        <Footer />
      </main>
    </XMPieDataLayer>
  );
};

export default Index;
