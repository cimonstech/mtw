"use client";

import Image from "next/image";
import { useRef, useState } from "react";

const SDG_ICON_BASE = "https://sdgs.un.org/sites/default/files/goals";

export function sdgIconSrc(goal: number) {
  return `${SDG_ICON_BASE}/E_SDG_Icons-${String(goal).padStart(2, "0")}.jpg`;
}

export function SdgIcon({ goal, size = 28 }: { goal: number; size?: number }) {
  return (
    <Image
      src={sdgIconSrc(goal)}
      alt={`SDG ${goal}`}
      width={size}
      height={size}
      style={{ width: size, height: size, borderRadius: "4px", objectFit: "cover", flexShrink: 0 }}
    />
  );
}

export function SdgIconRange({
  from,
  to,
  size = 28,
  gap = "0.35rem",
}: {
  from: number;
  to: number;
  size?: number;
  gap?: string;
}) {
  const goals = Array.from({ length: to - from + 1 }, (_, i) => from + i);
  return (
    <div style={{ display: "flex", flexWrap: "wrap", gap }}>
      {goals.map((goal) => (
        <SdgIcon key={goal} goal={goal} size={size} />
      ))}
    </div>
  );
}

export function SdgIconSlider({
  from,
  to,
  size = 18,
  gap = "0.3rem",
  visible = 4,
  theme = "dark",
}: {
  from: number;
  to: number;
  size?: number;
  gap?: string;
  visible?: number;
  theme?: "dark" | "light";
}) {
  const goals = Array.from({ length: to - from + 1 }, (_, i) => from + i);
  const [index, setIndex] = useState(0);
  const touchStart = useRef<number | null>(null);
  const maxIndex = Math.max(0, goals.length - visible);
  const gapPx = gap.endsWith("rem") ? parseFloat(gap) * 16 : parseFloat(gap);
  const step = size + gapPx;
  const isDark = theme === "dark";

  const slide = (direction: -1 | 1) => {
    setIndex((current) => Math.min(maxIndex, Math.max(0, current + direction)));
  };

  const btnBg = isDark ? "rgba(255,255,255,0.12)" : "rgba(43,191,179,0.12)";
  const btnColor = isDark ? "rgba(255,255,255,0.85)" : "#2BBFB3";
  const dotActive = isDark ? "rgba(255,255,255,0.85)" : "#2BBFB3";
  const dotIdle = isDark ? "rgba(255,255,255,0.3)" : "rgba(43,191,179,0.25)";

  return (
    <div>
      <div
        style={{
          width: visible * size + (visible - 1) * gapPx,
          overflow: "hidden",
          touchAction: "pan-y",
        }}
        onTouchStart={(e) => {
          touchStart.current = e.touches[0].clientX;
        }}
        onTouchEnd={(e) => {
          if (touchStart.current === null) return;
          const diff = touchStart.current - e.changedTouches[0].clientX;
          if (diff > 24) slide(1);
          else if (diff < -24) slide(-1);
          touchStart.current = null;
        }}
      >
        <div
          style={{
            display: "flex",
            gap,
            transform: `translateX(-${index * step}px)`,
            transition: "transform 0.28s ease",
          }}
        >
          {goals.map((goal) => (
            <SdgIcon key={goal} goal={goal} size={size} />
          ))}
        </div>
      </div>
      {maxIndex > 0 && (
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginTop: "0.45rem" }}>
          <button
            type="button"
            aria-label="Previous SDG icons"
            onClick={() => slide(-1)}
            disabled={index === 0}
            style={{
              border: "none",
              background: btnBg,
              color: btnColor,
              width: "22px",
              height: "22px",
              borderRadius: "999px",
              cursor: index === 0 ? "default" : "pointer",
              opacity: index === 0 ? 0.35 : 1,
              fontSize: "0.85rem",
              lineHeight: 1,
              padding: 0,
            }}
          >
            ‹
          </button>
          <div style={{ display: "flex", gap: "0.25rem" }}>
            {Array.from({ length: maxIndex + 1 }, (_, dot) => (
              <span
                key={dot}
                style={{
                  width: dot === index ? "12px" : "5px",
                  height: "5px",
                  borderRadius: "999px",
                  background: dot === index ? dotActive : dotIdle,
                  transition: "width 0.2s ease",
                }}
              />
            ))}
          </div>
          <button
            type="button"
            aria-label="Next SDG icons"
            onClick={() => slide(1)}
            disabled={index === maxIndex}
            style={{
              border: "none",
              background: btnBg,
              color: btnColor,
              width: "22px",
              height: "22px",
              borderRadius: "999px",
              cursor: index === maxIndex ? "default" : "pointer",
              opacity: index === maxIndex ? 0.35 : 1,
              fontSize: "0.85rem",
              lineHeight: 1,
              padding: 0,
            }}
          >
            ›
          </button>
        </div>
      )}
    </div>
  );
}
