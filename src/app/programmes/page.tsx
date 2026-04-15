import Image from "next/image";
import Link from "next/link";

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
            <span style={{ color: "#fff" }}>Programmes</span>
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
            Our Programmes
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
            Global Citizenship Education for young people in Ghana, from classroom learning to community action.
          </p>
        </div>
      </section>

      <section id="get-global" style={{ padding: "6rem 0", background: "#fff" }}>
        <div style={wrap}>
          <div style={grid2}>
            <div style={imgWrap}>
              <Image
                src="/images/impact-1.webp"
                alt=""
                fill
                sizes="(max-width: 900px) 100vw, 50vw"
                style={{ objectFit: "cover" }}
              />
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
            <div style={imgWrap}>
              <Image
                src="/images/impact-2.webp"
                alt=""
                fill
                sizes="(max-width: 900px) 100vw, 50vw"
                style={{ objectFit: "cover" }}
              />
            </div>
          </div>
        </div>
      </section>

      <section id="training" style={{ padding: "6rem 0", background: "#fff" }}>
        <div style={wrap}>
          <div style={grid2}>
            <div style={imgWrap}>
              <Image
                src="/images/impact-3.webp"
                alt=""
                fill
                sizes="(max-width: 900px) 100vw, 50vw"
                style={{ objectFit: "cover" }}
              />
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

      <section style={{ padding: "4rem 0", background: amber, textAlign: "center" as const }}>
        <div style={wrap}>
          <h2 style={{ fontSize: "clamp(1.35rem, 2.5vw, 1.75rem)", fontWeight: 800, color: dark, margin: "0 0 1.5rem" }}>
            Want to support our programmes?
          </h2>
          <Link href="/donate" style={{ ...btnAmber, color: "#fff" }}>
            Donate Now
          </Link>
        </div>
      </section>
    </div>
  );
}
