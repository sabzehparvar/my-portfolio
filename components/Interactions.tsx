"use client";

import { useEffect } from "react";

export default function Interactions() {
  useEffect(() => {
    const els = document.querySelectorAll(".reveal:not(.in)");
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("in");
            io.unobserve(e.target);
          }
        });
      },
      { threshold: 0.15 }
    );
    els.forEach((el) => io.observe(el));

    const navLinks = document.querySelectorAll(".dotnav a");
    const sections = [...navLinks].map((a) =>
      document.querySelector(a.getAttribute("href") || "")
    );
    const io2 = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            navLinks.forEach((l) => l.classList.remove("active"));
            const idx = sections.indexOf(entry.target);
            if (idx > -1) navLinks[idx].classList.add("active");
          }
        });
      },
      { threshold: 0.5 }
    );
    sections.forEach((s) => s && io2.observe(s));

    const progressBar = document.getElementById("progressBar");
    function updateProgress() {
      const h = document.documentElement;
      const scrolled = h.scrollTop;
      const max = h.scrollHeight - h.clientHeight;
      if (progressBar) {
        progressBar.style.width = (max > 0 ? (scrolled / max) * 100 : 0) + "%";
      }
    }
    document.addEventListener("scroll", updateProgress, { passive: true });
    updateProgress();

    return () => {
      io.disconnect();
      io2.disconnect();
      document.removeEventListener("scroll", updateProgress);
    };
  }, []);

  return null;
}
