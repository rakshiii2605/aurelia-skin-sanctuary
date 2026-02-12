import { Heart, Phone, Mail, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer id="contact" className="bg-foreground py-16">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Brand */}
          <div>
            <h3 className="font-serif text-2xl font-bold text-background mb-3">
              Aurelia <span className="font-normal opacity-70">Skin & Life</span>
            </h3>
            <p className="text-background/60 text-sm leading-relaxed mb-4">
              Where Women's Skin Meets a Lifetime of Care. A women-only hospital 
              dedicated to compassionate, expert dermatological care.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-serif text-lg font-semibold text-background mb-4">Quick Links</h4>
            <div className="space-y-2">
              {["Home", "About", "Doctors", "Services", "Appointments"].map((link) => (
                <a
                  key={link}
                  href={`#${link.toLowerCase()}`}
                  className="block text-sm text-background/60 hover:text-background transition-colors"
                >
                  {link}
                </a>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-serif text-lg font-semibold text-background mb-4">Contact</h4>
            <div className="space-y-3">
              <div className="flex items-center gap-3 text-sm text-background/60">
                <Phone className="w-4 h-4" />
                <span>+91 98765 43210</span>
              </div>
              <div className="flex items-center gap-3 text-sm text-background/60">
                <Mail className="w-4 h-4" />
                <span>care@aureliaskinlife.com</span>
              </div>
              <div className="flex items-center gap-3 text-sm text-background/60">
                <MapPin className="w-4 h-4" />
                <span>Aurelia Hospital, Women's Health District</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-background/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-background/40">
            © 2026 Aurelia Skin & Life. All rights reserved.
          </p>
          <p className="flex items-center gap-1 text-sm text-background/40">
            Made with <Heart className="w-3 h-3 text-aurelia-rose" /> for women, by women
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
