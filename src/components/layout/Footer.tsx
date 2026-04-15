import Link from "next/link";
import Image from "next/image";
import { Mail } from "lucide-react";
import type { CSSProperties } from "react";

const footerLinks = {
  Organisation: [
    { label: "About", href: "/about" },
    { label: "Impact", href: "/impact" },
    { label: "Partners", href: "/partners" },
  ],
  Programmes: [
    { label: "Get Global", href: "/programmes#get-global" },
    { label: "Get Local", href: "/programmes#get-local" },
    { label: "Training", href: "/programmes#training" },
  ],
  "Get Involved": [
    { label: "Donate", href: "/donate" },
    { label: "Become a Partner", href: "/partners#become-a-partner" },
    { label: "Updates", href: "/updates" },
    { label: "Contact", href: "/contact" },
  ],
};

type SocialEntry = { href: string; label: string; icon: React.ReactNode };

const wrap: CSSProperties = {
  maxWidth: "1280px",
  margin: "0 auto",
  padding: "0 1.5rem",
};

const colors = {
  teal: "#2BBFB3",
  tealLight: "#7DDDD7",
  tealDark: "#1A9A8F",
  amber: "#F5A800",
  amberDark: "#D48F00",
  dark: "#0F2E2B",
  surface: "#F8FFFE",
  muted: "#6B7280",
} as const;

const socials: SocialEntry[] = [
  {
    label: "Facebook",
    href: "#",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" width={16} height={16} aria-hidden="true">
        <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
      </svg>
    ),
  },
  {
    label: "Instagram",
    href: "#",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} width={16} height={16} aria-hidden="true">
        <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
        <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    label: "Twitter",
    href: "#",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" width={16} height={16} aria-hidden="true">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
      </svg>
    ),
  },
  {
    label: "LinkedIn",
    href: "#",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} width={16} height={16} aria-hidden="true">
        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
        <rect x="2" y="9" width="4" height="12" />
        <circle cx="4" cy="4" r="2" />
      </svg>
    ),
  },
  {
    label: "Email",
    href: "mailto:info@movetheworld.co",
    icon: <Mail size={16} />,
  },
];

export default function Footer() {
  return (
    <footer style={{ background: colors.dark, color: "#fff", marginTop: "4rem" }}>
      <div style={{ background: colors.teal, padding: "2.25rem 0" }}>
        <div style={{ ...wrap, display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 360px), 1fr))", gap: "1rem", alignItems: "center" }}>
          <div>
            <h3 style={{ margin: 0, color: "#fff", fontSize: "1.35rem", fontWeight: 800 }}>Stay in the loop</h3>
            <p style={{ margin: "0.35rem 0 0", color: "rgba(255,255,255,0.85)", fontSize: "0.95rem" }}>
              Get updates on our programmes, impact stories, and events.
            </p>
          </div>
          <form style={{ display: "flex", gap: "0.6rem", width: "100%" }}>
            <input
              type="email"
              placeholder="Your email address"
              style={{
                flex: 1,
                padding: "0.75rem 1rem",
                borderRadius: "999px",
                border: "1px solid rgba(255,255,255,0.35)",
                background: "rgba(255,255,255,0.16)",
                color: "#fff",
                fontSize: "0.88rem",
                minWidth: 0,
                outline: "none",
              }}
            />
            <button
              type="submit"
              style={{
                padding: "0.75rem 1.2rem",
                borderRadius: "999px",
                border: "none",
                background: colors.amber,
                color: "#fff",
                fontWeight: 700,
                fontSize: "0.88rem",
                cursor: "pointer",
              }}
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>

      <div style={{ ...wrap, paddingTop: "3rem", paddingBottom: "3rem" }}>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: "2rem" }}>
          <div>
            <Image src="/images/logo.png" alt="Move The World" width={140} height={48} style={{ height: "2.4rem", width: "auto", filter: "brightness(0) invert(1)" }} />
            <p style={{ margin: "1rem 0 0", color: "rgba(255,255,255,0.68)", fontSize: "0.9rem", lineHeight: 1.7 }}>
              Empowering young people in Ghana through Global Citizenship Education and community-led solutions.
            </p>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "0.6rem", marginTop: "1.2rem" }}>
              {socials.map(({ icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  style={{
                    width: "36px",
                    height: "36px",
                    borderRadius: "999px",
                    display: "inline-flex",
                    alignItems: "center",
                    justifyContent: "center",
                    background: "rgba(255,255,255,0.12)",
                    color: "#fff",
                    textDecoration: "none",
                  }}
                >
                  {icon}
                </a>
              ))}
            </div>
          </div>

          {Object.entries(footerLinks).map(([heading, links]) => (
            <div key={heading}>
              <h4 style={{ margin: 0, color: "#fff", fontSize: "0.86rem", fontWeight: 800, textTransform: "uppercase", letterSpacing: "0.06em" }}>
                {heading}
              </h4>
              <ul style={{ listStyle: "none", padding: 0, margin: "0.9rem 0 0", display: "grid", gap: "0.6rem" }}>
                {links.map((link) => (
                  <li key={link.href}>
                    <Link href={link.href} style={{ color: "rgba(255,255,255,0.72)", textDecoration: "none", fontSize: "0.92rem" }}>
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      <div style={{ borderTop: "1px solid rgba(255,255,255,0.12)" }}>
        <div
          style={{
            ...wrap,
            paddingTop: "1rem",
            paddingBottom: "1rem",
            display: "flex",
            flexWrap: "wrap",
            alignItems: "center",
            justifyContent: "space-between",
            gap: "0.6rem 1rem",
            color: "rgba(255,255,255,0.55)",
            fontSize: "0.78rem",
          }}
        >
          <p style={{ margin: 0 }}>
            {`© ${new Date().getFullYear()} Move The World. Registered Charity in England and Wales No. 1170656.`}
          </p>
          <div style={{ display: "flex", gap: "1rem" }}>
            <Link href="/privacy" style={{ color: "rgba(255,255,255,0.65)", textDecoration: "none" }}>
              Privacy Policy
            </Link>
            <Link href="/terms" style={{ color: "rgba(255,255,255,0.65)", textDecoration: "none" }}>
              Terms
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}