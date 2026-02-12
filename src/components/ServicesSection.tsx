import {
  Bot,
  CalendarDays,
  Activity,
  Phone,
  Video,
  ClipboardList,
  Map,
  Lock,
} from "lucide-react";

const services = [
  {
    icon: Bot,
    title: "AI Health Assistant",
    description: "Friendly AI chatbot for instant skin health guidance, tailored for women.",
  },
  {
    icon: CalendarDays,
    title: "Online Booking",
    description: "Schedule appointments seamlessly, anytime from anywhere.",
  },
  {
    icon: Activity,
    title: "Live Availability",
    description: "Real-time doctor availability status — know who's ready for you.",
  },
  {
    icon: Phone,
    title: "Call a Doctor",
    description: "Direct phone consultations with our expert women doctors.",
  },
  {
    icon: Video,
    title: "Video Consultation",
    description: "Secure video calls for remote consultations from the comfort of home.",
  },
  {
    icon: ClipboardList,
    title: "Doctor Directory",
    description: "Browse 35+ women specialists with their areas of expertise.",
  },
  {
    icon: Map,
    title: "Hospital Navigation",
    description: "Interactive maps to navigate our hospital with ease.",
  },
  {
    icon: Lock,
    title: "Privacy First",
    description: "Your data is secure. Women-only spaces, always confidential.",
  },
];

const ServicesSection = () => {
  return (
    <section id="services" className="py-24 gradient-section">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary mb-6">
            <span className="text-sm font-medium text-secondary-foreground tracking-widest uppercase">
              Services
            </span>
          </div>
          <h2 className="font-serif text-3xl md:text-5xl font-bold text-foreground mb-4">
            Everything You <span className="text-gold italic">Need</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            From AI-powered guidance to in-person consultations, we've designed every touchpoint 
            around your comfort and care.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {services.map((service) => (
            <div
              key={service.title}
              className="group p-6 rounded-2xl gradient-card shadow-soft hover:shadow-card transition-all duration-400 hover:-translate-y-1"
            >
              <div className="w-12 h-12 rounded-xl bg-secondary flex items-center justify-center mb-4 group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-300">
                <service.icon className="w-6 h-6" />
              </div>
              <h3 className="font-serif text-lg font-semibold text-foreground mb-2">
                {service.title}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
