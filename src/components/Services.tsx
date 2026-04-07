import { motion } from "motion/react";
import { useState } from "react";
import { 
  Zap, 
  Sun, 
  Home, 
  Battery, 
  Fan, 
  Bell, 
  Cpu, 
  Wrench,
  Thermometer,
  ArrowRight
} from "lucide-react";
import ServiceDetailModal from "./ServiceDetailModal";

const services = [
  {
    title: "Electrical Installation",
    description: "Complete electrical setups for new buildings and renovations.",
    details: [
      "New construction wiring",
      "Panel upgrades & replacements",
      "Lighting design & installation",
      "Safety inspections & reporting"
    ],
    icon: Zap,
    color: "bg-blue-50 text-blue-600"
  },
  {
    title: "Wiring & Maintenance",
    description: "Expert wiring services and preventative maintenance for all systems.",
    details: [
      "Fault finding & repairs",
      "Rewiring for old properties",
      "Routine maintenance checks",
      "Emergency electrical repairs"
    ],
    icon: Wrench,
    color: "bg-orange-50 text-orange-600"
  },
  {
    title: "Solar Panel Installation",
    description: "Sustainable energy solutions to power your home or business.",
    details: [
      "Solar panel mounting",
      "Inverter & battery setup",
      "Off-grid & hybrid systems",
      "Solar maintenance & cleaning"
    ],
    icon: Sun,
    color: "bg-yellow-50 text-yellow-600"
  },
  {
    title: "Air Conditioning",
    description: "Installation and repair of refrigeration and AC units.",
    details: [
      "Split system installation",
      "Refrigeration maintenance",
      "HVAC troubleshooting",
      "Energy efficient cooling"
    ],
    icon: Thermometer,
    color: "bg-cyan-50 text-cyan-600"
  },
  {
    title: "Generator Services",
    description: "Backup power solutions to keep you running during outages.",
    details: [
      "Generator installation",
      "Automatic transfer switches",
      "Load testing & maintenance",
      "Portable generator setups"
    ],
    icon: Battery,
    color: "bg-emerald-50 text-emerald-600"
  },
  {
    title: "Smart Home Wiring",
    description: "Modern automation wiring for lighting, security, and more.",
    details: [
      "Home automation hubs",
      "Smart lighting controls",
      "Security camera wiring",
      "Network & data cabling"
    ],
    icon: Home,
    color: "bg-purple-50 text-purple-600"
  },
  {
    title: "Motor Services",
    description: "Industrial and domestic motor installation and repairs.",
    details: [
      "Electric motor setup",
      "Pump & fan motor repairs",
      "Control panel wiring",
      "Industrial automation"
    ],
    icon: Cpu,
    color: "bg-slate-50 text-slate-600"
  },
  {
    title: "Electrical Chargers",
    description: "EV charging stations and high-power appliance outlets.",
    details: [
      "EV charger installation",
      "High-voltage outlets",
      "Circuit load balancing",
      "Commercial charging hubs"
    ],
    icon: Zap,
    color: "bg-indigo-50 text-indigo-600"
  },
  {
    title: "Door Bells & Security",
    description: "Installation of smart doorbells and security systems.",
    details: [
      "Video doorbell setup",
      "Intercom systems",
      "Access control systems",
      "Security lighting"
    ],
    icon: Bell,
    color: "bg-rose-50 text-rose-600"
  },
  {
    title: "Fan Installation",
    description: "Ceiling and exhaust fan setups for optimal ventilation.",
    details: [
      "Ceiling fan mounting",
      "Exhaust fan installation",
      "Remote control setup",
      "Ventilation design"
    ],
    icon: Fan,
    color: "bg-teal-50 text-teal-600"
  }
];

export default function Services() {
  const [selectedService, setSelectedService] = useState<typeof services[0] | null>(null);

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-primary font-bold uppercase tracking-widest text-sm"
          >
            What We Offer
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-display text-4xl md:text-5xl font-bold text-secondary mt-4"
          >
            Our Professional Services
          </motion.h2>
          <div className="w-24 h-1.5 bg-primary mx-auto mt-6 rounded-full" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              onClick={() => setSelectedService(service)}
              className="group p-8 rounded-3xl border border-slate-100 bg-slate-50 hover:bg-white hover:shadow-2xl hover:shadow-slate-200 transition-all duration-300 cursor-pointer"
            >
              <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-6 transition-transform group-hover:scale-110 ${service.color}`}>
                <service.icon size={28} />
              </div>
              <h3 className="font-display text-xl font-bold text-secondary mb-3">
                {service.title}
              </h3>
              <p className="text-slate-500 leading-relaxed mb-6">
                {service.description}
              </p>
              <div className="flex items-center text-primary font-bold text-sm group-hover:translate-x-2 transition-transform">
                <span>View Details</span>
                <ArrowRight size={16} className="ml-2" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <ServiceDetailModal 
        service={selectedService} 
        onClose={() => setSelectedService(null)} 
      />
    </section>
  );
}
