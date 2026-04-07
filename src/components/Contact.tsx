import { motion } from "motion/react";
import { Phone, Mail, MapPin, Send } from "lucide-react";
import { useSearchParams } from "react-router-dom";
import { useEffect, useState } from "react";

export default function Contact() {
  const [searchParams] = useSearchParams();
  const [selectedService, setSelectedService] = useState("");

  useEffect(() => {
    const service = searchParams.get("service");
    if (service) {
      setSelectedService(service);
    }
  }, [searchParams]);

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-primary font-bold uppercase tracking-widest text-sm">Get In Touch</span>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-secondary mt-4 mb-6">
              Ready to Start Your <span className="text-primary">Next Project?</span>
            </h2>
            <p className="text-slate-600 mb-10 leading-relaxed">
              Have a question or need a quote? Contact us today and our expert team will 
              get back to you as soon as possible. We are available 24/7 for emergencies.
            </p>

            <div className="space-y-8">
              <div className="flex items-start space-x-6">
                <div className="bg-slate-50 p-4 rounded-2xl text-primary shadow-sm">
                  <Phone size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-secondary">Call Us</h4>
                  <p className="text-slate-500">060 695 0564</p>
                  <p className="text-slate-500">078 680 1449</p>
                </div>
              </div>

              <div className="flex items-start space-x-6">
                <div className="bg-slate-50 p-4 rounded-2xl text-primary shadow-sm">
                  <Mail size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-secondary">Email Us</h4>
                  <p className="text-slate-500">Narealfred12@gmail.com</p>
                </div>
              </div>

              <div className="flex items-start space-x-6">
                <div className="bg-slate-50 p-4 rounded-2xl text-primary shadow-sm">
                  <MapPin size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-secondary">Visit Us</h4>
                  <p className="text-slate-500">3171 extension 3, Shaya street,</p>
                  <p className="text-slate-500">Palmridge, Alberton, 1458</p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="bg-slate-50 p-8 md:p-12 rounded-[2.5rem] shadow-xl shadow-slate-100 border border-slate-100"
          >
            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-bold text-secondary ml-1">Full Name</label>
                  <input
                    type="text"
                    placeholder="John Doe"
                    className="w-full px-6 py-4 rounded-2xl bg-white border border-slate-200 focus:border-primary focus:ring-4 focus:ring-primary/10 outline-none transition-all"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-secondary ml-1">Email Address</label>
                  <input
                    type="email"
                    placeholder="john@example.com"
                    className="w-full px-6 py-4 rounded-2xl bg-white border border-slate-200 focus:border-primary focus:ring-4 focus:ring-primary/10 outline-none transition-all"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-bold text-secondary ml-1">Service Needed</label>
                <select 
                  value={selectedService}
                  onChange={(e) => setSelectedService(e.target.value)}
                  className="w-full px-6 py-4 rounded-2xl bg-white border border-slate-200 focus:border-primary focus:ring-4 focus:ring-primary/10 outline-none transition-all appearance-none"
                >
                  <option value="">Select a Service</option>
                  <option value="Electrical Installation">Electrical Installation</option>
                  <option value="Wiring & Maintenance">Wiring & Maintenance</option>
                  <option value="Solar Panel Installation">Solar Panel Installation</option>
                  <option value="Air Conditioning">Air Conditioning</option>
                  <option value="Generator Services">Generator Services</option>
                  <option value="Smart Home Wiring">Smart Home Wiring</option>
                  <option value="Motor Services">Motor Services</option>
                  <option value="Electrical Chargers">Electrical Chargers</option>
                  <option value="Door Bells & Security">Door Bells & Security</option>
                  <option value="Fan Installation">Fan Installation</option>
                  <option value="Other">Other</option>
                </select>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-bold text-secondary ml-1">Your Message</label>
                <textarea
                  rows={4}
                  placeholder="Tell us about your project..."
                  className="w-full px-6 py-4 rounded-2xl bg-white border border-slate-200 focus:border-primary focus:ring-4 focus:ring-primary/10 outline-none transition-all resize-none"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-secondary text-white py-5 rounded-2xl font-bold text-lg flex items-center justify-center space-x-3 hover:bg-slate-900 transition-all shadow-xl shadow-slate-200"
              >
                <span>Send Message</span>
                <Send size={20} />
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
