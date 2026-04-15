"use client";

import { useEffect, useRef } from "react";
import { usePathname } from "next/navigation";

export default function GlobalMotion() {
  const orbRef = useRef<HTMLDivElement | null>(null);
  const pathname = usePathname();

  useEffect(() => {
    let cleanup: (() => void) | undefined;

    const run = async () => {
      const { gsap } = await import("gsap");
      const { ScrollTrigger } = await import("gsap/ScrollTrigger");
      gsap.registerPlugin(ScrollTrigger);

      const sectionEls = gsap.utils.toArray<HTMLElement>("main section");
      const cardEls = gsap.utils.toArray<HTMLElement>(
        "main article, main form, main [data-card='true'], main li"
      );
      const headingEls = gsap.utils.toArray<HTMLElement>("main h1, main h2, main h3");

      sectionEls.forEach((el, idx) => {
        // Apply a unified, modern card-like section framing across pages.
        // Keep the first (hero) section full-bleed.
        if (idx === 0) return;
        el.style.width = "min(1400px, calc(100% - 1.5rem))";
        el.style.marginInline = "auto";
        el.style.marginTop = "1.15rem";
        el.style.borderRadius = "1.5rem";
        el.style.overflow = "hidden";
        el.style.border = "1px solid rgba(15,46,43,0.06)";
        el.style.boxShadow = "0 4px 22px rgba(15,46,43,0.06)";
      });

      gsap.set(sectionEls, { opacity: 0, y: 28, filter: "blur(6px)" });
      gsap.to(sectionEls, {
        opacity: 1,
        y: 0,
        filter: "blur(0px)",
        duration: 0.85,
        ease: "power3.out",
        stagger: 0.08,
        clearProps: "filter",
      });

      cardEls.forEach((el) => {
        gsap.fromTo(
          el,
          { opacity: 0, y: 18 },
          {
            opacity: 1,
            y: 0,
            duration: 0.7,
            ease: "power2.out",
            scrollTrigger: {
              trigger: el,
              start: "top 88%",
              once: true,
            },
          }
        );
      });

      headingEls.forEach((el) => {
        gsap.fromTo(
          el,
          { opacity: 0, y: 20 },
          {
            opacity: 1,
            y: 0,
            duration: 0.75,
            ease: "power3.out",
            scrollTrigger: {
              trigger: el,
              start: "top 90%",
              once: true,
            },
          }
        );
      });

      ScrollTrigger.refresh();

      cleanup = () => {
        ScrollTrigger.getAll().forEach((t) => t.kill());
      };
    };

    run();

    return () => {
      cleanup?.();
    };
  }, [pathname]);

  useEffect(() => {
    let remove: (() => void) | undefined;

    const bindPointer = async () => {
      const { gsap } = await import("gsap");
      if (!orbRef.current) return;

      const xTo = gsap.quickTo(orbRef.current, "x", {
        duration: 0.4,
        ease: "power3.out",
      });
      const yTo = gsap.quickTo(orbRef.current, "y", {
        duration: 0.4,
        ease: "power3.out",
      });

      const onMove = (e: MouseEvent) => {
        xTo(e.clientX - 120);
        yTo(e.clientY - 120);
      };

      window.addEventListener("mousemove", onMove);
      remove = () => window.removeEventListener("mousemove", onMove);
    };

    bindPointer();
    return () => remove?.();
  }, []);

  return <div ref={orbRef} className="fx-orb" aria-hidden="true" />;
}
