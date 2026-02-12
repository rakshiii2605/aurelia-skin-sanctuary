import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { CalendarDays, ArrowRight } from "lucide-react";

const AppointmentCTA = () => {
  return (
    <section id="appointment" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto text-center p-12 md:p-16 rounded-3xl gradient-hero relative overflow-hidden"
        >
          <div className="absolute inset-0 bg-primary/80" />
          <div className="relative z-10">
            <CalendarDays className="w-12 h-12 text-primary-foreground/80 mx-auto mb-6" />
            <h2 className="font-serif text-3xl md:text-5xl font-bold text-primary-foreground mb-4">
              Begin Your Journey
            </h2>
            <p className="text-primary-foreground/85 text-lg max-w-xl mx-auto mb-8 font-light">
              Book your appointment today and experience the Aurelia difference — 
              expert care in a safe, beautiful, women-only environment.
            </p>
            <Button
              size="lg"
              className="rounded-full px-10 py-6 text-base bg-background text-foreground hover:bg-background/90 shadow-elevated hover:scale-105 transition-all duration-300"
            >
              Book Appointment
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AppointmentCTA;
