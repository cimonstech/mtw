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
const textDark = "#1A1A1A";
const border = "#E5E7EB";

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

const btnDarkOutline: CSSProperties = {
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  padding: "0.875rem 2rem",
  background: "transparent",
  border: "2px solid #0F2E2B",
  color: "#0F2E2B",
  fontWeight: 700,
  borderRadius: "999px",
  textDecoration: "none",
  fontSize: "0.88rem",
  cursor: "pointer",
};

void btnDarkOutline;

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

function pill(color: string, bg: string): CSSProperties {
  return {
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
  };
}

interface StatConfig {
  target: number;
  suffix: string;
  label: string;
}

const STATS: readonly StatConfig[] = [
  { target: 1000, suffix: "+", label: "Students Reached" },
  { target: 60, suffix: "%", label: "Are Girls" },
  { target: 20, suffix: "+", label: "Trained Facilitators" },
  { target: 3, suffix: "", label: "Core Programmes" },
];

function AnimatedStat({ target, suffix, label }: StatConfig) {
  const [count, setCount] = useState(0);
  const [started, setStarted] = useState(false);
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry?.isIntersecting) setStarted(true);
      },
      { threshold: 0.25 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!started) return;
    const durationMs = 1400;
    let frame: number;
    const t0 = performance.now();
    const tick = (now: number) => {
      const t = Math.min((now - t0) / durationMs, 1);
      const eased = 1 - (1 - t) ** 3;
      setCount(Math.round(eased * target));
      if (t < 1) frame = requestAnimationFrame(tick);
    };
    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [started, target]);

  return (
    <div ref={ref} style={{ textAlign: "center" }}>
      <p style={{ fontSize: "clamp(2rem, 4vw, 2.75rem)", fontWeight: 900, color: teal, margin: 0, fontVariantNumeric: "tabular-nums" }}>
        {count}
        {suffix}
      </p>
      <p style={{ fontSize: "0.88rem", fontWeight: 600, color: muted, marginTop: "0.5rem", marginBottom: 0 }}>{label}</p>
    </div>
  );
}

function StarRow() {
  return (
    <div style={{ display: "flex", gap: "0.2rem", marginBottom: "1rem" }} aria-hidden>
      {[0, 1, 2, 3, 4].map((i) => (
        <svg key={i} width="18" height="18" viewBox="0 0 24 24" fill={amber} aria-hidden>
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
        </svg>
      ))}
    </div>
  );
}

function TeamCard({
  name,
  role,
  circleBg,
  imageSrc,
  cardStyleOverride,
  nameColor,
  roleColor,
}: {
  name: string;
  role: string;
  circleBg: string;
  imageSrc?: string;
  cardStyleOverride?: CSSProperties;
  nameColor: string;
  roleColor: string;
}) {
  const initial = name.charAt(0);
  return (
    <div style={{ ...cardStyle, ...cardStyleOverride }}>
      <div
        style={{
          height: "200px",
          background: "#F3F4F6",
          position: "relative",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        {imageSrc ? (
          <Image src={imageSrc} alt={name} fill style={{ objectFit: "cover" }} />
        ) : (
          <div
            style={{
              width: "72px",
              height: "72px",
              borderRadius: "50%",
              background: circleBg,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "#fff",
              fontWeight: 700,
              fontSize: "1.75rem",
            }}
          >
            {initial}
          </div>
        )}
      </div>
      <div style={{ padding: "1.25rem" }}>
        <div style={{ fontWeight: 700, color: nameColor, fontSize: "1rem" }}>{name}</div>
        <div style={{ fontSize: "0.82rem", color: roleColor, marginTop: "0.25rem" }}>{role}</div>
      </div>
    </div>
  );
}

const grid2: CSSProperties = {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 500px), 1fr))",
  gap: "4rem",
  alignItems: "center",
};

const gridStats: CSSProperties = {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit, minmax(160px, 1fr))",
  gap: "2rem",
};

const gridTestimonial: CSSProperties = {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 380px), 1fr))",
  gap: "1.5rem",
};

const gridTeam: CSSProperties = {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 220px), 1fr))",
  gap: "1.5rem",
};

