"use client";

import Image from "next/image";
import Link from "next/link";
import type { CSSProperties } from "react";

const wrap: CSSProperties = { maxWidth: "1280px", margin: "0 auto", padding: "0 1.5rem" };
const teal = "#2BBFB3";
const amber = "#F5A800";
const dark = "#0F2E2B";
const surface = "#F8FFFE";
const muted = "#6B7280";
const btnAmber: CSSProperties = { display: "inline-flex", alignItems: "center", justifyContent: "center", padding: "0.875rem 2rem", background: "#F5A800", color: "#fff", fontWeight: 700, borderRadius: "999px", textDecoration: "none", fontSize: "0.88rem", border: "none", cursor: "pointer" };
const btnTealOutline: CSSProperties = { display: "inline-flex", alignItems: "center", justifyContent: "center", padding: "0.875rem 2rem", background: "transparent", border: "2px solid #2BBFB3", color: "#2BBFB3", fontWeight: 700, borderRadius: "999px", textDecoration: "none", fontSize: "0.88rem", cursor: "pointer" };
const cardStyle: CSSProperties = { background: "#fff", borderRadius: "1.25rem", boxShadow: "0 2px 8px rgba(0,0,0,0.06), 0 8px 24px rgba(0,0,0,0.04)", overflow: "hidden" };
const sectionHeading: CSSProperties = { fontSize: "clamp(1.75rem, 3.5vw, 2.6rem)", fontWeight: 900, color: "#1A1A1A", lineHeight: 1.15, letterSpacing: "-0.02em" };
const bodyText: CSSProperties = { color: "#6B7280", lineHeight: 1.8, fontSize: "0.95rem" };
const pill = (color: string, bg: string): CSSProperties => ({ display: "inline-flex", alignItems: "center", background: bg, color, padding: "0.35rem 1rem", borderRadius: "999px", fontSize: "0.78rem", fontWeight: 700, width: "fit-content", marginBottom: "0.75rem" });

void cardStyle;

