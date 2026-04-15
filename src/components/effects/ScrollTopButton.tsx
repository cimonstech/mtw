"use client";

import { useEffect, useRef, useState } from "react";
import { ArrowUp } from "lucide-react";

export default function ScrollTopButton() {
  const [visible, setVisible] = useState(false);
  const hideTimerRef = useRef<number | null>(null);

  useEffect(() => {
    const clearHideTimer = () => {
      if (hideTimerRef.current !== null) {
        window.clearTimeout(hideTimerRef.current);
        hideTimerRef.current = null;
      }
    };

    const scheduleHide = () => {
      clearHideTimer();
      hideTimerRef.current = window.setTimeout(() => {
        setVisible(false);
      }, 2000);
    };

    const onScroll = () => {
      const hasScrolled = window.scrollY > 10;
      if (!hasScrolled) {
        clearHideTimer();
        setVisible(false);
        return;
      }
      setVisible(true);
      scheduleHide();
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      clearHideTimer();
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  if (!visible) return null;

  return (
    <button
      type="button"
      aria-label="Scroll to top"
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      style={{
        position: "fixed",
        right: "1rem",
        bottom: "1rem",
        zIndex: 60,
        width: "44px",
        height: "44px",
        borderRadius: "999px",
        border: "none",
        background: "#2BBFB3",
        color: "#fff",
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        boxShadow: "0 8px 24px rgba(43,191,179,0.35)",
        cursor: "pointer",
      }}
    >
      <ArrowUp size={18} />
    </button>
  );
}

