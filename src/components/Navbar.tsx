import { useEffect, useState } from "react";

const sections = ["home", "about", "projects", "contact"];

const Navbar: React.FC = () => {
  const [activeSection, setActiveSection] = useState("");
  const [scrolled, setScrolled] = useState(false);

  const scrollToSection = (id: string): void => {
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
          const offsetTop = element.offsetTop;
          const offsetHeight = element.offsetHeight;
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
    <nav
      className={`fixed top-0 left-1/2 transform -translate-x-1/2 z-50 py-3 rounded-b-[80px] transition-all duration-300
        backdrop-blur-[20px] backdrop-saturate-[180%] bg-white/25 border border-white/30
        flex justify-center overflow-x-auto
        w-[95%] 
        lg:w-[30%] 
        md:w-[50%] 
        sm:w-[96%] sm:h-[5%]
        ${scrolled ? "shadow-md" : ""}
      `}
    >
      <ul className="flex flex-nowrap justify-center items-center gap-2 lg:gap-9 md:gap-5 sm:gap-4 m-0 p-0 whitespace-nowrap list-none">
        {sections.map((sectionId) => (
          <li key={sectionId} className="mx-2 shrink-0">
            <a
              href={`#${sectionId}`}
              onClick={(e) => {
                e.preventDefault();
                scrollToSection(sectionId);
              }}
              className={`no-underline text-black text-base lg:text-[18px] md:text-[15px] sm:text-[14px] transition-transform duration-200 inline-block
                hover:scale-150 md:hover:scale-[1.3] sm:hover:scale-[1.2] 
                ${activeSection === sectionId ? "font-bold" : ""}
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
