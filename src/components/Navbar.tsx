import React, { useEffect, useRef, useState } from "react";
import clickSound from "../assets/click.mp3"; // ✅ Import sound from assets
import "./Navbar.css";

const sections = ["home", "skills", "certifications", "projects", "contact"];

type NavbarProps = React.HTMLAttributes<HTMLElement>;

const Navbar: React.FC<NavbarProps> = ({ className = "", ...rest }) => {
  const [activeSection, setActiveSection] = useState("home");
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const sectionRefs = useRef<{ [key: string]: HTMLElement | null }>({});

  // ✅ Function to play the click sound
  const playClickSound = () => {
    const audio = new Audio(clickSound);
    audio.currentTime = 0;
    audio.play().catch((err) => console.log("Click sound error:", err));
  };

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: "0px",
      threshold: 0.6,
    };

    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const sectionId = entry.target.id;
          setActiveSection(sectionId);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    sections.forEach((sectionId) => {
      const element = document.getElementById(sectionId);
      if (element) {
        sectionRefs.current[sectionId] = element;
        observer.observe(element);
      }
    });

    return () => {
      sections.forEach((sectionId) => {
        const element = sectionRefs.current[sectionId];
        if (element) {
          observer.unobserve(element);
        }
      });
    };
  }, []);

  const scrollToSection = (id: string): void => {
    const element = document.getElementById(id);
    if (element) {
      playClickSound(); // ✅ Play sound on scroll
      element.scrollIntoView({ behavior: "smooth" });
      setMenuOpen(false);
    }
  };

  return (
    <nav
      {...rest}
      className={`navbar ${scrolled ? "scrolled" : ""} ${menuOpen ? "open" : ""} ${className}`}
    >
      <div className="navbar-container">
        <div className="navbar-brand" onClick={() => scrollToSection("home")}>
          <span className="logo-code">{`</>`}</span>
          <span className="logo-text">Niel.Dev</span>
        </div>

        <ul className="navbar-links">
          {sections.map((sectionId) => (
            <li
              key={sectionId}
              className={`nav-item ${activeSection === sectionId ? "active" : ""}`}
            >
              <a
                href={`#${sectionId}`}
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection(sectionId);
                }}
                className="nav-link"
              >
                <span className="link-text">
                  {sectionId.charAt(0).toUpperCase() + sectionId.slice(1)}
                </span>
                <span className="link-decoration" />
                {activeSection === sectionId && <span className="active-pulse" />}
              </a>
            </li>
          ))}
        </ul>

        <button
          className={`hamburger ${menuOpen ? "open" : ""}`}
          onClick={() => {
            playClickSound(); // ✅ Sound on menu toggle
            setMenuOpen(!menuOpen);
          }}
          aria-label="Toggle menu"
        >
          <span className="hamburger-line"></span>
          <span className="hamburger-line"></span>
          <span className="hamburger-line"></span>
        </button>

        <div className={`mobile-menu ${menuOpen ? "open" : ""}`}>
          <ul>
            {sections.map((sectionId) => (
              <li key={sectionId}>
                <a
                  href={`#${sectionId}`}
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection(sectionId);
                  }}
                  className={activeSection === sectionId ? "active" : ""}
                >
                  {sectionId.charAt(0).toUpperCase() + sectionId.slice(1)}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
