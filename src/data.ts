export interface Translation {
  en: string;
  zh: string;
}

export interface TranslatedProject {
  id: string;
  title: string;
  tagline: Translation;
  category: Translation;
  description: Translation;
  longDescription: Translation;
  image: string;
  gallery: string[];
  role: Translation;
  year: string;
  client: string;
  tags: string[];
  stats: { label: Translation; value: string }[];
  accentColor: string;
  accentBg: string;
  testimonial?: {
    text: Translation;
    author: Translation;
    company: Translation;
    avatar: string;
  };
  fullCaseStudy: {
    challenge: Translation;
    approach: Translation;
    outcome: Translation;
  };
}

export interface TranslatedService {
  id: string;
  title: Translation;
  description: Translation;
  iconName: string;
  deliverables: Translation[];
}

export interface TranslatedExperience {
  year: string;
  role: Translation;
  company: string;
  description: Translation;
}

export const PROFILE_DATA = {
  name: "Marcus Vance",
  chineseName: "万梓安",
  title: {
    en: "Lead Product & Interaction Designer",
    zh: "首席产品与交互设计师"
  },
  location: {
    en: "Based in San Francisco • Available worldwide",
    zh: "现居旧金山 • 承接全球业务"
  },
  avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=400&h=400",
  bio: {
    en: "Crafting digital frameworks where elegance meets high performance. Specializing in spatial UI, next-generation wearable interactions, and tactile web craftsmanship.",
    zh: "探寻至雅之美与极致性能的数字化融合。专注于全息立体空间交互、次世代智能可穿戴设备界面设计以及富有触感温度的高级前端美学。"
  },
  detailedIntro: {
    en: "For over 8 years, I have partnered with pioneering technology brands and visionary founders to translate complex systems into human-centric products. My design practice is anchored in grid rigor, typographic hierarchies, and micro-animations that feel completely organic. Believing that user interest is earned through impeccable execution, I create interfaces that do not simply perform duties, but cultivate lasting delight.",
    zh: "专注于数字产品设计的 8 年间，我与一众先锋科技品牌及充满远见的创始人并肩前行，将复杂的系统逻辑转化为兼备人文温度的产品。我的设计哲学植根于严谨的栅格比例、考究的排版层次，以及宛如呼吸般自然的微交互。我始终深信，极致的情感链接源于对每一处像素的精雕细琢，卓越的交互应当能在优雅解决问题之余，带给用户润物无声的愉悦感。"
  },
  philosophies: [
    {
      title: { en: "Minimal, but intense", zh: "极简，而极深" },
      desc: { en: "Extruding every dispensable line until only pure functionality and structural harmony remain.", zh: "剔除所有冗余的装饰性线条，直至裸露出纯粹的功能内核与完美的黄金比例。" }
    },
    {
      title: { en: "Physicality in digital space", zh: "数字界面的实体质感" },
      desc: { en: "Guiding users via organic light, realistic inertia, and micro-textures mimicking tactile materials.", zh: "利用自然的流光、真实的惯性阻尼以及逼真的材质肌理，引导用户进行无阻力的自然滑动。" }
    },
    {
      title: { en: "Performance is an aesthetic", zh: "极致性能即是美" },
      desc: { en: "An app that is visually stunning must also load instantly. Flow must never yield to friction.", zh: "动人心魄的视觉，必须伴随着瞬时响应的加载体验而生。心流，决不应为卡顿而中断。" }
    }
  ],
  stats: [
    { label: { en: "Years Experience", zh: "行业深耕积累" }, value: "8+" },
    { label: { en: "Completed Projects", zh: "精品案例上线" }, value: "40+" },
    { label: { en: "Happy Clients", zh: "品牌客户赞誉" }, value: "98%" },
    { label: { en: "Design Awards", zh: "国际设计大奖" }, value: "12" }
  ]
};

