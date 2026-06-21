import React from "react";
import { motion } from "motion/react";
import { Compass, Smartphone, Layers, CheckCircle2, Sliders, ArrowRight, ShieldCheck } from "lucide-react";
import { SERVICES_DATA, TranslatedService } from "../data";

interface ServicesSectionProps {
  lang: "en" | "zh";
  onSelectServiceForContact: (serviceTitle: string) => void;
}

export default function ServicesSection({ lang, onSelectServiceForContact }: ServicesSectionProps) {
  // Simulator State variables
  const [selectedServiceId, setSelectedServiceId] = React.useState<string>("product");
  const [timelineSpeed, setTimelineSpeed] = React.useState<"express" | "standard">("standard");
  const [projectScale, setProjectScale] = React.useState<"mvp" | "full">("full");

  const activeService = SERVICES_DATA.find((s) => s.id === selectedServiceId) || SERVICES_DATA[0];

  // Proposal blueprint calculation logic
  const calculateBlueprint = () => {
    if (selectedServiceId === "spatial") {
      return {
        codeName: "Zenith Space Blueprint",
        chineseCodeName: "Zenith 空域构架方案",
        duration: timelineSpeed === "express" ? "3 to 4 Weeks Design Sprint" : "6 to 8 Weeks Core Engagement",
        chineseDuration: timelineSpeed === "express" ? "3 至 4 周空间疾速冲刺" : "6 至 8 周深度整案重构",
        recommendedArchitecture: "Stereoscopic Responsive Figma grids, Vision OS ambient blur shaders documentation, eyes-gesture tracking vectors.",
        chineseRecommendedArchitecture: "立体自适应高精度 Figma 栅格规范、Vision OS 环境材质高斯折射率算法、微型眼动捕获手势响应链模型。"
      };
    } else if (selectedServiceId === "brand") {
      return {
        codeName: "Aura Brand Covenant",
        chineseCodeName: "Aura 品牌全局共识方案",
        duration: timelineSpeed === "express" ? "2 to 3 Weeks Visual Polish" : "5 to 6 Weeks Universal Identity Layout",
        chineseDuration: timelineSpeed === "express" ? "2 至 3 周核心视觉重打磨" : "5 至 6 周多维全链路视觉体系",
        recommendedArchitecture: "Modular typographic scales, customized geometric vector logomarks, dynamic Glaze shaders web guidelines.",
        chineseRecommendedArchitecture: "模数阶梯多维度字形配比排版系统、精细几何矢量品牌全姿态图标、智能云渲染 WebGL 动效数字展示图层集。"
      };
    } else {
      return {
        codeName: "Apex Product Deck",
        chineseCodeName: "Apex 精密数字旗舰方案",
        duration: timelineSpeed === "express" ? "3 to 4 Weeks MVP Polish" : "7 to 8 Weeks Enterprise System",
        chineseDuration: timelineSpeed === "express" ? "3 至 4 周旗舰原型冲刺" : "7 至 8 周完整企业级应用重塑",
        recommendedArchitecture: "Responsive multi-platform React design tokens, streamlined payment routing states, custom interactive charts.",
        chineseRecommendedArchitecture: "全端高度响应式 React/Tailwind 语义令牌系统、极致高转化多状态防遗弃流式付款链路、D3 数据交互仪表盘。"
      };
    }
  };

  const blueprint = calculateBlueprint();

  const labels = {
    title: { en: "Architectural Capabilities", zh: "深邃服务与交互算力" },
    subtitle: { en: "Bridging complex logic with minimalist art.", zh: "在繁冗的数据逻辑与至简的优雅美感之间，架设无缝衔接的交互桥梁。" },
    explorerHeader: { en: "Tailored Engagement Blueprint Generator", zh: "互动式项目合作架构设计器" },
    explorerSec: { en: "Step 1: Select Design Core", zh: "步骤 1: 确定合作核心领域" },
    speedSec: { en: "Step 2: Choose Velocity", zh: "步骤 2: 选择交付速度期望" },
    scaleSec: { en: "Step 3: Define Technical Depth", zh: "步骤 3: 确定技术触达深度" },
    blueprintHeader: { en: "Formulated Proposal Proposal", zh: "即刻生成专属方案架构" },
    codeLabel: { en: "Package Model Code", zh: "专属方案序列代号" },
    durationLabel: { en: "Architectural Timeline", zh: "评估开发用时" },
    specLabel: { en: "Core Recommended Deliverables", zh: "定制建议付运清单" },
    dispatchButton: { en: "Request This Proposal Blueprint", zh: "申请获取此定制方案报价" },
    expressOpt: { en: "Aggressive Sprint (Rapid Launch)", zh: "疾速攻坚 (2x 速度倾斜，聚焦核心场景)" },
    standardOpt: { en: "Rigorous Depth (Impeccable Polishing)", zh: "深度雕琢 (标准闭环体系，极致像素复盘)" },
    mvpOpt: { en: "Essential Framework (Strategic Launch)", zh: "核心架构 MVP (满足初期天使轮演示或重点用户测试)" },
    fullOpt: { en: "Omni-Channel Ecosystem (Durable Depth)", zh: "全域数字生态 (覆盖全断端应用、无缝设计工程交接)" }
  };

  return (
    <section id="services" className="py-24 bg-white dark:bg-elegant-dark transition-colors duration-500">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-20">
          <p className="text-xs font-bold uppercase tracking-widest text-neutral-400 font-mono mb-4 flex items-center gap-1.5">
            <Compass className="w-3.5 h-3.5 text-neutral-400" />
            <span>02 / {lang === "en" ? "PROFESSIONAL DISCIPLINE" : "专业设计范式"}</span>
          </p>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-neutral-900 dark:text-white font-sans">
            {labels.title[lang]}
          </h2>
          <p className="mt-4 text-base md:text-lg text-neutral-500 dark:text-neutral-400 font-sans font-light leading-relaxed">
            {labels.subtitle[lang]}
          </p>
        </div>

        {/* Core Services Cards Row */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-24">
          {SERVICES_DATA.map((service) => {
            const isSelected = selectedServiceId === service.id;
            return (
              <div
                key={service.id}
                onClick={() => setSelectedServiceId(service.id)}
                className={`p-8 rounded-3xl border transition-all duration-500 cursor-pointer flex flex-col justify-between h-[340px] relative ${
                  isSelected
                    ? "border-neutral-900 dark:border-white bg-neutral-50/50 dark:bg-white/10 shadow-lg scale-[1.02]"
                    : "border-neutral-200/50 dark:border-white/5 hover:border-neutral-400 dark:hover:border-white/10 bg-white/50 dark:bg-white/3"
                }`}
                id={`service-card-${service.id}`}
              >
                <div>
                  <div className="w-12 h-12 rounded-2xl flex items-center justify-center bg-neutral-100 dark:bg-white/5 border border-neutral-200/40 dark:border-white/5 text-neutral-800 dark:text-white mb-6">
                    {service.id === "spatial" && <Compass className="w-5 h-5" />}
                    {service.id === "product" && <Smartphone className="w-5 h-5" />}
                    {service.id === "brand" && <Layers className="w-5 h-5" />}
                  </div>

                  <h3 className="text-xl font-bold tracking-tight text-neutral-950 dark:text-white font-sans mb-3">
                    {service.title[lang]}
                  </h3>
                  <p className="text-xs sm:text-sm text-neutral-500 dark:text-neutral-400 font-light leading-relaxed line-clamp-3">
                    {service.description[lang]}
                  </p>
                </div>

                <div className="pt-4 border-t border-neutral-150 dark:border-zinc-900 flex items-center justify-between">
                  <span className="text-[10px] uppercase font-mono tracking-widest text-neutral-400">
                    {lang === "en" ? "Interactive Module" : "点击配入设计器"}
                  </span>
                  {isSelected && (
                    <motion.div
                      layoutId="serviceTick"
                      className="w-2.5 h-2.5 rounded-full bg-neutral-900 dark:bg-white"
                    />
                  )}
                </div>
              </div>
            );
          })}
        </div>

        {/* Blueprint Generator Block */}
        <div className="rounded-3xl border border-neutral-200/50 dark:border-white/5 bg-neutral-50/40 dark:bg-white/3 p-6 md:p-10 shadow-sm" id="blueprint-generator">
          <div className="flex items-center space-x-2.5 mb-8 border-b border-neutral-200/30 dark:border-zinc-900/40 pb-4">
            <Sliders className="w-4 h-4 text-neutral-500" />
            <h3 className="text-sm uppercase tracking-widest font-mono text-neutral-400 font-bold">
              {labels.explorerHeader[lang]}
            </h3>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
            {/* Control Column */}
            <div className="lg:col-span-7 space-y-8">
              
              {/* Option 2: Velocity */}
              <div className="space-y-3">
                <label className="text-xs font-semibold text-neutral-400 uppercase tracking-widest font-mono">
                  {labels.speedSec[lang]}
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <button
                    id="delivery-speed-standard"
                    onClick={() => setTimelineSpeed("standard")}
                    className={`p-4 rounded-xl text-left border text-xs sm:text-sm font-medium transition-all ${
                      timelineSpeed === "standard"
                        ? "border-neutral-900 dark:border-white bg-white dark:bg-white/10 text-neutral-900 dark:text-white shadow-sm"
                        : "border-neutral-200/50 dark:border-white/5 bg-neutral-100/20 dark:bg-white/3 text-neutral-500 dark:text-neutral-400 hover:bg-neutral-100/50 dark:hover:bg-white/5"
                    }`}
                  >
                    {labels.standardOpt[lang]}
                  </button>
                  <button
                    id="delivery-speed-express"
                    onClick={() => setTimelineSpeed("express")}
                    className={`p-4 rounded-xl text-left border text-xs sm:text-sm font-medium transition-all ${
                      timelineSpeed === "express"
                        ? "border-neutral-900 dark:border-white bg-white dark:bg-white/10 text-neutral-900 dark:text-white shadow-sm"
                        : "border-neutral-200/50 dark:border-white/5 bg-neutral-100/20 dark:bg-white/3 text-neutral-500 dark:text-neutral-400 hover:bg-neutral-100/50 dark:hover:bg-white/5"
                    }`}
                  >
                    {labels.expressOpt[lang]}
                  </button>
                </div>
              </div>

              {/* Option 3: Technical Depth / Scale */}
              <div className="space-y-3">
                <label className="text-xs font-semibold text-neutral-400 uppercase tracking-widest font-mono">
                  {labels.scaleSec[lang]}
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <button
                    id="project-scale-mvp"
                    onClick={() => setProjectScale("mvp")}
                    className={`p-4 rounded-xl text-left border text-xs sm:text-sm font-medium transition-all ${
                      projectScale === "mvp"
                        ? "border-neutral-900 dark:border-white bg-white dark:bg-white/10 text-neutral-900 dark:text-white shadow-sm"
                        : "border-neutral-200/50 dark:border-white/5 bg-neutral-100/20 dark:bg-white/3 text-neutral-500 dark:text-neutral-400 hover:bg-neutral-100/50 dark:hover:bg-white/5"
                    }`}
                  >
                    {labels.mvpOpt[lang]}
                  </button>
                  <button
                    id="project-scale-full"
                    onClick={() => setProjectScale("full")}
                    className={`p-4 rounded-xl text-left border text-xs sm:text-sm font-medium transition-all ${
                      projectScale === "full"
                        ? "border-neutral-900 dark:border-white bg-white dark:bg-white/10 text-neutral-900 dark:text-white shadow-sm"
                        : "border-neutral-200/50 dark:border-white/5 bg-neutral-100/20 dark:bg-white/3 text-neutral-500 dark:text-neutral-400 hover:bg-neutral-100/50 dark:hover:bg-white/5"
                    }`}
                  >
                    {labels.fullOpt[lang]}
                  </button>
                </div>
              </div>

            </div>

            {/* Display Response Column (Outputs calculated blueprint) */}
            <div className="lg:col-span-5 flex flex-col items-stretch">
              <div className="flex-1 p-6 md:p-8 rounded-2xl border border-neutral-200 dark:border-white/5 bg-white dark:bg-white/5 flex flex-col justify-between shadow-sm relative overflow-hidden">
                
                {/* Visual mesh design accent */}
                <div className="absolute -top-12 -right-12 w-32 h-32 rounded-full bg-neutral-900/5 dark:bg-white/5 blur-2xl z-0" />

                <div className="space-y-6 relative z-10">
                  <span className="inline-flex items-center gap-1 text-[10px] font-bold uppercase tracking-widest text-emerald-600 dark:text-emerald-400 font-mono bg-emerald-500/10 px-2.5 py-1 rounded-full">
                    <ShieldCheck className="w-3.5 h-3.5" />
                    <span>{labels.blueprintHeader[lang]}</span>
                  </span>

                  <div>
                    <label className="text-[10px] font-mono uppercase tracking-widest text-neutral-400 block mb-1">
                      {labels.codeLabel[lang]}
                    </label>
                    <span className="text-xl md:text-2xl font-bold text-neutral-950 dark:text-white tracking-tight font-sans">
                      {lang === "en" ? blueprint.codeName : blueprint.chineseCodeName}
                    </span>
                  </div>

                  <div>
                    <label className="text-[10px] font-mono uppercase tracking-widest text-neutral-400 block mb-1">
                      {labels.durationLabel[lang]}
                    </label>
                    <p className="text-sm font-semibold text-neutral-700 dark:text-neutral-300 font-sans">
                      {lang === "en" ? blueprint.duration : blueprint.chineseDuration}
                    </p>
                  </div>

                  <div>
                    <label className="text-[10px] font-mono uppercase tracking-widest text-neutral-400 block mb-1">
                      {labels.specLabel[lang]}
                    </label>
                    <p className="text-xs sm:text-sm text-neutral-500 dark:text-neutral-400 leading-relaxed font-sans font-light">
                      {lang === "en" ? blueprint.recommendedArchitecture : blueprint.chineseRecommendedArchitecture}
                    </p>
                  </div>
                </div>

                <div className="pt-6 border-t border-neutral-100 dark:border-zinc-900 mt-6 relative z-10">
                  <button
                    id="submit-proposal-request"
                    onClick={() =>
                      onSelectServiceForContact(
                        `${activeService.title[lang]} - ${
                          lang === "en" ? blueprint.codeName : blueprint.chineseCodeName
                        }`
                      )
                    }
                    className="w-full flex items-center justify-between px-5 py-3 h-11 text-xs font-semibold uppercase tracking-widest text-white dark:text-black bg-neutral-950 dark:bg-white hover:opacity-90 active:scale-[0.98] transition-all rounded-xl"
                  >
                    <span>{labels.dispatchButton[lang]}</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>

              </div>
            </div>
          </div>
          
        </div>

      </div>
    </section>
  );
}
