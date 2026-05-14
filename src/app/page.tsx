"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { SdgIconRange, SdgIconSlider } from "@/components/ui/SdgIcons";
import { cardInnerPadding, pageWrap, sectionPadding } from "@/lib/pageLayout";
import { BookOpen, CheckCircle2, Globe2, Handshake, Newspaper, PlayCircle, Quote, Sparkles } from "lucide-react";

const teal = "#2BBFB3";
const surface = "#F8FFFE";

// ─── Counter ─────────────────────────────────────────────────────────────────
function useCountUp(target: number, duration = 1800) {
 const [count, setCount] = useState(0);
 const ref = useRef<HTMLDivElement>(null);
 const started = useRef(false);
 useEffect(() => {
 const el = ref.current;
 if (!el) return;
 const observer = new IntersectionObserver(
 ([entry]) => {
 if (entry.isIntersecting && !started.current) {
 started.current = true;
 const steps = 60;
 const inc = target / steps;
 let cur = 0;
 const id = setInterval(() => {
 cur += inc;
 if (cur >= target) { setCount(target); clearInterval(id); }
 else setCount(Math.floor(cur));
 }, duration / steps);
 }
 },
 { threshold: 0.4 }
 );
 observer.observe(el);
 return () => observer.disconnect();
 }, [target, duration]);
 return { count, ref };
}

function StatItem({ value, suffix, label }: { value: number; suffix: string; label: string }) {
 const { count, ref } = useCountUp(value);
 return (
 <div ref={ref} style={{ textAlign: "center", padding: "2rem 1rem", display: "flex", flexDirection: "column", alignItems: "center", gap: "0.5rem" }}>
 <p style={{ fontSize: "2.75rem", fontWeight: 800, color: "#2BBFB3", lineHeight: 1 }}>
 {count}{suffix}
 </p>
 <p style={{ fontSize: "0.85rem", color: "#6B7280", fontWeight: 600 }}>{label}</p>
 </div>
 );
}

// ─── Shared styles ────────────────────────────────────────────────────────────
const pill = (color: string, bg: string): React.CSSProperties => ({
 display: "inline-flex", alignItems: "center",
 background: bg, color, padding: "0.35rem 1rem",
 borderRadius: "999px", fontSize: "0.78rem", fontWeight: 700,
 width: "fit-content", marginBottom: "0.75rem",
});

const sectionHeading: React.CSSProperties = {
 fontSize: "clamp(1.75rem, 3.5vw, 2.6rem)",
 fontWeight: 800, color: "#1A1A1A",
 lineHeight: 1.15, letterSpacing: "-0.02em",
};

const bodyText: React.CSSProperties = {
 color: "#6B7280", lineHeight: 1.8, fontSize: "0.95rem",
};

const btnAmber: React.CSSProperties = {
 display: "inline-flex", alignItems: "center", justifyContent: "center",
 padding: "0.875rem 2rem", background: "#F5A800", color: "#fff",
 fontWeight: 700, borderRadius: "999px", textDecoration: "none",
 fontSize: "0.88rem", boxShadow: "0 4px 14px rgba(245,168,0,0.3)",
 border: "none", cursor: "pointer", whiteSpace: "nowrap" as const,
};

const btnTealOutline: React.CSSProperties = {
 display: "inline-flex", alignItems: "center", justifyContent: "center",
 padding: "0.875rem 2rem", background: "transparent",
 border: "2px solid #2BBFB3", color: "#2BBFB3",
 fontWeight: 700, borderRadius: "999px", textDecoration: "none",
 fontSize: "0.88rem", cursor: "pointer", whiteSpace: "nowrap" as const,
};

const cardStyle: React.CSSProperties = {
 background: "#fff", borderRadius: "1.5rem",
 boxShadow: "0 2px 12px rgba(0,0,0,0.06)",
 overflow: "hidden",
};

const partnerLogos: { src: string; alt: string }[] = [
 { src: "/partners/Ashworth.webp", alt: "Ashworth" },
 { src: "/partners/GHIB.webp", alt: "GHIB" },
 { src: "/partners/globalcitizenshipcollective.webp", alt: "Global Citizenship Collective" },
 { src: "/partners/globalfundforchildren.webp", alt: "Global Fund for Children" },
 { src: "/partners/mia.webp", alt: "MIA" },
 { src: "/partners/NCCE.webp", alt: "NCCE" },
 { src: "/partners/Oakdale-trust.webp", alt: "Oakdale Trust" },
 { src: "/partners/pan-african.webp", alt: "Pan African" },
 { src: "/partners/pearlston-alternative.webp", alt: "Pearlston Alternative" },
 { src: "/partners/Souter.webp", alt: "Souter" },
 { src: "/partners/The-Cordis-Charitable-Trust.webp", alt: "The Cordis Charitable Trust" },
];

