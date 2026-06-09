// 站点内容数据。新增字段（intro / panel / traits / skill groups / project tags /
// contact intro）是这次布局重构引入的，按需替换成你的真实信息。
const site = {
  identity: {
    name: "Gao Hanzhen",
    initials: "HG",
    tagline: "开发者 · 创造者",
    // hero 左侧的一句话定位
    intro:
      "艺术专业出身的开发者。我在代码与视觉之间工作，把想法做成能真正运行的东西，偏爱赛博朋克与霓虹的表达。",
    avatarUrl: null, // 替换为图片路径即可，如 "assets/avatar.jpg"

    // hero 右侧毛玻璃面板：终端风格的身份信息行
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
    { label: "关于", href: "#about" },
    { label: "技能", href: "#skills" },
    { label: "项目", href: "#projects" },
    { label: "联系", href: "#contact" },
  ],

  // hero 主行动按钮
  actions: [
    { label: "查看项目", href: "#projects", primary: true },
    { label: "联系我", href: "#contact", primary: false },
  ],

  about: {
    heading: "关于我",
    body:
      "你好，我是 Gao Hanzhen。艺术训练给了我对形式与构图的判断，写代码让我能把这些判断变成可交互的产品。从自动化脚本到 Web 应用，我享受用技术解决具体问题的过程。",
    traits: ["艺术 × 技术", "赛博朋克 / 霓虹美学", "自动化与脚本", "注重细节"],
  },

  skills: {
    heading: "技能",
    groups: [
      { name: "前端与 Web", items: ["HTML / CSS", "JavaScript"] },
      {
        name: "脚本与自动化",
        items: ["Python", "PowerShell", "Photoshop ExtendScript"],
      },
      { name: "工具与协作", items: ["Git"] },
    ],
  },

  projects: {
    heading: "项目",
    items: [
      {
        name: "farmKing",
        description:
          "一个农业管理方向的项目，用来记录与组织农场的日常作业流程。",
        tags: ["JavaScript", "Web"], // TODO: 替换为该项目真实的技术栈
        url: "https://github.com/Hanzhen-Gao/farmKing",
      },
      {
        name: "PS Scripts",
        description:
          "Photoshop ExtendScript 自动化脚本集合，把重复的修图与批处理流程一键化。",
        tags: ["ExtendScript", "JavaScript", "自动化"],
        url: "https://github.com/Hanzhen-Gao/ps-scripts",
      },
    ],
  },

  contact: {
    heading: "联系我",
    intro: "有想法、合作机会，或只是想聊聊技术与设计？欢迎随时找我。",
    links: [
      {
        label: "邮箱",
        href: "mailto:gaohanzhen00@gmail.com",
        text: "gaohanzhen00@gmail.com",
      },
      {
        label: "GitHub",
        href: "https://github.com/Hanzhen-Gao",
        text: "github.com/Hanzhen-Gao",
      },
    ],
  },

  footer: {
    year: 2026,
    name: "Gao Hanzhen",
  },
};

export default site;
