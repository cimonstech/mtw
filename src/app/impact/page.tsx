"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState, type CSSProperties } from "react";

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

interface StatItem {
  target: number;
  suffix: string;
  label: string;
}

const stats: StatItem[] = [
  { target: 1000, suffix: "+", label: "Students Reached" },
  { target: 60, suffix: "%", label: "Are Girls" },
  { target: 20, suffix: "+", label: "Trained Facilitators" },
  { target: 3, suffix: "", label: "Core Programmes" },
];

function useCountUp(target: number) {
  const [value, setValue] = useState(0);
  const [started, setStarted] = useState(false);
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry?.isIntersecting) setStarted(true);
      },
      { threshold: 0.3 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!started) return;
    const duration = 1300;
    let frame: number;
    const start = performance.now();
    const tick = (now: number) => {
      const t = Math.min((now - start) / duration, 1);
      const eased = 1 - (1 - t) ** 3;
      setValue(Math.round(eased * target));
      if (t < 1) frame = requestAnimationFrame(tick);
    };
    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [started, target]);

  return { ref, value };
}

function Stat({ target, suffix, label }: StatItem) {
  const { ref, value } = useCountUp(target);
  return (
    <div ref={ref} style={{ textAlign: "center" }}>
      <p style={{ margin: 0, fontSize: "2.75rem", fontWeight: 900, color: teal, lineHeight: 1 }}>{value}{suffix}</p>
      <p style={{ margin: "0.6rem 0 0", color: muted, fontSize: "0.9rem", fontWeight: 600 }}>{label}</p>
    </div>
  );
}

