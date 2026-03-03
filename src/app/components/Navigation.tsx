import { Link, useLocation, useNavigate } from "react-router";
import { Menu, X, Sun, Moon, ArrowRight } from "lucide-react";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import MetallicPaint from "./MetallicPaint";
import GlassSurface from "./GlassSurface";
import logo from "./logo.svg";

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const isDark =
      localStorage.getItem("theme") === "dark" ||
      (!("theme" in localStorage) &&
        window.matchMedia("(prefers-color-scheme: dark)").matches) ||
      document.documentElement.classList.contains("dark");
    setIsDarkMode(isDark);
    if (isDark) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, []);

  const toggleTheme = () => {
    const newTheme = !isDarkMode;
    setIsDarkMode(newTheme);
    if (newTheme) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  };

  const navLinks = [
    { path: "/", label: "Home" },
    { path: "/about", label: "About" },
    { path: "/programs", label: "Programs" },
    { path: "/how-it-works", label: "How It Works" },
    { path: "/contact", label: "Contact" },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <motion.nav
      className="fixed top-6 left-0 right-0 z-50 flex justify-center px-4 pointer-events-none"
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
    >
      <div className="w-full max-w-7xl pointer-events-auto">
        <GlassSurface
          width="100%"
          height={72}
          borderRadius={999}
          borderWidth={1}
          opacity={0.15}
          blur={20}
          className="flex items-center justify-between px-3 h-[72px] shadow-[0_8px_32px_rgba(0,0,0,0.1)] dark:shadow-[0_8px_32px_rgba(0,0,0,0.4)] border-white/20 dark:border-white/10"
        >
          {/* Logo Section */}
          <div className="flex items-center pl-4 lg:pl-6 min-w-[180px]">
            <Link to="/" className="flex items-center gap-3 group">
              <div className="w-10 h-10 relative overflow-hidden rounded-full">
                <MetallicPaint
                  imageSrc={logo}
                  seed={42}
                  scale={4}
                  patternSharpness={1}
                  noiseScale={0.5}
                  speed={0.3}
                  liquid={0.75}
                  mouseAnimation={false}
                  brightness={2}
                  contrast={0.5}
                  refraction={0.01}
                  blur={0.015}
                  chromaticSpread={2}
                  fresnel={1}
                  angle={0}
                  waveAmplitude={1}
                  distortion={1}
                  contour={0.2}
                  lightColor="#ffffff"
                  darkColor="#000000"
                  tintColor="#feb3ff"
                />
              </div>
              <span className="text-xl font-black tracking-tighter text-black dark:text-white uppercase">
                DevNexus
              </span>
            </Link>
          </div>

          {/* Center Links (Desktop) */}
          <div className="hidden md:flex items-center bg-black/5 dark:bg-white/5 rounded-full p-1.5 border border-black/5 dark:border-white/5">
            <div className="flex items-center relative">
              {navLinks.map((link) => (
                <button
                  key={link.path}
                  onClick={() => navigate(link.path)}
                  className={`relative px-6 py-2.5 rounded-full text-[10px] font-black uppercase tracking-[0.2em] transition-all duration-300 z-10 ${isActive(link.path)
                    ? "text-black dark:text-white"
                    : "text-black/40 dark:text-white/40 hover:text-black dark:hover:text-white"
                    }`}
                >
                  {isActive(link.path) && (
                    <motion.div
                      layoutId="nav-pill"
                      className="absolute inset-0 bg-white/50 dark:bg-white/10 backdrop-blur-xl rounded-full shadow-[0_2px_10px_rgba(0,0,0,0.1)] dark:shadow-[0_4px_20px_rgba(255,255,255,0.05)] border border-white/40 dark:border-white/20 z-0"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                      drag="x"
                      dragConstraints={{ left: 0, right: 0 }}
                      dragElastic={0.4}
                      onDragEnd={(_, info) => {
                        if (Math.abs(info.offset.x) > 50) {
                          const currentIndex = navLinks.findIndex((l) => l.path === link.path);
                          const nextIndex = info.offset.x > 0
                            ? Math.min(currentIndex + 1, navLinks.length - 1)
                            : Math.max(currentIndex - 1, 0);
                          navigate(navLinks[nextIndex].path);
                        }
                      }}
                      whileDrag={{ scale: 1.05, opacity: 0.8 }}
                    />
                  )}
                  <span className="relative z-10">{link.label}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Right Actions */}
          <div className="flex items-center gap-2 pr-2 lg:pr-4 min-w-[180px] justify-end">
            <button
              onClick={toggleTheme}
              className="w-10 h-10 flex items-center justify-center rounded-full bg-black/5 dark:bg-white/5 border border-black/5 dark:border-white/10 text-black dark:text-white hover:bg-black/10 dark:hover:bg-white/10 transition-all active:scale-90"
            >
              {isDarkMode ? <Sun size={18} /> : <Moon size={18} />}
            </button>
            <Link to="/payment" className="hidden sm:block">
              <div className="group relative">
                <GlassSurface
                  width="auto"
                  height={40}
                  borderRadius={999}
                  className="bg-black dark:bg-white px-6 h-10 flex items-center gap-2 overflow-hidden transition-all group-hover:pr-8"
                >
                  <span className="text-[10px] font-black uppercase tracking-widest text-white dark:text-black whitespace-nowrap">
                    Apply Now
                  </span>
                  <ArrowRight size={14} className="text-white dark:text-black absolute right-4 opacity-0 group-hover:opacity-100 transition-all" />
                </GlassSurface>
              </div>
            </Link>

            {/* Mobile Toggle */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden w-10 h-10 flex items-center justify-center rounded-full bg-black/5 dark:bg-white/5 border border-black/5 dark:border-white/10 text-black dark:text-white"
            >
              {isOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </GlassSurface>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, y: -20, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -20, scale: 0.95 }}
              className="absolute top-full left-0 right-0 mt-4 md:hidden pointer-events-auto"
            >
              <GlassSurface
                borderRadius={32}
                blur={30}
                className="bg-white/80 dark:bg-black/80 border border-black/10 dark:border-white/10 p-4 shadow-2xl"
              >
                <div className="flex flex-col gap-2">
                  {navLinks.map((link) => (
                    <button
                      key={link.path}
                      onClick={() => {
                        navigate(link.path);
                        setIsOpen(false);
                      }}
                      className={`flex items-center justify-between px-6 py-4 rounded-2xl transition-all ${isActive(link.path)
                        ? "bg-black text-white dark:bg-white dark:text-black shadow-lg"
                        : "hover:bg-black/5 dark:hover:bg-white/5 text-black/60 dark:text-white/60"
                        }`}
                    >
                      <span className="font-bold tracking-widest uppercase text-xs">{link.label}</span>
                      {isActive(link.path) && <ArrowRight size={16} />}
                    </button>
                  ))}
                  <Link
                    to="/payment"
                    onClick={() => setIsOpen(false)}
                    className="mt-4"
                  >
                    <div className="bg-primary px-6 py-5 rounded-2xl flex items-center justify-center gap-3 shadow-xl">
                      <span className="font-black tracking-[0.3em] uppercase text-xs text-secondary">Apply Now</span>
                      <ArrowRight size={18} className="text-secondary" />
                    </div>
                  </Link>
                </div>
              </GlassSurface>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  );
}