export default function AboutPage() {
  return (
    <div style={{ background: "#fff" }}>
      {/* SECTION 1 */}
      <section
        style={{
          width: "100%",
          background: dark,
          paddingTop: "140px",
          paddingBottom: "80px",
          textAlign: "center",
        }}
      >
        <div style={wrap}>
          <nav style={{ fontSize: "0.8rem", color: teal, marginBottom: "1rem" }}>
            <Link href="/" style={{ color: teal, textDecoration: "none" }}>
              Home
            </Link>
            <span style={{ color: "rgba(255,255,255,0.35)" }}> / </span>
            <span style={{ color: "#fff" }}>About Us</span>
          </nav>
          <h1
            style={{
              fontSize: "clamp(2.5rem, 5vw, 4rem)",
              fontWeight: 900,
              color: "#fff",
              margin: 0,
              marginBottom: "1rem",
            }}
          >
            About Us
          </h1>
          <p style={{ color: "rgba(255,255,255,0.6)", fontSize: "1.05rem", maxWidth: "32rem", margin: "0 auto" }}>
            Empowering young people in Ghana through Global Citizenship Education since 2016.
          </p>
        </div>
      </section>

      {/* SECTION 2 */}
      <section style={{ padding: "6rem 1.5rem", background: "#fff" }}>
        <div style={wrap}>
          <div style={grid2}>
            <div>
              <span style={pill(dark, `${amber}33`)}>Welcome, Let&apos;s Make A Difference</span>
              <h2 style={{ ...sectionHeading, margin: "0 0 1rem" }}>A Trusted Global Citizenship Education Organisation</h2>
              <p style={{ ...bodyText, margin: "0 0 1.5rem" }}>
                Move The World is an education charity. We use the SDGs as learning themes to engage students in experiential
                learning and critical thinking about themselves, their community and the world around them. Our students are
                10–15 year olds from peri-urban communities in Ghana.
              </p>
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "1fr 1fr",
                  gap: "1rem",
                  marginBottom: "1.5rem",
                }}
              >
                <div style={{ background: teal, color: "#fff", borderRadius: "1rem", padding: "1.25rem" }}>
                  <div style={{ fontWeight: 700, fontSize: "0.95rem", marginBottom: "0.35rem" }}>Get Global</div>
                  <div style={{ fontSize: "0.85rem", opacity: 0.95 }}>SDGs 1–6 for ages 10–12</div>
                </div>
                <div style={{ background: amber, color: "#fff", borderRadius: "1rem", padding: "1.25rem" }}>
                  <div style={{ fontWeight: 700, fontSize: "0.95rem", marginBottom: "0.35rem" }}>Get Local</div>
                  <div style={{ fontSize: "0.85rem", opacity: 0.95 }}>SDGs 7–12 for ages 13–15</div>
                </div>
              </div>
              <ul style={{ listStyle: "none", padding: 0, margin: "0 0 1.5rem" }}>
                {[
                  "Empowering young people to understand social challenges",
                  "Building leadership and critical thinking skills",
                  "Facilitating community-led solutions to real problems",
                ].map((line) => (
                  <li
                    key={line}
                    style={{
                      display: "flex",
                      alignItems: "flex-start",
                      gap: "0.65rem",
                      margin: "0 0 0.65rem",
                      color: muted,
                      lineHeight: 1.8,
                      fontSize: "0.95rem",
                    }}
                  >
                    <span
                      style={{
                        width: "8px",
                        height: "8px",
                        borderRadius: "50%",
                        background: teal,
                        flexShrink: 0,
                        marginTop: "0.45rem",
                      }}
                    />
                    {line}
                  </li>
                ))}
              </ul>
              <Link href="/programmes" style={btnAmber}>
                Our Programmes
              </Link>
            </div>
            <div style={{ position: "relative", height: "520px", borderRadius: "2rem", overflow: "hidden" }}>
              <Image src="/images/about.webp" alt="" fill sizes="(max-width: 900px) 100vw, 50vw" style={{ objectFit: "cover" }} />
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 3 */}
      <section
        style={{
          background: "#fff",
          borderTop: `1px solid ${border}`,
          borderBottom: `1px solid ${border}`,
          padding: "3rem 1.5rem",
        }}
      >
        <div style={wrap}>
          <div style={gridStats}>
            {STATS.map((s) => (
              <AnimatedStat key={s.label} {...s} />
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 4 */}
      <section style={{ padding: "6rem 1.5rem", background: surface }}>
        <div style={wrap}>
          <div style={grid2}>
            <div>
              <span style={pill("#fff", teal)}>Our Mission</span>
              <h2 style={{ ...sectionHeading, margin: "0 0 1rem" }}>Committed to advancing community development</h2>
              <p style={{ ...bodyText, margin: "0 0 1.5rem" }}>
                Our work focuses on empowering young people with the knowledge, skills, and values needed to become active and
                responsible global citizens.
              </p>
              <p style={{ ...bodyText, margin: "0 0 0.35rem", fontWeight: 700, color: teal }}>Vision</p>
              <p style={{ ...bodyText, margin: "0 0 1rem" }}>
                Thriving communities where empowered young people lead sustainable, community-driven solutions to social and
                environmental challenges.
              </p>
              <p style={{ ...bodyText, margin: "0 0 0.35rem", fontWeight: 700, color: teal }}>Mission</p>
              <p style={{ ...bodyText, margin: "0 0 1.5rem" }}>
                To support young people and communities to become catalysts for change by promoting Global Citizenship
                Education, leadership development, and community-led solutions.
              </p>
              <Link href="/donate" style={btnAmber}>
                Donate Now
              </Link>
            </div>
            <div
              style={{
                background: dark,
                borderRadius: "1.5rem",
                padding: "2.5rem",
                boxShadow: "0 8px 32px rgba(0,0,0,0.2)",
              }}
            >
              <p
                style={{
                  fontSize: "1.1rem",
                  lineHeight: 1.8,
                  fontStyle: "italic",
                  color: "#fff",
                  margin: 0,
                }}
              >
                When young people are given the right opportunities, guidance, and platforms to express their ideas, they can
                become powerful agents of transformation in their communities.
              </p>
              <div
                style={{
                  height: "3px",
                  width: "60px",
                  background: amber,
                  borderRadius: "999px",
                  margin: "1.5rem 0 1rem",
                }}
              />
              <div style={{ display: "flex", alignItems: "center", gap: "0.85rem" }}>
                <div
                  style={{
                    width: "44px",
                    height: "44px",
                    borderRadius: "50%",
                    background: teal,
                    color: "#fff",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontWeight: 700,
                    flexShrink: 0,
                  }}
                >
                  S
                </div>
                <div>
                  <div style={{ fontWeight: 700, color: "#fff" }}>Sarah Asiedu</div>
                  <div style={{ fontSize: "0.88rem", color: "rgba(255,255,255,0.6)" }}>Director, Move The World</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 5 */}
      <section style={{ padding: "6rem 1.5rem", background: "#fff" }}>
        <div style={wrap}>
          <div style={{ textAlign: "center", marginBottom: "2.5rem" }}>
            <span style={pill("#fff", teal)}>Our Testimonials</span>
            <h2 style={{ ...sectionHeading, margin: "0.5rem 0 0" }}>What They&apos;re Saying About Us</h2>
          </div>
          <div style={gridTestimonial}>
            {[
              {
                name: "Emmanuel Mumuni",
                role: "Board Chair",
                quote:
                  "The Global Citizenship curriculum has fundamentally shifted how young people in our partner communities see themselves and their role in the world.",
              },
              {
                name: "Helen Quansah",
                role: "Facilitator",
                quote:
                  "Being a Move The World facilitator has transformed how I teach. The students are more engaged, more curious, and more confident in expressing their ideas.",
              },
            ].map((t) => (
              <div
                key={t.name}
                style={{
                  background: "#fff",
                  borderRadius: "1.5rem",
                  padding: "2rem",
                  boxShadow: "0 2px 8px rgba(0,0,0,0.06)",
                }}
              >
                <StarRow />
                <p style={{ ...bodyText, fontStyle: "italic", margin: "0 0 1.25rem" }}>{t.quote}</p>
                <div style={{ display: "flex", alignItems: "center", gap: "0.75rem" }}>
                  <div
                    style={{
                      width: "40px",
                      height: "40px",
                      borderRadius: "50%",
                      background: teal,
                      color: "#fff",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontWeight: 700,
                      fontSize: "0.95rem",
                      flexShrink: 0,
                    }}
                  >
                    {t.name.charAt(0)}
                  </div>
                  <div>
                    <div style={{ fontWeight: 700, color: textDark }}>{t.name}</div>
                    <div style={{ fontSize: "0.85rem", color: muted }}>{t.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 6 */}
      <section style={{ padding: "6rem 1.5rem", background: "#fff" }}>
        <div style={wrap}>
          <span style={pill(dark, `${amber}33`)}>Our Team</span>
          <h2 style={{ ...sectionHeading, margin: "0 0 2rem" }}>The people driving our mission</h2>
          <div style={gridTeam}>
            {[
              { name: "Sarah Asiedu", role: "Director", imageSrc: "/images/general/sarah-asiedu.jpg" },
              { name: "Margaret Osei", role: "Community Liaison Officer" },
              { name: "Hawa Tasala Gariba", role: "Social Media Officer", imageSrc: "/images/general/Hawa-Tasala-Gariba-social-media.jpg" },
              { name: "Patricia Acquah", role: "M&E Officer", imageSrc: "/images/general/patricia-acquah.jpg" },
            ].map((p) => (
              <TeamCard key={p.name} name={p.name} role={p.role} imageSrc={p.imageSrc} circleBg={teal} nameColor={textDark} roleColor={muted} />
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 7 */}
      <section style={{ padding: "6rem 1.5rem", background: surface }}>
        <div style={wrap}>
          <span style={pill("#fff", teal)}>Our Facilitators</span>
          <h2 style={{ ...sectionHeading, margin: "0 0 2rem" }}>Training local change makers</h2>
          <div style={gridTeam}>
            {["Helen Quansah", "Michael Woma", "Rebecca Henyo", "Emmanuel Woma", "Alex Agbedu"].map((name) => (
              <TeamCard key={name} name={name} role="Facilitator" circleBg={amber} nameColor={textDark} roleColor={muted} />
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 8 */}
      <section style={{ padding: "6rem 1.5rem", background: "#fff" }}>
        <div style={wrap}>
          <span style={pill("#fff", teal)}>Board of Trustees</span>
          <h2 style={{ ...sectionHeading, margin: "0 0 2rem" }}>Governance and leadership</h2>
          <div style={gridTeam}>
            {[
              { name: "Emmanuel Mumuni", role: "Chair" },
              { name: "Lawrencia Awuku", role: "Trustee" },
              { name: "Naa Ayorkor Aryeetey", role: "Trustee" },
              { name: "MamiSerwaa Amoakohene", role: "Trustee" },
              { name: "Enoch Lomo Dameteye", role: "Trustee" },
              { name: "Dorcas Adjeley Yobo", role: "Trustee" },
            ].map((p) => (
              <TeamCard key={p.name} name={p.name} role={p.role} circleBg={dark} nameColor={textDark} roleColor={muted} />
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 9 */}
      <section style={{ padding: "6rem 1.5rem", background: dark }}>
        <div style={wrap}>
          <span style={pill(amber, `${amber}22`)}>Friends of MTW</span>
          <h2 style={{ ...sectionHeading, color: "#fff", margin: "0 0 2rem" }}>Our global family</h2>
          <div style={gridTeam}>
            {[
              { name: "Claire Hardy", role: "Co-Founder" },
              { name: "Megan Taylor", role: "Co-Founder" },
              { name: "Kellie Lucas", role: "Friend of MTW" },
              { name: "Caroline Capon", role: "Founding Member" },
              { name: "Alyssa Simon", role: "Friend of MTW" },
              { name: "Jamal Adomako", role: "Friend of MTW" },
              { name: "Amanda Minett", role: "Friend of MTW" },
            ].map((p) => (
              <TeamCard
                key={p.name}
                name={p.name}
                role={p.role}
                circleBg={amber}
                nameColor="#fff"
                roleColor="rgba(255,255,255,0.6)"
                cardStyleOverride={{
                  background: "rgba(255,255,255,0.07)",
                  border: "1px solid rgba(255,255,255,0.1)",
                  boxShadow: "none",
                }}
              />
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 10 */}
      <section style={{ width: "100%", background: surface, padding: "6rem 1.5rem" }}>
        <div
          style={{
            background: teal,
            borderRadius: "2rem",
            padding: "4rem 3rem",
            maxWidth: "860px",
            margin: "0 auto",
            textAlign: "center",
            position: "relative",
            overflow: "hidden",
          }}
        >
          <div
            style={{
              position: "absolute",
              top: "-20%",
              right: "-10%",
              width: "280px",
              height: "280px",
              borderRadius: "50%",
              background: "#fff",
              opacity: 0.06,
              pointerEvents: "none",
            }}
          />
          <div
            style={{
              position: "absolute",
              bottom: "-25%",
              left: "-5%",
              width: "220px",
              height: "220px",
              borderRadius: "50%",
              background: "#fff",
              opacity: 0.06,
              pointerEvents: "none",
            }}
          />
          <div style={{ position: "relative", zIndex: 1 }}>
            <p style={{ color: "rgba(255,255,255,0.75)", fontSize: "0.75rem", fontWeight: 700, letterSpacing: "0.08em", textTransform: "uppercase", margin: "0 0 1rem" }}>
              Join Our Mission
            </p>
            <h2 style={{ fontSize: "clamp(1.35rem, 3vw, 2rem)", fontWeight: 900, color: "#fff", margin: "0 0 1rem", lineHeight: 1.2 }}>
              Together, let&apos;s shape a brighter future for Ghana&apos;s youth
            </h2>
            <p style={{ color: "rgba(255,255,255,0.85)", lineHeight: 1.7, margin: "0 0 2rem", fontSize: "0.95rem" }}>
              Your support helps us reach more schools, train more facilitators, and empower more young people to lead change.
            </p>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "1rem", justifyContent: "center" }}>
              <Link href="/donate" style={btnAmber}>
                Donate Now
              </Link>
              <Link
                href="/contact"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  justifyContent: "center",
                  padding: "0.875rem 2rem",
                  background: "transparent",
                  border: "2px solid rgba(255,255,255,0.5)",
                  color: "#fff",
                  fontWeight: 700,
                  borderRadius: "999px",
                  textDecoration: "none",
                  fontSize: "0.88rem",
                  cursor: "pointer",
                }}
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
