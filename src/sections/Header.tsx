"use client";
import { useState, useEffect } from "react";

export const Header = () => {
  const [activeSection, setActiveSection] = useState("home");

  const handleScroll = () => {
    const sections = [
      "home",
      "projectsSection",
      "aboutSection",
      "contactSection",
    ];
    const offsets = sections.map((section) => {
      const element = document.getElementById(section);
      return element ? element.offsetTop : 0;
    });

    const scrollPosition = window.scrollY + window.innerHeight / 2;
    const active = sections.find((section, index) => {
      return (
        scrollPosition >= offsets[index] &&
        (index === sections.length - 1 || scrollPosition < offsets[index + 1])
      );
    });

    setActiveSection(active || "home");
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="flex justify-center items-center fixed top-3 w-full z-10">
      <nav className="flex gap-1 p-0.5 border border-white/15 rounded-full bg-white/10 backdrop-blur">
        <a
          href="#home"
          className={`nav-item ${
            activeSection === "home" ? "active-nav-item" : ""
          }`}
          onClick={() => setActiveSection("home")}
        >
          Acceuil
        </a>
        <a
          href="#projectsSection"
          className={`nav-item ${
            activeSection === "projectsSection" ? "active-nav-item" : ""
          }`}
          onClick={() => setActiveSection("projectsSection")}
        >
          Projets
        </a>
        <a
          href="#aboutSection"
          className={`nav-item ${
            activeSection === "aboutSection" ? "active-nav-item" : ""
          }`}
          onClick={() => setActiveSection("aboutSection")}
        >
          A propos
        </a>
        <a
          href="#contactSection"
          className={`nav-item ${
            activeSection === "contactSection" ? "active-nav-item" : ""
          }`}
          onClick={() => setActiveSection("contactSection")}
        >
          Contact
        </a>
      </nav>
    </div>
  );
};
