import { ArrowRight } from "lucide-react";
// import inToolPicture from "@/assets/in-tool-picture.png";

const Solutions = () => {
  return (
    <section id="solutions" className="py-20 lg:py-32 bg-secondary">
      <div className="section-container">
        {/* Section Header */}
        <div className="mb-16">
          <h2 className="text-3xl md:text-4xl font-semibold mb-6">Solutions</h2>
          <p className="text-muted-foreground text-lg leading-relaxed">
            <b>Levoria</b> builds solutions addressing complex organizational
            and technical challenges. Each product is designed to bring clarity
            where complexity creates friction.
          </p>
        </div>

        {/* Alignum Feature Block */}
        <div className="bg-card rounded-lg border border-border p-8 lg:p-12">
          <div className="grid gap-10 lg:gap-16 items-center">
            {/* Text Content */}
            <div>
              <h3 className="text-2xl md:text-3xl font-semibold mb-6 text-primary">
                Alignum
              </h3>
              <div className="space-y-4 text-muted-foreground leading-relaxed mb-8">
                <p>
                  Alignum is a calm, modern AI assistant built for hairdressers. Send Alfie a quick photo or message and it turns it into ready-to-publish posts, client emails, and updates across the apps your clients already use — keeping your business present and your clients close, without adding to your workload.
                </p>
              </div>
              <a
                href="https://alignum.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground font-medium rounded-lg hover:bg-primary/90 transition-all duration-200 hover:scale-[1.02] active:scale-[0.98] group"
              >
                Explore product
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>

            {/* Visual Mockups */}
            {/* <div className="space-y-4">
                <img
                  src={inToolPicture}
                  alt="In-tool screenshot"
                  className="bg-secondary/50 rounded-lg flex items-center justify-center border border-border"
                />
            </div> */}
          </div>
        </div>

        {/* Coming Soon Note */}
        <p className="text-center text-muted-foreground text-sm mt-8">
          More solutions coming soon.
        </p>
      </div>
    </section>
  );
};

export default Solutions;
