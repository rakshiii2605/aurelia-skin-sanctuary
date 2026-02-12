import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import BrandStory from "@/components/BrandStory";
import DoctorsSection from "@/components/DoctorsSection";
import ServicesSection from "@/components/ServicesSection";
import AppointmentCTA from "@/components/AppointmentCTA";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <BrandStory />
      <DoctorsSection />
      <ServicesSection />
      <AppointmentCTA />
      <Footer />
    </div>
  );
};

export default Index;
