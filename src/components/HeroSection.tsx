import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Shield } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";

const HeroSection = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src={heroBg}
          alt="Aurelia Skin & Life luxury skincare hospital"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 gradient-hero" />
        <div className="absolute inset-0 bg-foreground/20" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="max-w-3xl mx-auto"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-background/20 backdrop-blur-md border border-background/30 mb-8"
          >
            <Shield className="w-4 h-4 text-primary-foreground" />
            <span className="text-sm font-medium text-primary-foreground tracking-wide">
              Women-Only Hospital
            </span>
          </motion.div>

          <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl font-bold text-primary-foreground leading-tight mb-6">
            Aurelia
            <span className="block text-3xl md:text-4xl lg:text-5xl font-medium mt-2 opacity-90">
              Skin & Life
            </span>
          </h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="text-lg md:text-xl text-primary-foreground/90 font-sans font-light tracking-wide max-w-xl mx-auto mb-10 italic"
          >
            Where Women's Skin Meets a Lifetime of Care
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.6 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <a href="#appointment">
              <Button
                size="lg"
                className="gradient-cta text-primary-foreground rounded-full px-10 py-6 text-base shadow-elevated hover:scale-105 transition-transform duration-300"
              >
                Get Appointment
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </a>
            <a href="#about">
              <Button
                size="lg"
                variant="outline"
                className="rounded-full px-10 py-6 text-base border-primary-foreground/40 text-primary-foreground hover:bg-primary-foreground/10 backdrop-blur-sm"
              >
                Our Story
              </Button>
            </a>
          </motion.div>
        </motion.div>
      </div>

      {/* Bottom wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M0 120V60C240 20 480 0 720 20C960 40 1200 80 1440 60V120H0Z"
            fill="hsl(210 40% 98%)"
          />
        </svg>
      </div>
    </section>
  );
};

export default HeroSection;
