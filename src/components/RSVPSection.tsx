import { useState } from "react";
import { Check, Send, User, Mail } from "lucide-react";

const RSVPSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    businessMeeting: false,
    galaEvening: false,
    accommodation: false,
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, this would submit to a backend
    setIsSubmitted(true);
  };

  if (isSubmitted) {
    return (
      <section id="rsvp" className="py-24 bg-background">
        <div className="container px-6">
          <div className="max-w-xl mx-auto text-center">
            <div className="w-20 h-20 rounded-full bg-accent/20 flex items-center justify-center mx-auto mb-6">
              <Check className="w-10 h-10 text-accent" />
            </div>
            <h2 className="font-heading text-3xl text-foreground mb-4">
              Thank You!
            </h2>
            <p className="text-muted-foreground text-lg">
              Your RSVP has been received. We look forward to seeing you at the conference!
            </p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="rsvp" className="py-24 bg-background">
      <div className="container px-6">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="font-heading text-4xl md:text-5xl text-foreground mb-4">
              Confirm Your Attendance
            </h2>
            <p className="text-muted-foreground text-lg">
              Please let us know your plans for the conference
            </p>
          </div>

          <form onSubmit={handleSubmit} className="bg-card rounded-2xl p-8 md:p-10 shadow-elevated border border-border">
            {/* Personal Details */}
            <div className="space-y-6 mb-10">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                  Full Name
                </label>
                <div className="relative">
                  <User className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                  <input
                    type="text"
                    id="name"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full pl-12 pr-4 py-3 bg-secondary border border-border rounded-xl focus:outline-none focus:ring-2 focus:ring-gold/50 focus:border-gold transition-all"
                    placeholder="Enter your full name"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                  Email Address
                </label>
                <div className="relative">
                  <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                  <input
                    type="email"
                    id="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full pl-12 pr-4 py-3 bg-secondary border border-border rounded-xl focus:outline-none focus:ring-2 focus:ring-gold/50 focus:border-gold transition-all"
                    placeholder="Enter your email"
                  />
                </div>
              </div>
            </div>

            {/* Attendance Options */}
            <div className="space-y-4 mb-10">
              <h3 className="font-heading text-xl text-foreground mb-4">I will attend:</h3>
              
              <label className="flex items-start gap-4 p-4 bg-secondary rounded-xl cursor-pointer hover:bg-muted transition-colors group">
                <div className="relative mt-0.5">
                  <input
                    type="checkbox"
                    checked={formData.businessMeeting}
                    onChange={(e) => setFormData({ ...formData, businessMeeting: e.target.checked })}
                    className="sr-only peer"
                  />
                  <div className="w-6 h-6 border-2 border-border rounded-md peer-checked:bg-primary peer-checked:border-primary transition-all flex items-center justify-center">
                    {formData.businessMeeting && <Check className="w-4 h-4 text-primary-foreground" />}
                  </div>
                </div>
                <div>
                  <span className="font-medium text-foreground">Business Meeting</span>
                  <p className="text-sm text-muted-foreground mt-1">Lunch at 12:00, Meeting 1:00 pm – 4:30 pm</p>
                </div>
              </label>

              <label className="flex items-start gap-4 p-4 bg-secondary rounded-xl cursor-pointer hover:bg-muted transition-colors group">
                <div className="relative mt-0.5">
                  <input
                    type="checkbox"
                    checked={formData.galaEvening}
                    onChange={(e) => setFormData({ ...formData, galaEvening: e.target.checked })}
                    className="sr-only peer"
                  />
                  <div className="w-6 h-6 border-2 border-border rounded-md peer-checked:bg-gold peer-checked:border-gold transition-all flex items-center justify-center">
                    {formData.galaEvening && <Check className="w-4 h-4 text-navy" />}
                  </div>
                </div>
                <div>
                  <span className="font-medium text-foreground">Gala Evening</span>
                  <p className="text-sm text-muted-foreground mt-1">Awards Ceremony & Entertainment, 7:00 pm – late</p>
                </div>
              </label>

              <label className="flex items-start gap-4 p-4 bg-secondary rounded-xl cursor-pointer hover:bg-muted transition-colors group">
                <div className="relative mt-0.5">
                  <input
                    type="checkbox"
                    checked={formData.accommodation}
                    onChange={(e) => setFormData({ ...formData, accommodation: e.target.checked })}
                    className="sr-only peer"
                  />
                  <div className="w-6 h-6 border-2 border-border rounded-md peer-checked:bg-primary peer-checked:border-primary transition-all flex items-center justify-center">
                    {formData.accommodation && <Check className="w-4 h-4 text-primary-foreground" />}
                  </div>
                </div>
                <div>
                  <span className="font-medium text-foreground">Accommodation Required</span>
                  <p className="text-sm text-muted-foreground mt-1">I need a room at The Lyrath Hotel</p>
                </div>
              </label>
            </div>

            <button
              type="submit"
              className="w-full flex items-center justify-center gap-3 bg-primary hover:bg-navy-light text-primary-foreground font-semibold py-4 rounded-xl transition-all duration-300 hover:scale-[1.02] shadow-soft hover:shadow-elevated"
            >
              <Send className="w-5 h-5" />
              Submit RSVP
            </button>

            <p className="text-center text-sm text-muted-foreground mt-6">
              Please RSVP by <span className="font-semibold text-foreground">14 February 2026</span>
            </p>
          </form>
        </div>
      </div>
    </section>
  );
};

export default RSVPSection;
