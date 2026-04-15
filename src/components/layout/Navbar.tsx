"use client";

import { useState, useEffect, type CSSProperties } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react";

const navLinks: { label: string; href: string }[] = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Programmes", href: "/programmes" },
  { label: "Impact", href: "/impact" },
  { label: "Partners", href: "/partners" },
  { label: "Updates", href: "/updates" },
  { label: "Contact", href: "/contact" },
];

const teal = "#2BBFB3";
const text = "#1A1A1A";
const border = "#E5E7EB";
const accent = "#F5A800";
const accentDark = "#D48F00";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const check = () => {
      const desktop = window.innerWidth > 1024;
      setIsDesktop(desktop);
      if (desktop) setMobileOpen(false);
    };
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  const headerStyle: CSSProperties = {
    position: "fixed",
    top: 0,
    left: 0,
    right: 0,
    zIndex: 50,
    transition: "all 0.3s ease",
    background: scrolled ? "#fff" : "rgba(255,255,255,0.95)",
    backdropFilter: scrolled ? "none" : "blur(8px)",
    boxShadow: scrolled ? "0 4px 6px -1px rgba(0,0,0,0.08)" : "none",
    paddingTop: scrolled ? "0.75rem" : "1rem",
    paddingBottom: scrolled ? "0.75rem" : "1rem",
  };

  const innerStyle: CSSProperties = {
    maxWidth: "1280px",
    margin: "0 auto",
    padding: "0 1.5rem",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
  };

  const desktopNavStyle: CSSProperties = {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    gap: "2rem",
  };

  const linkStyle: CSSProperties = {
    fontSize: "0.875rem",
    fontWeight: 600,
    color: text,
    textDecoration: "none",
  };

  const donateBtnStyle: CSSProperties = {
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    padding: "0.5rem 1.5rem",
    background: accent,
    color: "#fff",
    fontWeight: 700,
    fontSize: "0.875rem",
    borderRadius: "999px",
    textDecoration: "none",
    border: "none",
    cursor: "pointer",
  };

  return (
    <header style={headerStyle}>
      <div style={innerStyle}>
        <Link href="/" style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
          <Image
            src="/images/logo.png"
            alt="Move The World"
            width={140}
            height={48}
            style={{ height: "2.5rem", width: "auto" }}
            priority
          />
        </Link>

        {isDesktop ? (
          <>
            <nav style={desktopNavStyle} aria-label="Main">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  style={linkStyle}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.color = teal;
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.color = text;
                  }}
                >
                  {link.label}
                </Link>
              ))}
            </nav>
            <div style={{ display: "flex", alignItems: "center", gap: "0.75rem" }}>
              <Link
                href="/donate"
                style={donateBtnStyle}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = accentDark;
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = accent;
                }}
              >
                Donate
              </Link>
            </div>
          </>
        ) : (
          <button
            type="button"
            style={{
              padding: "0.5rem",
              background: "none",
              border: "none",
              cursor: "pointer",
              color: text,
            }}
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
            aria-expanded={mobileOpen}
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        )}
      </div>

      {!isDesktop && mobileOpen && (
        <div
          style={{
            background: "#fff",
            borderTop: `1px solid ${border}`,
            padding: "1rem 1.5rem",
            display: "flex",
            flexDirection: "column",
            gap: "1rem",
          }}
        >
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              style={linkStyle}
              onClick={() => setMobileOpen(false)}
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/donate"
            style={{
              ...donateBtnStyle,
              marginTop: "0.5rem",
              textAlign: "center",
              justifyContent: "center",
            }}
            onClick={() => setMobileOpen(false)}
          >
            Donate
          </Link>
        </div>
      )}
    </header>
  );
}
