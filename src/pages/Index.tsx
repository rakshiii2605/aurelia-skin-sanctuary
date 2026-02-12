import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AppointmentCTA from "@/components/AppointmentCTA";
import Footer from "@/components/Footer";
import { Heart, Sparkles, Award, Star, GraduationCap, Bot, CalendarDays, Activity, Phone, Video, ClipboardList, Map, Lock } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      
      {/* About Section - inline */}
      <section id="about" style={{ padding: "96px 0", backgroundColor: "#dbeafe" }}>
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="font-serif text-3xl md:text-5xl font-bold text-foreground mb-8 leading-tight">
              A Sanctuary of Healing, Confidence & Care
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed">
              Aurelia Skin & Life was founded on the belief that women deserve a safe, 
              elegant, and compassionate space for lifelong skin and wellness care.
            </p>
            <p className="text-muted-foreground text-lg leading-relaxed mt-6">
              Inspired by the meaning of "Aurelia" — the golden one — 
              our hospital symbolizes warmth, trust, and excellence.
            </p>
            <p className="text-muted-foreground text-lg leading-relaxed mt-6">
              Under the leadership of <strong className="text-foreground">Dean Logarakshika</strong> and 
              her dedicated team, Aurelia Skin & Life stands as a sanctuary of healing, confidence, and care.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16 max-w-3xl mx-auto">
            <div className="text-center p-6 rounded-2xl bg-card shadow-card">
              <Heart className="w-8 h-8 text-primary mx-auto mb-3" />
              <div className="font-serif text-3xl font-bold text-foreground mb-1">35+</div>
              <div className="text-sm text-muted-foreground">Women Doctors</div>
            </div>
            <div className="text-center p-6 rounded-2xl bg-card shadow-card">
              <Award className="w-8 h-8 text-primary mx-auto mb-3" />
              <div className="font-serif text-3xl font-bold text-foreground mb-1">Expert</div>
              <div className="text-sm text-muted-foreground">Years of Trust</div>
            </div>
            <div className="text-center p-6 rounded-2xl bg-card shadow-card">
              <Sparkles className="w-8 h-8 text-primary mx-auto mb-3" />
              <div className="font-serif text-3xl font-bold text-foreground mb-1">100%</div>
              <div className="text-sm text-muted-foreground">Women & Children Only</div>
            </div>
          </div>
        </div>
      </section>

      {/* Doctors Section - inline */}
      <section id="doctors" style={{ padding: "96px 0", backgroundColor: "#f0f9ff" }}>
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="font-serif text-3xl md:text-5xl font-bold text-foreground mb-4">
              Led by Extraordinary Women
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Our leadership team guides Aurelia with compassion, expertise, and commitment.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              { name: "Logarakshika", role: "Dean", desc: "Visionary leader and founder of Aurelia Skin & Life." },
              { name: "Arshiya Samreen", role: "Assistant Doctor", desc: "Specializing in advanced skin treatments and aesthetic medicine." },
              { name: "Kamalini", role: "Assistant Doctor", desc: "Focus on pediatric dermatology and holistic skincare." },
            ].map((doc) => (
              <div key={doc.name} className="p-8 rounded-3xl bg-card shadow-card text-center">
                <div className="w-20 h-20 rounded-full bg-secondary flex items-center justify-center mx-auto mb-6">
                  <GraduationCap className="w-9 h-9 text-primary" />
                </div>
                <div className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-secondary text-xs font-medium text-primary tracking-widest uppercase mb-3">
                  <Star className="w-3 h-3" /> {doc.role}
                </div>
                <h3 className="font-serif text-2xl font-bold text-foreground mb-3">Dr. {doc.name}</h3>
                <p className="text-muted-foreground text-sm">{doc.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section - inline */}
      <section id="services" style={{ padding: "96px 0", backgroundColor: "#e0f2fe" }}>
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="font-serif text-3xl md:text-5xl font-bold text-foreground mb-4">
              Everything You Need
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              From AI-powered guidance to in-person consultations.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {[
              { icon: Bot, title: "AI Health Assistant", desc: "Friendly AI chatbot for skin health guidance." },
              { icon: CalendarDays, title: "Online Booking", desc: "Schedule appointments seamlessly." },
              { icon: Activity, title: "Live Availability", desc: "Real-time doctor availability." },
              { icon: Phone, title: "Call a Doctor", desc: "Direct phone consultations." },
              { icon: Video, title: "Video Consultation", desc: "Secure video calls from home." },
              { icon: ClipboardList, title: "Doctor Directory", desc: "Browse 35+ women specialists." },
              { icon: Map, title: "Hospital Navigation", desc: "Interactive maps for easy navigation." },
              { icon: Lock, title: "Privacy First", desc: "Your data is always secure." },
            ].map((s) => (
              <div key={s.title} className="p-6 rounded-2xl bg-card shadow-sm">
                <s.icon className="w-6 h-6 text-primary mb-4" />
                <h3 className="font-serif text-lg font-semibold text-foreground mb-2">{s.title}</h3>
                <p className="text-sm text-muted-foreground">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <AppointmentCTA />
      <Footer />
    </div>
  );
};

export default Index;
