"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState, type CSSProperties } from "react";
import { pageWrap } from "@/lib/pageLayout";

const teal = "#2BBFB3";
const amber = "#F5A800";
const dark = "#0F2E2B";
const surface = "#F8FFFE";
const muted = "#6B7280";
const btnAmber: CSSProperties = { display: "inline-flex", alignItems: "center", justifyContent: "center", padding: "0.875rem 2rem", background: "#F5A800", color: "#fff", fontWeight: 700, borderRadius: "999px", textDecoration: "none", fontSize: "0.88rem", border: "none", cursor: "pointer" };
const btnTealOutline: CSSProperties = { display: "inline-flex", alignItems: "center", justifyContent: "center", padding: "0.875rem 2rem", background: "transparent", border: "2px solid #2BBFB3", color: "#2BBFB3", fontWeight: 700, borderRadius: "999px", textDecoration: "none", fontSize: "0.88rem", cursor: "pointer" };
const cardStyle: CSSProperties = { background: "#fff", borderRadius: "1.5rem", boxShadow: "0 2px 12px rgba(0,0,0,0.06)", overflow: "hidden" };
const sectionHeading: CSSProperties = { fontSize: "clamp(1.75rem, 3.5vw, 2.6rem)", fontWeight: 800, color: "#1A1A1A", lineHeight: 1.15, letterSpacing: "-0.02em" };
const bodyText: CSSProperties = { color: "#6B7280", lineHeight: 1.8, fontSize: "0.95rem" };
const pill = (color: string, bg: string): CSSProperties => ({ display: "inline-flex", alignItems: "center", background: bg, color, padding: "0.35rem 1rem", borderRadius: "999px", fontSize: "0.78rem", fontWeight: 700, width: "fit-content", marginBottom: "0.75rem" });

void btnTealOutline;
void sectionHeading;
void bodyText;

const posts = [
 {
 image: "/images/impact-1.webp",
 category: "Programmes",
 date: "March 2025",
 title: "Get Global programme reaches 500 students in Greater Accra",
 excerpt: "Our flagship programme continues to grow, with facilitators now active in five partner schools across the Greater Accra region.",
 },
 {
 image: "/images/impact-2.webp",
 category: "Community",
 date: "January 2025",
 title: "New facilitator cohort completes training in Medie",
 excerpt: "Ten community members successfully completed our intensive facilitator training, ready to lead sessions in their local schools.",
 },
 {
 image: "/images/impact-3.webp",
 category: "Impact",
 date: "November 2024",
 title: "Students present community action projects to local leaders",
 excerpt: "Get Local students showcased their community research projects to district assembly members, receiving recognition for their work on sanitation.",
 },
 {
 image: "/images/hero.webp",
 category: "News",
 date: "September 2024",
 title: "Move The World marks 8 years of impact in Ghana",
 excerpt: "We celebrated eight years of Global Citizenship Education in Ghana, reflecting on the journey from one-off workshops to a full curriculum.",
 },
];

