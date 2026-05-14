"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect, type CSSProperties, type FormEvent } from "react";
import { pageWrap } from "@/lib/pageLayout";

const teal = "#2BBFB3";
const amber = "#F5A800";
const dark = "#0F2E2B";
const surface = "#F8FFFE";
const muted = "#6B7280";
const btnAmber: CSSProperties = {
 display: "inline-flex",
 alignItems: "center",
 justifyContent: "center",
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
const btnTealOutline: CSSProperties = {
 display: "inline-flex",
 alignItems: "center",
 justifyContent: "center",
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
const cardStyle: CSSProperties = {
 background: "#fff",
 borderRadius: "1.25rem",
 boxShadow: "0 2px 8px rgba(0,0,0,0.06), 0 8px 24px rgba(0,0,0,0.04)",
 overflow: "hidden",
};
const sectionHeading: CSSProperties = {
 fontSize: "clamp(1.75rem, 3.5vw, 2.6rem)",
 fontWeight: 900,
 color: "#1A1A1A",
 lineHeight: 1.15,
 letterSpacing: "-0.02em",
};
const bodyText: CSSProperties = { color: "#6B7280", lineHeight: 1.8, fontSize: "0.95rem" };
const pill = (color: string, bg: string): CSSProperties => ({
 display: "inline-flex",
 alignItems: "center",
 background: bg,
 color,
 padding: "0.35rem 1rem",
 borderRadius: "999px",
 fontSize: "0.78rem",
 fontWeight: 700,
 width: "fit-content",
 marginBottom: "0.75rem",
});

export default function DonatePage() {
 const [selectedAmount, setSelectedAmount] = useState(50);
 const [submitted, setSubmitted] = useState(false);
 const [isMobile, setIsMobile] = useState(false);
 const wrapStyle = pageWrap(isMobile);

 useEffect(() => {
   const sync = () => setIsMobile(window.innerWidth < 900);
   sync();
   window.addEventListener("resize", sync);
   return () => window.removeEventListener("resize", sync);
 }, []);

 function handleSubmit(e: FormEvent<HTMLFormElement>) {
 e.preventDefault();
 setSubmitted(true);
 }

 return (
 <div style={{ background: "#fff" }}>
 <section style={{ background: dark, paddingTop: "140px", paddingBottom: "80px", textAlign: "center" }}>
 <div style={wrapStyle}>
 <p style={{ margin: "0 0 1rem", color: teal, fontSize: "0.8rem" }}>Home / Donate</p>
 <h1 style={{ margin: "0 0 1rem", color: "#fff", fontSize: "clamp(2.5rem, 5vw, 4rem)", fontWeight: 900 }}>Donate</h1>
 <p style={{ margin: "0 auto", color: "rgba(255,255,255,0.6)", maxWidth: "44rem", lineHeight: 1.7 }}>
 Your support helps us equip young people in Ghana with the knowledge, confidence, and leadership skills to shape their futures.
 </p>
 </div>
 </section>

 <section style={{ background: "#fff", padding: "6rem 1.5rem" }}>
 <div style={wrapStyle}>
 <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 480px), 1fr))", gap: "4rem", alignItems: "center" }}>
 <div>
 <span style={pill("#fff", teal)}>Support Our Work</span>
 <h2 style={{ ...sectionHeading, margin: "0 0 1rem" }}>Give today, grow impact tomorrow</h2>
 <p style={{ ...bodyText, margin: "0 0 1rem" }}>
 Move The World works alongside schools and communities in Ghana to deliver Global Citizenship Education programmes that help young people think critically, act confidently, and lead meaningful change.
 </p>
 <p style={{ ...bodyText, margin: "0 0 1.5rem" }}>
 Every contribution directly supports programme delivery, facilitator training, and student-led community action projects.
 </p>
 <div style={{ display: "flex", flexWrap: "wrap", gap: "0.75rem", marginBottom: "1.5rem" }}>
 {[25, 50, 100, 250].map((amount) => (
 <button
 key={amount}
 type="button"
 onClick={() => setSelectedAmount(amount)}
 style={{
 padding: "0.65rem 1rem",
 borderRadius: "999px",
 border: `2px solid ${selectedAmount === amount ? amber : "#E5E7EB"}`,
 background: selectedAmount === amount ? `${amber}22` : "#fff",
 color: selectedAmount === amount ? "#1A1A1A" : muted,
 fontWeight: 700,
 cursor: "pointer",
 }}
 >
 £{amount}
 </button>
 ))}
 </div>
 <Link href="/contact" style={btnAmber}>Speak to our team</Link>
 </div>
 <div style={{ position: "relative", height: "500px", borderRadius: "2rem", overflow: "hidden" }}>
 <Image src="/images/hero.webp" alt="" fill style={{ objectFit: "cover" }} />
 </div>
 </div>
 </div>
 </section>

 <section style={{ background: surface, padding: "6rem 1.5rem" }}>
 <div style={wrapStyle}>
 <div style={{ textAlign: "center", marginBottom: "2.5rem" }}>
 <span style={pill("#fff", teal)}>Your Donation In Action</span>
 <h2 style={{ ...sectionHeading, margin: "0.5rem 0 0" }}>How support creates change</h2>
 </div>
 <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 280px), 1fr))", gap: "1.5rem" }}>
 {[
 {
 title: "Student Learning Materials",
 body: "Provide students with essential tools and activity resources for SDG-themed lessons.",
 image: "/images/impact-1.webp",
 },
 {
 title: "Facilitator Development",
 body: "Support high-quality training for local facilitators delivering our curriculum.",
 image: "/images/impact-2.webp",
 },
 {
 title: "Community Action Projects",
 body: "Enable students to turn classroom learning into local action through practical projects.",
 image: "/images/impact-3.webp",
 },
 ].map((item) => (
 <article key={item.title} style={cardStyle}>
 <div style={{ position: "relative", height: "190px" }}>
 <Image src={item.image} alt="" fill style={{ objectFit: "cover" }} />
 </div>
 <div style={{ padding: "1.5rem" }}>
 <h3 style={{ margin: "0 0 0.6rem", fontWeight: 800, color: "#1A1A1A", fontSize: "1rem" }}>{item.title}</h3>
 <p style={{ margin: 0, ...bodyText, fontSize: "0.9rem" }}>{item.body}</p>
 </div>
 </article>
 ))}
 </div>
 </div>
 </section>

 <section style={{ background: "#fff", padding: "6rem 1.5rem" }}>
 <div style={wrapStyle}>
 <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 460px), 1fr))", gap: "3rem", alignItems: "start" }}>
 <div style={{ ...cardStyle, padding: "2rem" }}>
 <span style={pill("#fff", teal)}>Make a Donation</span>
 <h2 style={{ ...sectionHeading, margin: "0.3rem 0 1rem" }}>Choose your giving amount</h2>
 {submitted ? (
 <p style={{ ...bodyText, margin: 0 }}>
 Thank you for your support. Your donation request has been received and our team will follow up with next steps.
 </p>
 ) : (
 <form onSubmit={handleSubmit}>
 <label style={{ display: "block", fontWeight: 700, color: "#1A1A1A", fontSize: "0.85rem", marginBottom: "0.35rem" }}>Full Name</label>
 <input style={{ width: "100%", boxSizing: "border-box", padding: "0.85rem 1rem", borderRadius: "0.75rem", border: "1.5px solid #E5E7EB", marginBottom: "1rem", fontSize: "0.9rem", outline: "none" }} required />

 <label style={{ display: "block", fontWeight: 700, color: "#1A1A1A", fontSize: "0.85rem", marginBottom: "0.35rem" }}>Email Address</label>
 <input type="email" style={{ width: "100%", boxSizing: "border-box", padding: "0.85rem 1rem", borderRadius: "0.75rem", border: "1.5px solid #E5E7EB", marginBottom: "1rem", fontSize: "0.9rem", outline: "none" }} required />

 <label style={{ display: "block", fontWeight: 700, color: "#1A1A1A", fontSize: "0.85rem", marginBottom: "0.35rem" }}>Donation Amount</label>
 <input value={`£${selectedAmount}`} readOnly style={{ width: "100%", boxSizing: "border-box", padding: "0.85rem 1rem", borderRadius: "0.75rem", border: "1.5px solid #E5E7EB", marginBottom: "1rem", fontSize: "0.9rem", outline: "none", background: "#F9FAFB" }} />

 <label style={{ display: "block", fontWeight: 700, color: "#1A1A1A", fontSize: "0.85rem", marginBottom: "0.35rem" }}>Message (Optional)</label>
 <textarea rows={4} style={{ width: "100%", boxSizing: "border-box", padding: "0.85rem 1rem", borderRadius: "0.75rem", border: "1.5px solid #E5E7EB", marginBottom: "1.2rem", fontSize: "0.9rem", outline: "none", resize: "vertical" }} />

 <button type="submit" style={{ ...btnAmber, width: "100%" }}>Submit Donation Request</button>
 </form>
 )}
 </div>

 <div style={{ ...cardStyle, padding: "2rem", background: dark, color: "#fff" }}>
 <span style={pill(amber, `${amber}22`)}>Other Ways to Give</span>
 <h3 style={{ margin: "0.3rem 0 1rem", fontSize: "1.5rem", fontWeight: 800 }}>More support options</h3>
 <div style={{ display: "grid", gap: "1rem" }}>
 {[
 {
 title: "Give via Global Giving",
 text: "Use our Global Giving page for secure online donations that directly fund our programmes.",
 },
 {
 title: "Corporate Sponsorship",
 text: "Partner with us as an organisation to support cohorts, schools, or facilitator training programmes.",
 },
 {
 title: "Fundraise for MTW",
 text: "Host a challenge or community fundraiser and help us reach more young people in Ghana.",
 },
 ].map((item) => (
 <div key={item.title} style={{ border: "1px solid rgba(255,255,255,0.16)", borderRadius: "1rem", padding: "1rem" }}>
 <p style={{ margin: "0 0 0.35rem", color: "#fff", fontWeight: 700 }}>{item.title}</p>
 <p style={{ margin: 0, color: "rgba(255,255,255,0.7)", lineHeight: 1.6, fontSize: "0.9rem" }}>{item.text}</p>
 </div>
 ))}
 </div>
 <div style={{ marginTop: "1.5rem", display: "flex", flexWrap: "wrap", gap: "0.75rem" }}>
 <Link href="/contact" style={btnAmber}>Contact Us</Link>
 <a href="https://www.globalgiving.org" target="_blank" rel="noopener noreferrer" style={{ ...btnTealOutline, border: "2px solid rgba(255,255,255,0.5)", color: "#fff" }}>
 Visit Global Giving
 </a>
 </div>
 </div>
 </div>
 </div>
 </section>
 </div>
 );
}