const twoCol = (isMobile: boolean): React.CSSProperties => ({
 display: "grid",
 gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 460px), 1fr))",
 gap: isMobile ? "1.75rem" : "4rem", alignItems: "center",
});

export default function Home() {
 const [viewportWidth, setViewportWidth] = useState(1200);

 useEffect(() => {
 const setFromWindow = () => setViewportWidth(window.innerWidth);
 setFromWindow();
 window.addEventListener("resize", setFromWindow);
 return () => window.removeEventListener("resize", setFromWindow);
 }, []);

 const isMobile = viewportWidth < 900;
 const isTablet = viewportWidth < 1200;
 const wrapStyle = pageWrap(isMobile);
 const sectionPad = (block = "6rem") => sectionPadding(isMobile, block);

 return (
 <>
 {/* 1. HERO */}
 <section
 style={{
 position: "relative",
 overflow: "hidden",
 background: "#0F2E2B",
 minHeight: "100vh",
 display: "flex",
 flexDirection: "column",
 justifyContent: "center",
 paddingTop: "100px",
 paddingBottom: "80px",
 }}
 >
 <div
 style={{
 position: "absolute",
 top: isMobile ? "40px" : "80px",
 left: isMobile ? "12px" : "40px",
 width: "180px",
 height: "180px",
 backgroundImage: "radial-gradient(circle, rgba(255,255,255,0.15) 1.5px, transparent 1.5px)",
 backgroundSize: "18px 18px",
 zIndex: 0,
 opacity: isMobile ? 0.5 : 1,
 }}
 />
 <div
 style={{
 position: "absolute",
 bottom: isMobile ? "30px" : "60px",
 right: isMobile ? "12px" : "40px",
 width: "180px",
 height: "180px",
 backgroundImage: "radial-gradient(circle, rgba(255,255,255,0.15) 1.5px, transparent 1.5px)",
 backgroundSize: "18px 18px",
 zIndex: 0,
 opacity: isMobile ? 0.5 : 1,
 }}
 />
 <div
 style={{
 position: "absolute",
 right: isMobile ? "-220px" : "-80px",
 top: "50%",
 transform: "translateY(-50%)",
 width: isMobile ? "480px" : "600px",
 height: isMobile ? "480px" : "600px",
 borderRadius: "50%",
 border: "1px solid rgba(255,255,255,0.08)",
 zIndex: 0,
 }}
 />
 <div
 style={{
 position: "absolute",
 right: isMobile ? "-270px" : "-130px",
 top: "50%",
 transform: "translateY(-50%)",
 width: isMobile ? "560px" : "700px",
 height: isMobile ? "560px" : "700px",
 borderRadius: "50%",
 border: "1px solid rgba(255,255,255,0.05)",
 zIndex: 0,
 }}
 />

 <div
 style={{
 position: "relative",
 zIndex: 1,
 maxWidth: "1280px",
 margin: "0 auto",
 padding: isMobile ? "0 0.5rem" : "0 1.5rem",
 display: "grid",
 gridTemplateColumns: isMobile ? "1fr" : "repeat(2, minmax(0, 1fr))",
 gap: isMobile ? "1.75rem" : "4rem",
 alignItems: "center",
 width: "100%",
 }}
 >
 <div>
 <span
 style={{
 display: "inline-flex",
 alignItems: "center",
 gap: "0.5rem",
 background: "rgba(255,255,255,0.1)",
 border: "1px solid rgba(255,255,255,0.15)",
 color: "#fff",
 padding: "0.4rem 1rem",
 borderRadius: "999px",
 fontSize: "0.78rem",
 fontWeight: 600,
 marginBottom: "1.5rem",
 }}
 >
 <Sparkles size={14} color="#2BBFB3" />
 Global Citizenship Education in Ghana
 </span>
 <h1 style={{ fontSize: "clamp(2.8rem, 6vw, 4.5rem)", fontWeight: 800, color: "#fff", lineHeight: 1.05, letterSpacing: "-0.03em", margin: "0 0 1.5rem" }}>
 We design and deliver{" "}
 <span style={{ color: "#F5A800", textDecoration: "underline", textDecorationColor: "#F5A800", textDecorationStyle: "wavy", textUnderlineOffset: "6px" }}>
 programmes
 </span>{" "}
 that change lives
 </h1>
 <p style={{ fontSize: "1rem", color: "rgba(255,255,255,0.7)", lineHeight: 1.8, maxWidth: "440px", margin: "0 0 2.5rem" }}>
 Enabling a confident and skilful next generation of change makers. We use the SDGs as learning themes to engage students aged 10 to 15 from peri-urban communities in Ghana.
 </p>
 <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
 <Link
 href="/about"
 style={{
 background: "#F5A800",
 color: "#fff",
 padding: "0.875rem 2rem",
 borderRadius: "999px",
 fontWeight: 700,
 fontSize: "0.9rem",
 textDecoration: "none",
 display: "inline-flex",
 alignItems: "center",
 gap: "0.5rem",
 boxShadow: "0 4px 20px rgba(245,168,0,0.35)",
 }}
 >
 Read Our Story
 </Link>
 <Link
 href="/programmes"
 style={{
 background: "transparent",
 color: "#fff",
 padding: "0.875rem 2rem",
 borderRadius: "999px",
 fontWeight: 600,
 fontSize: "0.9rem",
 textDecoration: "none",
 display: "inline-flex",
 alignItems: "center",
 gap: "0.5rem",
 border: "1.5px solid rgba(255,255,255,0.3)",
 cursor: "pointer",
 }}
 >
 <BookOpen size={16} />
 Explore Programmes
 </Link>
 </div>
 <div style={{ marginTop: "2rem", display: "flex", alignItems: "center", gap: "0.75rem", flexWrap: "wrap" }}>
 <div style={{ display: "flex", alignItems: "center", marginLeft: "8px" }}>
 {[
 { bg: "#2BBFB3", label: "MT" },
 { bg: "#F5A800", label: "GC" },
 { bg: "#1A9A8F", label: "SD" },
 { bg: "#7DDDD7", label: "GH" },
 ].map((a, idx) => (
 <span
 key={a.label}
 style={{
 width: "32px",
 height: "32px",
 borderRadius: "50%",
 border: "2px solid #0F2E2B",
 marginLeft: idx === 0 ? "0" : "-8px",
 background: a.bg,
 color: "#fff",
 fontSize: "0.65rem",
 fontWeight: 700,
 display: "inline-flex",
 alignItems: "center",
 justifyContent: "center",
 }}
 >
 {a.label}
 </span>
 ))}
 </div>
 <p style={{ margin: 0, color: "rgba(255,255,255,0.7)", fontSize: "0.82rem" }}>
 Trusted by <span style={{ color: "#fff", fontWeight: 700 }}>1,000+</span> young people across Ghana
 </p>
 </div>
 </div>

 <div style={{ position: "relative", display: "flex", alignItems: "center", justifyContent: "center" }}>
 <div
 style={{
 width: isMobile ? "min(82vw, 380px)" : "min(42vw, 480px)",
 height: isMobile ? "min(82vw, 380px)" : "min(42vw, 480px)",
 borderRadius: "50%",
 overflow: "hidden",
 position: "relative",
 border: "6px solid rgba(255,255,255,0.12)",
 boxShadow: "0 0 0 16px rgba(43,191,179,0.08), 0 0 0 32px rgba(43,191,179,0.04)",
 maxWidth: "100%",
 }}
 >
 <Image src="/images/hero.webp" alt="MTW students" fill style={{ objectFit: "cover", objectPosition: "center top" }} priority />
 </div>
 <div
 style={{
 display: isMobile ? "none" : "block",
 position: "absolute",
 top: "2rem",
 left: "-1rem",
 background: "#fff",
 borderRadius: "1rem",
 padding: "0.875rem 1.25rem",
 boxShadow: "0 8px 32px rgba(0,0,0,0.15)",
 zIndex: 10,
 minWidth: "150px",
 }}
 >
 <p style={{ margin: 0, fontSize: "0.65rem", fontWeight: 700, color: "#2BBFB3", textTransform: "uppercase", letterSpacing: "0.06em" }}>Students</p>
 <p style={{ margin: "0.2rem 0 0", fontSize: "1.6rem", fontWeight: 800, color: "#1A1A1A", lineHeight: 1.1 }}>1,000+</p>
 <p style={{ margin: "0.15rem 0 0", fontSize: "0.7rem", color: "#6B7280" }}>across Ghana</p>
 </div>
 <div
 style={{
 display: isMobile ? "none" : "block",
 position: "absolute",
 bottom: "2rem",
 right: "-1rem",
 background: "#fff",
 borderRadius: "1rem",
 padding: "0.875rem 1.25rem",
 boxShadow: "0 8px 32px rgba(0,0,0,0.15)",
 zIndex: 10,
 minWidth: "170px",
 }}
 >
 <div style={{ display: "flex", alignItems: "center", gap: "0.4rem" }}>
 <span style={{ width: "8px", height: "8px", borderRadius: "50%", background: "#2BBFB3", boxShadow: "0 0 0 6px rgba(43,191,179,0.18)" }} />
 <span style={{ fontSize: "0.72rem", fontWeight: 700, color: "#1A1A1A" }}>Active Programmes</span>
 </div>
 <div style={{ marginTop: "0.75rem", display: "flex", gap: "4px", alignItems: "flex-end", height: "36px" }}>
 <div style={{ width: "22px", height: "50%", background: "rgba(43,191,179,0.3)", borderRadius: "3px 3px 0 0" }} />
 <div style={{ width: "22px", height: "100%", background: "#2BBFB3", borderRadius: "3px 3px 0 0" }} />
 <div style={{ width: "22px", height: "75%", background: "rgba(43,191,179,0.5)", borderRadius: "3px 3px 0 0" }} />
 </div>
 <p style={{ margin: "0.25rem 0 0", fontSize: "0.68rem", color: "#6B7280" }}>Programme growth</p>
 </div>
 <div
 style={{
 position: "absolute",
 top: "0",
 right: isMobile ? "0.25rem" : "0",
 background: "#F5A800",
 borderRadius: "999px",
 padding: "0.5rem 1rem",
 display: "flex",
 alignItems: "center",
 gap: "0.4rem",
 boxShadow: "0 4px 16px rgba(245,168,0,0.4)",
 }}
 >
 <Globe2 size={14} color="#fff" />
 <span style={{ color: "#fff", fontSize: "0.75rem", fontWeight: 700 }}>Est. 2016</span>
 </div>
 </div>
 </div>

 <div
 style={{
 position: "relative",
 zIndex: 1,
 maxWidth: "1280px",
 margin: "0 auto",
 padding: isMobile ? "0 0.5rem" : "0 1.5rem",
 marginTop: "4rem",
 }}
 >
 <div
 style={{
 paddingTop: "2rem",
 borderTop: "1px solid rgba(255,255,255,0.08)",
 display: "flex",
 alignItems: "center",
 justifyContent: "center",
 gap: "3rem",
 rowGap: "0.9rem",
 flexWrap: "wrap",
 }}
 >
 {[
 "Registered UK Charity No. 1170656",
 "SDG-aligned Curriculum",
 "Est. 2016 in Ghana",
 ].map((item) => (
 <span key={item} style={{ display: "inline-flex", alignItems: "center", gap: "0.5rem", color: "rgba(255,255,255,0.5)", fontSize: "0.82rem", fontWeight: 600 }}>
 <CheckCircle2 size={14} color="#2BBFB3" />
 {item}
 </span>
 ))}
 </div>
 </div>
 </section>

 {/* 3. ABOUT */}
 <section style={{ background: "#fff", padding: sectionPad() }}>
 <div style={wrapStyle}>
 <div style={twoCol(isMobile)}>
 {/* Stacked images + dark card */}
 <div>
 <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1rem", overflow: "visible" }}>
 <div style={{ position: "relative", height: "280px", borderRadius: "1.25rem", overflow: "hidden" }}>
 <Image src="/images/about.jpg.jpg" alt="MTW community" fill style={{ objectFit: "cover" }} />
 </div>
 <div style={{ position: "relative", marginTop: "2rem", overflow: "visible" }}>
 <div style={{ position: "relative", height: "280px", borderRadius: "1.25rem", overflow: "hidden" }}>
 <Image src="/images/impact-2.webp" alt="MTW students" fill style={{ objectFit: "cover" }} />
 </div>
 </div>
 </div>
 <div style={{ marginTop: "1.25rem", background: "#F5A800", borderRadius: "1.25rem", padding: "1.5rem", display: "flex", flexDirection: "column", gap: "0.5rem" }}>
 <p style={{ margin: 0, color: "#fff", fontSize: "0.68rem", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.06em" }}>Community Reach</p>
 <p style={{ margin: "0.1rem 0 0", color: "#fff", fontSize: "2rem", fontWeight: 800, lineHeight: 1.1 }}>50+</p>
 <p style={{ margin: "0.1rem 0 0.3rem", color: "rgba(255,255,255,0.7)", fontSize: "0.78rem" }}>Communities impacted</p>
 {[
 ["Accra", "80%"],
 ["Volta", "55%"],
 ["Other", "35%"],
 ].map(([label, width]) => (
 <div key={label as string} style={{ display: "flex", alignItems: "center", gap: "0.5rem", marginTop: "0.25rem" }}>
 <span style={{ width: "50px", fontSize: "0.65rem", color: "rgba(255,255,255,0.7)" }}>{label as string}</span>
 <div style={{ flex: 1, height: "6px", background: "rgba(255,255,255,0.2)", borderRadius: "999px", overflow: "hidden" }}>
 <div style={{ width: width as string, height: "100%", background: "#fff", borderRadius: "999px" }} />
 </div>
 </div>
 ))}
 </div>
 </div>
 {/* Text */}
 <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
 <span style={{ ...pill("#D48F00", "rgba(245,168,0,0.12)"), gap: "0.4rem" }}>
 <BookOpen size={13} />
 Our Story
 </span>
 <h2 style={sectionHeading}>
 Born from a community&apos;s{" "}
 <span style={{ color: "#2BBFB3" }}>call to action</span>
 </h2>
 <p style={bodyText}>
 In 2015, our founders first visited the Dagara Music Centre in Medie, Ghana.
 Through their developing relationship with the community, it became clear that
 young people needed better tools to address the complex challenges ahead.
 </p>
 <p style={bodyText}>
 Move The World was born from that conversation, and has since designed its own
 Global Citizenship curriculum, partnering with schools and training local
 facilitators to support over 1,000 children.
 </p>
 <div style={{ display: "flex", flexDirection: "column", gap: "0.875rem", margin: "0.25rem 0" }}>
 {[
 { title: "People-powered development", desc: "Young people and communities at the centre of every solution." },
 { title: "Culturally relevant programmes", desc: "Designed alongside community members for lasting impact." },
 ].map(f => (
 <div key={f.title} style={{ display: "flex", gap: "0.875rem", alignItems: "flex-start" }}>
 <div style={{ width: "22px", height: "22px", borderRadius: "50%", background: "#2BBFB3", flexShrink: 0, marginTop: "2px", display: "flex", alignItems: "center", justifyContent: "center" }}>
 <svg width="11" height="11" viewBox="0 0 12 12" fill="none">
 <path d="M2 6l3 3 5-5" stroke="#fff" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
 </svg>
 </div>
 <div>
 <p style={{ fontWeight: 700, fontSize: "0.9rem", color: "#1A1A1A" }}>{f.title}</p>
 <p style={{ fontSize: "0.85rem", color: "#6B7280", marginTop: "0.15rem" }}>{f.desc}</p>
 </div>
 </div>
 ))}
 </div>
 <Link href="/about" style={btnAmber}>Read Our Story</Link>
 </div>
 </div>
 </div>
 </section>

 {/* 4. PROGRAMMES INTRO */}
 <section id="programmes" style={{ background: "#F8FFFE", padding: sectionPad() }}>
 <div style={wrapStyle}>
 <div style={twoCol(isMobile)}>
 <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
 <span style={{ ...pill("#1A9A8F", "rgba(43,191,179,0.12)"), gap: "0.4rem" }}>
 <BookOpen size={13} />
 Our Programmes
 </span>
 <h2 style={sectionHeading}>
 A trusted Global Citizenship{" "}
 <span style={{ color: "#2BBFB3" }}>Education Organisation</span>
 </h2>
 <p style={bodyText}>
 We use the UN SDGs (in full) as learning themes to engage students in experiential
 learning and critical thinking to gain understanding about themselves, their community
 and the world around them.
 </p>
 <div style={{ display: "flex", flexDirection: "column", gap: "0.875rem", margin: "0.25rem 0" }}>
 {[
 "Get Global: SDGs 1-6 for ages 10 to 12",
 "Get Local: SDGs 7-12 for ages 13 to 15",
 "Training: Building local facilitator capacity",
 ].map(item => (
 <div key={item} style={{ display: "flex", gap: "0.75rem", alignItems: "center" }}>
 <div style={{ width: "8px", height: "8px", borderRadius: "50%", background: "#2BBFB3", flexShrink: 0 }} />
 <p style={{ fontSize: "0.9rem", color: "#1A1A1A", fontWeight: 600 }}>{item}</p>
 </div>
 ))}
 </div>
 <Link href="/programmes" style={btnAmber}>View All Programmes</Link>
 </div>
 <div style={{ position: "relative", overflow: "visible" }}>
 <div style={{ position: "relative", height: "480px", borderRadius: "2rem", overflow: "hidden" }}>
 <Image src="/images/impact-1.webp" alt="Programmes" fill style={{ objectFit: "cover" }} />
 </div>
 <div
 style={{
 position: "absolute",
 top: isMobile ? "1rem" : "2rem",
 right: isMobile ? "1rem" : "-2rem",
 zIndex: 10,
 background: "#0F2E2B",
 borderRadius: "1rem",
 padding: "1rem 1.25rem",
 boxShadow: "0 8px 32px rgba(0,0,0,0.2)",
 minWidth: "160px",
 }}
 >
 <p style={{ margin: 0, fontSize: "0.68rem", fontWeight: 700, color: "rgba(255,255,255,0.6)", textTransform: "uppercase" }}>SDGs Coverage</p>
 <p style={{ margin: "0.2rem 0 0", fontSize: "2rem", fontWeight: 800, color: "#fff", lineHeight: 1.1 }}>12</p>
 <p style={{ margin: "0.15rem 0 0", fontSize: "0.72rem", color: "rgba(255,255,255,0.6)" }}>Goals covered</p>
 <div style={{ marginTop: "0.65rem" }}>
 <SdgIconSlider from={1} to={12} size={18} gap="0.3rem" theme="dark" />
 </div>
 </div>
 </div>
 </div>
 </div>
 </section>

 {/* 5. PROGRAMME CARDS */}
 <section style={{ background: "#fff", padding: sectionPad() }}>
 <div style={wrapStyle}>
 <div style={{ textAlign: "center", maxWidth: "580px", margin: "0 auto 3rem" }}>
 <span style={{ ...pill("#1A9A8F", "rgba(43,191,179,0.12)"), gap: "0.4rem" }}>
 <Sparkles size={13} />
 What We Offer
 </span>
 <h2 style={sectionHeading}>
 Supporting young people to{" "}
 <span style={{ color: "#2BBFB3" }}>think and act globally</span>
 </h2>
 </div>
 <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 280px), 1fr))", gap: isMobile ? "0.75rem" : "1.5rem" }}>
 {[
 { color: "#2BBFB3", title: "Get Global", ages: "Ages 10 to 12", sdgs: "SDGs 1-6", desc: "A 7-month programme where locally trained facilitators lead students through experiential learning on global challenges, with one theme per session.", href: "/programmes#get-global" },
 { color: "#F5A800", title: "Get Local", ages: "Ages 13 to 15", sdgs: "SDGs 7-12", desc: "Project-based learning that supports students to identify and address issues in their own community, bridging global thinking with local action.", href: "/programmes#get-local" },
 { color: "#1A9A8F", title: "Training", ages: "All ages", sdgs: "Facilitators", desc: "Interactive facilitator training for community youth, teachers, and leaders, equipping them with skills for more effective and engaging delivery.", href: "/programmes#training" },
 ].map(p => (
 <div
 key={p.title}
 style={{ ...cardStyle, display: "flex", flexDirection: "column", transition: "box-shadow 0.2s, transform 0.2s" }}
 onMouseEnter={(e) => {
 e.currentTarget.style.transform = "translateY(-4px)";
 e.currentTarget.style.boxShadow = "0 8px 32px rgba(43,191,179,0.15)";
 }}
 onMouseLeave={(e) => {
 e.currentTarget.style.transform = "translateY(0)";
 e.currentTarget.style.boxShadow = "0 2px 12px rgba(0,0,0,0.06)";
 }}
 >
 <div style={{ height: "3px", background: "#2BBFB3" }} />
 <div style={{ padding: isMobile ? "1.25rem" : "2rem", display: "flex", flexDirection: "column", gap: "1rem", flex: 1 }}>
 <div style={{ display: "flex", gap: "0.5rem" }}>
 <span style={{ fontSize: "0.75rem", fontWeight: 700, padding: "0.25rem 0.75rem", borderRadius: "999px", background: `${p.color}18`, color: p.color }}>{p.ages}</span>
 <span style={{ fontSize: "0.75rem", fontWeight: 700, padding: "0.25rem 0.75rem", borderRadius: "999px", background: "#F3F4F6", color: "#6B7280" }}>{p.sdgs}</span>
 </div>
 <h3 style={{ fontWeight: 800, fontSize: "1.15rem", color: "#1A1A1A", display: "flex", alignItems: "center", gap: "0.45rem" }}>
 {p.title === "Get Global" && <Globe2 size={16} color="#2BBFB3" />}
 {p.title === "Get Local" && <Handshake size={16} color="#F5A800" />}
 {p.title === "Training" && <BookOpen size={16} color="#1A9A8F" />}
 {p.title}
 </h3>
 <p style={{ ...bodyText, fontSize: "0.875rem", flex: 1 }}>{p.desc}</p>
 <Link href={p.href} style={{ fontSize: "0.875rem", fontWeight: 700, color: p.color, textDecoration: "none" }}>Learn more</Link>
 </div>
 </div>
 ))}
 </div>
 </div>
 </section>

 {/* 6. IMPACT STORIES */}
 <section style={{ background: "#F0FAFA", padding: sectionPad() }}>
 <div style={wrapStyle}>
 <div style={{ textAlign: "center", maxWidth: "580px", margin: "0 auto 3rem" }}>
 <span style={{ ...pill("#1A9A8F", "rgba(43,191,179,0.12)"), gap: "0.4rem" }}>
 <Sparkles size={13} />
 Our Impact
 </span>
 <h2 style={sectionHeading}>
 Young people as{" "}
 <span style={{ color: "#2BBFB3" }}>agents of change</span>
 </h2>
 <p style={{ ...bodyText, marginTop: "1rem" }}>Stories of transformation from our programmes across Ghana.</p>
 </div>
 <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 300px), 1fr))", gap: isMobile ? "0.75rem" : "1.5rem" }}>
 {[
 { img: "/images/impact-1.webp", tag: "Get Global", title: "Building global thinkers in Medie", excerpt: "Students in Medie explore SDGs 3 through hands-on health workshops led by local facilitators." },
 { img: "/images/impact-2.webp", tag: "Get Local", title: "From classroom to community action", excerpt: "Get Local participants identified poor sanitation as a key issue and led a community awareness campaign in their neighbourhood." },
 { img: "/images/impact-3.webp", tag: "Training", title: "Training a new generation of facilitators", excerpt: "Ten young people completed our facilitator training, now leading sessions in three partner schools." },
 ].map(s => (
 <div key={s.title} style={cardStyle}>
 <div style={{ position: "relative", height: "210px" }}>
 <Image src={s.img} alt={s.title} fill style={{ objectFit: "cover" }} />
 <span style={{ position: "absolute", top: "1rem", left: "1rem", background: "#2BBFB3", color: "#fff", padding: "0.25rem 0.75rem", borderRadius: "999px", fontSize: "0.72rem", fontWeight: 700 }}>{s.tag}</span>
 </div>
 <div style={{ padding: cardInnerPadding(isMobile), display: "flex", flexDirection: "column", gap: "0.75rem" }}>
 <h3 style={{ fontWeight: 800, fontSize: "1rem", color: "#1A1A1A", lineHeight: 1.4 }}>{s.title}</h3>
 <p style={{ ...bodyText, fontSize: "0.85rem" }}>{s.excerpt}</p>
 <Link href="/impact" style={{ fontSize: "0.85rem", fontWeight: 700, color: "#2BBFB3", textDecoration: "none" }}>Read more</Link>
 </div>
 </div>
 ))}
 </div>
 </div>
 </section>

 {/* 7. DONATE BANNER */}
 <section style={{ width: "100%", background: surface, padding: sectionPad() }}>
 <div style={{ background: teal, borderRadius: isMobile ? "1.25rem" : "2rem", padding: isMobile ? "2.5rem 1rem" : "4rem 3rem", maxWidth: "860px", margin: "0 auto", textAlign: "center", position: "relative", overflow: "hidden" }}>
 <div style={{ position: "absolute", top: "-20%", right: "-10%", width: "280px", height: "280px", borderRadius: "50%", background: "#fff", opacity: 0.06 }} />
 <div style={{ position: "absolute", bottom: "-25%", left: "-5%", width: "220px", height: "220px", borderRadius: "50%", background: "#fff", opacity: 0.06 }} />
 <div style={{ position: "relative" }}>
 <p style={{ color: "rgba(255,255,255,0.75)", fontSize: "0.75rem", fontWeight: 700, letterSpacing: "0.08em", textTransform: "uppercase", margin: "0 0 1rem" }}>Join Our Mission</p>
 <h2 style={{ color: "#fff", fontWeight: 800, fontSize: "clamp(1.5rem, 3.5vw, 2.4rem)", lineHeight: 1.2, letterSpacing: "-0.02em", margin: "0 0 0.85rem" }}>
 Support And Contribute To Their Urgent Needs
 </h2>
 <p style={{ color: "rgba(255,255,255,0.85)", margin: "0 0 1.5rem", fontSize: "0.95rem", lineHeight: 1.7 }}>Every donation helps us reach more young people with the education they deserve.</p>
 <div style={{ display: "flex", gap: "1rem", justifyContent: "center", flexWrap: "wrap" }}>
 <Link href="/donate" style={btnAmber}>Donate Now</Link>
 <Link href="/contact" style={{ ...btnTealOutline, border: "2px solid rgba(255,255,255,0.5)", color: "#fff" }}>Contact Us</Link>
 </div>
 </div>
 </div>
 </section>

 {/* 8. PARTNERS */}
 <section style={{ background: "#F0FAFA", padding: sectionPad("4rem"), borderBottom: "1px solid #E5E7EB" }}>
 <div style={wrapStyle}>
 <p style={{ textAlign: "center", fontSize: "0.72rem", fontWeight: 700, color: "#9CA3AF", letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: "2.5rem" }}>
 Our Partners &amp; Funders
 </p>
 <div
 style={{
 display: "grid",
 gridTemplateColumns: isMobile ? undefined : "repeat(auto-fit, minmax(150px, 1fr))",
 gridAutoFlow: isMobile ? "column" : undefined,
 gridAutoColumns: isMobile ? "calc(50% - 0.5rem)" : undefined,
 gap: "1rem",
 alignItems: "center",
 overflowX: isMobile ? "auto" : undefined,
 paddingBottom: isMobile ? "0.35rem" : undefined,
 scrollSnapType: isMobile ? "x mandatory" : undefined,
 }}
 >
 {partnerLogos.map((logo) => (
 <div
 key={logo.src}
 style={{
 background: "#fff",
 borderRadius: "1rem",
 padding: "0.75rem",
 aspectRatio: "4 / 3",
 display: "flex",
 alignItems: "center",
 justifyContent: "center",
 boxShadow: "0 2px 12px rgba(0,0,0,0.06)",
 position: "relative",
 scrollSnapAlign: isMobile ? "start" : undefined,
 }}
 >
 <Image
 src={logo.src}
 alt={logo.alt}
 fill
 sizes="150px"
 style={{ objectFit: "contain", padding: "0.75rem" }}
 />
 </div>
 ))}
 </div>
 <div style={{ textAlign: "center", marginTop: "2rem" }}>
 <Link href="/partners" style={{ fontSize: "0.875rem", fontWeight: 700, color: "#2BBFB3", textDecoration: "none" }}>Become a partner</Link>
 </div>
 </div>
 </section>

 {/* 9. UPDATES */}
 <section style={{ background: "#fff", padding: sectionPad() }}>
 <div style={wrapStyle}>
 <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", marginBottom: "2.5rem", flexWrap: "wrap", gap: "1rem" }}>
 <div>
 <span style={{ ...pill("#D48F00", "rgba(245,168,0,0.12)"), gap: "0.4rem" }}>
 <Newspaper size={13} />
 News &amp; Updates
 </span>
 <h2 style={{ ...sectionHeading, marginTop: "0" }}>
 Get Updated From Our{" "}
 <span style={{ color: "#2BBFB3" }}>Latest News</span>
 </h2>
 </div>
 <Link href="/updates" style={{ ...btnTealOutline, padding: "0.6rem 1.5rem", fontSize: "0.82rem" }}>View All</Link>
 </div>
 <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem", maxWidth: "720px" }}>
 {[
 { img: "/images/impact-1.webp", tag: "Programmes", date: "March 2025", title: "Get Global programme reaches 500 students in Greater Accra" },
 { img: "/images/impact-3.webp", tag: "Community", date: "January 2025", title: "New facilitator cohort completes training in Medie" },
 ].map(post => (
 <div key={post.title} style={{ ...cardStyle, display: "flex", gap: "1rem", padding: "1rem" }}>
 <div style={{ position: "relative", width: "100px", height: "90px", borderRadius: "0.875rem", overflow: "hidden", flexShrink: 0 }}>
 <Image src={post.img} alt={post.title} fill style={{ objectFit: "cover" }} />
 </div>
 <div style={{ display: "flex", flexDirection: "column", gap: "0.4rem", justifyContent: "center" }}>
 <div style={{ display: "flex", gap: "0.5rem", alignItems: "center" }}>
 <span style={{ fontSize: "0.7rem", fontWeight: 700, color: "#2BBFB3", background: "rgba(43,191,179,0.1)", padding: "0.2rem 0.6rem", borderRadius: "999px" }}>{post.tag}</span>
 <span style={{ fontSize: "0.72rem", color: "#9CA3AF" }}>{post.date}</span>
 </div>
 <p style={{ fontWeight: 700, fontSize: "0.9rem", color: "#1A1A1A", lineHeight: 1.4 }}>{post.title}</p>
 <Link href="/updates" style={{ fontSize: "0.8rem", fontWeight: 700, color: "#F5A800", textDecoration: "none" }}>Read more</Link>
 </div>
 </div>
 ))}
 </div>
 </div>
 </section>

 {/* 10. TESTIMONIALS */}
 <section style={{ background: "#F0FAFA", padding: sectionPad() }}>
 <div style={wrapStyle}>
 <div style={{ textAlign: "center", marginBottom: "3rem" }}>
 <span style={{ ...pill("#1A9A8F", "rgba(43,191,179,0.12)"), gap: "0.4rem" }}>
 <Quote size={13} />
 Voices
 </span>
 <h2 style={{ ...sectionHeading, marginTop: "0" }}>
 Sharing Our{" "}
 <span style={{ color: "#2BBFB3" }}>Mission&apos;s Success</span>
 </h2>
 </div>
 <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 380px), 1fr))", gap: isMobile ? "0.75rem" : "1.5rem" }}>
 {[
 { name: "Sarah Asiedu", role: "Director, Move The World", quote: "We believe that when young people are given the right opportunities and platforms, they can become powerful agents of transformation in their communities." },
 { name: "Emmanuel Mumuni", role: "Board Chair, Move The World", quote: "The Global Citizenship curriculum has fundamentally shifted how young people in our partner communities see themselves and their role in the world." },
 ].map(t => (
 <div key={t.name} style={{ ...cardStyle, padding: isMobile ? "1.25rem" : "2rem", display: "flex", flexDirection: "column", gap: "1.25rem", borderTop: "3px solid #2BBFB3" }}>
 <div style={{ display: "flex", gap: "0.25rem" }}>
 {Array.from({ length: 5 }, (_, i) => (
 <svg key={i} width="16" height="16" viewBox="0 0 24 24" fill="#F5A800">
 <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
 </svg>
 ))}
 </div>
 <p style={{ ...bodyText, fontStyle: "italic" }}>&ldquo;{t.quote}&rdquo;</p>
 <div style={{ display: "flex", alignItems: "center", gap: "0.875rem", paddingTop: "1rem", borderTop: "1px solid #F3F4F6" }}>
 <div style={{ width: "42px", height: "42px", borderRadius: "50%", background: "#2BBFB3", display: "flex", alignItems: "center", justifyContent: "center", color: "#fff", fontWeight: 700, fontSize: "1rem", flexShrink: 0 }}>
 {t.name[0]}
 </div>
 <div>
 <p style={{ fontWeight: 700, fontSize: "0.9rem", color: "#1A1A1A" }}>{t.name}</p>
 <p style={{ fontSize: "0.78rem", color: "#6B7280" }}>{t.role}</p>
 </div>
 </div>
 </div>
 ))}
 </div>
 </div>
 </section>
 </>
 );
}
