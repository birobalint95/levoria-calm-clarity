import { Mail, Linkedin, Twitter } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";

const Contact = () => {
  return (
    <section id="contact" className="py-20 lg:py-32">
      <div className="section-container">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Contact Form */}
          <div>
            <h2 className="text-3xl md:text-4xl font-semibold mb-6">
              Get in touch
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-8">
              Have a question or want to learn more about how Levoria can help
              your organization? We'd love to hear from you.
            </p>

            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div className="space-y-2">
                <Label htmlFor="name">Name</Label>
                <Input
                  id="name"
                  placeholder="Your name"
                  className="bg-card border-border focus:border-primary"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="your@email.com"
                  className="bg-card border-border focus:border-primary"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="message">Message</Label>
                <Textarea
                  id="message"
                  placeholder="How can we help?"
                  rows={5}
                  className="bg-card border-border focus:border-primary resize-none"
                />
              </div>

              <button
                type="submit"
                className="w-full sm:w-auto px-8 py-3.5 bg-primary text-primary-foreground font-medium rounded-lg hover:bg-primary/90 transition-all duration-200 hover:scale-[1.02] active:scale-[0.98]"
              >
                Send message
              </button>
            </form>
          </div>

          {/* Contact Info */}
          <div className="lg:pt-16">
            <div className="bg-card rounded-lg border border-border p-8">
              <h3 className="text-xl font-semibold mb-6">Contact details</h3>

              <div className="space-y-4 mb-8">
                <a
                  href="mailto:hello@levoria.com"
                  className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors"
                >
                  <Mail className="w-5 h-5" />
                  hello@levoria.com
                </a>
              </div>

              <div>
                <p className="text-sm text-muted-foreground mb-4">Follow us</p>
                <div className="flex gap-4">
                  <a
                    href="https://www.linkedin.com/company/feedbag-ai"
                    className="w-10 h-10 rounded-lg bg-secondary flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-secondary/80 transition-colors"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Linkedin className="w-5 h-5" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
