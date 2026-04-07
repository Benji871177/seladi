import { motion } from "motion/react";
import { User, Award, CheckCircle2, MapPin } from "lucide-react";

export default function About() {
  return (
    <section className="py-24 bg-slate-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative z-10 rounded-[2rem] overflow-hidden shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&q=80&w=1000"
                alt="Mr. Alfred - Managing Director"
                className="w-full h-[500px] object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            {/* Decorative elements */}
            <div className="absolute -top-8 -left-8 w-32 h-32 bg-primary rounded-full -z-10" />
            <div className="absolute -bottom-8 -right-8 w-64 h-64 border-8 border-white rounded-[2rem] -z-10" />
            
            <div className="absolute bottom-8 right-8 bg-white p-6 rounded-2xl shadow-xl max-w-[200px]">
              <div className="flex items-center space-x-3 mb-2">
                <Award className="text-primary" />
                <span className="font-bold text-secondary">Top Rated</span>
              </div>
              <p className="text-xs text-slate-500">Recognized for excellence in electrical engineering.</p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-primary font-bold uppercase tracking-widest text-sm">About Our Company</span>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-secondary mt-4 mb-6">
              Leading the Way in <span className="text-primary">Electrical Excellence</span>.
            </h2>
            
            <div className="space-y-6 text-slate-600 leading-relaxed">
              <p>
                SELADI ELECTRICAL (PTY) LTD is a premier electrical contracting firm based in Alberton. 
                Led by our Managing Director, <strong>Mr. Alfred</strong>, we have built a reputation for 
                uncompromising quality and safety.
              </p>
              <p>
                We believe that every connection matters. Whether it's a simple fan installation or a 
                complex industrial solar grid, our team of certified professionals brings the same level 
                of dedication and expertise to every project.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-10">
              {[
                "Certified Professionals",
                "24/7 Emergency Support",
                "Quality Workmanship",
                "Safety First Approach",
                "Modern Technology",
                "Transparent Pricing"
              ].map((item) => (
                <div key={item} className="flex items-center space-x-3">
                  <CheckCircle2 className="text-primary w-5 h-5" />
                  <span className="font-semibold text-secondary">{item}</span>
                </div>
              ))}
            </div>

            <div className="mt-12 p-6 bg-white rounded-2xl border border-slate-100 shadow-sm flex items-center space-x-6">
              <div className="w-16 h-16 rounded-full bg-slate-100 flex items-center justify-center overflow-hidden">
                <User size={32} className="text-slate-400" />
              </div>
              <div>
                <h4 className="font-bold text-secondary text-lg">Mr. Alfred</h4>
                <p className="text-sm text-slate-500">Managing Director</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
