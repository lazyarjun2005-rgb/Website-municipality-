import { Facebook, Twitter, Instagram, Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-[hsl(var(--primary))] text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* About */}
          <div>
            <h3 className="text-xl font-bold mb-4">Tiruchirappalli City</h3>
            <p className="text-white/80 text-sm mb-4">
              Municipal Corporation committed to transforming Tiruchirappalli into a model smart city with 
              efficient public service delivery and sustainable development.
            </p>
            <div className="flex gap-3">
              <a
                href="https://www.facebook.com/TrichyCorporation"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a
                href="https://twitter.com/TrichyCorp"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center transition-colors"
                aria-label="Twitter"
              >
                <Twitter className="h-5 w-5" />
              </a>
              <a
                href="https://www.instagram.com/trichycorporation"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm text-white/80">
              <li>
                <a href="#about" className="hover:text-white transition-colors">
                  About City
                </a>
              </li>
              <li>
                <a href="#leadership" className="hover:text-white transition-colors">
                  Leadership
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-white transition-colors">
                  Services
                </a>
              </li>
              <li>
                <a href="#tourism" className="hover:text-white transition-colors">
                  Tourism
                </a>
              </li>
              <li>
                <a href="#notifications" className="hover:text-white transition-colors">
                  Notifications
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-bold mb-4">Contact Us</h3>
            <ul className="space-y-3 text-sm text-white/80">
              <li className="flex items-start gap-2">
                <MapPin className="h-5 w-5 flex-shrink-0 mt-0.5" />
                <span>Bharathidasan Salai, Cantonment, Tiruchirappalli 620001</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="h-5 w-5 flex-shrink-0" />
                <div>
                  <a href="tel:18001021994" className="hover:text-white block">
                    1800-102-1994
                  </a>
                  <a href="tel:8300113000" className="hover:text-white block">
                    83001 13000
                  </a>
                </div>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="h-5 w-5 flex-shrink-0" />
                <a href="mailto:commissioner@trichycorp.gov.in" className="hover:text-white">
                  commissioner@trichycorp.gov.in
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 text-center text-sm text-white/60">
          <p>© 2025 Tiruchirappalli Municipal Corporation. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
