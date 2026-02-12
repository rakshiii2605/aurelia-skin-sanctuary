import { motion } from "framer-motion";
import { Heart, Sparkles, Award } from "lucide-react";

const BrandStory = () => {
  return (
    <section id="about" className="py-24 gradient-section">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto text-center"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary mb-8">
            <Sparkles className="w-4 h-4 text-aurelia-gold" />
            <span className="text-sm font-medium text-secondary-foreground tracking-widest uppercase">
              Our Story
            </span>
          </div>

          <h2 className="font-serif text-3xl md:text-5xl font-bold text-foreground mb-8 leading-tight">
            A Sanctuary of Healing,{" "}
            <span className="text-gold italic">Confidence</span> & Care
          </h2>

          <div className="space-y-6 text-muted-foreground text-lg leading-relaxed font-light">
            <p>
              Aurelia Skin & Life was founded on the belief that women deserve a safe, 
              elegant, and compassionate space for lifelong skin and wellness care.
            </p>
            <p>
              Inspired by the meaning of <em className="text-gold font-medium">"Aurelia" — the golden one</em> — 
              our hospital symbolizes warmth, trust, and excellence. From childhood to womanhood, 
              we provide expert care guided by empathy, led by women, for women.
            </p>
            <p>
              Under the leadership of <strong className="text-foreground">Dean Logarakshika</strong> and 
              her dedicated team, Aurelia Skin & Life stands as a sanctuary of healing, confidence, and care.
            </p>
          </div>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16 max-w-3xl mx-auto"
        >
          {[
            { icon: Heart, label: "Women Doctors", value: "35+" },
            { icon: Award, label: "Years of Trust", value: "Expert" },
            { icon: Sparkles, label: "Women & Children Only", value: "100%" },
          ].map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 + i * 0.1 }}
              className="text-center p-6 rounded-2xl gradient-card shadow-card"
            >
              <stat.icon className="w-8 h-8 text-primary mx-auto mb-3" />
              <div className="font-serif text-3xl font-bold text-foreground mb-1">
                {stat.value}
              </div>
              <div className="text-sm text-muted-foreground tracking-wide">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default BrandStory;