export const SERVICES_DATA: TranslatedService[] = [
  {
    id: "spatial",
    title: { en: "Spatial & Immersive Systems", zh: "全息空间与沉浸式系统" },
    description: {
      en: "Designing depth, materials, and canvas hierarchies for AR/VR frameworks and spatial hardware platforms.",
      zh: "为 AR/VR 全息框架和空间计算硬件定制交互深度、拟真材质、环境光渲染以及多层画布层级。"
    },
    iconName: "Compass",
    deliverables: [
      { en: "3D Interaction Guidelines", zh: "三维空间交互规范" },
      { en: "Figma Spatial Component Libraries", zh: "Figma 空间原件库" },
      { en: "Eye & Gesture Navigation Flows", zh: "眼动与手势交互流模型" },
      { en: "Interactive Prototyping", zh: "三维可感交互原型" }
    ]
  },
  {
    id: "product",
    title: { en: "Digital Product Craft", zh: "次世代数字化产品打磨" },
    description: {
      en: "Synthesizing research transcripts and backend workflows into simple, high-converting premium web and mobile apps.",
      zh: "将密集的用户研究报告与后端微服务架构，重组构建为清爽、高转化率、殿堂级感官体验的移动与网页应用。"
    },
    iconName: "Smartphone",
    deliverables: [
      { en: "End-to-end UX/UI Design", zh: "端到端系统级 UX/UI 设计" },
      { en: "Comprehensive Design Systems", zh: "企业级高可维护性设计系统" },
      { en: "High-Fidelity Wireframes", zh: "像素级高保真线框图" },
      { en: "Interactive Mockups", zh: "可真实触达的原型演示" }
    ]
  },
  {
    id: "brand",
    title: { en: "Brand Systems & Identity", zh: "全域品牌标识与视觉规范" },
    description: {
      en: "Establishing distinct semantic rules, unique custom typography systems, and gorgeous 3D motion-led brand assets.",
      zh: "为品牌确立极具辨识度的语义规则，塑造专一化的定制排版系统与精美动人心魄的 3D 动态品牌资产。"
    },
    iconName: "Layers",
    deliverables: [
      { en: "Visual Identity Systems", zh: "VI 品牌视觉识别系统" },
      { en: "Custom Digital Typeface Art", zh: "数字排版与定制字体艺术" },
      { en: "Sleek WebGL/3D Brand Loops", zh: "WebGL/3D 极简品牌循环微电影" },
      { en: "Editorial Presentation Guidelines", zh: "发布会级别演示排版指南" }
    ]
  }
];

export const EXPERIENCE_DATA: TranslatedExperience[] = [
  {
    year: "2024 - Present",
    role: { en: "Lead Product Designer", zh: "首席体验设计专家" },
    company: "Aether Reality Labs",
    description: {
      en: "Pioneering spatial interface design guidelines for next-generation smart glasses. Spearheaded the design of spatial multi-tasking engines.",
      zh: "领衔设计次世代智能 AR 眼镜的空间界面交互准则。主导开发了多屏全息协同办公及视线交互物理阻尼反馈引擎。"
    }
  },
  {
    year: "2021 - 2024",
    role: { en: "Senior Interaction Designer", zh: "高级交互设计师" },
    company: "Studio Obsidian",
    description: {
      en: "Crafted deep-tech application dashboards, beautiful fintech checkout interactions, and high-end automotive media systems for global clients.",
      zh: "为全球顶尖品牌深度定制金融级无缝瞬时结算界面、大数据可视化驾驶舱，以及豪华纯电旗舰中控车机系统。"
    }
  },
  {
    year: "2019 - 2021",
    role: { en: "UX Specialist", zh: "中坚交互设计师" },
    company: "Luminary AI Co.",
    description: {
      en: "Led user experience design for personal assistant tools. Designed an unified chat interface receiving several UX design nominations.",
      zh: "主调人工智能个人管家在复杂场景下的决策链呈现。构建的拟人化卡片流界面荣获多项国际数字交互体验提名。"
    }
  }
];

