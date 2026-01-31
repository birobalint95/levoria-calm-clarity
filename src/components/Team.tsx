import { Linkedin } from "lucide-react";
import balintProfile from "@/assets/balint_profile.png";
import ostapProfile from "@/assets/ostap_profile.png";

const founders = [
  {
    name: "Balint Biro",
    avatarPicture: balintProfile,
    role: "Co-Founder & Co-CEO",
    description: "Balint brings a strong product and technical background, with experience in product management, software development, and enterprise automation.",
    linkedin: "https://www.linkedin.com/in/balintbiro/",
  },
  {
    name: "Ostap Kharysh",
    avatarPicture: ostapProfile,
    role: "Co-Founder & Co-CEO",
    description: "Ostap brings experience across product leadership, delivery, and business consulting, with a focus on automation, optimization, and real-world execution.",
    linkedin: "https://www.linkedin.com/in/ostapkharysh/",
  },
];

const Team = () => {
  return (
    <section id="team" className="py-20 lg:py-32">
      <div className="section-container">
        {/* Section Header */}
        <div className="mb-16">
          <h2 className="text-3xl md:text-4xl font-semibold mb-6">Team</h2>
          <p className="text-muted-foreground text-lg leading-relaxed">
            <b>Levoria</b> was founded by experienced technologists and product leaders who believe the best software makes complex systems feel simple. Together, they bring hands-on experience across product management, engineering, automation, and enterprise consulting, shaping tools that help organizations think clearly and act with confidence.
          </p>
        </div>

        {/* Founder Cards */}
        <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
          {founders.map((founder) => (
            <div
              key={founder.name + founder.role}
              className="group bg-card rounded-lg border border-border p-6 lg:p-8 hover:border-primary/30 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-primary/5"
            >
              <img
                src={founder.avatarPicture}
                alt="Balint Biro"
                className="w-28 h-28 rounded-full object-cover mb-6"
              />

              <h3 className="text-xl font-semibold mb-1">{founder.name}</h3>
              <p className="text-primary text-sm font-medium mb-3">
                {founder.role}
              </p>
              <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                {founder.description}
              </p>

              <a
                href={founder.linkedin}
                className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Linkedin className="w-4 h-4" />
                LinkedIn
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;
