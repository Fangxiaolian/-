import React from "react";
import { motion } from "motion/react";
import { ArrowUpRight } from "lucide-react";
import { TranslatedProject } from "../data";

interface ProjectCardProps {
  key?: string;
  project: TranslatedProject;
  lang: "en" | "zh";
  onSelect: (p: TranslatedProject) => void;
}

export default function ProjectCard({ project, lang, onSelect }: ProjectCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      onClick={() => onSelect(project)}
      className="group cursor-pointer overflow-hidden rounded-3xl bg-neutral-50 dark:bg-white/5 border border-neutral-200/40 dark:border-white/5 apple-card-hover"
      id={`project-card-${project.id}`}
    >
      <div className="relative aspect-[4/3] w-full overflow-hidden">
        {/* Dynamic Image with Scale Zoom */}
        <img
          src={project.image}
          alt={project.title}
          referrerPolicy="no-referrer"
          className="h-full w-full object-cover transition-transform duration-1000 ease-[0.16,1,0.3,1] group-hover:scale-105"
        />

        {/* Ambient Darkened Gradient Vignette */}
        <div className="absolute inset-0 bg-gradient-to-t from-neutral-950/80 via-neutral-900/30 to-transparent opacity-90 transition-opacity duration-500" />

        {/* Floating Top Tag Category */}
        <div className="absolute top-6 left-6 flex items-center space-x-2">
          <span className="px-3.5 py-1.5 rounded-full text-[10px] font-bold uppercase tracking-widest text-neutral-100 bg-black/60 backdrop-blur-md border border-white/10">
            {project.category[lang]}
          </span>
          <span className="px-3 py-1.5 rounded-full text-[10px] font-bold text-neutral-300 bg-black/30 backdrop-blur-sm">
            {project.year}
          </span>
        </div>

        {/* Card Content Overlay (Bottom) */}
        <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8 text-white flex flex-col justify-end">
          <p className="text-[10px] uppercase font-mono tracking-widest text-neutral-400 mb-2">
            CLIENT: {project.client}
          </p>
          <div className="flex items-end justify-between">
            <div>
              <h3 className="text-xl md:text-2xl font-semibold tracking-tight leading-none mb-2 text-white">
                {project.title}
              </h3>
              <p className="text-xs text-neutral-300 md:text-sm line-clamp-2 max-w-md font-sans font-light">
                {project.tagline[lang]}
              </p>
            </div>

            {/* Premium Circular Gesture Button */}
            <div className="flex items-center justify-center w-10 h-10 rounded-full border border-white/20 bg-white/10 backdrop-blur-sm text-white transition-all duration-500 group-hover:bg-white group-hover:text-black group-hover:scale-110 shrink-0 ml-4">
              <ArrowUpRight className="w-4 h-4" />
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
