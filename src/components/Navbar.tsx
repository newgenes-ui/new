import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Menu, ChevronDown } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

export default function Navbar() {
  const location = useLocation();
  const [openMenu, setOpenMenu] = useState<string | null>(null);
  const navRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (navRef.current && !navRef.current.contains(event.target as Node)) {
        setOpenMenu(null);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const menuItems = [
    { 
      name: "HOME", 
      path: "/"
    },
    { 
      name: "회사소개", 
      path: "#",
      dropdown: [
        { name: "회사 소개", path: "/about" },
        { name: "오시는 길", path: "/location" }
      ]
    },
    { 
      name: "장비소개", 
      path: "#",
      dropdown: [
        { name: "나노엔텍 ExT", path: "/equipment/nanoentek" },
        { name: "기초장비", path: "/equipment" }
      ]
    },
    { 
      name: "제품소개", 
      path: "#",
      dropdown: [
        { name: "뉴진스 제품", path: "/products" },
        { name: "이스텍바이오 제품", path: "/products/estek" },
        { name: "제닉스바이오 제품", path: "/products/genics" }
      ]
    },
    { 
      name: "협력사 제품", 
      path: "#",
      dropdown: [
        { name: "TWIST BIO", path: "/partners/twist" },
        { name: "기업부설 연구소 설립\n컨설팅", path: "/partners/consulting" }
      ]
    },
    { name: "자료실", path: "/archive" },
    { name: "견적문의", path: "/inquiry" }
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-surface-container-highest h-20">
      <div className="max-w-7xl mx-auto px-8 h-full flex justify-between items-center">
        <Link to="/" onClick={() => setOpenMenu(null)}>
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="text-2xl font-bold tracking-tighter text-primary font-headline"
          >
            (주)뉴진사이언스
          </motion.div>
        </Link>

        <div className="hidden md:flex items-center gap-12 h-full" ref={navRef}>
          {menuItems.map((item) => (
            <div 
              key={item.name}
              className="relative h-full flex items-center"
            >
              <Link
                to={item.path}
                onClick={(e) => {
                  if (item.dropdown) {
                    e.preventDefault();
                    setOpenMenu(openMenu === item.name ? null : item.name);
                  } else {
                    setOpenMenu(null);
                  }
                }}
                className={`flex items-center gap-1 text-sm font-medium tracking-tight font-sans transition-colors h-full ${
                  location.pathname === item.path || (item.dropdown?.some(d => location.pathname === d.path)) ? "text-secondary border-b-2 border-secondary" : "text-primary hover:text-secondary"
                }`}
              >
                {item.name}
                {item.dropdown && <ChevronDown className={`w-3 h-3 transition-transform ${openMenu === item.name ? "rotate-180" : ""}`} />}
              </Link>

              <AnimatePresence>
                {item.dropdown && openMenu === item.name && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    transition={{ duration: 0.2 }}
                    className="absolute top-20 left-1/2 -translate-x-1/2 w-48 bg-secondary rounded-xl shadow-xl py-2 overflow-hidden"
                  >
                    {item.dropdown.map((sub) => (
                      <Link
                        key={sub.name}
                        to={sub.path}
                        onClick={() => setOpenMenu(null)}
                        className="block px-6 py-3 text-xs font-medium text-white hover:bg-white/20 transition-colors whitespace-pre-line"
                      >
                        {sub.name}
                      </Link>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>

        <div className="flex items-center gap-4">
          <button className="md:hidden text-primary">
            <Menu className="w-6 h-6" />
          </button>
        </div>
      </div>
    </nav>
  );
}