export const PROJECTS_DATA: TranslatedProject[] = [
  {
    id: "vision-hub",
    title: "Aura Spatial OS",
    tagline: {
      en: "Defining the workspace of 2030 through spatial multitasking and material ambient physics.",
      zh: "通过立体空间多任务流与拟真光感物理引擎，开启 2030 交互纪元。"
    },
    category: { en: "Spatial Design", zh: "空间全息计算" },
    description: {
      en: "A comprehensive design exploration mapping fluid human eyes and slight finger gestures to deep spatial productivity boards.",
      zh: "一次颠覆性的跨维度设计，将人体精细眼动与微小指尖手势，映射连接至三维无边界办公画布。"
    },
    longDescription: {
      en: "Built specifically around the concept of physical-digital translucency, Aura Spatial OS enables corporate visionaries to arrange multiple application workspaces in natural environments. By carefully rendering real-time drop shadows, dynamic depth layers, and ambient refraction, the operating interface acts like physical glass — responsive to room light, natural eye focus, and distance inertia.",
      zh: "围绕“物理与数字的半透共生”理念量身打造，Aura Spatial OS 允许创意工作者在现实环境中铺展无上限的三维工作画布。通过实时高精度阴影遮罩、多维立体景深与环境磨砂折射率，使数位面板宛如坚实细腻的真实玻璃——能够随着光线强弱和眼球聚焦的远近做出丝滑响应，实现彻底消除视觉疲劳的长时间沉浸体验。"
    },
    image: "https://images.unsplash.com/photo-1622979135225-d2ba269cf1ac?auto=format&fit=crop&q=80&w=1200&h=675",
    gallery: [
      "https://images.unsplash.com/photo-1586075010923-2dd4570fb338?auto=format&fit=crop&q=80&w=600&h=400",
      "https://images.unsplash.com/photo-1478147427282-58a87a120781?auto=format&fit=crop&q=80&w=600&h=400"
    ],
    role: { en: "Lead Spatial / Interaction UX", zh: "首席空间交互、架构与 UX" },
    year: "2025",
    client: "Aether Labs IP",
    tags: ["Spatial Computations", "Vision OS", "3D Gestures", "Glassmorphism"],
    stats: [
      { label: { en: "Interaction Latency Minimization", zh: "交互信号延迟降至" }, value: "< 7ms" },
      { label: { en: "User Focus Task Continuity", zh: "用户专注状态持续度" }, value: "+178%" },
      { label: { en: "Collaborative Synergy Rating", zh: "多端实时协同评价" }, value: "4.9/5.0" }
    ],
    accentColor: "#6D28D9",
    accentBg: "from-purple-950/40 via-purple-900/10 to-transparent",
    testimonial: {
      text: {
        en: "Working with Marcus felt like looking directly into a portal of future digital interfaces. Truly remarkable focus on subtle craft details.",
        zh: "与 Marcus 的协作，令人感觉像是提前窥见了未来十年数字交互的神秘长廊。他对极简像素颗粒的执着，是绝无仅有的艺术。"
      },
      author: { en: "Elena Rostova", zh: "艾琳娜 · 罗斯托娃" },
      company: { en: "VP of Product, Aether Reality Labs", zh: "Aether 现实实验室产品副总裁" },
      avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=200&h=200"
    },
    fullCaseStudy: {
      challenge: {
        en: "Current spatial computing headsets suffer from visually taxing interfaces and non-intuitive gesture triggers. Designing interfaces that float in diverse room conditions without visual clutter was a massive barrier.",
        zh: "当下的空间计算头戴设备普遍面临眼球对焦对不准、复杂的非直觉手势指令门槛高，以及界面在不同现实光影和杂乱背景下由于对比度不足而频频失真的结构性屏障。"
      },
      approach: {
        en: "We discarded flat pixel buttons and introduced adaptive depth boundaries. Components react to human eye focus by subtly shifting closer, casting progressive micro shadows, and applying live Gaussian blur filters to the real-world pixels behind them.",
        zh: "我们毅然遗弃了平铺的像素化按钮，引入了自适应空间景深边缘。所有组件在被投射目光的千万分之一秒内，会微妙浮动靠前，投射出精密的渐进式立体微阴影，并在现实背景极噪处应用高透高斯磨砂模糊滤镜，始终保障可读性。"
      },
      outcome: {
        en: "A proprietary design framework featuring a 12-column grid scaled using solid visual angles. Over 40 interactive modules built seamlessly into high-fidelity web prototypes that load instantly at 90fps.",
        zh: "建立了一套具有革命性的、自适应视角仰俯偏差的 12 栏弹性全息栅格组件。多达 40 件高拟真可交互面板在 90 帧丝滑速率下轻量载入，成为行业广泛效仿的范本。"
      }
    }
  },
  {
    id: "smart-ring",
    title: "Nova Ring Experience",
    tagline: {
      en: "Reimagining wearable biosensing through invisible digital feedback and soft rhythmic motion.",
      zh: "以无感交互与韵律光波微振动，重新界定智能戒指对健康的无形守护。"
    },
    category: { en: "Digital Product", zh: "数字硬件产品" },
    description: {
      en: "A beautiful hardware companion app employing organic breathing curves and tactile charts to guide daily biological rhythms.",
      zh: "一部与奢华智能指环完美咬合的软件伴侣。采用契合呼吸曲线的无边框图形，提供有体感、极度克制的健康洞察。"
    },
    longDescription: {
      en: "Nova is a highly refined companion app built for a conceptual precious-metal smart ring. Rather than inundating the user with scary diagnostic graphs and cluttered numbers, the app presents biometric data (heart rate variability, deep sleep efficiency, active recovery) as fluid gradients in continuous orbit. Visual components feel softer, reflecting calmer human circadian rhythms.",
      zh: "Nova 智能指环伴侣致力于让重度数字焦虑者重寻内心的平和。它彻底摒弃了让人心生畏惧的多彩统计折线、警示红点和高压数字报表，取而代之的是将生物体核心指标（心率变异、深度睡眠、代谢恢复度）演绎成交融重叠、缓缓流转的呼吸渐变球体。不仅向外透着物理学的精确，更抚慰着人类内心生物钟的作息律动。"
    },
    image: "https://images.unsplash.com/photo-1598331668826-20cecc596b86?auto=format&fit=crop&q=80&w=1200&h=675",
    gallery: [
      "https://images.unsplash.com/photo-1510519138101-570d1dca3d66?auto=format&fit=crop&q=80&w=600&h=400",
      "https://images.unsplash.com/photo-1506157786151-b8491531f063?auto=format&fit=crop&q=80&w=600&h=400"
    ],
    role: { en: "Lead Mobile Product Designer", zh: "移动客户端主设、色彩学总监" },
    year: "2024",
    client: "Nova Biosensing Corp",
    tags: ["Wearable Companion", "iOS Design", "Generative Gradients", "Data Art"],
    stats: [
      { label: { en: "Daily App Sticky Retention", zh: "日活跃高粘滞存留率" }, value: "74%" },
      { label: { en: "App Store Feature Placements", zh: "苹果应用商店编辑推荐" }, value: "3x" },
      { label: { en: "Biometric Reading Clarity Rating", zh: "生物体指引易读满意度" }, value: "99.2%" }
    ],
    accentColor: "#14B8A6",
    accentBg: "from-teal-950/40 via-teal-900/10 to-transparent",
    testimonial: {
      text: {
        en: "Marcus delivered design systems that look like luxury art. He bypassed standard software paradigms to construct something deeply spiritual.",
        zh: "Marcus 为我们交出的不仅是设计稿，它是置身奢侈品画廊的数字艺术品。他跨过了凡俗软件条框，雕筑起更深沉的心流能量。"
      },
      author: { en: "Julian Vance", zh: "朱利安 · 凡斯" },
      company: { en: "Founder, Nova Biosensing", zh: "Nova 生物科技联合创始人兼 CEO" },
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=200&h=200"
    },
    fullCaseStudy: {
      challenge: {
        en: "Most health tracking apps cause visual stress. Bombarding users with charts causes cognitive fatigue, forcing them to abandon wearable habits.",
        zh: "市面上绝大多数健康监测 APP 都在输出重度数字压力。密密麻麻的专业医学词汇和急促跳跃的数据表盘极易唤醒心理恐慌，导致大量用户逃避佩戴戒指、停开信息。"
      },
      approach: {
        en: "We treated health metrics as environmental phenomena. Heartbeat is an organic breathing halo; resting status is a calm misty horizon. Interaction elements emerge out of negative space only when custom biometric events arise.",
        zh: "我们革命性地将人体数值提炼为自然现象。心跳频率被刻画为缓缓弥散的温存光环；静息修复度则是一抹风平浪静的薄雾海平线。只有当数值严重偏离日常均线时，警示动作才会以优雅低调的水滴波纹形态在留白空隙中徐徐凝结，绝不喧宾夺主。"
      },
      outcome: {
        en: "A globally acclaimed iOS companion application. Praised by design journalists for proving tech interfaces can calm human adrenaline rather than spikes.",
        zh: "诞生了一款享誉行业的杰出产品。得到了多家国际先锋科技媒体的高度赞赏，成功开创了以科技治愈现代人信息焦虑的感官交互里程碑。"
      }
    }
  },
  {
    id: "horizon-electric",
    title: "Horizon Flagship OS",
    tagline: {
      en: "Cinematic vehicular interface merging real-time telemetry with editorial visual pacing.",
      zh: "以影视级车机互联系统，实现智驾行车指令与高雅美学表达的并线飞驰。"
    },
    category: { en: "Motion Design", zh: "影视动效交互" },
    description: {
      en: "An ultra-premium EV dashboard redesign showcasing high-contrast physics-driven speed dials and subtle cinematic maps.",
      zh: "一次对殿堂级纯电跑车车机大脑的解构重造。内置了高对比、融合物理阻尼的速度仪表和影视流体导航系统。"
    },
    longDescription: {
      en: "Horizon Fleet OS breaks current automotive paradigms. Inspired by brutalist swiss typography and raw cinematic pacing, we mapped standard vehicle states into massive high-constrast editorial viewports. When accelerating, typography scales dynamically; when braking, the UI collapses gently to let raw driving visuals govern your focus.",
      zh: "Horizon Fleet OS 自主打破了传统车载系统的陈旧套路。灵感萃取自经典瑞士现代主义排版与电影镜头转承美学，各舱段状态被巧妙安置在超宽、高对比的卡片中。随着引擎轰鸣，重力传感器驱动排版微妙回溯拉伸；车辆静止时，次要指标悄无声息地向边缘淡化，让开阔无阻的行车地图与真实窗外景致主导驾驶者的黄金视野。"
    },
    image: "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&q=80&w=1200&h=675",
    gallery: [
      "https://images.unsplash.com/photo-1617814076367-b759c7d7e738?auto=format&fit=crop&q=80&w=600&h=400",
      "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&q=80&w=600&h=400"
    ],
    role: { en: "Lead In-Car Automotive Designer", zh: "纯电车机系统设计总监" },
    year: "2023",
    client: "Horizon Electric Group",
    tags: ["Automotive HMI", "Dynamic Layout", "Motion Typography", "WebGL Map Engine"],
    stats: [
      { label: { en: "Driving Sight Distraction Drop", zh: "驾驶专注视线分散率降低" }, value: "48%" },
      { label: { en: "Interface Boot Up Speed", zh: "冷启动至流畅操作耗时" }, value: "0.2s" },
      { label: { en: "Automotive HMI Rank", zh: "HMI 综合美学评比" }, value: "No. 1" }
    ],
    accentColor: "#F59E0B",
    accentBg: "from-amber-950/40 via-amber-900/10 to-transparent",
    testimonial: {
      text: {
        en: "Marcus rebuilt our flagship sedan's entire cognitive cockpit. His work set an aggressive new benchmark for EV software.",
        zh: "Marcus 以一人之力改写了我们旗舰超级房车复杂的座舱脑电图。他的设计，在瞬息之间树立了硬奢跑车操作系统的当代高墙。"
      },
      author: { en: "Marcio Moreno", zh: "马西奥 · 莫雷诺" },
      company: { en: "Design Principal, Horizon Group", zh: "Horizon 集团设计合伙人兼顾问" },
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=200&h=200"
    },
    fullCaseStudy: {
      challenge: {
        en: "Modern luxury car screens are turning into giant chaotic smart tablet displays, leading to deep visual clutter, screen lag, and critical driving distraction.",
        zh: "当下一多半的主流高档车大屏幕正沦为廉价平板电脑的物理放大版。信息堆叠膨胀、触摸时有延迟卡顿，严重侵害了驾车者本该拥有的纯粹感官集中度。"
      },
      approach: {
        en: "We developed an adaptive sensory navigation approach. Major driving indicators are scaled to extreme size paired with huge high-contrast serif counters. In active sport modes, custom-tuned fluid graphic particles shimmer across the dark glass borders representing tire friction.",
        zh: "我们构筑了一套自适应知觉车脑系统。其将车速与续航刻画为对比强烈的特粗无衬线数位，在开启高频运动模式时，车机两侧的黑曜石玻璃暗区会映现出基于摩擦反馈、幽深浮动的 WebGL 颗粒波纹，极具科幻冲击力。"
      },
      outcome: {
        en: "The Horizon Fleet Dashboard interface went on to receive the premium automotive design award in Frankfurt. Praised for saving drivers from modern layout fatigue.",
        zh: "此车机界面一举斩获法兰克福国际超跑设计卓越创新大奖。因对极简视觉层级的大胆重构，它被评价为“治好了现代人智能车机恐惧度”的划时代作品。"
      }
    }
  },
  {
    id: "vapor-checkout",
    title: "Vapor Commerce Core",
    tagline: {
      en: "Eliminating digital check-out barriers with fluid aesthetic state layouts.",
      zh: "以无界美学排版与极致轻盈的流态化结算，终结一切线上购物付款的阻涩感。"
    },
    category: { en: "Brand Identity", zh: "品牌视觉与交互" },
    description: {
      en: "An exclusive modern e-commerce buying pipeline centering luxury items via dramatic typography and physics-driven micro-drawers.",
      zh: "一项专为顶级奢侈品搭建的线上流通引擎。用精美的衬线排版搭配弹指间收展的流体抽屉，呈送至臻尊贵的购物仪式。"
    },
    longDescription: {
      en: "Vapor Commerce redefines high-end web acquisitions. Developed for an architectural jewelry brand, the system trades clumsy cart models for dynamic overlapping state card panels. Each step of secure checkout flows smoothly into the next, mimicking the satisfying tactile click of physical drawer slides in a high-fashion atelier.",
      zh: "Vapor Commerce 重新定义了顶级互联网藏品与奢侈品的交付范式。出于对一家殿堂级手工配饰品牌的崇高致敬，我们彻底废弃了累赘反复的结算跨页。利用多重复合叠加卡，每轮确认自然向内渗透并展现高级的卡纸微浮雕质感，让用户体验到如同在巴黎高定手工坊拉开复古原木饰面抽屉般惬意而笃定的声音反馈。"
    },
    image: "https://images.unsplash.com/photo-1541643600914-78b084683601?auto=format&fit=crop&q=80&w=1200&h=675",
    gallery: [
      "https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&q=80&w=600&h=400",
      "https://images.unsplash.com/photo-1508746829417-e6f548d8d6ed?auto=format&fit=crop&q=80&w=600&h=400"
    ],
    role: { en: "Lead Conversion Architect & Brand Lead", zh: "主产品交互架构师、高级创意视觉总监" },
    year: "2024",
    client: "Studio Vapor Worldwide",
    tags: ["High-End E-Commerce", "Web Engineering", "Elastic Interactions", "Branding"],
    stats: [
      { label: { en: "Digital Cart Conversion Boost", zh: "线上加入购物车后结算率提升" }, value: "+34.2%" },
      { label: { en: "Mobile Purchase Cycle Time", zh: "单笔极速交易响应周期" }, value: "1.4s" },
      { label: { en: "E-Commerce Experience Score", zh: "奢侈品客户结算好评度" }, value: "4.95/5.0" }
    ],
    accentColor: "#EC4899",
    accentBg: "from-pink-950/40 via-pink-900/10 to-transparent",
    testimonial: {
      text: {
        en: "Our checkout abandonment dropped to near zero. He captured the literal smell of premium physical retail and built it into web code.",
        zh: "我们线上展品的流失漏斗几乎降到了零。Marcus 仿佛把奢侈品门店的精油气味与高贵呼吸感，牢牢刻进了网页底层代码中。"
      },
      author: { en: "Sarah Croft", zh: "莎拉 · 克罗夫特" },
      company: { en: "Commercial Director, Vapor Artistry", zh: "Vapor 艺术品电商业务运营总监" },
      avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=200&h=200"
    },
    fullCaseStudy: {
      challenge: {
        en: "High-net-worth buyers feel alienated by clunky, generic checkout grids built with vulgar yellow buttons and massive aggressive multi-step credit forms.",
        zh: "高净值消费者在面对千篇一律、带着刺眼亮黄色付款按钮和各种令人压抑的信息框的流水线式结算网格时，往往会瞬间出戏，中断本来饱满的审美情绪。"
      },
      approach: {
        en: "We treated digital purchase as a secure presentation. Input fields emerge out of pure whitespace, typography utilizes extremely wide margins, and the purchase button scales with the spring physics engine to reflect physical weight when swiped.",
        zh: "我们视交易为优雅的“赠礼投递仪式”。所有录入框在轻抚焦点时光照弥散；极宽大、近乎图书装帧的版式拉升高级气息；而“即刻拥有”按钮更融入了空气阻尼引擎，通过指尖轻扫，散发实体黄金器皿般的受力回馈。"
      },
      outcome: {
        en: "A gorgeous, highly customized merchant buying sequence which became a celebrated design standard for premium direct-to-consumer art houses.",
        zh: "打造了一款让买家流连忘返的尊奢结算画轴。一经推出便成为众多轻奢先锋、手工典藏品牌直接争相效仿与授权的顶配购物界面标杆。"
      }
    }
  }
];
