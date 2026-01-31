import { useMemo, useState } from "react";
import { Mail, Linkedin } from "lucide-react";
import emailjs from "@emailjs/browser";

import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

type Status = "idle" | "sending" | "success" | "error";

const Contact = () => {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const [status, setStatus] = useState<Status>("idle");
  const [statusText, setStatusText] = useState<string>("");

  const isSending = status === "sending";

  const canSubmit = useMemo(() => {
    return (
      fullName.trim().length > 0 &&
      emailRegex.test(email.trim()) &&
      message.trim().length > 0 &&
      !isSending
    );
  }, [fullName, email, message, isSending]);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const trimmedName = fullName.trim();
    const trimmedEmail = email.trim();
    const trimmedMessage = message.trim();

    // Basic validation with clear feedback
    if (!trimmedName) {
      setStatus("error");
      setStatusText("Please enter your name.");
      return;
    }
    if (!emailRegex.test(trimmedEmail)) {
      setStatus("error");
      setStatusText("Please enter a valid email address.");
      return;
    }
    if (!trimmedMessage) {
      setStatus("error");
      setStatusText("Please enter a message.");
      return;
    }

    setStatus("sending");
    setStatusText("");

    try {
      const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID as string;
      const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID as string;
      const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY as string;

      if (!serviceId || !templateId || !publicKey) {
        throw new Error("Missing EmailJS env vars. Check your .env file.");
      }

      await emailjs.send(
        serviceId,
        templateId,
        {
          from_name: trimmedName,
          from_email: trimmedEmail,
          message: trimmedMessage,
        },
        { publicKey }
      );

      setStatus("success");
      setStatusText("Thanks! Your message has been sent.");
      setFullName("");
      setEmail("");
      setMessage("");
    } catch (err) {
      console.error("EmailJS send failed:", err);
      setStatus("error");
      setStatusText("Something went wrong. Please try again later.");
    }
  }

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

            <form className="space-y-6" onSubmit={handleSubmit} noValidate>
              <div className="space-y-2">
                <Label htmlFor="name">Name</Label>
                <Input
                  id="name"
                  value={fullName}
                  onChange={(e) => {
                    setFullName(e.target.value);
                    if (status !== "idle") {
                      setStatus("idle");
                      setStatusText("");
                    }
                  }}
                  placeholder="Your name"
                  className="bg-card border-border focus:border-primary"
                  autoComplete="name"
                  disabled={isSending}
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                    if (status !== "idle") {
                      setStatus("idle");
                      setStatusText("");
                    }
                  }}
                  placeholder="your@email.com"
                  className="bg-card border-border focus:border-primary"
                  autoComplete="email"
                  disabled={isSending}
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="message">Message</Label>
                <Textarea
                  id="message"
                  value={message}
                  onChange={(e) => {
                    setMessage(e.target.value);
                    if (status !== "idle") {
                      setStatus("idle");
                      setStatusText("");
                    }
                  }}
                  placeholder="How can we help?"
                  rows={5}
                  className="bg-card border-border focus:border-primary resize-none"
                  disabled={isSending}
                />
              </div>

              {status !== "idle" && (
                <p
                  className={
                    status === "success"
                      ? "text-sm text-green-500"
                      : status === "error"
                      ? "text-sm text-destructive"
                      : "text-sm text-muted-foreground"
                  }
                >
                  {status === "sending" ? "Sending..." : statusText}
                </p>
              )}

              <button
                type="submit"
                disabled={!canSubmit}
                className="w-full sm:w-auto px-8 py-3.5 bg-primary text-primary-foreground font-medium rounded-lg hover:bg-primary/90 transition-all duration-200 hover:scale-[1.02] active:scale-[0.98] disabled:opacity-60 disabled:pointer-events-none"
              >
                {isSending ? "Sending..." : "Send message"}
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
                    aria-label="LinkedIn"
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
