import { Hotel, AlertCircle } from "lucide-react";

const AccommodationSection = () => {
  return (
    <section className="py-20 bg-secondary">
      <div className="container px-6">
        <div className="max-w-3xl mx-auto text-center">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-6">
            <Hotel className="w-8 h-8 text-primary" />
          </div>
          
          <h2 className="font-heading text-3xl md:text-4xl text-foreground mb-4">
            Accommodation
          </h2>
          
          <p className="text-lg text-muted-foreground mb-6">
            Rooms are available at <span className="font-semibold text-foreground">The Lyrath Hotel</span> for conference attendees.
          </p>
          
          <div className="inline-flex items-center gap-2 bg-gold/10 text-gold-light border border-gold/20 rounded-full px-6 py-3">
            <AlertCircle className="w-5 h-5" />
            <span className="font-medium">Limited availability – book early!</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AccommodationSection;