export default function ImpactPage() {
  return (
    <div style={{ background: "#fff" }}>
      <section style={{ background: dark, paddingTop: "140px", paddingBottom: "80px", textAlign: "center" }}>
        <div style={wrap}>
          <p style={{ margin: "0 0 1rem", color: teal, fontSize: "0.8rem" }}>Home / Impact</p>
          <h1 style={{ margin: "0 0 1rem", color: "#fff", fontSize: "clamp(2.5rem, 5vw, 4rem)", fontWeight: 900 }}>Our Impact</h1>
          <p style={{ margin: 0, color: "rgba(255,255,255,0.6)" }}>Measuring the change we create together in communities across Ghana.</p>
        </div>
      </section>

      <section style={{ background: "#fff", borderBottom: "1px solid #E5E7EB", padding: "3rem 1.5rem" }}>
        <div style={wrap}>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(160px, 1fr))", gap: "1.5rem" }}>
            {stats.map((s) => <Stat key={s.label} {...s} />)}
          </div>
        </div>
      </section>

      <section style={{ background: "#fff", padding: "6rem 1.5rem" }}>
        <div style={wrap}>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 500px), 1fr))", gap: "4rem", alignItems: "center" }}>
            <div>
              <span style={pill("#fff", teal)}>Our Approach</span>
              <h2 style={{ ...sectionHeading, margin: "0 0 1rem" }}>People-powered development</h2>
              <p style={{ ...bodyText, margin: "0 0 1rem" }}>
                Our approach is firmly grounded in people-powered development, emphasizing the vital role of young people and community members in the process. We believe that those who are most affected by challenges possess invaluable insights that can lead to innovative solutions.
              </p>
              <p style={{ ...bodyText, margin: "0 0 1.5rem" }}>
                By actively involving youth and community members, we foster a collaborative environment where they can identify issues and contribute to viable solutions. This participatory method encourages ownership and empowerment.
              </p>
              <Link href="/about" style={btnAmber}>Read Our Story</Link>
            </div>
            <div style={{ position: "relative", height: "480px", borderRadius: "2rem", overflow: "hidden" }}>
              <Image src="/images/impact-1.webp" alt="" fill style={{ objectFit: "cover" }} />
            </div>
          </div>
        </div>
      </section>

      <section style={{ background: surface, padding: "6rem 1.5rem" }}>
        <div style={wrap}>
          <div style={{ textAlign: "center", marginBottom: "2.5rem" }}>
            <span style={pill("#fff", teal)}>Impact Stories</span>
            <h2 style={{ ...sectionHeading, margin: "0.5rem 0 0" }}>Stories of transformation</h2>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 300px), 1fr))", gap: "1.5rem" }}>
            {[
              {
                image: "/images/impact-1.webp",
                tag: "Get Global",
                title: "Building global thinkers in Medie",
                excerpt:
                  "Students from the Dagara community explored SDG 3 through hands-on health workshops led by local facilitators, sparking conversations that reached their families and neighbours.",
              },
              {
                image: "/images/impact-2.webp",
                tag: "Get Local",
                title: "From classroom to community action",
                excerpt:
                  "Get Local participants identified poor sanitation as a key local issue and led a community awareness campaign, presenting their findings to local leaders.",
              },
              {
                image: "/images/impact-3.webp",
                tag: "Training",
                title: "Training a new generation of facilitators",
                excerpt:
                  "Ten young people from the community completed our facilitator training programme and are now leading sessions across three partner schools.",
              },
            ].map((card) => (
              <article key={card.title} style={cardStyle}>
                <div style={{ position: "relative", height: "220px" }}>
                  <Image src={card.image} alt="" fill style={{ objectFit: "cover" }} />
                  <span style={{ ...pill("#fff", teal), position: "absolute", top: "1rem", left: "1rem", marginBottom: 0 }}>{card.tag}</span>
                </div>
                <div style={{ padding: "1.5rem" }}>
                  <h3 style={{ margin: "0 0 0.65rem", fontSize: "1rem", fontWeight: 800, color: "#1A1A1A" }}>{card.title}</h3>
                  <p style={{ margin: "0 0 1rem", color: muted, lineHeight: 1.7, fontSize: "0.875rem" }}>{card.excerpt}</p>
                  <Link href="/updates" style={{ color: teal, textDecoration: "none", fontSize: "0.88rem", fontWeight: 700 }}>Read more →</Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section style={{ background: dark, padding: "6rem 1.5rem" }}>
        <div style={{ ...wrap, maxWidth: "700px", textAlign: "center" }}>
          <p style={{ margin: 0, color: "#fff", fontSize: "clamp(1.3rem, 2.5vw, 1.75rem)", lineHeight: 1.6, fontStyle: "italic" }}>
            When young people are given the right opportunities, guidance, and platforms to express their ideas, they can become powerful agents of transformation in their communities.
          </p>
          <div style={{ height: "3px", width: "60px", background: amber, borderRadius: "999px", margin: "2rem auto" }} />
          <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "0.75rem" }}>
            <div style={{ width: "42px", height: "42px", borderRadius: "50%", background: teal, color: "#fff", fontWeight: 700, display: "flex", alignItems: "center", justifyContent: "center" }}>M</div>
            <div>
              <p style={{ margin: 0, color: "#fff", fontWeight: 700 }}>Move The World</p>
              <p style={{ margin: "0.2rem 0 0", color: "rgba(255,255,255,0.6)", fontSize: "0.85rem" }}>Impact Storybook</p>
            </div>
          </div>
        </div>
      </section>

      <section style={{ background: "#fff", padding: "6rem 1.5rem" }}>
        <div style={wrap}>
          <div style={{ textAlign: "center", marginBottom: "2.5rem" }}>
            <span style={pill("#fff", teal)}>How We Work</span>
            <h2 style={{ ...sectionHeading, margin: "0.5rem 0 0" }}>Our approach to lasting change</h2>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 280px), 1fr))", gap: "1.5rem" }}>
            {[
              {
                title: "Participatory Method",
                body: "We actively involve youth and community members, fostering a collaborative environment where they can identify issues and contribute to viable solutions.",
              },
              {
                title: "Culturally Relevant Design",
                body: "Alongside community members, we design and implement solutions that are grounded in local context and built for lasting sustainability.",
              },
              {
                title: "Building Future Leaders",
                body: "By equipping young people with the skills to effect change, we cultivate the next generation of community leaders across Ghana.",
              },
            ].map((card) => (
              <div key={card.title} style={{ ...cardStyle, padding: "2rem", borderTop: `4px solid ${teal}` }}>
                <h3 style={{ margin: "0 0 0.75rem", color: "#1A1A1A", fontSize: "1.02rem", fontWeight: 800 }}>{card.title}</h3>
                <p style={{ ...bodyText, margin: 0 }}>{card.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section style={{ width: "100%", background: surface, padding: "6rem 1.5rem" }}>
        <div style={{ background: teal, borderRadius: "2rem", padding: "4rem 3rem", maxWidth: "860px", margin: "0 auto", textAlign: "center", position: "relative", overflow: "hidden" }}>
          <div style={{ position: "absolute", top: "-20%", right: "-10%", width: "280px", height: "280px", borderRadius: "50%", background: "#fff", opacity: 0.06 }} />
          <div style={{ position: "absolute", bottom: "-25%", left: "-5%", width: "220px", height: "220px", borderRadius: "50%", background: "#fff", opacity: 0.06 }} />
          <div style={{ position: "relative" }}>
            <h2 style={{ margin: "0 0 1rem", fontSize: "clamp(1.35rem, 3vw, 2rem)", fontWeight: 900, color: "#fff" }}>Support our impact in Ghana</h2>
            <p style={{ margin: "0 0 2rem", color: "rgba(255,255,255,0.85)", fontSize: "0.95rem", lineHeight: 1.7 }}>
              Every donation helps us reach more young people with the education they deserve.
            </p>
            <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: "1rem" }}>
              <Link href="/donate" style={btnAmber}>Donate Now</Link>
              <Link href="/contact" style={{ ...btnTealOutline, border: "2px solid rgba(255,255,255,0.5)", color: "#fff" }}>Contact Us</Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
