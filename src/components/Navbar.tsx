import React from "react";
import { motion, AnimatePresence } from "motion/react";
import { Sun, Moon, Globe, Menu, X, ArrowUpRight } from "lucide-react";

interface NavbarProps {
  lang: "en" | "zh";
  setLang: (l: "en" | "zh") => void;
  darkMode: boolean;
  setDarkMode: (d: boolean) => void;
  activeSection: string;
  onNavClick: (sectionId: string) => void;
}

export default function Navbar({
  lang,
  setLang,
  darkMode,
  setDarkMode,
  activeSection,
  onNavClick,
}: NavbarProps) {
  const [isOpen, setIsOpen] = React.useState(false);

  const links = [
    { id: "hero", label: { en: "Home", zh: "主页" } },
    { id: "portfolio", label: { en: "Works", zh: "经典作品" } },
    { id: "philosophy", label: { en: "Philosophy", zh: "设计哲学" } },
    { id: "services", label: { en: "Services", zh: "定制服务" } },
    { id: "about", label: { en: "About", zh: "关于我" } },
    { id: "contact", label: { en: "Contact", zh: "开启合作" } },
  ];

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className="fixed top-0 left-0 w-full z-50 transition-colors duration-500 border-b border-neutral-200/20 dark:border-white/5 bg-white/70 dark:bg-elegant-dark/75 backdrop-blur-md"
      id="main-navigation"
    >
      <div className="max-w-7xl mx-auto px-4 md:px-8 h-14 md:h-16 flex items-center justify-between">
        {/* Logo / Designer Mark */}
        <button
          id="logo-button"
          onClick={() => onNavClick("hero")}
          className="flex items-center space-x-2 text-neutral-900 dark:text-neutral-50 font-serif text-lg tracking-wider font-bold hover:opacity-80 transition-opacity"
        >
          <span>VANCE</span>
          <span className="w-1.5 h-1.5 rounded-full bg-neutral-900 dark:bg-white animate-pulse" />
        </button>

        {/* Desktop Navigation Links */}
        <div className="hidden md:flex items-center space-x-8">
          {links.map((link) => {
            const isActive = activeSection === link.id;
            return (
              <button
                key={link.id}
                id={`nav-${link.id}`}
                onClick={() => onNavClick(link.id)}
                className="relative py-2 text-xs font-semibold uppercase tracking-widest text-neutral-500 hover:text-neutral-900 dark:text-white/50 dark:hover:text-white transition-colors duration-300"
              >
                <span>{link.label[lang]}</span>
                {isActive && (
                  <motion.div
                    layoutId="activeIndicator"
                    className="absolute bottom-0 left-0 right-0 h-0.5 bg-neutral-900 dark:bg-white"
                    transition={{ type: "spring", stiffness: 350, damping: 30 }}
                  />
                )}
              </button>
            );
          })}
        </div>

        {/* Global Controls */}
        <div className="hidden md:flex items-center space-x-4 border-l border-neutral-200/40 dark:border-white/10 pl-6">
          {/* Language Switch */}
          <button
            id="lang-toggle-desktop"
            onClick={() => setLang(lang === "en" ? "zh" : "en")}
            className="flex items-center space-x-1.5 px-3 py-1.5 rounded-full border border-neutral-200 dark:border-white/10 text-xs font-semibold text-neutral-700 dark:text-white/70 hover:bg-neutral-100 dark:hover:bg-white/5 transition-all duration-300"
          >
            <Globe className="w-3.5 h-3.5 text-neutral-400" />
            <span>{lang === "en" ? "中文" : "EN"}</span>
          </button>

          {/* Theme switcher */}
          <button
            id="theme-toggle"
            onClick={() => setDarkMode(!darkMode)}
            className="p-2 rounded-full border border-neutral-200 dark:border-white/10 text-neutral-700 dark:text-neutral-300 hover:bg-neutral-100 dark:hover:bg-white/5 transition-all duration-300"
            aria-label="Toggle Theme"
          >
            {darkMode ? (
              <Sun className="w-3.5 h-3.5 text-orange-400" />
            ) : (
              <Moon className="w-3.5 h-3.5 text-neutral-600" />
            )}
          </button>
        </div>

        {/* Mobile controls & toggle */}
        <div className="flex md:hidden items-center space-x-3">
          <button
            id="lang-toggle-mobile"
            onClick={() => setLang(lang === "en" ? "zh" : "en")}
            className="p-2 rounded-full border border-neutral-200/50 dark:border-white/10 text-neutral-700 dark:text-neutral-300 text-xs font-semibold"
          >
            {lang === "en" ? "中文" : "EN"}
          </button>

          <button
            id="theme-toggle-mobile"
            onClick={() => setDarkMode(!darkMode)}
            className="p-2 rounded-full border border-neutral-200/50 dark:border-white/10 text-neutral-700 dark:text-neutral-300"
          >
            {darkMode ? <Sun className="w-4 h-4 text-orange-400" /> : <Moon className="w-4 h-4 text-neutral-600" />}
          </button>

          <button
            id="mobile-menu-toggle"
            onClick={() => setIsOpen(!isOpen)}
            className="p-2 rounded-full text-neutral-800 dark:text-neutral-200 hover:bg-neutral-100 dark:hover:bg-white/5 transition-colors"
          >
            {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="md:hidden overflow-hidden bg-white dark:bg-elegant-dark border-t border-neutral-200/30 dark:border-white/5"
            id="mobile-drawer"
          >
            <div className="px-4 py-6 space-y-4 flex flex-col">
              {links.map((link) => (
                <button
                  key={link.id}
                  id={`mobile-nav-${link.id}`}
                  onClick={() => {
                    setIsOpen(false);
                    onNavClick(link.id);
                  }}
                  className={`text-left text-lg font-semibold py-2.5 transition-colors ${
                    activeSection === link.id
                      ? "text-neutral-900 dark:text-white"
                      : "text-neutral-500 dark:text-white/50"
                  }`}
                >
                  <span className="flex items-center justify-between">
                    {link.label[lang]}
                    <ArrowUpRight className="w-4 h-4 opacity-30" />
                  </span>
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
