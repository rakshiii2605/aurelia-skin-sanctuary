import { motion } from "framer-motion";
import { Star, GraduationCap } from "lucide-react";

interface DoctorCardProps {
  name: string;
  role: string;
  description: string;
  delay?: number;
}

const DoctorCard = ({ name, role, description, delay = 0 }: DoctorCardProps) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-80px" }}
    transition={{ duration: 0.7, delay }}
    className="group relative p-8 rounded-3xl gradient-card shadow-card hover:shadow-elevated transition-all duration-500"
  >
    <div className="absolute top-0 left-0 right-0 h-1 rounded-t-3xl bg-gradient-to-r from-aurelia-azure via-aurelia-pearl to-aurelia-ice opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
    
    <div className="w-20 h-20 rounded-full bg-secondary flex items-center justify-center mx-auto mb-6">
      <GraduationCap className="w-9 h-9 text-primary" />
    </div>

    <div className="text-center">
      <div className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-secondary text-xs font-medium text-primary tracking-widest uppercase mb-3">
        <Star className="w-3 h-3" />
        {role}
      </div>
      <h3 className="font-serif text-2xl font-bold text-foreground mb-3">
        Dr. {name}
      </h3>
      <p className="text-muted-foreground leading-relaxed text-sm">
        {description}
      </p>
    </div>
  </motion.div>
);

const DoctorsSection = () => {
  const leaders = [
    {
      name: "Logarakshika",
      role: "Dean",
      description:
        "Visionary leader and founder of Aurelia Skin & Life. With decades of expertise in dermatology and women's health, Dr. Logarakshika has built a sanctuary where every woman feels safe, valued, and beautifully cared for.",
    },
    {
      name: "Arshiya Samreen",
      role: "Assistant Doctor",
      description:
        "Specializing in advanced skin treatments and aesthetic medicine, Dr. Arshiya Samreen brings precision, warmth, and cutting-edge expertise to every consultation.",
    },
    {
      name: "Kamalini",
      role: "Assistant Doctor",
      description:
        "With a focus on pediatric dermatology and holistic skincare, Dr. Kamalini ensures that young girls and children receive gentle, expert care in a comforting environment.",
    },
  ];

  return (
    <section id="doctors" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary mb-6">
            <span className="text-sm font-medium text-secondary-foreground tracking-widest uppercase">
              Leadership
            </span>
          </div>
          <h2 className="font-serif text-3xl md:text-5xl font-bold text-foreground mb-4">
            Led by <span className="text-gold italic">Extraordinary</span> Women
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Our leadership team of dedicated women doctors guides Aurelia with compassion, 
            expertise, and an unwavering commitment to women's wellness.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {leaders.map((doc, i) => (
            <DoctorCard key={doc.name} {...doc} delay={i * 0.15} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default DoctorsSection;
