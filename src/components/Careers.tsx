import { Check } from "lucide-react";

const values = [
  "Ownership",
  "Calm execution",
  "High standards",
  "Customer empathy",
  "Learning mindset",
];

const Careers = () => {
  return (
    <section id="careers" className="py-20 lg:py-32 bg-secondary">
      <div className="section-container">
        <div className="max-w-2xl">
          {/* Section Header */}
          <h2 className="text-3xl md:text-4xl font-semibold mb-6">
            Careers & working style
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed mb-10">
            At Levoria, we work with intention. We believe great products come
            from small teams that care deeply, move thoughtfully, and take pride
            in craftsmanship. We value clarity in communication and calm
            execution over chaos.
          </p>

          {/* Values List */}
          <div className="mb-10">
            <h3 className="text-lg font-medium mb-4">What we value:</h3>
            <ul className="space-y-3">
              {values.map((value) => (
                <li
                  key={value}
                  className="flex items-center gap-3 text-muted-foreground"
                >
                  <div className="w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Check className="w-3 h-3 text-primary" />
                  </div>
                  {value}
                </li>
              ))}
            </ul>
          </div>

          {/* Not Hiring Note */}
          <div className="p-6 bg-card rounded-lg border border-border">
            <p className="text-muted-foreground">
              <span className="text-foreground font-medium">
                We're not hiring right now
              </span>
              , but we're always happy to meet great people. Feel free to reach
              out if you'd like to connect.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Careers;
