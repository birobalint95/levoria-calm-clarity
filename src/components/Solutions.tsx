import { ArrowRight } from "lucide-react";

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

        {/* FeedBag.ai Feature Block */}
        <div className="bg-card rounded-lg border border-border p-8 lg:p-12">
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
            {/* Text Content */}
            <div>
              <h3 className="text-2xl md:text-3xl font-semibold mb-6 text-primary">
                FeedBag.ai
              </h3>
              <div className="space-y-4 text-muted-foreground leading-relaxed mb-8">
                <p>
                  FeedBag.ai helps teams make sense of complex, fragmented
                  information and turn it into clear guidance they can act on.
                </p>
                <p>
                  In many organizations, critical knowledge is scattered across
                  documents, tools, and conversations, making it hard to
                  understand what really matters, what depends on what, and
                  where attention is needed next. FeedBag.ai brings these
                  signals together, structures them, and presents them in a way
                  that supports better thinking and more confident
                  decision-making.
                </p>
                <p>
                  Instead of adding yet another dashboard, FeedBag.ai focuses on
                  clarity: highlighting relationships, surfacing relevant
                  context, and guiding teams toward meaningful actions when
                  complexity would otherwise slow them down.
                </p>
              </div>
              <a
                href="https://feedbag.ai/" target="_blank"
                className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground font-medium rounded-lg hover:bg-primary/90 transition-all duration-200 hover:scale-[1.02] active:scale-[0.98] group"
              >
                Explore product
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>

            {/* Visual Mockups */}
            <div className="space-y-4">
              <div className="bg-secondary/50 rounded-lg aspect-video flex items-center justify-center border border-border">
                <div className="text-center p-8">
                  <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center">
                    <div className="w-8 h-8 rounded-full bg-primary/30" />
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Product visualization
                  </p>
                </div>
              </div>
              <div className="bg-secondary/50 rounded-lg aspect-[16/9] flex items-center justify-center border border-border">
                <div className="text-center p-8">
                  <div className="flex gap-2 justify-center mb-4">
                    <div className="w-12 h-3 rounded bg-primary/20" />
                    <div className="w-16 h-3 rounded bg-primary/30" />
                    <div className="w-10 h-3 rounded bg-primary/20" />
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Interface preview
                  </p>
                </div>
              </div>
            </div>
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
