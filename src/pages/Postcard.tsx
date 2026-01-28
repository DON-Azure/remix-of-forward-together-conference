import { Sparkles, MapPin, Calendar, Utensils, Clock, Shirt, Wine, Hotel, QrCode } from "lucide-react";
import { XMPIE_PLACEHOLDERS } from "@/types/xmpie";

// Print-ready postcard with XMPie ADOR placeholders for variable data printing
const Postcard = () => {
  return (
    <div className="min-h-screen bg-muted p-8 print:p-0 print:bg-white" data-xmpie-template="postcard">
      <div className="max-w-4xl mx-auto space-y-8 print:space-y-0">
        {/* Print Instructions - Hidden when printing */}
        <div className="bg-card rounded-xl p-6 shadow-soft border border-border print:hidden">
          <h1 className="font-heading text-2xl text-foreground mb-2">A5 Postcard Preview (XMPie Ready)</h1>
          <p className="text-muted-foreground mb-4">
            This template includes XMPie ADOR placeholders for variable data printing. 
            Export the HTML to use with XMPie PersonalEffect or uProduce.
          </p>
          <div className="flex gap-4">
            <button 
              onClick={() => window.print()} 
              className="bg-primary text-primary-foreground px-6 py-2 rounded-lg font-medium hover:bg-navy-light transition-colors"
            >
              Print Postcard
            </button>
            <button 
              onClick={() => {
                const html = document.documentElement.outerHTML;
                const blob = new Blob([html], { type: 'text/html' });
                const url = URL.createObjectURL(blob);
                const a = document.createElement('a');
                a.href = url;
                a.download = 'postcard-xmpie-template.html';
                a.click();
              }} 
              className="bg-secondary text-foreground px-6 py-2 rounded-lg font-medium hover:bg-muted transition-colors border border-border"
            >
              Export HTML for XMPie
            </button>
          </div>
          
          {/* XMPie Variable Reference */}
          <div className="mt-6 p-4 bg-secondary rounded-lg">
            <h3 className="font-medium text-foreground mb-2">XMPie ADOR Variables Used:</h3>
            <ul className="text-sm text-muted-foreground space-y-1 font-mono">
              <li>• {XMPIE_PLACEHOLDERS.FIRST_NAME} - Recipient's first name</li>
              <li>• {XMPIE_PLACEHOLDERS.LAST_NAME} - Recipient's last name</li>
              <li>• {XMPIE_PLACEHOLDERS.FULL_NAME} - Recipient's full name</li>
              <li>• {XMPIE_PLACEHOLDERS.EMAIL} - Recipient's email</li>
              <li>• {XMPIE_PLACEHOLDERS.RECIPIENT_ID} - Unique recipient ID</li>
              <li>• {XMPIE_PLACEHOLDERS.PURL_CODE} - Personal URL code</li>
            </ul>
          </div>
        </div>

        {/* Front of Postcard */}
        <div 
          className="postcard-page bg-hero aspect-[1.414/1] rounded-xl print:rounded-none overflow-hidden relative flex flex-col items-center justify-center text-center p-8 shadow-elevated print:shadow-none print:break-after-page"
          data-xmpie-side="front"
        >
          {/* Decorative elements */}
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute top-10 left-5 w-48 h-48 bg-gold/10 rounded-full blur-3xl" />
            <div className="absolute bottom-10 right-5 w-64 h-64 bg-gold/5 rounded-full blur-3xl" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] border border-gold/10 rounded-full" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] border border-gold/5 rounded-full" />
          </div>

          {/* Corner decorations */}
          <div className="absolute top-4 left-4 w-12 h-12 border-l-2 border-t-2 border-gold/40" />
          <div className="absolute top-4 right-4 w-12 h-12 border-r-2 border-t-2 border-gold/40" />
          <div className="absolute bottom-4 left-4 w-12 h-12 border-l-2 border-b-2 border-gold/40" />
          <div className="absolute bottom-4 right-4 w-12 h-12 border-r-2 border-b-2 border-gold/40" />

          <div className="relative z-10 space-y-6">
            <h1 className="font-heading text-3xl md:text-4xl text-primary-foreground font-semibold leading-tight">
              Hidden Hearing
            </h1>
            <h2 className="font-heading text-2xl md:text-3xl text-gold font-medium">
              2026 National Conference
            </h2>

            <div className="flex flex-col items-center gap-2 text-primary-foreground/80 text-sm">
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-gold" />
                <span>The Lyrath Hotel, Kilkenny</span>
              </div>
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4 text-gold" />
                <span>Friday, 27 February 2026</span>
              </div>
            </div>

            <div className="relative py-4">
              <Sparkles className="absolute -top-2 -left-4 w-5 h-5 text-gold" />
              <h3 className="font-heading text-xl md:text-2xl italic text-gold-light">
                Together Forward
              </h3>
              <Sparkles className="absolute -bottom-2 -right-4 w-5 h-5 text-gold" />
            </div>

            <div className="flex items-center justify-center gap-3 text-primary-foreground/70 text-sm">
              <span className="px-3 py-1 border border-gold/30 rounded-full">Celebration</span>
              <span className="text-gold">•</span>
              <span className="px-3 py-1 border border-gold/30 rounded-full">Connection</span>
              <span className="text-gold">•</span>
              <span className="px-3 py-1 border border-gold/30 rounded-full">Inspiration</span>
            </div>
          </div>
        </div>

        {/* Back of Postcard */}
        <div 
          className="postcard-page bg-cream aspect-[1.414/1] rounded-xl print:rounded-none overflow-hidden relative p-8 shadow-elevated print:shadow-none"
          data-xmpie-side="back"
        >
          {/* Subtle background pattern */}
          <div className="absolute inset-0 opacity-5">
            <div className="absolute top-0 right-0 w-48 h-48 bg-navy rounded-full blur-3xl" />
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-gold rounded-full blur-3xl" />
          </div>

          <div className="relative z-10 h-full flex flex-col">
            {/* Header with XMPie Variable */}
            <div className="text-center mb-6">
              <p className="text-gold uppercase tracking-[0.2em] text-xs font-medium mb-1">You're Invited</p>
              <h2 className="font-heading text-xl text-navy font-semibold">
                Dear <span data-xmpie-ador={XMPIE_PLACEHOLDERS.FIRST_NAME} className="text-gold">{XMPIE_PLACEHOLDERS.FIRST_NAME}</span>
              </h2>
            </div>

            {/* Two Column Layout */}
            <div className="grid grid-cols-2 gap-6 flex-1">
              {/* Left Column - Events */}
              <div className="space-y-4">
                {/* Business Meeting */}
                <div className="bg-white/60 rounded-lg p-4 border border-border">
                  <div className="flex items-center gap-2 mb-3">
                    <Clock className="w-4 h-4 text-navy" />
                    <h3 className="font-heading text-sm font-semibold text-navy">Business Meeting</h3>
                  </div>
                  <div className="space-y-1.5 text-xs text-muted-foreground">
                    <div className="flex items-center gap-2">
                      <span>📅</span>
                      <span>27 February 2026</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Utensils className="w-3 h-3 text-gold" />
                      <span>Lunch at 12:00</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Clock className="w-3 h-3 text-gold" />
                      <span>Meeting 1:00 pm – 4:30 pm</span>
                    </div>
                    <div className="flex items-center gap-2 pt-1 border-t border-border mt-2">
                      <Shirt className="w-3 h-3 text-navy" />
                      <span className="font-medium text-navy">Attire: Informal</span>
                    </div>
                  </div>
                </div>

                {/* Gala Evening */}
                <div className="bg-navy rounded-lg p-4">
                  <div className="flex items-center gap-2 mb-3">
                    <Sparkles className="w-4 h-4 text-gold" />
                    <h3 className="font-heading text-sm font-semibold text-cream">Gala Evening</h3>
                  </div>
                  <div className="space-y-1.5 text-xs text-cream/80">
                    <div className="flex items-center gap-2">
                      <Wine className="w-3 h-3 text-gold" />
                      <span>Awards & Entertainment</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Clock className="w-3 h-3 text-gold" />
                      <span>7:00 pm – late</span>
                    </div>
                    <div className="flex items-center gap-2 pt-1 border-t border-cream/20 mt-2">
                      <Sparkles className="w-3 h-3 text-gold" />
                      <span className="font-medium text-gold">Formal / Dress to Impress</span>
                    </div>
                  </div>
                </div>

                {/* Accommodation */}
                <div className="bg-secondary rounded-lg p-3 flex items-center gap-3">
                  <Hotel className="w-5 h-5 text-navy" />
                  <div>
                    <p className="text-xs font-medium text-navy">Accommodation</p>
                    <p className="text-[10px] text-muted-foreground">Rooms at The Lyrath Hotel (limited)</p>
                  </div>
                </div>
              </div>

              {/* Right Column - RSVP with PURL */}
              <div className="flex flex-col">
                <div className="bg-white/60 rounded-lg p-4 border border-border flex-1">
                  <h3 className="font-heading text-sm font-semibold text-navy mb-3 text-center">
                    Please Confirm Your Attendance
                  </h3>
                  
                  {/* QR Code Placeholder - XMPie will replace with personalized QR */}
                  <div 
                    className="w-24 h-24 mx-auto bg-white border-2 border-navy/20 rounded-lg flex items-center justify-center mb-3"
                    data-xmpie-qr="purl"
                    data-xmpie-ador="@@ADOR.QRCode@@"
                  >
                    <QrCode className="w-16 h-16 text-navy/30" />
                  </div>
                  
                  <p className="text-[10px] text-center text-muted-foreground mb-4">
                    Scan QR code or visit:<br />
                    <span 
                      className="font-medium text-navy"
                      data-xmpie-purl="url"
                      data-xmpie-ador="@@ADOR.PURL@@"
                    >
                      yoursite.com/<span data-xmpie-ador={XMPIE_PLACEHOLDERS.PURL_CODE}>{XMPIE_PLACEHOLDERS.PURL_CODE}</span>
                    </span>
                  </p>

                  <div className="space-y-2 text-xs">
                    <p className="font-medium text-navy text-center mb-2">Let us know:</p>
                    <div className="flex items-center gap-2">
                      <div className="w-4 h-4 border-2 border-navy/30 rounded" />
                      <span className="text-muted-foreground">Business Meeting Attendance</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-4 h-4 border-2 border-navy/30 rounded" />
                      <span className="text-muted-foreground">Gala Evening Attendance</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-4 h-4 border-2 border-navy/30 rounded" />
                      <span className="text-muted-foreground">Accommodation Requirements</span>
                    </div>
                  </div>
                </div>

                <div className="mt-3 text-center">
                  <p className="text-xs text-muted-foreground">
                    RSVP by: <span className="font-semibold text-navy">14 February 2026</span>
                  </p>
                </div>
              </div>
            </div>
            
            {/* Hidden XMPie tracking data */}
            <div className="hidden" data-xmpie-tracking="print">
              <span data-xmpie-ador={XMPIE_PLACEHOLDERS.RECIPIENT_ID}>{XMPIE_PLACEHOLDERS.RECIPIENT_ID}</span>
              <span data-xmpie-ador={XMPIE_PLACEHOLDERS.EMAIL}>{XMPIE_PLACEHOLDERS.EMAIL}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Postcard;
