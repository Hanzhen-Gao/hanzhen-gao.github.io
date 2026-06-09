const site = {
  identity: {
    name: "Gao Hanzhen",
    initials: "HG",
    tagline: "开发者 · 创造者",
    intro:
      "艺术专业出身的开发者。我在代码与视觉之间工作，把想法做成能真正运行的东西，偏爱赛博朋克与霓虹的表达。",
    avatarUrl: null,
    panel: {
      status: "开放新机会",
      info: [
        { k: "专注", v: "前端 · 自动化" },
        { k: "坐标", v: "China" },
        { k: "在做", v: "farmKing" },
      ],
    },
  },

  nav: [
    { label: "Work",    href: "work.html",    id: "work"    },
    { label: "About",   href: "about.html",   id: "about"   },
    { label: "Contact", href: "contact.html", id: "contact" },
  ],

  actions: [
    { label: "View Work", href: "work.html",    primary: true  },
    { label: "Contact",   href: "contact.html", primary: false },
  ],

  about: {
    bio: "你好，我是 Gao Hanzhen。艺术训练给了我对形式与构图的判断，写代码让我能把这些判断变成可交互的产品。从自动化脚本到 Web 应用，我享受用技术解决具体问题的过程。",
    extended:
      "艺术专业出身，后自学编程。这个组合让我对交互和视觉有自己的判断——不只是让东西「能跑」，而是让它跑起来有点意思。目前专注前端开发和自动化工具，偏爱简洁、有力的代码和设计。",
    traits: ["艺术 × 技术", "赛博朋克 / 霓虹美学", "自动化与脚本", "注重细节"],
  },

  skills: {
    groups: [
      { name: "前端与 Web",   items: ["HTML / CSS", "JavaScript"] },
      { name: "脚本与自动化", items: ["Python", "PowerShell", "Photoshop ExtendScript"] },
      { name: "工具与协作",   items: ["Git"] },
    ],
  },

  projects: [
    {
      id:          "farmking",
      slug:        "farmking",
      name:        "farmKing",
      category:    "Web Application",
      year:        2025,
      tagline:     "agricultural management system for farm workflow tracking",
      description:
        "一个农业管理方向的项目，用来记录与组织农场的日常作业流程。从业务流程梳理开始，设计了数据结构和交互逻辑，实现了任务记录、进度跟踪和流程组织。",
      process:
        "识别农场运营中的核心数据需求，设计了以作物周期和任务为中心的数据模型。前端使用 JavaScript 实现动态界面，重点优化了数据录入和查询效率。",
      context:
        "个人项目，探索将现代 Web 技术应用于传统农业管理的可能性。",
      tags:     ["JavaScript", "Web"],
      url:      "https://github.com/Hanzhen-Gao/farmKing",
      featured: true,
    },
    {
      id:          "ps-scripts",
      slug:        "ps-scripts",
      name:        "PS Scripts",
      category:    "Automation · Tooling",
      year:        2024,
      tagline:     "photoshop automation scripts for batch image processing",
      description:
        "Photoshop ExtendScript 自动化脚本集合，把重复的修图与批处理流程一键化。针对图像处理工作流中的重复操作，编写了可复用的自动化工具。",
      process:
        "识别修图工作流中的重复步骤，用 ExtendScript API 逐步实现各类自动化操作。最终整理成模块化的脚本集，支持批量处理和自定义参数。",
      context:
        "在图像处理项目中，为提升效率而开发，后整理成可分享的工具集。",
      tags:     ["ExtendScript", "JavaScript", "Automation"],
      url:      "https://github.com/Hanzhen-Gao/ps-scripts",
      featured: true,
    },
  ],

  contact: {
    intro: "有想法、合作机会，或只是想聊聊技术与设计？欢迎随时找我。",
    links: [
      {
        label: "Email",
        href:  "mailto:gaohanzhen00@gmail.com",
        text:  "gaohanzhen00@gmail.com",
      },
      {
        label: "GitHub",
        href:  "https://github.com/Hanzhen-Gao",
        text:  "github.com/Hanzhen-Gao",
      },
    ],
  },

  footer: {
    year: 2026,
    name: "Gao Hanzhen",
  },
};

export default site;
