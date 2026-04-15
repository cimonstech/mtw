"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

const wrap = { maxWidth: "1280px", margin: "0 auto", padding: "0 1.5rem" };
const teal = "#2BBFB3";
const amber = "#F5A800";
const dark = "#0F2E2B";
const muted = "#6B7280";
const surface = "#F8FFFE";
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
  gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 500px), 1fr))",
  gap: "3rem",
  alignItems: "center" as const,
};

const imgWrap = {
  position: "relative" as const,
  height: "480px",
  borderRadius: "1.5rem",
  overflow: "hidden" as const,
};

const pill = {
  display: "inline-block" as const,
  padding: "0.25rem 0.75rem",
  background: "#F3F4F6",
  color: muted,
  fontSize: "0.75rem",
  fontWeight: 600,
  borderRadius: "999px",
};

export default function ProgrammesPage() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const onResize = () => setIsMobile(window.innerWidth < 900);
    onResize();
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

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
        <div style={{ ...wrap, position: "relative", zIndex: 1 }}>
          <nav style={{ fontSize: "0.8rem", color: teal, marginBottom: "1rem" }}>
            <Link href="/" style={{ color: teal, textDecoration: "none" }}>
              Home
            </Link>
            <span style={{ color: "rgba(26,26,26,0.35)" }}> / </span>
            <span style={{ color: "#1A1A1A" }}>Programmes</span>
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
            Our Programmes
          </h1>
          <div
            style={{
              display: "none",
            }}
          />
          <p style={{ color: muted, fontSize: "1.05rem", maxWidth: "36rem", margin: 0 }}>
            Global Citizenship Education for young people in Ghana, from classroom learning to community action.
          </p>
          <div style={{ position: isMobile ? "static" : "absolute", bottom: isMobile ? undefined : "2rem", right: isMobile ? undefined : "1.5rem", zIndex: 10, background: "#fff", borderRadius: "1rem", padding: "1rem 1.25rem", boxShadow: "0 8px 24px rgba(0,0,0,0.1)", minWidth: "180px", margin: isMobile ? "1rem auto 0" : undefined, width: isMobile ? "fit-content" : undefined }}>
            <p style={{ margin: 0, fontSize: "0.68rem", fontWeight: 700, color: "#2BBFB3", textTransform: "uppercase", letterSpacing: "0.06em" }}>SDG Coverage</p>
            <p style={{ margin: "0.2rem 0 0", fontSize: "2rem", fontWeight: 800, color: "#2BBFB3", lineHeight: 1.1 }}>12</p>
            <p style={{ margin: "0.15rem 0 0", fontSize: "0.72rem", color: "#6B7280" }}>Goals addressed</p>
            <div style={{ display: "flex", gap: "0.45rem", marginTop: "0.6rem" }}>
              <span style={{ width: "14px", height: "14px", borderRadius: "3px", background: "#2BBFB3" }} />
              <span style={{ width: "14px", height: "14px", borderRadius: "3px", background: "#F5A800" }} />
              <span style={{ width: "14px", height: "14px", borderRadius: "3px", background: "#1A9A8F" }} />
              <span style={{ width: "14px", height: "14px", borderRadius: "3px", background: "#7DDDD7" }} />
            </div>
          </div>
        </div>
      </section>

      <section id="get-global" style={{ padding: "6rem 0", background: "#fff" }}>
        <div style={wrap}>
          <div style={grid2}>
            <div style={{ position: "relative", overflow: "visible" }}>
              <div style={imgWrap}>
                <Image
                  src="/images/impact-1.webp"
                  alt=""
                  fill
                  sizes="(max-width: 900px) 100vw, 50vw"
                  style={{ objectFit: "cover" }}
                />
              </div>
              <div style={{ display: isMobile ? "none" : "block", position: "absolute", top: "1.25rem", right: "-1.5rem", zIndex: 10, background: "#0F2E2B", borderRadius: "1rem", padding: "0.875rem 1.15rem", boxShadow: "0 8px 32px rgba(0,0,0,0.2)", minWidth: "150px" }}>
                <p style={{ margin: 0, fontSize: "0.68rem", fontWeight: 700, color: "rgba(255,255,255,0.65)", textTransform: "uppercase", letterSpacing: "0.06em" }}>Duration</p>
                <p style={{ margin: "0.15rem 0 0", fontSize: "2rem", fontWeight: 800, color: "#fff", lineHeight: 1.1 }}>7</p>
                <p style={{ margin: "0.1rem 0 0", fontSize: "0.72rem", color: "rgba(255,255,255,0.65)" }}>Month programme</p>
              </div>
            </div>
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
                Get Global
              </span>
              <h2 style={{ fontSize: "clamp(1.5rem, 3vw, 2rem)", fontWeight: 800, color: dark, margin: "0 0 1rem" }}>
                Building global citizens aged 10–12
              </h2>
              <div style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem", marginBottom: "1rem" }}>
                <span style={pill}>Ages 10–12</span>
                <span style={pill}>SDGs 1–6</span>
              </div>
              <p style={{ color: muted, lineHeight: 1.75, margin: "0 0 1.5rem" }}>
                Our very first programme, for students aged 10-12, focused on SDGs 1-6. Locally trained facilitators lead
                students through a 7 month programme; each session has a different theme and activities to support
                understanding and engagement on the topic.
              </p>
              <Link href="/contact" style={btnAmber}>
                Learn More
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section id="get-local" style={{ padding: "6rem 0", background: surface }}>
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
                Get Local
              </span>
              <h2 style={{ fontSize: "clamp(1.5rem, 3vw, 2rem)", fontWeight: 800, color: dark, margin: "0 0 1rem" }}>
                Community action for ages 13–15
              </h2>
              <div style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem", marginBottom: "1rem" }}>
                <span style={pill}>Ages 13–15</span>
                <span style={pill}>SDGs 7–12</span>
              </div>
              <p style={{ color: muted, lineHeight: 1.75, margin: "0 0 1.5rem" }}>
                Our follow on programme, for students aged 13-15, focused on SDGs 7-12 and students impact in the
                community. Our facilitators support students to engage in project based learning to understand and
                address issues facing their community.
              </p>
              <Link href="/contact" style={btnAmber}>
                Learn More
              </Link>
            </div>
            <div style={{ position: "relative", overflow: "visible" }}>
              <div style={imgWrap}>
                <Image
                  src="/images/impact-2.webp"
                  alt=""
                  fill
                  sizes="(max-width: 900px) 100vw, 50vw"
                  style={{ objectFit: "cover" }}
                />
              </div>
              <div style={{ display: isMobile ? "none" : "block", position: "absolute", bottom: "1.5rem", left: "-1.5rem", zIndex: 10, background: "#fff", borderRadius: "1rem", padding: "0.875rem 1.15rem", boxShadow: "0 8px 32px rgba(0,0,0,0.12)", minWidth: "170px" }}>
                <p style={{ margin: 0, fontSize: "0.68rem", fontWeight: 700, color: "#2BBFB3", textTransform: "uppercase", letterSpacing: "0.06em" }}>Focus</p>
                <p style={{ margin: "0.2rem 0 0.25rem", fontSize: "0.88rem", fontWeight: 700, color: "#1A1A1A" }}>SDGs 7–12</p>
                {[
                  ["Community", "85%"],
                  ["Research", "70%"],
                ].map(([label, width]) => (
                  <div key={label as string} style={{ display: "flex", alignItems: "center", gap: "0.35rem", marginTop: "0.25rem" }}>
                    <span style={{ width: "58px", fontSize: "0.68rem", color: "#6B7280" }}>{label as string}</span>
                    <div style={{ flex: 1, height: "6px", background: "#E5E7EB", borderRadius: "999px", overflow: "hidden" }}>
                      <div style={{ width: width as string, height: "100%", background: "#2BBFB3", borderRadius: "999px" }} />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="training" style={{ padding: "6rem 0", background: "#fff" }}>
        <div style={wrap}>
          <div style={grid2}>
            <div style={{ position: "relative", overflow: "visible" }}>
              <div style={imgWrap}>
                <Image
                  src="/images/impact-3.webp"
                  alt=""
                  fill
                  sizes="(max-width: 900px) 100vw, 50vw"
                  style={{ objectFit: "cover" }}
                />
              </div>
              <div style={{ display: isMobile ? "none" : "block", position: "absolute", bottom: "1.5rem", right: "-1.5rem", zIndex: 10, background: "#fff", borderRadius: "1rem", padding: "0.875rem 1.15rem", boxShadow: "0 8px 32px rgba(0,0,0,0.12)", minWidth: "160px" }}>
                <p style={{ margin: 0, fontSize: "0.68rem", fontWeight: 700, color: "#2BBFB3", textTransform: "uppercase", letterSpacing: "0.06em" }}>Certified</p>
                <p style={{ margin: "0.2rem 0 0", fontSize: "1.5rem", fontWeight: 800, color: "#1A1A1A", lineHeight: 1.1 }}>20+</p>
                <p style={{ margin: "0.15rem 0 0", fontSize: "0.72rem", color: "#6B7280" }}>Facilitators trained</p>
              </div>
            </div>
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
                Training
              </span>
              <h2 style={{ fontSize: "clamp(1.5rem, 3vw, 2rem)", fontWeight: 800, color: dark, margin: "0 0 1rem" }}>
                Building the next generation of facilitators
              </h2>
              <div style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem", marginBottom: "1rem" }}>
                <span style={pill}>All ages</span>
              </div>
              <p style={{ color: muted, lineHeight: 1.75, margin: "0 0 1.5rem" }}>
                Our interactive facilitator training is provided to young people in the community who wish to become Move
                The World facilitators as well as teachers and community leaders who can use these skills to better
                deliver their work.
              </p>
              <Link href="/contact" style={btnAmber}>
                Learn More
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section style={{ width: "100%", background: surface, padding: "6rem 1.5rem" }}>
        <div style={{ background: teal, borderRadius: "2rem", padding: "4rem 3rem", maxWidth: "860px", margin: "0 auto", textAlign: "center", position: "relative", overflow: "hidden" }}>
          <div style={{ position: "absolute", top: "-20%", right: "-10%", width: "280px", height: "280px", borderRadius: "50%", background: "#fff", opacity: 0.06 }} />
          <div style={{ position: "absolute", bottom: "-25%", left: "-5%", width: "220px", height: "220px", borderRadius: "50%", background: "#fff", opacity: 0.06 }} />
          <div style={{ position: "relative" }}>
            <h2 style={{ margin: "0 0 1rem", fontSize: "clamp(1.35rem, 3vw, 2rem)", fontWeight: 800, color: "#fff" }}>
              Want to support our programmes?
            </h2>
            <Link href="/donate" style={btnAmber}>
              Donate Now
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
