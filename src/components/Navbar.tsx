import { useEffect, useState } from "react";

const sections = ["home", "about", "projects", "contact"];

const Navbar = () => {
  const [activeSection, setActiveSection] = useState("");
  const [scrolled, setScrolled] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setActiveSection(id);
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      let currentSection = "";
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          const scrollPos = window.scrollY + window.innerHeight / 2;

          if (scrollPos >= offsetTop && scrollPos < offsetTop + offsetHeight) {
            currentSection = section;
            break;
          }
        }
      }

      setActiveSection(currentSection);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();
    
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`
      fixed top-0 left-1/2 -translate-x-1/2 
      bg-white/25 backdrop-blur-lg backdrop-saturate-180
      border border-white/30 z-50 py-3
      transition-all duration-300 ease-in-out
      flex justify-center overflow-x-auto
      rounded-b-[80px]
      ${scrolled ? "shadow-md" : ""}
      w-[90%] sm:w-[95%] max-w-3xl
    `}>
      <ul className="
        flex flex-nowrap justify-center items-center
        gap-5 list-none m-0 p-0 whitespace-nowrap
        sm:gap-3
      ">
        {sections.map((sectionId) => (
          <li key={sectionId} className="mx-1 sm:mx-0.5 flex-shrink-0">
            <a
              href={`#${sectionId}`}
              onClick={(e) => {
                e.preventDefault();
                scrollToSection(sectionId);
              }}
              className={`
                no-underline text-black 
                transition-all duration-200 ease-in-out
                inline-block will-change-transform
                hover:scale-110 hover:z-10
                ${activeSection === sectionId ? "font-bold text-lg" : "font-medium text-base"}
                sm:text-sm
              `}
            >
              {sectionId.charAt(0).toUpperCase() + sectionId.slice(1)}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;