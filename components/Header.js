"use client";

import { useEffect, useState } from "react";
import { site } from "@/lib/site";

const links = [
  { href: "#about", label: "序" },
  { href: "#story", label: "由縁" },
  { href: "#day", label: "昼" },
  { href: "#night", label: "夜" },
  { href: "#menu", label: "品書き" },
  { href: "#access", label: "案内" },
  { href: "#faq", label: "問" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={`site-header ${scrolled ? "site-header--solid" : ""}`}>
      <a href="#top" className="site-header__brand" aria-label={site.name}>
        <span className="site-header__mark">禅</span>
        <span className="site-header__name">{site.name}</span>
      </a>

      <button
        className="site-header__toggle"
        aria-label="メニュー"
        aria-expanded={open}
        onClick={() => setOpen((v) => !v)}
      >
        <span />
        <span />
      </button>

      <nav className={`site-nav ${open ? "site-nav--open" : ""}`}>
        {links.map((l) => (
          <a key={l.href} href={l.href} onClick={() => setOpen(false)}>
            {l.label}
          </a>
        ))}
      </nav>
    </header>
  );
}
