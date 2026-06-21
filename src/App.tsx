import React from "react";
import { motion, AnimatePresence } from "motion/react";
import { ArrowDown, Sparkles, Send, Layout, Layers, Compass, Laptop, ArrowUpRight } from "lucide-react";

// Data Imports
import {
  PROJECTS_DATA,
  PROFILE_DATA,
  TranslatedProject,
} from "./data";

// Subcomponent Imports
import Navbar from "./components/Navbar";
import ProjectCard from "./components/ProjectCard";
import CaseStudyModal from "./components/CaseStudyModal";
import BioSection from "./components/BioSection";
import ServicesSection from "./components/ServicesSection";
import ContactSection from "./components/ContactSection";
import Footer from "./components/Footer";

export default function App() {
  const [lang, setLang] = React.useState<"en" | "zh">("zh");
  const [darkMode, setDarkMode] = React.useState<boolean>(true);
  const [selectedProject, setSelectedProject] = React.useState<TranslatedProject | null>(null);
  const [activeSection, setActiveSection] = React.useState<string>("hero");
  const [categoryFilter, setCategoryFilter] = React.useState<string>("All");
  const [prefilledService, setPrefilledService] = React.useState<string>("");

  // Dark mode side-effects
  React.useEffect(() => {
    const root = window.document.documentElement;
    if (darkMode) {
      root.classList.add("dark");
    } else {
      root.classList.remove("dark");
    }
  }, [darkMode]);

  // ScrollSpy tracking active section
  React.useEffect(() => {
    const handleScroll = () => {
      const sections = ["hero", "portfolio", "philosophy", "services", "about", "contact"];
      const scrollPosition = window.scrollY + 200;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (sectionId: string) => {
    const el = document.getElementById(sectionId);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
      setActiveSection(sectionId);
    }
  };

  const handleSelectServiceForContact = (serviceTitle: string) => {
    setPrefilledService(serviceTitle);
  };

  const categories = [
    { id: "All", label: { en: "All Works", zh: "全部精选" } },
    { id: "Digital Product", label: { en: "Products", zh: "数字旗舰" } },
    { id: "Brand Identity", label: { en: "Identity", zh: "品牌全案" } },
    { id: "Spatial Design", label: { en: "Spatial AR", zh: "全息计算" } },
    { id: "Motion Design", label: { en: "Motion UX", zh: "中控动效" } },
  ];

  const filteredProjects =
    categoryFilter === "All"
      ? PROJECTS_DATA
      : PROJECTS_DATA.filter((p) => p.category.en === categoryFilter);

  return (
    <div className={`min-h-screen text-neutral-800 bg-[#fafafa] dark:text-neutral-100 dark:bg-elegant-dark font-sans transition-colors duration-500 selection:bg-neutral-900 selection:text-white dark:selection:bg-white dark:selection:text-black`}>
      
      {/* Translucent Floating Header */}
      <Navbar
        lang={lang}
        setLang={setLang}
        darkMode={darkMode}
        setDarkMode={setDarkMode}
        activeSection={activeSection}
        onNavClick={handleNavClick}
      />

      {/* Hero Section */}
      <header
        id="hero"
        className="relative min-h-screen flex flex-col justify-between items-center px-4 md:px-8 py-20 overflow-hidden bg-[#fafafa] dark:bg-elegant-dark"
      >
        {/* Decorative Grid Accent */}
        <div className="absolute inset-0 opacity-[0.03] dark:opacity-[0.015] bg-[radial-gradient(#858585_1px,transparent_1px)] [background-size:16px_16px] z-0" />
        
        {/* Visual Soft Ambient Glows */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[300px] rounded-full bg-neutral-200/40 dark:bg-purple-600/5 blur-[120px] z-0 pointer-events-none" />
        <div className="absolute top-0 right-0 w-80 h-80 bg-purple-600/5 blur-[130px] -mr-32 -mt-32 pointer-events-none" />

        {/* Dummy Top spacing */}
        <div className="h-10" />

        {/* Content Block */}
        <div className="max-w-5xl text-center z-10 self-center flex flex-col items-center">
          
          {/* Sparkle Tag & Signature Pulsing Green Activity Indicator */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full border border-neutral-200/60 dark:border-white/10 bg-neutral-50 dark:bg-white/5 text-[10px] md:text-xs font-semibold uppercase tracking-widest text-neutral-500 dark:text-white/50 mb-8"
          >
            <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
            <span>
              {lang === "en"
                ? "Marcus Vance • Available for Q4 Projects"
                : "万梓安 • 现正开放接受 Q4/全新季度设计合作"}
            </span>
          </motion.div>

          {/* Core Huge Heading with Elegant Dark Style */}
          <motion.h1
            initial={{ opacity: 0, filter: "blur(10px)" }}
            animate={{ opacity: 1, filter: "blur(0px)" }}
            transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="text-4xl sm:text-6xl md:text-8xl font-bold tracking-tighter text-neutral-950 dark:text-white leading-[0.95] font-sans"
          >
            {lang === "en" ? (
              <>
                Building <br className="hidden md:block" />
                <span className="text-neutral-400 dark:text-white/40 font-serif italic pr-2 font-light">Digital</span> <br className="hidden md:block" />
                Poetry.
              </>
            ) : (
              <>
                极简纯粹，<br className="hidden md:block" />
                <span className="text-neutral-400 dark:text-white/40 font-serif italic pr-2 font-light">即是至雅</span> <br className="hidden md:block" />
                之美。
              </>
            )}
          </motion.h1>

          {/* Subheading/Tagline */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="mt-8 text-neutral-500 dark:text-white/50 text-xs sm:text-sm md:text-lg max-w-2xl font-sans font-light leading-relaxed"
          >
            {lang === "en"
              ? "Interdisciplinary designer focusing on high-fidelity interfaces and immersive brand storytelling for the next generation of spatial computing."
              : "融汇物理体感与数字化空间交互。专注于全息立体计算规范、极速响应数字旗舰系统以及富有触感温度的高级排版视觉。"}
          </motion.p>

          {/* CTAs Row */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="mt-12 flex flex-col sm:flex-row items-center gap-4 w-full justify-center"
          >
            <button
              id="hero-explore-works-btn"
              onClick={() => handleNavClick("portfolio")}
              className="w-full sm:w-auto px-8 py-3.5 h-12 flex items-center justify-center text-xs font-semibold uppercase tracking-widest text-white dark:text-black bg-neutral-950 dark:bg-white hover:opacity-90 active:scale-[0.98] transition-all rounded-full"
            >
              <span>{lang === "en" ? "Explore Masterworks" : "鉴赏经典案例"}</span>
            </button>

            <button
              id="hero-contact-btn"
              onClick={() => handleNavClick("contact")}
              className="w-full sm:w-auto px-8 py-3.5 h-12 flex items-center justify-center text-xs font-semibold uppercase tracking-widest text-neutral-800 dark:text-white/60 border border-neutral-300 dark:border-white/10 hover:bg-neutral-100 dark:hover:bg-white/5 transition-all rounded-full gap-2"
            >
              <Send className="w-3.5 h-3.5" />
              <span>{lang === "en" ? "Initiate Proposal" : "预约专属咨询"}</span>
            </button>
          </motion.div>

        </div>

        {/* Scroll indicator Bottom */}
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 1.8, ease: "easeInOut" }}
          onClick={() => handleNavClick("portfolio")}
          className="cursor-pointer z-10 flex flex-col items-center space-y-2 select-none justify-self-end mt-12"
          id="scroll-indicator"
        >
          <span className="text-[10px] uppercase font-mono tracking-widest text-neutral-400">
            {lang === "en" ? "Scroll to Reveal" : "向下滚动探索"}
          </span>
          <ArrowDown className="w-4 h-4 text-neutral-400" />
        </motion.div>

      </header>

      {/* Portfolio / Featured Showcase Section */}
      <section id="portfolio" className="py-24 bg-white dark:bg-elegant-dark transition-colors duration-500">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          
          {/* Section Heading */}
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
            <div className="max-w-2xl">
              <p className="text-xs font-bold uppercase tracking-widest text-neutral-400 font-mono mb-4 flex items-center gap-1.5">
                <Layout className="w-3.5 h-3.5 text-neutral-400" />
                <span>01 / {lang === "en" ? "FEATURED PROJECTS" : "特选设计实绩"}</span>
              </p>
              <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-neutral-900 dark:text-white font-sans">
                {lang === "en" ? "Impeccable solutions." : "每一款，皆为重新定义。"}
              </h2>
            </div>

            {/* Category selection Tabs */}
            <div className="flex flex-wrap gap-2 overflow-x-auto pb-2 no-scrollbar border-b border-neutral-100 dark:border-zinc-900/60 md:border-b-0 min-w-0" id="category-filter-tabs">
              {categories.map((cat) => {
                const isActive = categoryFilter === cat.id;
                return (
                  <button
                    key={cat.id}
                    id={`filter-btn-${cat.id.replace(/\s+/g, '-')}`}
                    onClick={() => setCategoryFilter(cat.id)}
                    className={`px-4 py-1.5 rounded-full text-xs font-medium uppercase tracking-wider transition-all border shrink-0 ${
                      isActive
                        ? "bg-neutral-900 border-neutral-900 text-white dark:bg-white dark:border-white dark:text-black font-semibold"
                        : "border-neutral-250/20 text-neutral-500 hover:text-neutral-950 dark:hover:text-white"
                    }`}
                  >
                    {cat.label[lang]}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Cards Portfolio Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8" id="projects-grid">
            <AnimatePresence mode="popLayout">
              {filteredProjects.map((project) => (
                <ProjectCard
                  key={project.id}
                  project={project}
                  lang={lang}
                  onSelect={setSelectedProject}
                />
              ))}
            </AnimatePresence>
          </div>

        </div>
      </section>

      {/* Services custom consulting simulator */}
      <ServicesSection
        lang={lang}
        onSelectServiceForContact={handleSelectServiceForContact}
      />

      {/* Custom Bio and Chronology timeline */}
      <BioSection lang={lang} />

      {/* Interactive premium Contact Handshake form */}
      <ContactSection
        lang={lang}
        prefilledService={prefilledService}
      />

      {/* Elegant foot copyright and system digital live clock */}
      <Footer
        lang={lang}
        onBackToTop={() => handleNavClick("hero")}
      />

      {/* Project details sliding modal wrapper */}
      <AnimatePresence>
        {selectedProject && (
          <CaseStudyModal
            project={selectedProject}
            lang={lang}
            onClose={() => setSelectedProject(null)}
          />
        )}
      </AnimatePresence>

    </div>
  );
}
