import { Facebook, Youtube, MessageCircle, Mail, Phone } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-foreground text-background py-16">
      <div className="container px-4">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <h3 className="text-2xl font-display font-bold mb-4">
              Global Spoken English
            </h3>
            <p className="text-background/70 mb-4 max-w-md">
              Your trusted partner in English speaking journey for over 11 years. 
              Join thousands of students who've transformed their communication skills with us.
            </p>
            <p className="text-xl font-semibold text-secondary">
              "फ़र्राटेदार इंग्लिश बोलना सीखें"
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-3">
              <li>
                <a href="#about" className="text-background/70 hover:text-secondary transition-colors">
                  About Us
                </a>
              </li>
              <li>
                <a href="#daily-words" className="text-background/70 hover:text-secondary transition-colors">
                  Daily Words
                </a>
              </li>
              <li>
                <a href="#dictionary" className="text-background/70 hover:text-secondary transition-colors">
                  Dictionary
                </a>
              </li>
              <li>
                <a href="#admission-form" className="text-background/70 hover:text-secondary transition-colors">
                  Admission
                </a>
              </li>
              <li>
                <a href="#branches" className="text-background/70 hover:text-secondary transition-colors">
                  Branches
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Us</h4>
            <ul className="space-y-3">
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-secondary" />
                <a href="tel:8299324931" className="text-background/70 hover:text-secondary transition-colors">
                  8299324931
                </a>
              </li>
              <li className="flex items-center gap-3">
                <MessageCircle className="w-5 h-5 text-secondary" />
                <a
                  href="https://wa.me/918299324931"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-background/70 hover:text-secondary transition-colors"
                >
                  WhatsApp
                </a>
              </li>
            </ul>

            {/* Social Links */}
            <div className="flex gap-4 mt-6">
              <a
                href="https://www.facebook.com/globalspokenenglish1"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-lg bg-background/10 flex items-center justify-center hover:bg-secondary hover:text-secondary-foreground transition-colors"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="https://www.youtube.com/@globalspokenenglishup"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-lg bg-background/10 flex items-center justify-center hover:bg-red-500 transition-colors"
              >
                <Youtube className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-background/10 text-center">
          <p className="text-background/50 text-sm">
            © {new Date().getFullYear()} Global Spoken English. All rights reserved.
          </p>
          <p className="text-background/40 text-sm mt-2">
            Director: Ghulam Nabi | 11+ Years of Excellence
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
