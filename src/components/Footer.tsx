import { Zap, Phone, Mail, MapPin, Clock } from "lucide-react";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-secondary text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="bg-primary p-2 rounded-lg">
                <Zap className="text-secondary w-6 h-6" fill="currentColor" />
              </div>
              <div className="flex flex-col">
                <span className="font-display font-bold text-xl leading-none">
                  SELADI
                </span>
                <span className="text-[10px] font-bold tracking-widest text-primary uppercase">
                  Electrical
                </span>
              </div>
            </div>
            <p className="text-slate-400 text-sm leading-relaxed">
              Professional electrical services for residential and commercial properties. 
              Reliable, safe, and efficient solutions for all your power needs.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display font-bold text-lg mb-6 text-primary">Quick Links</h4>
            <ul className="space-y-3 text-slate-400">
              <li><Link to="/" className="hover:text-primary transition-colors">Home</Link></li>
              <li><Link to="/services" className="hover:text-primary transition-colors">Our Services</Link></li>
              <li><Link to="/about" className="hover:text-primary transition-colors">About Us</Link></li>
              <li><Link to="/contact" className="hover:text-primary transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-display font-bold text-lg mb-6 text-primary">Services</h4>
            <ul className="space-y-3 text-slate-400 text-sm">
              <li>Electrical Installation</li>
              <li>Solar Panel Setup</li>
              <li>Smart Home Wiring</li>
              <li>Generator Maintenance</li>
              <li>Air Conditioning</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-display font-bold text-lg mb-6 text-primary">Contact Us</h4>
            <ul className="space-y-4 text-slate-400 text-sm">
              <li className="flex items-start space-x-3">
                <MapPin className="text-primary w-5 h-5 shrink-0" />
                <span>3171 extension 3, Shaya street, Palmridge, Alberton, 1458</span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone className="text-primary w-5 h-5 shrink-0" />
                <span>060 695 0564 / 078 680 1449</span>
              </li>
              <li className="flex items-center space-x-3">
                <Mail className="text-primary w-5 h-5 shrink-0" />
                <span>Narealfred12@gmail.com</span>
              </li>
              <li className="flex items-center space-x-3">
                <Clock className="text-primary w-5 h-5 shrink-0" />
                <span>Available 24/7 for Emergencies</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-700 pt-8 flex flex-col md:flex-row justify-between items-center text-slate-500 text-xs">
          <p>© {new Date().getFullYear()} SELADI ELECTRICAL (PTY) LTD. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-primary">Privacy Policy</a>
            <a href="#" className="hover:text-primary">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