export default function PartnersPage() {
  return (
    <div style={{ background: "#fff" }}>
      <section style={{ background: dark, paddingTop: "140px", paddingBottom: "80px", textAlign: "center" }}>
        <div style={wrap}>
          <p style={{ margin: "0 0 1rem", color: teal, fontSize: "0.8rem" }}>Home / Partners</p>
          <h1 style={{ margin: "0 0 1rem", color: "#fff", fontSize: "clamp(2.5rem, 5vw, 4rem)", fontWeight: 900 }}>Our Partners</h1>
          <p style={{ margin: 0, color: "rgba(255,255,255,0.6)" }}>Working together to empower young people across Ghana.</p>
        </div>
      </section>

      <section style={{ background: "#fff", padding: "6rem 1.5rem" }}>
        <div style={wrap}>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 480px), 1fr))", gap: "4rem", alignItems: "center" }}>
            <div>
              <span style={pill("#fff", teal)}>Our Partners & Funders</span>
              <h2 style={{ ...sectionHeading, margin: "0 0 1rem" }}>Building impact through collaboration</h2>
              <p style={{ ...bodyText, margin: "0 0 1rem" }}>
                Move The World is grateful to our partners and funders who make our programmes possible. Through these relationships, we are able to reach more young people across Ghana with quality Global Citizenship Education.
              </p>
              <p style={{ ...bodyText, margin: "0 0 1.5rem" }}>
                Our partners share our belief that when young people are given the right tools and opportunities, they become powerful agents of change in their communities.
              </p>
              <a href="#become-a-partner" style={btnAmber}>Become a Partner</a>
            </div>
            <div style={{ position: "relative", height: "460px", borderRadius: "2rem", overflow: "hidden" }}>
              <Image src="/images/impact-2.webp" alt="" fill style={{ objectFit: "cover" }} />
            </div>
          </div>
        </div>
      </section>

      <section style={{ background: surface, padding: "6rem 1.5rem" }}>
        <div style={wrap}>
          <div style={{ textAlign: "center" }}>
            <span style={pill("#fff", teal)}>Our Partners</span>
            <h2 style={{ ...sectionHeading, margin: "0.5rem 0 0" }}>Those who make it possible</h2>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(160px, 1fr))", gap: "1.5rem", marginTop: "3rem" }}>
            {Array.from({ length: 8 }).map((_, i) => (
              <div key={i} style={{ background: "#fff", borderRadius: "1rem", padding: "1.5rem", height: "90px", display: "flex", alignItems: "center", justifyContent: "center", boxShadow: "0 2px 8px rgba(0,0,0,0.05)" }}>
                <div style={{ height: "28px", width: "80%", background: "#E5E7EB", borderRadius: "0.5rem" }} />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="become-a-partner" style={{ background: "#fff", padding: "6rem 1.5rem" }}>
        <div style={wrap}>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 460px), 1fr))", gap: "4rem", alignItems: "center" }}>
            <div>
              <span style={pill(dark, `${amber}33`)}>Get Involved</span>
              <h2 style={{ ...sectionHeading, margin: "0 0 1rem" }}>Become a partner</h2>
              <p style={{ ...bodyText, margin: "0 0 1rem" }}>
                We are always looking for organisations and individuals who share our vision of empowered young people leading community-driven change. Whether you are a funder, a school, a corporate partner, or an individual supporter, there are many ways to get involved.
              </p>
              <ul style={{ listStyle: "none", padding: 0, margin: "0 0 1.5rem" }}>
                {[
                  "Fund a programme or facilitator training cohort",
                  "Partner your school or organisation with our curriculum",
                  "Sponsor a student's journey through our programmes",
                ].map((line) => (
                  <li key={line} style={{ display: "flex", alignItems: "flex-start", gap: "0.65rem", margin: "0 0 0.65rem", ...bodyText }}>
                    <span style={{ width: "8px", height: "8px", borderRadius: "50%", background: teal, flexShrink: 0, marginTop: "0.45rem" }} />
                    {line}
                  </li>
                ))}
              </ul>
              <Link href="/contact" style={btnAmber}>Get In Touch</Link>
            </div>
            <div style={{ background: dark, borderRadius: "1.5rem", padding: "2.5rem" }}>
              <h3 style={{ margin: "0 0 1.5rem", color: "#fff", fontWeight: 800, fontSize: "1.3rem" }}>Other ways to support</h3>
              {[
                {
                  label: "Global Giving",
                  desc: "Make a donation through our Global Giving page to support our work directly.",
                },
                {
                  label: "Fundraise for Us",
                  desc: "Set yourself a challenge and raise funds — every penny helps us reach more young people.",
                },
              ].map((row) => (
                <div key={row.label} style={{ display: "flex", alignItems: "flex-start", gap: "0.9rem", marginBottom: "1.25rem" }}>
                  <div style={{ width: "34px", height: "34px", borderRadius: "50%", background: teal, flexShrink: 0 }} />
                  <div>
                    <p style={{ margin: 0, color: "#fff", fontWeight: 700 }}>{row.label}</p>
                    <p style={{ margin: "0.3rem 0 0", color: "rgba(255,255,255,0.6)", lineHeight: 1.7, fontSize: "0.9rem" }}>{row.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section style={{ width: "100%", background: surface, padding: "6rem 1.5rem" }}>
        <div style={{ background: teal, borderRadius: "2rem", padding: "4rem 3rem", maxWidth: "860px", margin: "0 auto", textAlign: "center", position: "relative", overflow: "hidden" }}>
          <div style={{ position: "absolute", top: "-20%", right: "-10%", width: "280px", height: "280px", borderRadius: "50%", background: "#fff", opacity: 0.06 }} />
          <div style={{ position: "absolute", bottom: "-25%", left: "-5%", width: "220px", height: "220px", borderRadius: "50%", background: "#fff", opacity: 0.06 }} />
          <div style={{ position: "relative" }}>
            <h2 style={{ margin: "0 0 1rem", fontSize: "clamp(1.35rem, 3vw, 2rem)", fontWeight: 900, color: "#fff" }}>Ready to make a difference?</h2>
            <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: "1rem", marginTop: "1.8rem" }}>
              <Link href="/donate" style={btnAmber}>Donate Now</Link>
              <Link href="/contact" style={{ ...btnTealOutline, border: "2px solid rgba(255,255,255,0.5)", color: "#fff" }}>Contact Us</Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
