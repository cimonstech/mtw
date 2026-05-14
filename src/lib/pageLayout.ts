import type { CSSProperties } from "react";

export const MOBILE_BREAKPOINT = 900;

export function pageWrap(isMobile: boolean): CSSProperties {
  return {
    maxWidth: "1280px",
    margin: "0 auto",
    padding: isMobile ? 0 : "0 1.5rem",
  };
}

export function sectionPadding(isMobile: boolean, block = "6rem"): string {
  return isMobile ? `3.5rem 0.5rem` : `${block} 1.5rem`;
}

export function cardInnerPadding(isMobile: boolean): string {
  return isMobile ? "1rem" : "1.5rem";
}
