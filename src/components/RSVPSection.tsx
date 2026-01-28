import { useState, useEffect } from "react";
import { Check, Send, User, Mail } from "lucide-react";
import { useXMPieData } from "@/hooks/useXMPieData";
import { XMPieFormSubmission } from "@/types/xmpie";

interface RSVPSectionProps {
  // Optional XMPie webhook URL for form submission
  xmpieWebhookUrl?: string;
}

const RSVPSection = ({ xmpieWebhookUrl }: RSVPSectionProps) => {
  const { recipient, tracking, isPersonalized } = useXMPieData();
  
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    businessMeeting: false,
    galaEvening: false,
    accommodation: false,
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Pre-fill form with XMPie personalization data
  useEffect(() => {
    if (isPersonalized) {
      setFormData(prev => ({
        ...prev,
        name: recipient.fullName !== '[Full Name]' ? recipient.fullName : prev.name,
        email: recipient.email !== '[email@example.com]' ? recipient.email : prev.email,
      }));
    }
  }, [isPersonalized, recipient]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Prepare XMPie-compatible form submission data
    const submissionData: XMPieFormSubmission = {
      recipientId: tracking?.recipientId || '',
      purlCode: tracking?.purlCode || '',
      name: formData.name,
      email: formData.email,
      businessMeeting: formData.businessMeeting,
      galaEvening: formData.galaEvening,
      accommodation: formData.accommodation,
      submittedAt: new Date().toISOString(),
    };

    // Update XMPie data layer
    if ((window as any).xmpieDataLayer) {
      (window as any).xmpieDataLayer.formSubmission = submissionData;
      (window as any).xmpieDataLayer.tracking = {
        ...tracking,
        formSubmissions: (tracking?.formSubmissions || 0) + 1,
      };
    }

    // Send to XMPie webhook if configured
    if (xmpieWebhookUrl) {
      try {
        await fetch(xmpieWebhookUrl, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          mode: 'no-cors', // XMPie endpoints may not support CORS
          body: JSON.stringify({
            ...submissionData,
            // XMPie-specific tracking fields
            _xmpie_recipient_id: tracking?.recipientId,
            _xmpie_campaign_id: tracking?.campaignId,
            _xmpie_purl_code: tracking?.purlCode,
            _xmpie_timestamp: new Date().toISOString(),
          }),
        });
        console.log('[XMPie] Form submission sent to webhook');
      } catch (error) {
        console.error('[XMPie] Webhook submission error:', error);
      }
    }

    // Log for XMPie integration debugging
    console.log('[XMPie] Form submitted:', submissionData);
    
    setIsSubmitting(false);
    setIsSubmitted(true);
  };

  if (isSubmitted) {
    return (
      <section id="rsvp" className="py-24 bg-background" data-xmpie-section="rsvp-confirmation">
        <div className="container px-6">
          <div className="max-w-xl mx-auto text-center">
            <div className="w-20 h-20 rounded-full bg-accent/20 flex items-center justify-center mx-auto mb-6">
              <Check className="w-10 h-10 text-accent" />
            </div>
            <h2 className="font-heading text-3xl text-foreground mb-4">
              Thank You{isPersonalized ? `, ${recipient.firstName}` : ''}!
            </h2>
            <p className="text-muted-foreground text-lg">
              Your RSVP has been received. We look forward to seeing you at the conference!
            </p>
            {/* Hidden tracking data for XMPie */}
            <div className="hidden" data-xmpie-tracking="form-submitted">
              <span data-field="recipientId">{tracking?.recipientId}</span>
              <span data-field="purlCode">{tracking?.purlCode}</span>
              <span data-field="campaignId">{tracking?.campaignId}</span>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="rsvp" className="py-24 bg-background" data-xmpie-section="rsvp-form">
      <div className="container px-6">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="font-heading text-4xl md:text-5xl text-foreground mb-4">
              Confirm Your Attendance
            </h2>
            <p className="text-muted-foreground text-lg">
              {isPersonalized 
                ? `${recipient.firstName}, please let us know your plans for the conference`
                : 'Please let us know your plans for the conference'
              }
            </p>
          </div>

          <form 
            onSubmit={handleSubmit} 
            className="bg-card rounded-2xl p-8 md:p-10 shadow-elevated border border-border"
            data-xmpie-form="rsvp"
          >
            {/* Hidden XMPie tracking fields */}
            <input type="hidden" name="_xmpie_recipient_id" value={tracking?.recipientId || ''} />
            <input type="hidden" name="_xmpie_campaign_id" value={tracking?.campaignId || ''} />
            <input type="hidden" name="_xmpie_purl_code" value={tracking?.purlCode || ''} />
            
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
                    name="name"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full pl-12 pr-4 py-3 bg-secondary border border-border rounded-xl focus:outline-none focus:ring-2 focus:ring-gold/50 focus:border-gold transition-all"
                    placeholder="Enter your full name"
                    xmp-text="xmp.r.FullName"
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
                    name="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full pl-12 pr-4 py-3 bg-secondary border border-border rounded-xl focus:outline-none focus:ring-2 focus:ring-gold/50 focus:border-gold transition-all"
                    placeholder="Enter your email"
                    xmp-text="xmp.r.Email"
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
                    name="businessMeeting"
                    checked={formData.businessMeeting}
                    onChange={(e) => setFormData({ ...formData, businessMeeting: e.target.checked })}
                    className="sr-only peer"
                    xmp-text="xmp.r.BusinessMeeting"
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
                    name="galaEvening"
                    checked={formData.galaEvening}
                    onChange={(e) => setFormData({ ...formData, galaEvening: e.target.checked })}
                    className="sr-only peer"
                    xmp-text="xmp.r.GalaEvening"
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
                    name="accommodation"
                    checked={formData.accommodation}
                    onChange={(e) => setFormData({ ...formData, accommodation: e.target.checked })}
                    className="sr-only peer"
                    xmp-text="xmp.r.Accommodation"
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
              disabled={isSubmitting}
              className="w-full flex items-center justify-center gap-3 bg-primary hover:bg-navy-light text-primary-foreground font-semibold py-4 rounded-xl transition-all duration-300 hover:scale-[1.02] shadow-soft hover:shadow-elevated disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <Send className="w-5 h-5" />
              {isSubmitting ? 'Submitting...' : 'Submit RSVP'}
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
