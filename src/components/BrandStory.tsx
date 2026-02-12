import { Heart, Sparkles, Award } from "lucide-react";

const BrandStory = () => {
  return (
    <section id="about" className="py-24 bg-red-500">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center">
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
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16 max-w-3xl mx-auto">
          {[
            { icon: Heart, label: "Women Doctors", value: "35+" },
            { icon: Award, label: "Years of Trust", value: "Expert" },
            { icon: Sparkles, label: "Women & Children Only", value: "100%" },
          ].map((stat) => (
            <div
              key={stat.label}
              className="text-center p-6 rounded-2xl gradient-card shadow-card"
            >
              <stat.icon className="w-8 h-8 text-primary mx-auto mb-3" />
              <div className="font-serif text-3xl font-bold text-foreground mb-1">
                {stat.value}
              </div>
              <div className="text-sm text-muted-foreground tracking-wide">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BrandStory;
