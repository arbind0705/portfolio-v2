import { GitBranch, Mail, Phone } from "lucide-react";

const socialLinks = [
  { icon: GitBranch, href: "#", label: "GitHub" },
  { icon: Mail, href: "#", label: "Email" },
  { icon: Phone, href: "#", label: "Phone" },
];

const footerLinks = [
  { href: "#about", label: "About" },
  { href: "#projects", label: "Projects" },
  { href: "#experience", label: "Experience" },
  { href: "#contact", label: "Contact" },
];

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-8 border-t border-border mt-20">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">

          {/* Left */}
          <div className="text-center md:text-left">
            <a
              href="#"
              className="text-xl font-bold tracking-tight"
            >
              pm<span className="text-primary">.</span>
            </a>

            <p className="mt-2 text-sm text-muted-foreground">
              © {currentYear} pm. All rights reserved.
            </p>
          </div>

          {/* Center */}
          <nav className="flex flex-wrap justify-center gap-6">
            {footerLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Right */}
          <div className="flex items-center gap-3">
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                aria-label={social.label}
                className="
                  w-10 h-10
                  rounded-full
                  glass
                  flex items-center justify-center
                  hover:bg-primary/10
                  hover:text-primary
                  transition-all
                  duration-300
                "
              >
                <social.icon className="w-4 h-4" />
              </a>
            ))}
          </div>

        </div>
      </div>
    </footer>
  );
};