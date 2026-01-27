const Footer = () => {
  return (
    <footer className="py-12 bg-primary text-primary-foreground">
      <div className="container px-6">
        <div className="text-center">
          <h3 className="font-heading text-2xl mb-2">Hidden Hearing</h3>
          <p className="text-primary-foreground/70 mb-6">2026 National Conference</p>
          <div className="flex items-center justify-center gap-2 text-gold text-sm">
            <span>Together Forward</span>
          </div>
          <div className="mt-8 pt-6 border-t border-primary-foreground/10 text-sm text-primary-foreground/50">
            © 2026 Hidden Hearing. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
