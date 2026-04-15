"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";

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
      <p style={{ fontSize: "2.75rem", fontWeight: 900, color: "#2BBFB3", lineHeight: 1 }}>
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
  fontWeight: 900, color: "#1A1A1A",
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
  background: "#fff", borderRadius: "1.25rem",
  boxShadow: "0 2px 8px rgba(0,0,0,0.06), 0 8px 24px rgba(0,0,0,0.04)",
  overflow: "hidden",
};

const wrap: React.CSSProperties = {
  maxWidth: "1280px", margin: "0 auto", padding: "0 1.5rem",
};

const twoCol: React.CSSProperties = {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 460px), 1fr))",
  gap: "4rem", alignItems: "center",
};

export default function Home() {
  return (
    <>
      {/* 1. HERO */}
      <section style={{ minHeight: "100vh", paddingTop: "80px", background: "#F8FFFE", display: "flex", alignItems: "center" }}>
        <div style={{ ...wrap, padding: "4rem 1.5rem", width: "100%" }}>
          <div style={twoCol}>
            {/* Left image */}
            <div style={{ position: "relative" }}>
              <div style={{ position: "relative", height: "600px", borderRadius: "2rem", overflow: "hidden" }}>
                <Image src="/images/hero.webp" alt="MTW students" fill style={{ objectFit: "cover" }} priority />
              </div>
              <div style={{
                position: "absolute", bottom: "1.5rem", left: "1.5rem", right: "1.5rem",
                background: "rgba(255,255,255,0.96)", backdropFilter: "blur(8px)",
                borderRadius: "1rem", padding: "1rem 1.25rem",
                boxShadow: "0 8px 32px rgba(0,0,0,0.12)",
                display: "flex", alignItems: "center", gap: "0.875rem",
              }}>
                <div style={{ width: "42px", height: "42px", borderRadius: "50%", background: "#2BBFB3", flexShrink: 0, display: "flex", alignItems: "center", justifyContent: "center" }}>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="10" />
                    <path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
                  </svg>
                </div>
                <div>
                  <p style={{ fontSize: "0.68rem", color: "#6B7280", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.06em" }}>Registered Charity</p>
                  <p style={{ fontSize: "0.875rem", fontWeight: 800, color: "#1A1A1A" }}>Empowering young Ghanaians since 2016</p>
                </div>
              </div>
              <div style={{ position: "absolute", top: "-2rem", left: "-2rem", width: "160px", height: "160px", borderRadius: "50%", background: "#7DDDD7", opacity: 0.2, zIndex: -1 }} />
              <div style={{ position: "absolute", bottom: "-1.5rem", right: "-1.5rem", width: "120px", height: "120px", borderRadius: "50%", background: "#F5A800", opacity: 0.2, zIndex: -1 }} />
            </div>

            {/* Right text */}
            <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
              <span style={pill("#1A9A8F", "rgba(43,191,179,0.12)")}>
                <span style={{ width: "7px", height: "7px", borderRadius: "50%", background: "#2BBFB3", display: "inline-block", marginRight: "0.5rem" }} />
                Global Citizenship Education in Ghana
              </span>
              <h1 style={{ fontSize: "clamp(2.2rem, 4.5vw, 3.4rem)", fontWeight: 900, color: "#1A1A1A", lineHeight: 1.1, letterSpacing: "-0.02em" }}>
                We design and deliver{" "}
                <span style={{ color: "#2BBFB3" }}>programmes</span>{" "}
                that change lives
              </h1>
              <p style={{ ...bodyText, fontSize: "1.05rem", maxWidth: "480px" }}>
                Enabling a confident and skilful next generation of change makers.
                We use the SDGs as learning themes to engage students aged 10–15
                from peri-urban communities in Ghana.
              </p>
              <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
                <Link href="/donate" style={btnAmber}>Donate Now</Link>
                <Link href="/impact" style={btnTealOutline}>Read Impact Stories</Link>
              </div>
              <div style={{ display: "flex", gap: "1.5rem", flexWrap: "wrap", paddingTop: "1.5rem", borderTop: "1px solid #E5E7EB" }}>
                {["Registered UK Charity", "SDG-aligned Curriculum", "Community-led Approach"].map(t => (
                  <span key={t} style={{ display: "flex", alignItems: "center", gap: "0.4rem", fontSize: "0.82rem", color: "#6B7280" }}>
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                      <circle cx="8" cy="8" r="8" fill="rgba(43,191,179,0.15)" />
                      <path d="M5 8l2 2 4-4" stroke="#2BBFB3" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. STATS STRIP */}
      <section style={{ background: "#fff", borderTop: "1px solid #E5E7EB", borderBottom: "1px solid #E5E7EB" }}>
        <div style={wrap}>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(160px, 1fr))" }}>
            <StatItem value={1000} suffix="+" label="Students Reached" />
            <StatItem value={60} suffix="%" label="Are Girls" />
            <StatItem value={20} suffix="+" label="Trained Facilitators" />
            <StatItem value={3} suffix="" label="Core Programmes" />
          </div>
        </div>
      </section>

      {/* 3. ABOUT */}
      <section style={{ background: "#fff", padding: "6rem 1.5rem" }}>
        <div style={wrap}>
          <div style={twoCol}>
            {/* Stacked images + dark card */}
            <div>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1rem" }}>
                <div style={{ position: "relative", height: "280px", borderRadius: "1.25rem", overflow: "hidden" }}>
                  <Image src="/images/about.webp" alt="MTW community" fill style={{ objectFit: "cover" }} />
                </div>
                <div style={{ position: "relative", height: "280px", borderRadius: "1.25rem", overflow: "hidden", marginTop: "2rem" }}>
                  <Image src="/images/impact-2.webp" alt="MTW students" fill style={{ objectFit: "cover" }} />
                </div>
              </div>
              <div style={{ marginTop: "1.25rem", background: "#0F2E2B", borderRadius: "1.25rem", padding: "1.5rem 2rem", display: "flex", alignItems: "center", justifyContent: "space-between", gap: "1rem", flexWrap: "wrap" }}>
                <div>
                  <p style={{ color: "rgba(255,255,255,0.6)", fontSize: "0.78rem", fontWeight: 600, marginBottom: "0.25rem" }}>Join our mission</p>
                  <p style={{ color: "#fff", fontWeight: 800, fontSize: "1.05rem" }}>Contribute Today To Make A Difference</p>
                </div>
                <Link href="/donate" style={btnAmber}>Donate Now</Link>
              </div>
            </div>
            {/* Text */}
            <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
              <span style={pill("#D48F00", "rgba(245,168,0,0.12)")}>Our Story</span>
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
                Move The World was born from that conversation — and has since designed its own
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
      <section style={{ background: "#F8FFFE", padding: "6rem 1.5rem" }}>
        <div style={wrap}>
          <div style={twoCol}>
            <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
              <span style={pill("#1A9A8F", "rgba(43,191,179,0.12)")}>Our Programmes</span>
              <h2 style={sectionHeading}>
                A trusted Global Citizenship{" "}
                <span style={{ color: "#2BBFB3" }}>Education Organisation</span>
              </h2>
              <p style={bodyText}>
                We use the UN Sustainable Development Goals as learning themes, engaging
                students in experiential learning and critical thinking about themselves,
                their community, and the world around them.
              </p>
              <div style={{ display: "flex", flexDirection: "column", gap: "0.875rem", margin: "0.25rem 0" }}>
                {[
                  "Get Global — SDGs 1–6 for ages 10–12",
                  "Get Local — SDGs 7–12 for ages 13–15",
                  "Training — Building local facilitator capacity",
                ].map(item => (
                  <div key={item} style={{ display: "flex", gap: "0.75rem", alignItems: "center" }}>
                    <div style={{ width: "8px", height: "8px", borderRadius: "50%", background: "#2BBFB3", flexShrink: 0 }} />
                    <p style={{ fontSize: "0.9rem", color: "#1A1A1A", fontWeight: 600 }}>{item}</p>
                  </div>
                ))}
              </div>
              <Link href="/programmes" style={btnAmber}>View All Programmes</Link>
            </div>
            <div style={{ position: "relative", height: "480px", borderRadius: "2rem", overflow: "hidden" }}>
              <Image src="/images/impact-1.webp" alt="Programmes" fill style={{ objectFit: "cover" }} />
            </div>
          </div>
        </div>
      </section>

      {/* 5. PROGRAMME CARDS */}
      <section style={{ background: "#fff", padding: "6rem 1.5rem" }}>
        <div style={wrap}>
          <div style={{ textAlign: "center", maxWidth: "580px", margin: "0 auto 3rem" }}>
            <span style={pill("#1A9A8F", "rgba(43,191,179,0.12)")}>What We Offer</span>
            <h2 style={sectionHeading}>
              Supporting young people to{" "}
              <span style={{ color: "#2BBFB3" }}>think and act globally</span>
            </h2>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 280px), 1fr))", gap: "1.5rem" }}>
            {[
              { color: "#2BBFB3", title: "Get Global", ages: "Ages 10–12", sdgs: "SDGs 1–6", desc: "A 7-month programme where locally trained facilitators lead students through experiential learning on global challenges — one theme per session.", href: "/programmes#get-global" },
              { color: "#F5A800", title: "Get Local", ages: "Ages 13–15", sdgs: "SDGs 7–12", desc: "Project-based learning that supports students to identify and address issues in their own community, bridging global thinking with local action.", href: "/programmes#get-local" },
              { color: "#1A9A8F", title: "Training", ages: "All ages", sdgs: "Facilitators", desc: "Interactive facilitator training for community youth, teachers, and leaders — equipping them with skills for more effective and engaging delivery.", href: "/programmes#training" },
            ].map(p => (
              <div key={p.title} style={{ ...cardStyle, display: "flex", flexDirection: "column" }}>
                <div style={{ height: "5px", background: p.color }} />
                <div style={{ padding: "2rem", display: "flex", flexDirection: "column", gap: "1rem", flex: 1 }}>
                  <div style={{ display: "flex", gap: "0.5rem" }}>
                    <span style={{ fontSize: "0.75rem", fontWeight: 700, padding: "0.25rem 0.75rem", borderRadius: "999px", background: `${p.color}18`, color: p.color }}>{p.ages}</span>
                    <span style={{ fontSize: "0.75rem", fontWeight: 700, padding: "0.25rem 0.75rem", borderRadius: "999px", background: "#F3F4F6", color: "#6B7280" }}>{p.sdgs}</span>
                  </div>
                  <h3 style={{ fontWeight: 800, fontSize: "1.15rem", color: "#1A1A1A" }}>{p.title}</h3>
                  <p style={{ ...bodyText, fontSize: "0.875rem", flex: 1 }}>{p.desc}</p>
                  <Link href={p.href} style={{ fontSize: "0.875rem", fontWeight: 700, color: p.color, textDecoration: "none" }}>Learn more &rarr;</Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. IMPACT STORIES */}
      <section style={{ background: "#F8FFFE", padding: "6rem 1.5rem" }}>
        <div style={wrap}>
          <div style={{ textAlign: "center", maxWidth: "580px", margin: "0 auto 3rem" }}>
            <span style={pill("#1A9A8F", "rgba(43,191,179,0.12)")}>Our Impact</span>
            <h2 style={sectionHeading}>
              Young people as{" "}
              <span style={{ color: "#2BBFB3" }}>agents of change</span>
            </h2>
            <p style={{ ...bodyText, marginTop: "1rem" }}>Stories of transformation from our programmes across Ghana.</p>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 300px), 1fr))", gap: "1.5rem" }}>
            {[
              { img: "/images/impact-1.webp", tag: "Get Global", title: "Building global thinkers in Medie", excerpt: "Students from the Dagara community explore SDG 3 through hands-on health workshops led by local facilitators." },
              { img: "/images/impact-2.webp", tag: "Get Local", title: "From classroom to community action", excerpt: "Get Local participants identified poor sanitation as a key issue and led a community awareness campaign in their neighbourhood." },
              { img: "/images/impact-3.webp", tag: "Training", title: "Training a new generation of facilitators", excerpt: "Ten young people completed our facilitator training, now leading sessions in three partner schools." },
            ].map(s => (
              <div key={s.title} style={cardStyle}>
                <div style={{ position: "relative", height: "210px" }}>
                  <Image src={s.img} alt={s.title} fill style={{ objectFit: "cover" }} />
                  <span style={{ position: "absolute", top: "1rem", left: "1rem", background: "#2BBFB3", color: "#fff", padding: "0.25rem 0.75rem", borderRadius: "999px", fontSize: "0.72rem", fontWeight: 700 }}>{s.tag}</span>
                </div>
                <div style={{ padding: "1.5rem", display: "flex", flexDirection: "column", gap: "0.75rem" }}>
                  <h3 style={{ fontWeight: 800, fontSize: "1rem", color: "#1A1A1A", lineHeight: 1.4 }}>{s.title}</h3>
                  <p style={{ ...bodyText, fontSize: "0.85rem" }}>{s.excerpt}</p>
                  <Link href="/impact" style={{ fontSize: "0.85rem", fontWeight: 700, color: "#2BBFB3", textDecoration: "none" }}>Read more &rarr;</Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. DONATE BANNER */}
      <section style={{ position: "relative", overflow: "hidden" }}>
        <div style={{ position: "relative", height: "340px" }}>
          <Image src="/images/impact-2.webp" alt="Community" fill style={{ objectFit: "cover" }} />
          <div style={{ position: "absolute", inset: 0, background: "rgba(15,46,43,0.82)" }} />
        </div>
        <div style={{ position: "absolute", inset: 0, display: "flex", alignItems: "center", justifyContent: "center", flexDirection: "column", gap: "1.5rem", textAlign: "center", padding: "2rem 1.5rem" }}>
          <div style={{ background: "#F5A800", borderRadius: "999px", padding: "0.875rem 2.5rem", maxWidth: "600px" }}>
            <p style={{ color: "#fff", fontWeight: 800, fontSize: "clamp(0.95rem, 2vw, 1.2rem)" }}>
              Help Us Build A Future Filled With Hope And Opportunities
            </p>
          </div>
          <h2 style={{ color: "#fff", fontWeight: 900, fontSize: "clamp(1.5rem, 3.5vw, 2.4rem)", lineHeight: 1.2, letterSpacing: "-0.02em" }}>
            Support And Contribute<br />To Their Urgent Needs
          </h2>
          <Link href="/donate" style={btnAmber}>Donate Now</Link>
        </div>
      </section>

      {/* 8. PARTNERS */}
      <section style={{ background: "#fff", padding: "4rem 1.5rem", borderBottom: "1px solid #E5E7EB" }}>
        <div style={wrap}>
          <p style={{ textAlign: "center", fontSize: "0.72rem", fontWeight: 700, color: "#9CA3AF", letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: "2.5rem" }}>
            Our Partners &amp; Funders
          </p>
          <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", alignItems: "center", gap: "2.5rem" }}>
            {Array.from({ length: 6 }, (_, i) => (
              <div key={i} style={{ height: "36px", width: "120px", borderRadius: "0.5rem", background: "#F3F4F6" }} />
            ))}
          </div>
          <div style={{ textAlign: "center", marginTop: "2rem" }}>
            <Link href="/partners" style={{ fontSize: "0.875rem", fontWeight: 700, color: "#2BBFB3", textDecoration: "none" }}>Become a partner &rarr;</Link>
          </div>
        </div>
      </section>

      {/* 9. UPDATES + NEWSLETTER */}
      <section style={{ background: "#F8FFFE", padding: "6rem 1.5rem" }}>
        <div style={wrap}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", marginBottom: "2.5rem", flexWrap: "wrap", gap: "1rem" }}>
            <div>
              <span style={pill("#D48F00", "rgba(245,168,0,0.12)")}>News &amp; Updates</span>
              <h2 style={{ ...sectionHeading, marginTop: "0" }}>
                Get Updated From Our{" "}
                <span style={{ color: "#2BBFB3" }}>Latest News</span>
              </h2>
            </div>
            <Link href="/updates" style={{ ...btnTealOutline, padding: "0.6rem 1.5rem", fontSize: "0.82rem" }}>View All</Link>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 420px), 1fr))", gap: "1.5rem" }}>
            <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
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
                    <Link href="/updates" style={{ fontSize: "0.8rem", fontWeight: 700, color: "#F5A800", textDecoration: "none" }}>Read more &rarr;</Link>
                  </div>
                </div>
              ))}
            </div>
            {/* Newsletter card */}
            <div style={{ background: "#0F2E2B", borderRadius: "1.25rem", padding: "2.5rem", display: "flex", flexDirection: "column", gap: "1.25rem", justifyContent: "center" }}>
              <p style={{ color: "rgba(255,255,255,0.55)", fontSize: "0.75rem", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.08em" }}>Newsletter</p>
              <h3 style={{ color: "#fff", fontWeight: 800, fontSize: "1.4rem", lineHeight: 1.35 }}>
                Your Support Is<br />A Lot To Them.{" "}
                <span style={{ color: "#F5A800" }}>Donate What You Can!</span>
              </h3>
              <p style={{ color: "rgba(255,255,255,0.55)", fontSize: "0.875rem", lineHeight: 1.7 }}>
                Stay updated on our programmes, impact stories, and upcoming events.
              </p>
              <input type="email" placeholder="Your email address" style={{ padding: "0.875rem 1.25rem", borderRadius: "999px", border: "1px solid rgba(255,255,255,0.15)", background: "rgba(255,255,255,0.08)", color: "#fff", fontSize: "0.875rem", outline: "none" }} />
              <button style={btnAmber}>Subscribe Now</button>
            </div>
          </div>
        </div>
      </section>

      {/* 10. TESTIMONIALS */}
      <section style={{ background: "#fff", padding: "6rem 1.5rem" }}>
        <div style={wrap}>
          <div style={{ textAlign: "center", marginBottom: "3rem" }}>
            <span style={pill("#1A9A8F", "rgba(43,191,179,0.12)")}>Voices</span>
            <h2 style={{ ...sectionHeading, marginTop: "0" }}>
              Sharing Our{" "}
              <span style={{ color: "#2BBFB3" }}>Mission&apos;s Success</span>
            </h2>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 380px), 1fr))", gap: "1.5rem" }}>
            {[
              { name: "Sarah Asiedu", role: "Director, Move The World", quote: "We believe that when young people are given the right opportunities and platforms, they can become powerful agents of transformation in their communities." },
              { name: "Emmanuel Mumuni", role: "Board Chair, Move The World", quote: "The Global Citizenship curriculum has fundamentally shifted how young people in our partner communities see themselves and their role in the world." },
            ].map(t => (
              <div key={t.name} style={{ ...cardStyle, padding: "2rem", display: "flex", flexDirection: "column", gap: "1.25rem" }}>
                <div style={{ display: "flex", gap: "0.25rem" }}>
                  {Array.from({ length: 5 }, (_, i) => (
                    <svg key={i} width="16" height="16" viewBox="0 0 24 24" fill="#F5A800">
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                    </svg>
                  ))}
                </div>
                <p style={{ ...bodyText, fontStyle: "italic" }}>&ldquo;{t.quote}&rdquo;</p>
                <div style={{ display: "flex", alignItems: "center", gap: "0.875rem", paddingTop: "1rem", borderTop: "1px solid #F3F4F6" }}>
                  <div style={{ width: "42px", height: "42px", borderRadius: "50%", background: "#2BBFB3", display: "flex", alignItems: "center", justifyContent: "center", color: "#fff", fontWeight: 800, fontSize: "1rem", flexShrink: 0 }}>
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