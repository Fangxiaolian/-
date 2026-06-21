import React from "react";
import { motion, AnimatePresence } from "motion/react";
import { Mail, ArrowRight, CheckCircle2, RefreshCw, Send, HelpCircle } from "lucide-react";

interface ContactSectionProps {
  lang: "en" | "zh";
  prefilledService: string;
}

export default function ContactSection({ lang, prefilledService }: ContactSectionProps) {
  const [formData, setFormData] = React.useState({
    name: "",
    email: "",
    organization: "",
    service: "",
    budget: "$20,000 - $50,000",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = React.useState(false);
  const [submitStatus, setSubmitStatus] = React.useState<"idle" | "done">("idle");

  // React to prefilled service changes
  React.useEffect(() => {
    if (prefilledService) {
      setFormData((prev) => ({ ...prev, service: prefilledService }));
      // Scroll to contact section
      const el = document.getElementById("contact");
      if (el) {
        el.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [prefilledService]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email) return;

    setIsSubmitting(true);

    // Simulate luxury sync handshake (Apple-like server validation)
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitStatus("done");
      // Clean form on success
      setFormData({
        name: "",
        email: "",
        organization: "",
        service: "",
        budget: "$20,000 - $50,000",
        message: "",
      });
    }, 1800);
  };

  const labels = {
    title: { en: "Initiate Conversation", zh: "开启深度合作对谈" },
    subtitle: { en: "Let's align values and build something permanent.", zh: "让我们跨越语言与国界，将您宏伟的战略抱负转化为无瑕的设计实体。" },
    nameLabel: { en: "Full Name", zh: "阁下姓名" },
    emailLabel: { en: "Corporate Email Address", zh: "商业邮箱" },
    orgLabel: { en: "Organization / Company", zh: "公司或组织机构" },
    srvLabel: { en: "Service Core or Proposal Blueprint", zh: "定制设计领域或特定代号方案" },
    budgetLabel: { en: "Allocated Venture Budget", zh: "估算项目预算范围" },
    msgLabel: { en: "Brief Project Brief", zh: "简单描述您的创意抱负" },
    placeholderMsg: { en: "Tell me about the challenge you are trying to solve...", zh: "描述您的受众、亟待攻克的业务难点，以及对项目的核心规划..." },
    submitButton: { en: "Establish Handshake", zh: "确认建立安全联络" },
    submittingText: { en: "Syncing secure handshake payload...", zh: "安全数据通信注册中..." },
    successHeader: { en: "Handshake Complete", zh: "联络注册成功" },
    successDesc: {
      en: "Thank you. Your custom footprint has been cached. Marcus Vance will reach back with a tailored portfolio consultation deck inside 24 hours.",
      zh: "非常感谢。您的专属合作意愿数据已安全离线注册。设计师万梓安 Marcus 将在 24 小时内向阁下的商业邮箱发送一份深度定制方案分析图册。"
    },
    resetForm: { en: "Submit Another Request", zh: "递交另一项需求对谈" }
  };

  return (
    <section id="contact" className="py-24 bg-neutral-50 dark:bg-elegant-dark transition-colors duration-500 border-t border-neutral-200/20 dark:border-white/5">
      <div className="max-w-4xl mx-auto px-4 md:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="text-xs font-bold uppercase tracking-widest text-neutral-400 font-mono mb-4 flex items-center justify-center gap-1.5">
            <Mail className="w-3.5 h-3.5 text-neutral-400" />
            <span>04 / {lang === "en" ? "SECURE HANDSHAKE" : "合作联络"}</span>
          </p>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-neutral-900 dark:text-white font-sans">
            {labels.title[lang]}
          </h2>
          <p className="mt-4 text-xs sm:text-sm md:text-base text-neutral-500 dark:text-neutral-400 font-sans font-light leading-relaxed">
            {labels.subtitle[lang]}
          </p>
        </div>

        {/* Outer Form Canvas with Animate Presence */}
        <div className="relative rounded-3xl border border-neutral-200/50 dark:border-white/5 bg-white dark:bg-white/5 p-6 md:p-10 shadow-sm overflow-hidden">
          
          <AnimatePresence mode="wait">
            {submitStatus === "idle" ? (
              <motion.form
                key="contact-form"
                initial={{ opacity: 1 }}
                exit={{ opacity: 0, scale: 0.98 }}
                transition={{ duration: 0.4 }}
                onSubmit={handleSubmit}
                className="space-y-6"
                id="contact-form-element"
              >
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {/* Name field */}
                  <div className="space-y-1">
                    <label className="text-[10px] font-mono uppercase tracking-widest text-neutral-400">
                      {labels.nameLabel[lang]} <span className="text-neutral-900 dark:text-white">*</span>
                    </label>
                    <input
                      type="text"
                      id="input-name"
                      required
                      placeholder="Jane Doe"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-3 h-11 text-sm rounded-xl border border-neutral-200 dark:border-white/10 bg-neutral-100/10 dark:bg-white/5 text-neutral-900 dark:text-white placeholder-neutral-400 focus:outline-none focus:border-neutral-900 dark:focus:border-white transition-all duration-300"
                    />
                  </div>

                  {/* Email field */}
                  <div className="space-y-1">
                    <label className="text-[10px] font-mono uppercase tracking-widest text-neutral-400">
                      {labels.emailLabel[lang]} <span className="text-neutral-900 dark:text-white">*</span>
                    </label>
                    <input
                      type="email"
                      id="input-email"
                      required
                      placeholder="work@company.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-3 h-11 text-sm rounded-xl border border-neutral-200 dark:border-white/10 bg-neutral-100/10 dark:bg-white/5 text-neutral-900 dark:text-white placeholder-neutral-400 focus:outline-none focus:border-neutral-900 dark:focus:border-white transition-all duration-300"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {/* Organization */}
                  <div className="space-y-1">
                    <label className="text-[10px] font-mono uppercase tracking-widest text-neutral-400">
                      {labels.orgLabel[lang]}
                    </label>
                    <input
                      type="text"
                      id="input-org"
                      placeholder="e.g. Acme Corp"
                      value={formData.organization}
                      onChange={(e) => setFormData({ ...formData, organization: e.target.value })}
                      className="w-full px-4 py-3 h-11 text-sm rounded-xl border border-neutral-200 dark:border-white/10 bg-neutral-100/10 dark:bg-white/5 text-neutral-900 dark:text-white placeholder-neutral-400 focus:outline-none focus:border-neutral-900 dark:focus:border-white transition-all duration-300"
                    />
                  </div>

                  {/* Prefilled/Custom Service selection */}
                  <div className="space-y-1">
                    <label className="text-[10px] font-mono uppercase tracking-widest text-neutral-400">
                      {labels.srvLabel[lang]}
                    </label>
                    <input
                      type="text"
                      id="input-service"
                      placeholder="e.g. Digital Product Design"
                      value={formData.service}
                      onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                      className="w-full px-4 py-3 h-11 text-sm rounded-xl border border-neutral-200 dark:border-white/10 bg-neutral-100/10 dark:bg-white/5 text-neutral-900 dark:text-white placeholder-neutral-400 focus:outline-none focus:border-neutral-900 dark:focus:border-white transition-all duration-300"
                    />
                  </div>
                </div>

                {/* Budget selection list */}
                <div className="space-y-2">
                  <label className="text-[10px] font-mono uppercase tracking-widest text-neutral-400 block">
                    {labels.budgetLabel[lang]}
                  </label>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
                    {["$10,000 - $20,000", "$20,000 - $50,000", "$50,000+"].map((rate) => (
                      <button
                        key={rate}
                        type="button"
                        id={`budget-btn-${rate.replace(/[\s,+$]/g, '')}`}
                        onClick={() => setFormData({ ...formData, budget: rate })}
                        className={`py-3 h-11 px-4 text-xs font-semibold rounded-xl border transition-all text-center ${
                          formData.budget === rate
                            ? "border-neutral-900 dark:border-white bg-neutral-50 dark:bg-[#111111] text-neutral-900 dark:text-white"
                            : "border-neutral-250/20 dark:border-white/5 bg-neutral-50/25 dark:bg-white/3 text-neutral-500 dark:text-neutral-400"
                        }`}
                      >
                        {rate}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Main Message Area */}
                <div className="space-y-1">
                  <label className="text-[10px] font-mono uppercase tracking-widest text-neutral-400">
                    {labels.msgLabel[lang]}
                  </label>
                  <textarea
                    rows={4}
                    id="input-message"
                    placeholder={labels.placeholderMsg[lang]}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full p-4 text-sm rounded-xl border border-neutral-200 dark:border-white/10 bg-neutral-100/10 dark:bg-white/5 text-neutral-900 dark:text-white placeholder-neutral-400 focus:outline-none focus:border-neutral-900 dark:focus:border-white transition-all duration-300 resize-none"
                  />
                </div>

                {/* Submission button inside control */}
                <div className="pt-4 border-t border-neutral-100 dark:border-white/5 flex items-center justify-end">
                  <button
                    type="submit"
                    id="form-submit-btn"
                    disabled={isSubmitting}
                    className="flex items-center justify-center space-x-3 px-8 py-3 h-11 text-xs font-bold uppercase tracking-widest text-white dark:text-black bg-neutral-950 dark:bg-white hover:opacity-90 active:scale-[0.98] transition-all rounded-xl disabled:opacity-50"
                  >
                    {isSubmitting ? (
                      <>
                        <RefreshCw className="w-3.5 h-3.5 animate-spin" />
                        <span>{labels.submittingText[lang]}</span>
                      </>
                    ) : (
                      <>
                        <Send className="w-3.5 h-3.5" />
                        <span>{labels.submitButton[lang]}</span>
                      </>
                    )}
                  </button>
                </div>
              </motion.form>
            ) : (
              <motion.div
                key="success-container"
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
                className="py-12 px-6 md:px-12 text-center flex flex-col items-center justify-center max-w-lg mx-auto"
                id="submit-success-block"
              >
                <div className="w-16 h-16 rounded-full bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-500 mb-6">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-bold tracking-tight text-neutral-950 dark:text-white font-sans mb-3">
                  {labels.successHeader[lang]}
                </h3>
                <p className="text-xs sm:text-sm text-neutral-500 dark:text-neutral-400 leading-relaxed font-light mb-8">
                  {labels.successDesc[lang]}
                </p>
                <button
                  id="reset-form-btn"
                  onClick={() => setSubmitStatus("idle")}
                  className="px-6 py-2.5 rounded-full border border-neutral-200 dark:border-white/10 text-xs font-semibold uppercase tracking-widest text-neutral-700 dark:text-neutral-300 hover:bg-neutral-100 dark:hover:bg-white/5 transition-all font-sans"
                >
                  {labels.resetForm[lang]}
                </button>
              </motion.div>
            )}
          </AnimatePresence>
          
        </div>

      </div>
    </section>
  );
}
