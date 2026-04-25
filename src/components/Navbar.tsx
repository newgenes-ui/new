import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Menu, ChevronDown, X } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

export default function Navbar() {
  const location = useLocation();
  const [openMenu, setOpenMenu] = useState<string | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileExpanded, setMobileExpanded] = useState<string | null>(null);
  const navRef = useRef<HTMLDivElement>(null);

  // 라우트 변경 시 모바일 메뉴 닫기
  useEffect(() => {
    setMobileOpen(false);
    setMobileExpanded(null);
  }, [location.pathname]);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (navRef.current && !navRef.current.contains(event.target as Node)) {
        setOpenMenu(null);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // 모바일 메뉴 열릴 때 스크롤 잠금
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

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
      name: "R&D", 
      path: "#",
      dropdown: [
        { name: "이스텍바이오 제품", path: "/products/estek" },
        { name: "제닉스바이오 제품", path: "/products/genics" }
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
        { name: "뉴진스 제품", path: "/products" }
      ]
    },
    { 
      name: "협력사 제품", 
      path: "#",
      dropdown: [
        { name: "TWIST BIO", path: "/partners/twist" },
        { name: "기업부설 연구소 설립 컨설팅", path: "/partners/consulting" }
      ]
    },
    { name: "자료실", path: "/archive" },
    { name: "견적문의", path: "/inquiry" }
  ];

  return (
    <>
      <nav 
        className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-surface-container-highest h-20"
        onMouseLeave={() => setOpenMenu(null)}
      >
        <div className="max-w-7xl mx-auto px-4 md:px-8 h-full flex justify-between items-center bg-white relative z-50">
          <Link to="/" onClick={() => { setOpenMenu(null); setMobileOpen(false); }}>
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="text-xl md:text-2xl font-bold tracking-tighter text-primary font-headline"
            >
              (주)뉴진사이언스
            </motion.div>
          </Link>

          {/* 데스크탑 메뉴 */}
          <div className="hidden md:flex items-center gap-10 h-full">
            {menuItems.map((item) => (
              <div 
                key={item.name}
                className="relative h-full flex items-center"
                onMouseEnter={() => setOpenMenu(item.dropdown ? item.name : null)}
              >
                <Link
                  to={item.path}
                  onClick={(e) => {
                    if (item.dropdown) e.preventDefault();
                    else setOpenMenu(null);
                  }}
                  className={`flex items-center gap-1 text-[15px] font-bold tracking-tight font-sans transition-colors h-full px-2 ${
                    location.pathname === item.path || (item.dropdown?.some(d => location.pathname === d.path)) ? "text-[#143B71]" : "text-primary hover:text-[#143B71]"
                  }`}
                >
                  {item.name}
                </Link>

                {/* Triangle Indicator (Desktop) */}
                <AnimatePresence>
                  {item.dropdown && openMenu === item.name && (
                    <motion.div
                      initial={{ opacity: 0, y: 5 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 5 }}
                      transition={{ duration: 0.2 }}
                      className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0 border-l-[12px] border-r-[12px] border-b-[14px] border-l-transparent border-r-transparent border-b-[#143B71]"
                    />
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>

          {/* 모바일 햄버거 버튼 */}
          <button
            className="md:hidden text-primary p-2"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="메뉴 열기"
          >
            {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Full Width Dropdown Bar (Desktop) */}
        <AnimatePresence>
          {openMenu && menuItems.find(m => m.name === openMenu)?.dropdown && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 64 }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.2 }}
              className="absolute top-20 left-0 right-0 bg-[#143B71] shadow-lg hidden md:flex items-center overflow-hidden z-40 border-t border-[#143B71]"
            >
              <div className="max-w-7xl mx-auto px-8 w-full flex items-center justify-center gap-16">
                <h3 className="text-white text-lg font-bold tracking-wider shrink-0">{openMenu}</h3>
                <div className="flex items-center gap-8 flex-wrap">
                  {menuItems.find(m => m.name === openMenu)?.dropdown?.map(sub => (
                    <Link 
                      key={sub.name} 
                      to={sub.path} 
                      onClick={() => setOpenMenu(null)}
                      className={`text-white/80 hover:text-white font-medium text-[15px] transition-colors relative group py-2 ${location.pathname === sub.path ? 'text-white font-bold' : ''}`}
                    >
                      {sub.name}
                      <span className={`absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-[2px] bg-white transition-all duration-300 group-hover:w-full ${location.pathname === sub.path ? 'w-full' : ''}`}></span>
                    </Link>
                  ))}
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* 모바일 풀스크린 메뉴 */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ type: "tween", duration: 0.3 }}
            className="fixed inset-0 z-40 bg-white pt-20 overflow-y-auto md:hidden"
          >
            <div className="flex flex-col py-4">
              {menuItems.map((item) => (
                <div key={item.name}>
                  {item.dropdown ? (
                    <>
                      <button
                        onClick={() => setMobileExpanded(mobileExpanded === item.name ? null : item.name)}
                        className="w-full flex items-center justify-between px-6 py-4 text-base font-semibold text-primary border-b border-surface-container-highest"
                      >
                        {item.name}
                        <ChevronDown className={`w-4 h-4 transition-transform ${mobileExpanded === item.name ? "rotate-180" : ""}`} />
                      </button>
                      <AnimatePresence>
                        {mobileExpanded === item.name && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.2 }}
                            className="overflow-hidden bg-surface-container-low"
                          >
                            {item.dropdown.map((sub) => (
                              <Link
                                key={sub.name}
                                to={sub.path}
                                onClick={() => setMobileOpen(false)}
                                className="block px-10 py-3 text-sm text-on-surface-variant hover:text-secondary border-b border-surface-container-highest transition-colors"
                              >
                                {sub.name}
                              </Link>
                            ))}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </>
                  ) : (
                    <Link
                      to={item.path}
                      onClick={() => setMobileOpen(false)}
                      className={`block px-6 py-4 text-base font-semibold border-b border-surface-container-highest transition-colors ${
                        location.pathname === item.path ? "text-secondary" : "text-primary hover:text-secondary"
                      }`}
                    >
                      {item.name}
                    </Link>
                  )}
                </div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
