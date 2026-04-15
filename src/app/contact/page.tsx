"use client";

import Link from "next/link";
import { useState, type FormEvent, type ReactNode } from "react";

const wrap = { maxWidth: "1280px", margin: "0 auto", padding: "0 1.5rem" };
const teal = "#2BBFB3";
const amber = "#F5A800";
const dark = "#0F2E2B";
const muted = "#6B7280";
const border = "#E5E7EB";
const btnAmber = {
  display: "inline-flex" as const,
  alignItems: "center" as const,
  justifyContent: "center" as const,
  padding: "0.875rem 2rem",
  background: "#F5A800",
  color: "#fff",
  fontWeight: 700,
  borderRadius: "999px",
  textDecoration: "none",
  fontSize: "0.88rem",
  border: "none",
  cursor: "pointer",
  width: "100%",
};

const btnTealOutline = {
  display: "inline-flex" as const,
  alignItems: "center" as const,
  justifyContent: "center" as const,
  padding: "0.875rem 2rem",
  background: "transparent",
  border: "2px solid #2BBFB3",
  color: "#2BBFB3",
  fontWeight: 700,
  borderRadius: "999px",
  textDecoration: "none",
  fontSize: "0.88rem",
  cursor: "pointer",
};

void btnTealOutline;

const grid2 = {
  display: "grid" as const,
  gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 420px), 1fr))",
  gap: "3rem",
  alignItems: "start" as const,
};

const inputStyle = {
  width: "100%",
  padding: "0.875rem 1.25rem",
  borderRadius: "0.75rem",
  border: `1.5px solid ${border}`,
  fontSize: "0.9rem",
  outline: "none" as const,
  marginBottom: "1rem",
  boxSizing: "border-box" as const,
};

function SocialButton({ href, label, children }: { href: string; label: string; children: ReactNode }) {
  const [hover, setHover] = useState(false);
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      style={{
        width: "40px",
        height: "40px",
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        border: `2px solid ${teal}`,
        borderRadius: "0.35rem",
        background: hover ? teal : "transparent",
        color: hover ? "#fff" : teal,
        transition: "background 0.2s, color 0.2s",
        textDecoration: "none",
      }}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      {children}
    </a>
  );
}

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitted(true);
  }

  return (
    <div style={{ background: "#fff" }}>
      <section
        style={{
          width: "100%",
          background: dark,
          paddingTop: "120px",
          paddingBottom: "80px",
        }}
      >
        <div style={wrap}>
          <nav style={{ fontSize: "0.8rem", color: teal, marginBottom: "1rem" }}>
            <Link href="/" style={{ color: teal, textDecoration: "none" }}>
              Home
            </Link>
            <span style={{ color: "rgba(255,255,255,0.4)" }}> / </span>
            <span style={{ color: "#fff" }}>Contact</span>
          </nav>
          <h1
            style={{
              fontSize: "clamp(2rem, 4vw, 3rem)",
              fontWeight: 800,
              color: "#fff",
              margin: 0,
              marginBottom: "0.75rem",
            }}
          >
            Get In Touch
          </h1>
          <div
            style={{
              width: "80px",
              height: "4px",
              background: amber,
              borderRadius: "2px",
              marginBottom: "1.25rem",
            }}
          />
          <p style={{ color: "rgba(255,255,255,0.6)", fontSize: "1.05rem", maxWidth: "36rem", margin: 0 }}>
            Reach out to our team for partnerships, programme enquiries, or general questions.
          </p>
        </div>
      </section>

      <section style={{ padding: "6rem 0", background: "#fff" }}>
        <div style={wrap}>
          <div style={grid2}>
            <div>
              <span
                style={{
                  display: "inline-block",
                  padding: "0.35rem 1rem",
                  background: teal,
                  color: "#fff",
                  fontWeight: 600,
                  fontSize: "0.8rem",
                  borderRadius: "999px",
                  marginBottom: "1rem",
                }}
              >
                Contact Us
              </span>
              <h2 style={{ fontSize: "clamp(1.5rem, 3vw, 2rem)", fontWeight: 800, color: dark, margin: "0 0 1rem" }}>
                We&apos;d love to hear from you
              </h2>
              <p style={{ color: muted, lineHeight: 1.75, margin: "0 0 2rem" }}>
                Whether you are interested in volunteering, bringing our programmes to your school, or supporting our
                work, send us a message and we will respond as soon as we can.
              </p>

              {[
                { label: "Location", value: "Medie, Greater Accra, Ghana" },
                { label: "Email", value: "info@movetheworld.co" },
                { label: "Charity No.", value: "1170656 (England & Wales)" },
              ].map((row) => (
                <div
                  key={row.label}
                  style={{ display: "flex", alignItems: "flex-start", gap: "1rem", marginBottom: "1.25rem" }}
                >
                  <div
                    style={{
                      width: "12px",
                      height: "12px",
                      borderRadius: "50%",
                      background: teal,
                      flexShrink: 0,
                      marginTop: "0.35rem",
                    }}
                  />
                  <div>
                    <div style={{ fontWeight: 700, color: dark, fontSize: "0.9rem" }}>{row.label}</div>
                    <div style={{ color: muted, fontSize: "0.95rem", marginTop: "0.2rem" }}>{row.value}</div>
                  </div>
                </div>
              ))}

              <div style={{ display: "flex", flexWrap: "wrap", gap: "0.75rem", marginTop: "2rem" }}>
                <SocialButton href="https://facebook.com" label="Facebook">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
                    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                  </svg>
                </SocialButton>
                <SocialButton href="https://instagram.com" label="Instagram">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
                    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" strokeLinecap="round" />
                  </svg>
                </SocialButton>
                <SocialButton href="https://twitter.com" label="Twitter">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                  </svg>
                </SocialButton>
                <SocialButton href="https://linkedin.com" label="LinkedIn">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                    <rect x="2" y="9" width="4" height="12" />
                    <circle cx="4" cy="4" r="2" />
                  </svg>
                </SocialButton>
              </div>
            </div>

            <div
              style={{
                background: "#fff",
                borderRadius: "1.5rem",
                padding: "2.5rem",
                boxShadow: "0 4px 24px rgba(0,0,0,0.08)",
              }}
            >
              {submitted ? (
                <p style={{ color: dark, fontWeight: 600, fontSize: "1.1rem", margin: 0 }}>
                  Thank you. Your message has been sent successfully. We will be in touch soon.
                </p>
              ) : (
                <form onSubmit={onSubmit}>
                  <label style={{ display: "block", fontWeight: 600, color: dark, fontSize: "0.85rem", marginBottom: "0.35rem" }}>
                    Full Name
                  </label>
                  <input name="name" type="text" required style={inputStyle} />

                  <label style={{ display: "block", fontWeight: 600, color: dark, fontSize: "0.85rem", marginBottom: "0.35rem" }}>
                    Email Address
                  </label>
                  <input name="email" type="email" required style={inputStyle} />

                  <label style={{ display: "block", fontWeight: 600, color: dark, fontSize: "0.85rem", marginBottom: "0.35rem" }}>
                    Subject
                  </label>
                  <input name="subject" type="text" required style={inputStyle} />

                  <label style={{ display: "block", fontWeight: 600, color: dark, fontSize: "0.85rem", marginBottom: "0.35rem" }}>
                    Message
                  </label>
                  <textarea
                    name="message"
                    required
                    rows={5}
                    style={{ ...inputStyle, minHeight: "140px", resize: "vertical" as const, fontFamily: "inherit" }}
                  />

                  <button type="submit" style={btnAmber}>
                    Send Message
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
