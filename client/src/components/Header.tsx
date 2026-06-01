import { useState } from "react";
import { Phone, Menu, X } from "lucide-react";

const navItems = [
  { label: "Home", href: "/" },
  { label: "Products", href: "/products" },
  { label: "Applications", href: "/applications" },
  { label: "Capabilities", href: "/capabilities" },
  { label: "Company", href: "/company" },
  { label: "Contact", href: "/contact" },
];

interface HeaderProps {
  currentPage?: string;
}

export default function Header({ currentPage }: HeaderProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="site-header">
      <a className="brand" href="/" aria-label="BEST Machine homepage">
        <span className="brand-symbol">B</span>
        <span>
          <strong>BEST MACHINE</strong>
          <em>Injection Molding Solutions</em>
        </span>
      </a>

      <nav className="nav-links" aria-label="Main navigation">
        {navItems.map((item) => (
          <a 
            key={item.href} 
            href={item.href} 
            className={currentPage === item.href ? "active" : ""}
          >
            {item.label}
          </a>
        ))}
      </nav>

      <div className="header-actions">
        <a className="phone-link" href="tel:+8613915682130">
          <Phone className="h-4 w-4" /> +86 139 1568 2130
        </a>
        <a className="quote-button" href="/contact#inquiry-form">
          Get a Quote
        </a>
      </div>
      <button
        className="menu-button"
        aria-label={isMenuOpen ? "Close menu" : "Open menu"}
        aria-expanded={isMenuOpen}
        aria-controls="mobile-nav"
        onClick={() => setIsMenuOpen((open) => !open)}
      >
        {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
      </button>
      <nav id="mobile-nav" className="mobile-nav" aria-label="Mobile navigation" hidden={!isMenuOpen}>
        {navItems.map((item) => (
          <a
            key={item.href}
            href={item.href}
            className={currentPage === item.href ? "active" : ""}
          >
            {item.label}
          </a>
        ))}
      </nav>
    </header>
  );
}
