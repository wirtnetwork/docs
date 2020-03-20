module.exports = {
  base: "/docs/",
  port: 9090,
  title: "Wirt documentation",
  themeConfig: {
    locales: {
      "/": {
        nav: [{ text: "Back to the App", link: "https://wirt.network" }],
        sidebar: [
          ["/", "Intro"],
          ["/beginner", "Beginner Explanation"],
          ["/expert", "Overview for Experts"],
          ["/server", "Wireguard server"],
          ["/faq", "FAQ"],
          ["/issues", "New features & Bugs"]
        ]
      }
      //   "/de/": {
      //     "/": {
      //       nav: [{ text: "Back to the App", link: "/" }],
      //       sidebar: [
      //         ["/", "Intro"],
      //         ["/beginner", "Beginner Erklaerung"],
      //         ["/expert", "Uebersicht fuer Experten"],
      //         ["/server", "Wireguard Server"],
      //         ["/faq", "FAQ"]
      //       ]
      //     }
      //   }
    }
  },
  locales: {
    "/": {
      lang: "English",
      title: "Wirt",
      description: "Your home in the cloud"
    }
    // "/de/": {
    //   lang: "Deutsch",
    //   title: "Wirt",
    //   description: "Dein Netz im Netz"
    // }
  }
};
