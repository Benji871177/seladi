import { motion } from "motion/react";
import { Zap, Shield, Clock, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-slate-50">
      {/* Background Elements */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-primary/5 -skew-x-12 translate-x-1/4" />
      <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center space-x-2 bg-white px-4 py-2 rounded-full shadow-sm border border-slate-100 mb-6">
              <Zap className="text-primary w-4 h-4" fill="currentColor" />
              <span className="text-sm font-bold text-secondary uppercase tracking-wider">
                Expert Electrical Solutions
              </span>
            </div>
            
            <h1 className="font-display text-5xl md:text-7xl font-bold text-secondary leading-tight mb-6">
              Powering Your <span className="text-primary">Future</span> with Precision.
            </h1>
            
            <p className="text-lg text-slate-600 mb-8 max-w-lg leading-relaxed">
              From residential wiring to industrial solar installations, SELADI ELECTRICAL 
              provides safe, reliable, and innovative electrical services across Alberton.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                to="/services"
                className="bg-secondary text-white px-8 py-4 rounded-xl font-bold text-lg flex items-center justify-center space-x-2 hover:bg-slate-900 transition-all shadow-xl shadow-slate-200"
              >
                <span>Our Services</span>
                <ArrowRight size={20} />
              </Link>
              <Link
                to="/contact"
                className="bg-white text-secondary border-2 border-slate-200 px-8 py-4 rounded-xl font-bold text-lg flex items-center justify-center hover:border-primary hover:text-primary transition-all"
              >
                Contact Us
              </Link>
            </div>

            <div className="mt-12 grid grid-cols-3 gap-8">
              <div className="flex flex-col">
                <span className="text-3xl font-bold text-secondary">10+</span>
                <span className="text-sm text-slate-500">Years Experience</span>
              </div>
              <div className="flex flex-col">
                <span className="text-3xl font-bold text-secondary">500+</span>
                <span className="text-sm text-slate-500">Projects Done</span>
              </div>
              <div className="flex flex-col">
                <span className="text-3xl font-bold text-secondary">100%</span>
                <span className="text-sm text-slate-500">Safety Record</span>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative hidden lg:block"
          >
            <div className="relative z-10 rounded-3xl overflow-hidden shadow-2xl border-8 border-white">
              <img
                src="https://images.unsplash.com/photo-1621905251189-08b45d6a269e?auto=format&fit=crop&q=80&w=1000"
                alt="Electrician at work"
                className="w-full h-[600px] object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-secondary/60 to-transparent" />
              
              <div className="absolute bottom-8 left-8 right-8 bg-white/90 backdrop-blur-md p-6 rounded-2xl shadow-lg">
                <div className="flex items-center space-x-4">
                  <div className="bg-primary p-3 rounded-xl">
                    <Shield className="text-secondary w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-bold text-secondary">Certified & Insured</h4>
                    <p className="text-sm text-slate-600">Your safety is our top priority.</p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Floating Badge */}
            <div className="absolute -top-6 -right-6 bg-primary text-secondary p-8 rounded-full shadow-2xl z-20 flex flex-col items-center justify-center animate-bounce">
              <Clock size={32} className="mb-1" />
              <span className="font-bold text-sm">24/7</span>
              <span className="text-[10px] font-bold uppercase">Service</span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
