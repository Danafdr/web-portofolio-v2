"use client";

import { useState, useEffect, ReactNode } from "react";

type NavigationProps = {
  navigationitems: string; // comma-separated labels
  renderSection?: (sectionId: string, label: string) => ReactNode;
};

export default function Navigation({ navigationitems }: NavigationProps) {
  const labels = navigationitems.split(",").map((label) => label.trim());
  const items = labels.map((label) => ({
    href: `#${label.toLowerCase().replace(/\s+/g, "")}`,
    label,
  }));

  const [activeSection, setActiveSection] = useState(
    items[0]?.href.replace("#", "") || ""
  );

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: "-30% 0px -70% 0px",
      threshold: 0,
    };

    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);
    const sections = document.querySelectorAll("section[id]");
    sections.forEach((section) => observer.observe(section));

    return () => {
      sections.forEach((section) => observer.unobserve(section));
    };
  }, []);

  const handleNavClick = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "center", // ⬅️ scroll section ke tengah viewport
      });
    }
  };

  return (
    <nav className="fixed top-8 left-1/2 transform -translate-x-1/2 z-50">
      <div className="
        bg-white/10 backdrop-blur-xl 
        border border-white/20 
        shadow-[0_8px_32px_rgba(0,0,0,0.3),0_0_0_1px_rgba(255,255,255,0.1)]
        rounded-full px-3 py-2 flex space-x-1
      ">
        {items.map((item, index) => {
          const isActive = activeSection === item.href.replace('#', '');
          return (
            <button
              key={item.href}
              onClick={() => handleNavClick(item.href)}
              className={`px-4 py-2 rounded-full transition-all duration-300 text-sm relative ${
                isActive
                  ? "text-white bg-white/20 cursor-default"
                  : "text-gray-300 hover:text-white hover:bg-white/10"
              }`}
              style={{ transitionDelay: `${index * 50}ms` }} // <--- ANIMASI DELAY
              disabled={isActive}
            >
              <span className="relative z-10">{item.label}</span>
            </button>
          );
        })}
      </div>
    </nav>
  );
}
