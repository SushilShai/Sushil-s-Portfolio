import { useEffect, useState, useRef } from "react";
import OverlayMenu from "./OverlayMenu";
import Logo from "../assets/Logo.png";
import { HiMenu } from "react-icons/hi";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [visible, setVisible] = useState(true);
  const [forceVisible, setForceVisible] = useState(false);

  const lastScrollY = useRef(0);

  // ---- Detect when Home section is visible (Navbar always stays visible) ----
  useEffect(() => {
    const homeSection = document.querySelector("#home");

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setForceVisible(true);
          setVisible(true);
        } else {
          setForceVisible(false);
        }
      },
      { threshold: 0.1 }
    );

    if (homeSection) observer.observe(homeSection);

    return () => {
      if (homeSection) observer.unobserve(homeSection);
    };
  }, []);

  // ---- Scroll show/hide logic ----
  useEffect(() => {
    const handleScroll = () => {
      if (forceVisible) {
        setVisible(true);
        return;
      }

      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY.current) {
        // scrolling DOWN → hide navbar
        setVisible(false);
      } else {
        // scrolling UP → show navbar
        setVisible(true);
      }

      lastScrollY.current = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [forceVisible]);

  return (
    <>
      <nav
        className={`fixed top-0 left-0 w-full flex items-center justify-between 
                    px-6 py-4 z-50 transition-transform duration-300
                    ${visible ? "translate-y-0" : "-translate-y-full"}`}
      >
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <img src={Logo} alt="Logo" className="w-8 h-8" />
          <div className="text-2xl font-bold text-white hidden sm:block">
            Sushil
          </div>
        </div>

        {/* Center Menu Button (Mobile) */}
        <div className="block lg:absolute lg:left-1/2 lg:-translate-x-1/2">
          <button
            onClick={() => setMenuOpen(true)}
            className="text-white text-3xl focus:outline-none"
            aria-label="open Menu"
          >
            <HiMenu />
          </button>
        </div>

        {/* Right Action Button (Desktop) */}
        <div className="hidden lg:block">
          <a
            href="#contact"
            className="px-5 py-2 rounded-full text-lg font-medium text-white 
                bg-linear-to-r from-[#1CD8D2] via-[#00bf8f] to-[#302b63]
                shadow-lg hover:scale-150 transition-all">
            Reach Out
          </a>
        </div>
      </nav>

      <OverlayMenu isOpen={menuOpen} onClose={() => setMenuOpen(false)} />
    </>
  );
}