export default function UpdatesPage() {
 const [isMobile, setIsMobile] = useState(false);
 const wrapStyle = pageWrap(isMobile);

 useEffect(() => {
 const onResize = () => setIsMobile(window.innerWidth < 900);
 onResize();
 window.addEventListener("resize", onResize);
 return () => window.removeEventListener("resize", onResize);
 }, []);

 return (
 <div style={{ background: "#fff" }}>
 <section style={{ background: "#F0FAFA", paddingTop: "140px", paddingBottom: "80px", textAlign: "center", position: "relative", overflow: "hidden" }}>
 <div style={{ position: "absolute", top: 0, right: 0, width: "400px", height: "400px", borderRadius: "50%", background: "radial-gradient(circle, rgba(43,191,179,0.15) 0%, transparent 70%)", zIndex: 0 }} />
 <div style={{ position: "absolute", bottom: "-120px", left: "-80px", width: "280px", height: "280px", borderRadius: "50%", background: "radial-gradient(circle, rgba(245,168,0,0.12) 0%, transparent 70%)", zIndex: 0 }} />
 <div style={{ ...wrapStyle, position: "relative", zIndex: 1 }}>
 <p style={{ margin: "0 0 1rem", color: teal, fontSize: "0.8rem" }}>Home / Updates</p>
 <h1 style={{ margin: "0 0 1rem", color: "#1A1A1A", fontSize: "clamp(2.5rem, 5vw, 4rem)", fontWeight: 800 }}>Updates</h1>
 <p style={{ margin: "0 auto", color: muted, maxWidth: "42rem" }}>News, stories, and insights from Move The World.</p>
 <div
 style={{
 position: isMobile ? "static" : "absolute",
 bottom: isMobile ? undefined : "2rem",
 right: isMobile ? undefined : "1.5rem",
 background: "#fff",
 borderRadius: "1rem",
 padding: "1rem 1.25rem",
 boxShadow: "0 8px 24px rgba(0,0,0,0.1)",
 minWidth: "180px",
 textAlign: "left",
 margin: isMobile ? "1rem auto 0" : undefined,
 width: isMobile ? "fit-content" : undefined,
 }}
 >
 <p style={{ margin: 0, color: teal, fontSize: "0.72rem", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.06em" }}>Latest</p>
 <p style={{ margin: "0.2rem 0 0.6rem", color: "#1A1A1A", fontWeight: 700, fontSize: "0.95rem" }}>News & Stories</p>
 <div style={{ display: "flex", flexDirection: "column", gap: "0.35rem" }}>
 <span style={{ width: "fit-content", background: "rgba(43,191,179,0.12)", color: "#2BBFB3", borderRadius: "999px", fontSize: "0.68rem", fontWeight: 700, padding: "0.2rem 0.55rem" }}>Programmes</span>
 <span style={{ width: "fit-content", background: "rgba(245,168,0,0.16)", color: "#F5A800", borderRadius: "999px", fontSize: "0.68rem", fontWeight: 700, padding: "0.2rem 0.55rem" }}>Impact</span>
 <span style={{ width: "fit-content", background: "#F3F4F6", color: "#6B7280", borderRadius: "999px", fontSize: "0.68rem", fontWeight: 700, padding: "0.2rem 0.55rem" }}>Community</span>
 </div>
 </div>
 </div>
 </section>

 <section style={{ background: "#fff", padding: "6rem 1.5rem" }}>
 <div style={wrapStyle}>
 <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 600px), 1fr))", gap: "3rem", alignItems: "flex-start" }}>
 <div>
 <h2 style={{ margin: "0 0 2rem", fontSize: "1.5rem", color: "#1A1A1A", fontWeight: 800 }}>Latest Updates</h2>
 {posts.map((post) => (
 <article
 key={post.title}
 style={{ ...cardStyle, marginBottom: "1.5rem", display: "flex", gap: "1.5rem", padding: "1.25rem", transition: "transform 0.2s" }}
 onMouseEnter={(e) => {
 e.currentTarget.style.transform = "translateY(-2px)";
 }}
 onMouseLeave={(e) => {
 e.currentTarget.style.transform = "translateY(0)";
 }}
 >
 <div style={{ width: "140px", height: "120px", borderRadius: "0.875rem", overflow: "hidden", flexShrink: 0, position: "relative" }}>
 <Image src={post.image} alt="" fill style={{ objectFit: "cover" }} />
 </div>
 <div>
 <span style={{ ...pill("#fff", teal), marginBottom: "0.35rem" }}>{post.category}</span>
 <p style={{ margin: "0 0 0.45rem", color: muted, fontSize: "0.8rem" }}>{post.date}</p>
 <h3 style={{ margin: "0 0 0.5rem", color: "#1A1A1A", fontSize: "1rem", lineHeight: 1.4, fontWeight: 800 }}>{post.title}</h3>
 <p style={{ margin: "0 0 0.7rem", color: muted, fontSize: "0.875rem", lineHeight: 1.6 }}>{post.excerpt}</p>
 <Link href="#" style={{ color: amber, textDecoration: "none", fontWeight: 700, fontSize: "0.88rem" }}>Read more</Link>
 </div>
 </article>
 ))}
 </div>

 <aside>
 <div style={{ ...cardStyle, padding: "2rem" }}>
 <div style={{ borderTop: "3px solid #2BBFB3", margin: "-2rem -2rem 1.25rem", borderTopLeftRadius: "1.5rem", borderTopRightRadius: "1.5rem" }} />
 <h3 style={{ margin: "0 0 1rem", color: "#1A1A1A", fontWeight: 800 }}>Categories</h3>
 {[
 ["Programmes", 4],
 ["Community", 3],
 ["Impact", 5],
 ["News", 2],
 ["Events", 1],
 ].map(([name, count], idx) => (
 <div
 key={name as string}
 style={{
 display: "flex",
 justifyContent: "space-between",
 padding: "0.75rem 0",
 borderBottom: idx === 4 ? "none" : "1px solid #F3F4F6",
 }}
 >
 <span style={{ color: "#1A1A1A" }}>{name as string}</span>
 <span style={{ background: `${teal}22`, color: teal, borderRadius: "999px", padding: "0.1rem 0.55rem", fontSize: "0.78rem", fontWeight: 700 }}>{count as number}</span>
 </div>
 ))}
 </div>
 </aside>
 </div>
 </div>
 </section>

 <section style={{ width: "100%", background: surface, padding: "6rem 1.5rem" }}>
 <div style={{ background: teal, borderRadius: "2rem", padding: "4rem 3rem", maxWidth: "860px", margin: "0 auto", textAlign: "center", position: "relative", overflow: "hidden" }}>
 <div style={{ position: "absolute", top: "-20%", right: "-10%", width: "280px", height: "280px", borderRadius: "50%", background: "#fff", opacity: 0.06 }} />
 <div style={{ position: "absolute", bottom: "-25%", left: "-5%", width: "220px", height: "220px", borderRadius: "50%", background: "#fff", opacity: 0.06 }} />
 <div style={{ position: "relative" }}>
 <h2 style={{ margin: "0 0 1rem", fontSize: "clamp(1.35rem, 3vw, 2rem)", fontWeight: 800, color: "#fff" }}>Want to share your story?</h2>
 <p style={{ margin: "0 0 2rem", color: "rgba(255,255,255,0.85)", fontSize: "0.95rem", lineHeight: 1.7 }}>
 We love hearing from our community. Get in touch to share your experience with Move The World.
 </p>
 <Link href="/contact" style={btnAmber}>Contact Us</Link>
 </div>
 </div>
 </section>
 </div>
 );
}
