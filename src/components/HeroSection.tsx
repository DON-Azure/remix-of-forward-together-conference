import { Sparkles, MapPin, Calendar } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen bg-hero flex items-center justify-center overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-72 h-72 bg-gold/10 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-gold/5 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] border border-gold/10 rounded-full" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] border border-gold/5 rounded-full" />
      </div>

      <div className="container relative z-10 px-6 py-20 text-center">
        <div className="animate-fade-up" style={{ animationDelay: "0.1s", opacity: 0 }}>
          <p className="text-gold-light uppercase tracking-[0.3em] text-sm font-medium mb-6">
            You're Invited
          </p>
        </div>

        <div className="animate-fade-up" style={{ animationDelay: "0.2s", opacity: 0 }}>
          <h1 className="font-heading text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-primary-foreground font-semibold mb-4 leading-tight">
            Hidden Hearing
          </h1>
          <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl text-gold font-medium mb-8">
            2026 National Conference
          </h2>
        </div>

        <div className="animate-fade-up" style={{ animationDelay: "0.4s", opacity: 0 }}>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-8 text-primary-foreground/80 mb-10">
            <div className="flex items-center gap-2">
              <MapPin className="w-5 h-5 text-gold" />
              <span className="font-body">The Lyrath Hotel, Kilkenny</span>
            </div>
            <div className="flex items-center gap-2">
              <Calendar className="w-5 h-5 text-gold" />
              <span className="font-body">Friday, 27 February 2026</span>
            </div>
          </div>
        </div>

        <div className="animate-fade-up" style={{ animationDelay: "0.6s", opacity: 0 }}>
          <div className="relative inline-block mb-12">
            <Sparkles className="absolute -top-4 -left-6 w-6 h-6 text-gold animate-shimmer" />
            <h3 className="font-heading text-2xl sm:text-3xl md:text-4xl italic text-gold-light">
              Together Forward
            </h3>
            <Sparkles className="absolute -bottom-4 -right-6 w-6 h-6 text-gold animate-shimmer" style={{ animationDelay: "0.5s" }} />
          </div>
        </div>

        <div className="animate-fade-up" style={{ animationDelay: "0.8s", opacity: 0 }}>
          <div className="flex flex-wrap items-center justify-center gap-4 text-primary-foreground/70 text-lg">
            <span className="px-4 py-2 border border-gold/30 rounded-full">Celebration</span>
            <span className="text-gold">•</span>
            <span className="px-4 py-2 border border-gold/30 rounded-full">Connection</span>
            <span className="text-gold">•</span>
            <span className="px-4 py-2 border border-gold/30 rounded-full">Inspiration</span>
          </div>
        </div>

        <div className="animate-fade-up mt-16" style={{ animationDelay: "1s", opacity: 0 }}>
          <a
            href="#rsvp"
            className="inline-flex items-center gap-3 bg-gold hover:bg-gold-light text-navy font-semibold px-8 py-4 rounded-full transition-all duration-300 hover:scale-105 shadow-gold"
          >
            Confirm Your Attendance
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
