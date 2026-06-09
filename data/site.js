const site = {
  identity: {
    name: "Gao Hanzhen",
    initials: "HG",
    tagline: "开发者 · 创造者",
    avatarUrl: null, // 替换为图片路径即可，如 "assets/avatar.jpg"
  },

  nav: [
    { label: "关于我", href: "#about" },
    { label: "技能",   href: "#skills" },
    { label: "项目",   href: "#projects" },
    { label: "联系",   href: "#contact" },
  ],

  about: {
    heading: "关于我",
    body: "你好！我是 Gao Hanzhen，一名热爱技术和创造的开发者。欢迎来到我的个人主页，这里记录了我的项目与探索。",
  },

  skills: {
    heading: "技能",
    items: [
      "HTML / CSS",
      "JavaScript",
      "Python",
      "Git",
      "PowerShell",
      "Photoshop ExtendScript",
    ],
  },

  projects: {
    heading: "项目",
    items: [
      {
        name: "farmKing",
        description: "一个农业管理相关的 GitHub 项目。",
        url: "https://github.com/Hanzhen-Gao/farmKing",
      },
      {
        name: "PS Scripts",
        description: "Photoshop ExtendScript 自动化脚本集合。",
        url: "https://github.com/Hanzhen-Gao/ps-scripts",
      },
    ],
  },

  contact: {
    heading: "联系我",
    links: [
      { label: "邮箱",   href: "mailto:gaohanzhen00@gmail.com", text: "gaohanzhen00@gmail.com" },
      { label: "GitHub", href: "https://github.com/Hanzhen-Gao",  text: "github.com/Hanzhen-Gao" },
    ],
  },

  footer: {
    year: 2026,
    name: "Gao Hanzhen",
  },
};

export default site;
