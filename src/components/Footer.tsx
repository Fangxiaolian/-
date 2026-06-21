import React from "react";
import { Dribbble, Github, Linkedin, ArrowUp } from "lucide-react";

interface FooterProps {
  lang: "en" | "zh";
  onBackToTop: () => void;
}

export default function Footer({ lang, onBackToTop }: FooterProps) {
  const [time, setTime] = React.useState("");

  // Run dynamic clock
  React.useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      setTime(
        now.toLocaleTimeString(lang === "en" ? "en-US" : "zh-CN", {
          hour: "2-digit",
          minute: "2-digit",
          second: "2-digit",
          hour12: false,
        })
      );
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, [lang]);

  const socials = [
    { name: "LinkedIn", url: "https://linkedin.com", icon: <Linkedin className="w-4 h-4" /> },
    { name: "Dribbble", url: "https://dribbble.com", icon: <Dribbble className="w-4 h-4" /> },
    { name: "GitHub", url: "https://github.com", icon: <Github className="w-4 h-4" /> },
  ];

  return (
    <footer className="bg-elegant-dark border-t border-white/5 text-neutral-400 py-16 transition-colors duration-500" id="main-footer">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        
        {/* Foot top splitting */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between border-b border-white/5 pb-12 mb-12 gap-8">
          <div>
            <h3 className="text-white font-serif text-xl tracking-wider font-bold">VANCE STUDIO</h3>
            <p className="text-xs text-neutral-500 mt-2 max-w-sm leading-relaxed font-sans font-light">
              {lang === "en"
                ? "Simplicity is the ultimate sophistication. Standardized with rigorous logic."
                : "极简，即至雅之美。以严密逻辑承托设计的无限边际。"}
            </p>
          </div>

          {/* Social icons */}
          <div className="flex items-center space-x-4">
            {socials.map((soc) => (
              <a
                key={soc.name}
                href={soc.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center w-9 h-9 rounded-full bg-white/5 border border-white/5 hover:bg-white hover:text-black transition-all duration-300"
                title={soc.name}
              >
                {soc.icon}
              </a>
            ))}
          </div>
        </div>

        {/* Foot bottom metadata row */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6 text-xs text-neutral-500">
          <div className="space-y-1">
            <p>© {new Date().getFullYear()} Marcus Vance. All rights reserved.</p>
            <p className="text-[10px] text-neutral-600 font-mono">
              Designed & developed with strict Apple Editorial guidelines.
            </p>
          </div>

          {/* Dynamic timezone ticker */}
          <div className="flex items-center space-x-6">
            <div className="text-right">
              <span className="text-[10px] uppercase font-mono tracking-widest text-neutral-600 block">
                {lang === "en" ? "Designer Local Time" : "设计师现时区时间"}
              </span>
              <span className="font-mono text-xs text-neutral-300 font-medium">
                {time || "12:00:00"} (PST)
              </span>
            </div>

            {/* Tap to rise button */}
            <button
              id="back-to-top-btn"
              onClick={onBackToTop}
              className="flex items-center justify-center w-8 h-8 rounded-full bg-white/5 hover:bg-white/10 text-neutral-300 transition-colors border border-white/5"
              title="Back to Top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
}
