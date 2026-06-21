import React from "react";
import { motion } from "motion/react";
import { Briefcase, Calendar, Sparkles } from "lucide-react";
import { PROFILE_DATA, EXPERIENCE_DATA } from "../data";

interface BioSectionProps {
  lang: "en" | "zh";
}

export default function BioSection({ lang }: BioSectionProps) {
  const [selectedExp, setSelectedExp] = React.useState<number | null>(null);

  const labels = {
    timelineTitle: { en: "Career Chronology", zh: "职业轨迹历程" },
    philosophiesTitle: { en: "Foundational Philosophies", zh: "基石设计体系哲学" },
    locationText: { en: "Location", zh: "物理位置" },
    highlightMetric: { en: "Highlights", zh: "核心效能积累" }
  };

  return (
    <section id="about" className="py-24 bg-neutral-50 dark:bg-elegant-dark transition-colors duration-500">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <p className="text-xs font-bold uppercase tracking-widest text-neutral-400 font-mono mb-4 flex items-center gap-1.5">
            <Sparkles className="w-3.5 h-3.5 text-neutral-400" />
            <span>03 / {lang === "en" ? "DESIGNER PROFILE" : "设计师简介"}</span>
          </p>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-neutral-900 dark:text-white font-sans">
            {lang === "en" ? "Crafting with pure intent & execution rigor." : "以绝对克制的意愿，淬炼非凡的数字实体。"}
          </h2>
        </div>

        {/* Bento Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-20" id="profile-bento-grid">
          
          {/* Bento Block 1: Immersive Portrait */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="group relative lg:col-span-1 rounded-3xl overflow-hidden border border-neutral-200/50 dark:border-white/5 bg-white dark:bg-white/5 shadow-sm aspect-square lg:aspect-auto lg:h-[500px]"
          >
            <img
              src={PROFILE_DATA.avatar}
              alt={PROFILE_DATA.name}
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-1000 scale-100 group-hover:scale-105"
            />
            {/* Soft dark vignetting */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent" />
            <div className="absolute bottom-6 left-6 text-white">
              <span className="text-[10px] uppercase font-mono tracking-widest text-neutral-400">
                {PROFILE_DATA.title[lang]}
              </span>
              <h3 className="text-2xl font-semibold tracking-tight mt-1 font-sans">
                {lang === "en" ? PROFILE_DATA.name : PROFILE_DATA.chineseName}
              </h3>
              <p className="text-xs text-neutral-300 font-light mt-1 uppercase font-mono">
                {PROFILE_DATA.location[lang]}
              </p>
            </div>
          </motion.div>

          {/* Bento Block 2: Detailed Text Narrative & Metrics Grid */}
          <div className="lg:col-span-2 flex flex-col justify-between space-y-8">
            
            {/* Detailed Intro Frame */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="p-8 md:p-10 rounded-3xl border border-neutral-200/40 dark:border-white/5 bg-white dark:bg-white/5 shadow-sm flex-1 flex flex-col justify-center"
            >
              <h3 className="text-xl md:text-2xl font-serif text-neutral-950 dark:text-stone-100 leading-snug mb-6">
                "{PROFILE_DATA.bio[lang]}"
              </h3>
              <p className="text-sm md:text-base text-neutral-600 dark:text-neutral-400 font-sans font-light leading-relaxed">
                {PROFILE_DATA.detailedIntro[lang]}
              </p>
            </motion.div>

            {/* Quick Stats Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              {PROFILE_DATA.stats.map((stat, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: idx * 0.1 }}
                  className="p-5 rounded-2xl border border-neutral-200/40 dark:border-white/5 bg-white dark:bg-white/5 shadow-sm text-center"
                >
                  <span className="block text-3xl md:text-4xl font-bold font-mono tracking-tighter text-neutral-950 dark:text-neutral-50 mb-1">
                    {stat.value}
                  </span>
                  <span className="text-[10px] uppercase font-mono tracking-widest text-neutral-400 block leading-tight">
                    {stat.label[lang]}
                  </span>
                </motion.div>
              ))}
            </div>

          </div>
        </div>

        {/* Section Bottom Splitting: Philosophies vs Career Timeline */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 pt-12 border-t border-neutral-200/40 dark:border-white/5">
          
          {/* Design Philosophy Blocks */}
          <div className="space-y-8">
            <div className="border-b border-neutral-200/40 dark:border-zinc-850 pb-2">
              <h3 className="text-xs uppercase tracking-widest font-mono text-neutral-400 font-bold">
                {labels.philosophiesTitle[lang]}
              </h3>
            </div>
            
            <div className="space-y-6">
              {PROFILE_DATA.philosophies.map((phil, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: -15 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: idx * 0.15 }}
                  className="p-6 rounded-2xl bg-white dark:bg-white/3 border border-neutral-150 dark:border-white/5 apple-card-hover"
                >
                  <span className="text-xl font-semibold tracking-tight text-neutral-950 dark:text-white block mb-2 font-sans">
                    {phil.title[lang]}
                  </span>
                  <p className="text-xs sm:text-sm text-neutral-500 dark:text-neutral-400 font-light leading-relaxed">
                    {phil.desc[lang]}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Career Chronology Timeline (Interactive Elements) */}
          <div className="space-y-8" id="career-timeline">
            <div className="border-b border-neutral-200/40 dark:border-zinc-850 pb-2">
              <h3 className="text-xs uppercase tracking-widest font-mono text-neutral-400 font-bold">
                {labels.timelineTitle[lang]}
              </h3>
            </div>

            <div className="relative border-l border-neutral-205 dark:border-white/5 ml-3 pl-6 space-y-8">
              {EXPERIENCE_DATA.map((exp, idx) => {
                const isSelected = selectedExp === idx;
                return (
                  <div
                    key={idx}
                    onClick={() => setSelectedExp(isSelected ? null : idx)}
                    className="relative group cursor-pointer"
                  >
                    {/* Ring timeline bullet */}
                    <div className="absolute -left-[31px] top-1.5 w-4.5 h-4.5 rounded-full border-2 border-neutral-900 dark:border-white bg-neutral-50 dark:bg-elegant-dark flex items-center justify-center transition-all group-hover:scale-125">
                      <span className="w-1.5 h-1.5 rounded-full bg-neutral-950 dark:bg-white" />
                    </div>

                    <div className="space-y-1">
                      <div className="flex flex-wrap items-center gap-2">
                        <span className="text-xs uppercase font-mono bg-neutral-200/50 dark:bg-white/5 px-2 py-0.5 rounded text-neutral-600 dark:text-neutral-400 font-semibold">
                          {exp.year}
                        </span>
                        <h4 className="text-sm font-semibold text-neutral-400 uppercase tracking-widest font-mono">
                          {exp.company}
                        </h4>
                      </div>

                      <div className="flex items-center justify-between mt-1">
                        <h5 className="text-lg font-bold text-neutral-900 dark:text-neutral-100 font-sans">
                          {exp.role[lang]}
                        </h5>
                      </div>

                      <p className="text-xs sm:text-sm text-neutral-500 dark:text-neutral-400 pt-1 font-light leading-relaxed">
                        {exp.description[lang]}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
          
        </div>

      </div>
    </section>
  );
}
