"use client";

import Link from "next/link";
import { useEffect, useState, type FormEvent, type ReactNode } from "react";
import { pageWrap } from "@/lib/pageLayout";

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
 const [isMobile, setIsMobile] = useState(false);
 const wrapStyle = pageWrap(isMobile);

 useEffect(() => {
 const onResize = () => setIsMobile(window.innerWidth < 900);
 onResize();
 window.addEventListener("resize", onResize);
 return () => window.removeEventListener("resize", onResize);
 }, []);

 function onSubmit(e: FormEvent<HTMLFormElement>) {
 e.preventDefault();
 setSubmitted(true);
 }

 return (
 <div style={{ background: "#fff" }}>
 <section
 style={{
 width: "100%",
 background: "#F0FAFA",
 paddingTop: "140px",
 paddingBottom: "80px",
 position: "relative",
 overflow: "hidden",
 }}
 >
 <div style={{ position: "absolute", top: 0, right: 0, width: "400px", height: "400px", borderRadius: "50%", background: "radial-gradient(circle, rgba(43,191,179,0.15) 0%, transparent 70%)", zIndex: 0 }} />
 <div style={{ position: "absolute", bottom: "-120px", left: "-80px", width: "280px", height: "280px", borderRadius: "50%", background: "radial-gradient(circle, rgba(245,168,0,0.12) 0%, transparent 70%)", zIndex: 0 }} />
 <div style={{ ...wrapStyle, position: "relative", zIndex: 1 }}>
 <nav style={{ fontSize: "0.8rem", color: teal, marginBottom: "1rem" }}>
 <Link href="/" style={{ color: teal, textDecoration: "none" }}>
 Home
 </Link>
 <span style={{ color: "rgba(26,26,26,0.35)" }}> / </span>
 <span style={{ color: "#1A1A1A" }}>Contact</span>
 </nav>
 <h1
 style={{
 fontSize: "clamp(2.5rem, 5vw, 4rem)",
 fontWeight: 800,
 color: "#1A1A1A",
 margin: 0,
 marginBottom: "0.75rem",
 }}
 >
 Get In Touch
 </h1>
 <div
 style={{
 display: "none",
 }}
 />
 <p style={{ color: muted, fontSize: "1.05rem", maxWidth: "36rem", margin: 0 }}>
 Reach out to our team for partnerships, programme enquiries, or general questions.
 </p>
 <div
 style={{
 position: isMobile ? "static" : "absolute",
 bottom: isMobile ? undefined : "2rem",
 right: isMobile ? undefined : "1.5rem",
 background: "#fff",
 borderRadius: "1rem",
 padding: "1rem 1.25rem",
 boxShadow: "0 8px 24px rgba(0,0,0,0.1)",
 minWidth: "170px",
 textAlign: "center",
 margin: isMobile ? "1rem auto 0" : undefined,
 width: isMobile ? "fit-content" : undefined,
 }}
 >
 <p style={{ margin: 0, color: teal, fontSize: "0.72rem", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.06em" }}>Based In</p>
 <p style={{ margin: "0.2rem 0 0", color: "#1A1A1A", fontWeight: 800, fontSize: "1.5rem", lineHeight: 1.15 }}>Ghana</p>
 <p style={{ margin: "0.2rem 0 0.45rem", color: "#6B7280", fontSize: "0.78rem" }}>Greater Accra</p>
 <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#2BBFB3" strokeWidth="2" style={{ display: "block", margin: "0 auto" }} aria-hidden>
 <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 1 1 18 0z" />
 <circle cx="12" cy="10" r="3" />
 </svg>
 </div>
 </div>
 </section>

 <section style={{ padding: "6rem 1.5rem", background: "#fff" }}>
 <div style={wrapStyle}>
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
 width: "28px",
 height: "28px",
 borderRadius: "50%",
 background: "rgba(43,191,179,0.12)",
 border: "1px solid rgba(43,191,179,0.25)",
 display: "inline-flex",
 alignItems: "center",
 justifyContent: "center",
 color: teal,
 fontWeight: 700,
 flexShrink: 0,
 marginTop: "0.1rem",
 fontSize: "0.7rem",
 }}
 >
 {row.label.charAt(0)}
 </div>
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
 boxShadow: "0 2px 12px rgba(0,0,0,0.06)",
 borderTop: "4px solid #2BBFB3",
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
 <input name="name" type="text" required style={inputStyle} onFocus={(e) => (e.currentTarget.style.border = "1.5px solid #2BBFB3")} onBlur={(e) => (e.currentTarget.style.border = `1.5px solid ${border}`)} />

 <label style={{ display: "block", fontWeight: 600, color: dark, fontSize: "0.85rem", marginBottom: "0.35rem" }}>
 Email Address
 </label>
 <input name="email" type="email" required style={inputStyle} onFocus={(e) => (e.currentTarget.style.border = "1.5px solid #2BBFB3")} onBlur={(e) => (e.currentTarget.style.border = `1.5px solid ${border}`)} />

 <label style={{ display: "block", fontWeight: 600, color: dark, fontSize: "0.85rem", marginBottom: "0.35rem" }}>
 Subject
 </label>
 <input name="subject" type="text" required style={inputStyle} onFocus={(e) => (e.currentTarget.style.border = "1.5px solid #2BBFB3")} onBlur={(e) => (e.currentTarget.style.border = `1.5px solid ${border}`)} />

 <label style={{ display: "block", fontWeight: 600, color: dark, fontSize: "0.85rem", marginBottom: "0.35rem" }}>
 Message
 </label>
 <textarea
 name="message"
 required
 rows={5}
 style={{ ...inputStyle, minHeight: "140px", resize: "vertical" as const, fontFamily: "inherit" }}
 onFocus={(e) => (e.currentTarget.style.border = "1.5px solid #2BBFB3")}
 onBlur={(e) => (e.currentTarget.style.border = `1.5px solid ${border}`)}
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
