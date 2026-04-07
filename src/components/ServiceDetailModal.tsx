import { motion, AnimatePresence } from "motion/react";
import { X, Zap, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

interface Service {
  title: string;
  description: string;
  details: string[];
  icon: any;
  color: string;
}

interface ServiceDetailModalProps {
  service: Service | null;
  onClose: () => void;
}

export default function ServiceDetailModal({ service, onClose }: ServiceDetailModalProps) {
  if (!service) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="absolute inset-0 bg-secondary/60 backdrop-blur-sm"
        />
        
        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.9, y: 20 }}
          className="relative bg-white w-full max-w-2xl rounded-[2.5rem] shadow-2xl overflow-hidden"
        >
          <button
            onClick={onClose}
            className="absolute top-6 right-6 p-2 rounded-full bg-slate-100 text-secondary hover:bg-primary hover:text-secondary transition-colors z-10"
          >
            <X size={24} />
          </button>

          <div className="p-8 md:p-12">
            <div className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-6 ${service.color}`}>
              <service.icon size={32} />
            </div>
            
            <h3 className="font-display text-3xl font-bold text-secondary mb-4">
              {service.title}
            </h3>
            
            <p className="text-slate-600 text-lg mb-8 leading-relaxed">
              {service.description}
            </p>

            <div className="space-y-4 mb-10">
              <h4 className="font-bold text-secondary uppercase tracking-wider text-sm">What's Included:</h4>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {service.details.map((detail, index) => (
                  <li key={index} className="flex items-center space-x-3 text-slate-600">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
                    <span>{detail}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                to={`/contact?service=${encodeURIComponent(service.title)}`}
                onClick={onClose}
                className="flex-1 bg-primary text-secondary py-4 rounded-2xl font-bold text-center flex items-center justify-center space-x-2 hover:bg-opacity-90 transition-all shadow-lg shadow-primary/20"
              >
                <span>Request a Quote</span>
                <ArrowRight size={20} />
              </Link>
              <button
                onClick={onClose}
                className="flex-1 bg-slate-100 text-secondary py-4 rounded-2xl font-bold hover:bg-slate-200 transition-all"
              >
                Close Details
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
