import levoriaLogo from "@/assets/levoria-logo.png";

const navItems = [
  { label: "Home", href: "#home" },
  { label: "Solutions", href: "#solutions" },
  { label: "Team", href: "#team" },
  { label: "Careers", href: "#careers" },
  { label: "Contact", href: "#contact" },
];

const Footer = () => {
  const handleNavClick = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-12 lg:py-16 border-t border-border">
      <div className="section-container">
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8">
          {/* Logo and Copyright */}
          <div className="flex flex-col gap-4">
            <button
              onClick={() => handleNavClick("#home")}
              className="flex items-center gap-2 transition-opacity hover:opacity-80 w-fit"
            >
              <img
                src={levoriaLogo}
                alt="Levoria"
                className="h-6 w-auto opacity-80"
              />
            </button>
            <p className="text-sm text-muted-foreground">
              © {currentYear} Levoria. All rights reserved.
            </p>
          </div>

          {/* Navigation */}
          <nav>
            <ul className="flex flex-wrap gap-x-8 gap-y-2">
              {navItems.map((item) => (
                <li key={item.label}>
                  <button
                    onClick={() => handleNavClick(item.href)}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {item.label}
                  </button>
                </li>
              ))}
            </ul>
          </nav>

          {/* Legal Links */}
          <div className="flex gap-6">
            <a
              href="#"
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              Imprint
            </a>
            <a
              href="#"
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              Privacy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
