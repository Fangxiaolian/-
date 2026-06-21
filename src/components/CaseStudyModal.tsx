import React from "react";
import { motion } from "motion/react";
import { X, Calendar, Layout, Award, User, Quote, ArrowRight, Check } from "lucide-react";
import { TranslatedProject } from "../data";

interface CaseStudyModalProps {
  project: TranslatedProject;
  lang: "en" | "zh";
  onClose: () => void;
}

export default function CaseStudyModal({ project, lang, onClose }: CaseStudyModalProps) {
  // Lock scroll when modal is open
  React.useEffect(() => {
    document.body.style.overflow = "hidden";
    
    // Listen to escape key
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleKeyDown);
    
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [onClose]);

  const labels = {
    challenge: { en: "The Challenge", zh: "核心痛点与挑战" },
    approach: { en: "The Design Approach", zh: "设计与实施方案" },
    outcome: { en: "The Business Outcome", zh: "商业能效成果" },
    metadata: { en: "Project Metadata", zh: "技术与归属属性" },
    role: { en: "Role", zh: "我的角色" },
    client: { en: "Client", zh: "委派实体" },
    timeline: { en: "Timeline", zh: "开发周期" },
    caseStudyHeader: { en: "Interactive Case Study", zh: "深度案例拆解" },
    closeBtn: { en: "Close Project", zh: "关闭案例" },
    testimonialTitle: { en: "Executive Endorsement", zh: "决策团队证言" }
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto" id={`case-study-modal-${project.id}`}>
      {/* Backdrop overlay */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
        onClick={onClose}
        className="fixed inset-0 bg-neutral-950/80 backdrop-blur-md"
      />

      {/* Sheet Container */}
      <div className="flex min-h-screen items-center justify-center p-0 sm:p-6 md:p-12">
        <motion.div
          initial={{ opacity: 0, y: 100, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 100, scale: 0.95 }}
          transition={{ type: "spring", damping: 30, stiffness: 200 }}
          className="relative w-full max-w-5xl bg-white dark:bg-elegant-dark shadow-2xl rounded-none sm:rounded-3xl overflow-hidden border border-neutral-200/20 dark:border-white/5"
        >
          {/* Static Top sticky controller */}
          <div className="absolute top-4 right-4 z-10">
            <button
              id="close-modal-btn"
              onClick={onClose}
              className="flex items-center justify-center w-10 h-10 rounded-full bg-black/60 hover:bg-black text-white hover:scale-110 transition-all border border-white/15"
              aria-label="Close Case Study"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Banner Hero Section */}
          <div className={`relative h-64 sm:h-[450px] w-full bg-gradient-to-b ${project.accentBg} flex items-end overflow-hidden`}>
            {/* Visual background blend */}
            <div className="absolute inset-0 z-0">
              <img
                src={project.image}
                alt={project.title}
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover opacity-35 mix-blend-luminosity hover:opacity-50 transition-opacity duration-1000"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-white dark:from-zinc-950 via-black/10 to-transparent" />
            </div>

            {/* Title Block */}
            <div className="relative z-10 w-full p-6 md:p-12 text-neutral-900 dark:text-neutral-50">
              <span className="inline-block px-3 py-1.5 rounded-full text-[10px] uppercase tracking-widest font-bold bg-neutral-900/10 dark:bg-white/10 dark:text-neutral-300 mb-4">
                {project.category[lang]}
              </span>
              <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold tracking-tight font-sans text-neutral-950 dark:text-white leading-none">
                {project.title}
              </h1>
              <p className="mt-4 text-sm sm:text-lg text-neutral-600 dark:text-neutral-300 font-sans font-light max-w-2xl leading-relaxed">
                {project.tagline[lang]}
              </p>
            </div>
          </div>

          {/* Core Telemetry Results / Outcomes Highlights (Dynamic Stats) */}
          <div className="grid grid-cols-1 sm:grid-cols-3 border-y border-neutral-200/40 dark:border-white/5 bg-neutral-50/50 dark:bg-white/3">
            {project.stats.map((stat, idx) => (
              <div
                key={idx}
                className="p-6 md:p-8 flex flex-col justify-center border-b sm:border-b-0 sm:border-r last:border-r-0 border-neutral-200/40 dark:border-white/5 text-center sm:text-left"
              >
                <span className="text-4xl md:text-5xl font-bold font-mono tracking-tighter text-neutral-950 dark:text-neutral-50 mb-1">
                  {stat.value}
                </span>
                <span className="text-xs uppercase tracking-widest text-neutral-400 font-mono">
                  {stat.label[lang]}
                </span>
              </div>
            ))}
          </div>

          {/* Core Body Container (Editorial Two-Column Splitting) */}
          <div className="p-6 md:p-12 grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Left Content Column (Main Narrative) */}
            <div className="lg:col-span-2 space-y-12">
              <div className="border-b border-neutral-100 dark:border-zinc-900 pb-1 flex items-center space-x-2">
                <span className="w-2 h-2 rounded-full bg-neutral-900 dark:bg-white" />
                <h4 className="text-sm font-mono tracking-widest uppercase text-neutral-400">
                  {labels.caseStudyHeader[lang]}
                </h4>
              </div>

              {/* Challenge block */}
              <div className="space-y-4">
                <h3 className="text-xl md:text-2xl font-bold text-neutral-900 dark:text-neutral-100 flex items-center space-x-3">
                  <span className="flex items-center justify-center w-6 h-6 rounded-full text-xs font-mono border border-neutral-300 dark:border-zinc-700 bg-neutral-100 dark:bg-zinc-900 shrink-0">
                    01
                  </span>
                  <span>{labels.challenge[lang]}</span>
                </h3>
                <p className="text-neutral-600 dark:text-neutral-400 leading-relaxed font-sans font-light text-sm sm:text-base">
                  {project.fullCaseStudy.challenge[lang]}
                </p>
              </div>

              {/* Approach block */}
              <div className="space-y-4">
                <h3 className="text-xl md:text-2xl font-bold text-neutral-900 dark:text-neutral-100 flex items-center space-x-3">
                  <span className="flex items-center justify-center w-6 h-6 rounded-full text-xs font-mono border border-neutral-300 dark:border-zinc-700 bg-neutral-100 dark:bg-zinc-900 shrink-0">
                    02
                  </span>
                  <span>{labels.approach[lang]}</span>
                </h3>
                <p className="text-neutral-600 dark:text-neutral-400 leading-relaxed font-sans font-light text-sm sm:text-base">
                  {project.fullCaseStudy.approach[lang]}
                </p>
              </div>

              {/* Outcome block */}
              <div className="space-y-4">
                <h3 className="text-xl md:text-2xl font-bold text-neutral-900 dark:text-neutral-100 flex items-center space-x-3">
                  <span className="flex items-center justify-center w-6 h-6 rounded-full text-xs font-mono border border-neutral-300 dark:border-zinc-700 bg-neutral-100 dark:bg-zinc-900 shrink-0">
                    03
                  </span>
                  <span>{labels.outcome[lang]}</span>
                </h3>
                <p className="text-neutral-600 dark:text-neutral-400 leading-relaxed font-sans font-light text-sm sm:text-base">
                  {project.fullCaseStudy.outcome[lang]}
                </p>
              </div>

              {/* Auxiliary Gallery Showcase */}
              <div className="space-y-4 pt-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {project.gallery.map((imgUrl, i) => (
                    <div key={i} className="group overflow-hidden rounded-2xl aspect-video border border-neutral-200/20 dark:border-zinc-800/20 bg-neutral-100 dark:bg-zinc-900">
                      <img
                        src={imgUrl}
                        alt={`${project.title} Gallery #${i + 1}`}
                        referrerPolicy="no-referrer"
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Context Sidebar (Technical Metadata) */}
            <div className="space-y-8 lg:border-l lg:border-neutral-200/30 lg:dark:border-zinc-800/40 lg:pl-8">
              {/* Profile card summary */}
              <div>
                <h3 className="text-sm font-semibold tracking-widest uppercase text-neutral-400 mb-6 font-mono border-b border-neutral-100 dark:border-zinc-900 pb-2">
                  {labels.metadata[lang]}
                </h3>

                <div className="space-y-4">
                  <div className="flex justify-between py-1 border-b border-dashed border-neutral-200/50 dark:border-zinc-800/50">
                    <span className="text-xs text-neutral-400 flex items-center gap-1.5 uppercase font-mono">
                      <User className="w-3.5 h-3.5 text-neutral-400" />
                      {labels.client[lang]}
                    </span>
                    <span className="text-xs font-medium text-neutral-900 dark:text-neutral-100 font-sans">
                      {project.client}
                    </span>
                  </div>

                  <div className="flex justify-between py-1 border-b border-dashed border-neutral-200/50 dark:border-zinc-800/50">
                    <span className="text-xs text-neutral-400 flex items-center gap-1.5 uppercase font-mono">
                      <Calendar className="w-3.5 h-3.5 text-neutral-400" />
                      {labels.timeline[lang]}
                    </span>
                    <span className="text-xs font-medium text-neutral-900 dark:text-neutral-100 font-sans">
                      {project.year}
                    </span>
                  </div>

                  <div className="flex justify-between py-1 border-b border-dashed border-neutral-200/50 dark:border-zinc-800/50">
                    <span className="text-xs text-neutral-400 flex items-center gap-1.5 uppercase font-mono">
                      <Layout className="w-3.5 h-3.5 text-neutral-400" />
                      {labels.role[lang]}
                    </span>
                    <span className="text-xs font-medium text-neutral-900 dark:text-neutral-100 font-sans max-w-[180px] text-right line-clamp-2">
                      {project.role[lang]}
                    </span>
                  </div>
                </div>
              </div>

              {/* Tag Badges */}
              <div className="space-y-3">
                <h4 className="text-xs font-semibold uppercase tracking-widest text-neutral-400 font-mono">
                  Frameworks & Methodologies
                </h4>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 rounded-full text-xs text-neutral-600 dark:text-neutral-400 border border-neutral-300/40 dark:border-zinc-800 bg-neutral-50 dark:bg-zinc-900 font-sans font-light"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Testimonial Quote Panel */}
              {project.testimonial && (
                <div className="pt-6 border-t border-neutral-200/40 dark:border-zinc-800/40 space-y-4">
                  <h4 className="text-xs font-semibold uppercase tracking-widest text-neutral-400 font-mono">
                    {labels.testimonialTitle[lang]}
                  </h4>
                  <div className="relative p-5 rounded-2xl bg-neutral-50 dark:bg-zinc-900/60 border border-neutral-250/20 dark:border-zinc-800/20">
                    <Quote className="absolute top-4 right-4 w-10 h-10 text-neutral-200 dark:text-zinc-800/80 -rotate-12 z-0" />
                    <p className="relative z-10 text-xs italic text-neutral-600 dark:text-neutral-400 leading-relaxed font-light">
                      "{project.testimonial.text[lang]}"
                    </p>
                    <div className="relative z-10 flex items-center space-x-3 mt-4">
                      <img
                        src={project.testimonial.avatar}
                        alt={project.testimonial.author[lang]}
                        referrerPolicy="no-referrer"
                        className="w-8 h-8 rounded-full object-cover border border-neutral-300 dark:border-zinc-700"
                      />
                      <div>
                        <p className="text-xs font-semibold text-neutral-900 dark:text-white leading-none">
                          {project.testimonial.author[lang]}
                        </p>
                        <p className="text-[10px] text-neutral-400 font-mono mt-1">
                          {project.testimonial.company[lang]}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
