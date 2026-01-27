import HeroSection from "@/components/HeroSection";
import ScheduleSection from "@/components/ScheduleSection";
import AccommodationSection from "@/components/AccommodationSection";
import RSVPSection from "@/components/RSVPSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <main className="min-h-screen">
      <HeroSection />
      <ScheduleSection />
      <AccommodationSection />
      <RSVPSection />
      <Footer />
    </main>
  );
};

export default Index;
