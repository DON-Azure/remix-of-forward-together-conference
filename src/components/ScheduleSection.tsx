import { Utensils, Clock, Shirt, Sparkles, Wine } from "lucide-react";

const ScheduleSection = () => {
  return (
    <section className="py-24 bg-background">
      <div className="container px-6">
        <div className="text-center mb-16">
          <h2 className="font-heading text-4xl md:text-5xl text-foreground mb-4">
            Event Schedule
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Join us for a day of business insights and an evening of celebration
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Business Meeting Card */}
          <div className="group relative bg-card rounded-2xl p-8 shadow-soft hover:shadow-elevated transition-all duration-500 border border-border overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-navy to-navy-light" />
            
            <div className="flex items-center gap-4 mb-6">
              <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center">
                <Clock className="w-7 h-7 text-primary" />
              </div>
              <h3 className="font-heading text-2xl text-foreground">Business Meeting</h3>
            </div>

            <div className="space-y-4 text-muted-foreground">
              <div className="flex items-center gap-3">
                <span className="text-xl">📅</span>
                <span>27 February 2026</span>
              </div>
              <div className="flex items-center gap-3">
                <Utensils className="w-5 h-5 text-gold" />
                <span>Lunch at 12:00</span>
              </div>
              <div className="flex items-center gap-3">
                <Clock className="w-5 h-5 text-gold" />
                <span>Meeting 1:00 pm – 4:30 pm</span>
              </div>
              <div className="flex items-center gap-3 pt-4 border-t border-border">
                <Shirt className="w-5 h-5 text-primary" />
                <span className="font-medium text-foreground">Attire: Informal</span>
              </div>
            </div>

            <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-primary/5 rounded-full group-hover:scale-150 transition-transform duration-700" />
          </div>

          {/* Gala Evening Card */}
          <div className="group relative bg-navy rounded-2xl p-8 shadow-elevated overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-gold to-gold-light" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_hsl(38_70%_50%_/_0.1),_transparent_50%)]" />
            
            <div className="relative z-10">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-14 h-14 rounded-xl bg-gold/20 flex items-center justify-center">
                  <Sparkles className="w-7 h-7 text-gold" />
                </div>
                <h3 className="font-heading text-2xl text-cream">Gala Evening</h3>
              </div>

              <div className="space-y-4 text-cream/80">
                <div className="flex items-center gap-3">
                  <Wine className="w-5 h-5 text-gold" />
                  <span>Awards Ceremony & Entertainment</span>
                </div>
                <div className="flex items-center gap-3">
                  <Clock className="w-5 h-5 text-gold" />
                  <span>7:00 pm – late</span>
                </div>
                <div className="flex items-center gap-3 pt-4 border-t border-cream/20">
                  <Sparkles className="w-5 h-5 text-gold animate-shimmer" />
                  <span className="font-medium text-gold">Attire: Formal / Dress to Impress</span>
                </div>
              </div>
            </div>

            <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-gold/10 rounded-full group-hover:scale-150 transition-transform duration-700" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ScheduleSection;
