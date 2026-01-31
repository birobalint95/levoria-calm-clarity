import { Eye, Shield, Zap } from "lucide-react";

const pillars = [
  {
    icon: Eye,
    title: "Clarity",
    description: "Understand what's happening and why",
  },
  {
    icon: Shield,
    title: "Reliability",
    description: "Reduce uncertainty and risk",
  },
  {
    icon: Zap,
    title: "Momentum",
    description: "Move forward with confidence",
  },
];

const Hero = () => {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="home" className="min-h-screen flex flex-col justify-center pt-20 pb-16">
      <div className="section-container">
        {/* Hero Content */}
        <div className="max-w-3xl mx-auto text-center mb-16 lg:mb-24">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold leading-tight mb-6 animate-fade-in-up">
            Make complex systems{" "}
            <span className="text-primary">understandable.</span>
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-10 animate-fade-in-up" style={{ animationDelay: "0.1s" }}>
            We build modern, human-friendly technology that helps organizations
            gain clarity, confidence, and control in complex environments.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
            <button
              onClick={() => scrollToSection("#solutions")}
              className="px-8 py-3.5 bg-primary text-primary-foreground font-medium rounded-lg hover:bg-primary/90 transition-all duration-200 hover:scale-[1.02] active:scale-[0.98]"
            >
              Explore Solutions
            </button>
            <button
              onClick={() => scrollToSection("#contact")}
              className="px-8 py-3.5 border border-border text-foreground font-medium rounded-lg hover:bg-secondary transition-all duration-200 hover:scale-[1.02] active:scale-[0.98]"
            >
              Contact Us
            </button>
          </div>
        </div>

        {/* Value Pillars */}
        <div className="grid md:grid-cols-3 gap-6 lg:gap-8 max-w-4xl mx-auto">
          {pillars.map((pillar, index) => (
            <div
              key={pillar.title}
              className="group p-6 lg:p-8 bg-card rounded-lg border border-border hover:border-primary/30 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-primary/5 animate-fade-in-up"
              style={{ animationDelay: `${0.3 + index * 0.1}s` }}
            >
              <pillar.icon className="w-8 h-8 text-primary mb-4 group-hover:scale-110 transition-transform duration-300" />
              <h3 className="text-lg font-semibold mb-2">{pillar.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {pillar.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;
