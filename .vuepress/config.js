module.exports = {
  title: "花园攻略",
  base: "/",
  themeConfig: {
    logo: "https://iirose.com/images/system/ic_round_144.png",
    search: true,
    searchMaxSuggestions: 5,
    smoothScroll: true,
    lastUpdated: "上一次编辑",
    displayAllHeaders: false,
    sidebarDepth: 2,
    activeHeaderLinks: true,
    nav: [
      { text: "首页", link: "/" },
      { text: "GitHub", link: "https://github.com/iirose-tools/TutorialForBeginners" },
      { text: "蔷薇花园", link: "https://iirose.com" }
    ],
    sidebar: [
      "/home",
      {
        isGroup: true,
        title: '花园相关',
        children: [
          "/iirose/commands.md",
          "/iirose/hotKey.md",
          "/iirose/maze.md"
        ]
      },
      {
        isGroup: true,
        title: '活动',
        children: [
          "/active/密室系列 - 开端.md"
        ]
      },
      {
        isGroup: true,
        title: '其他东西',
        children: [
          "/others/site",
          "/others/YakumoRan.md"
        ]
      }
    ],
  },
};
