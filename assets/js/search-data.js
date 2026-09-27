// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-about",
    title: "about",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-publications",
          title: "publications",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/publications/";
          },
        },{id: "nav-awards-and-honors",
          title: "awards and honors",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/award/";
          },
        },{id: "books-the-godfather",
          title: 'The Godfather',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/the_godfather/";
            },},{id: "news-excited-to-share-our-latest-work-early-experience-where-agents-learn-from-their-own-experience-via-implicit-world-modeling-and-self-reflection-a-reward-free-and-scalable-paradigm",
          title: '🎉 Excited to share our latest work “Early Experience”, where agents learn from...',
          description: "",
          section: "News",},{id: "news-online-mind2web-has-been-accepted-to-colm-2025-see-you-in-montreal",
          title: '🎉 Online-Mind2Web has been accepted to COLM 2025! See you in Montreal!🍁',
          description: "",
          section: "News",},{id: "news-excited-to-share-our-latest-work-acurl-an-autonomous-curriculum-reinforcement-learning-framework-that-enables-fully-autonomous-continual-learning-for-computer-use-agents-with-zero-human-data",
          title: '🎉 Excited to share our latest work, ACuRL — an Autonomous Curriculum Reinforcement...',
          description: "",
          section: "News",},{id: "news-excited-to-join-microsoft-for-a-summer-internship",
          title: '🎉 Excited to join Microsoft for a summer internship!',
          description: "",
          section: "News",},{id: "news-acurl-has-been-accepted-to-neurips-2026",
          title: '🎉 ACuRL has been accepted to NeurIPS 2026!',
          description: "",
          section: "News",},{
      id: 'light-theme',
      title: 'Change theme to light',
      description: 'Change the theme of the site to Light',
      section: 'Theme',
      handler: () => {
        setThemeSetting("light");
      },
    },
    {
      id: 'dark-theme',
      title: 'Change theme to dark',
      description: 'Change the theme of the site to Dark',
      section: 'Theme',
      handler: () => {
        setThemeSetting("dark");
      },
    },
    {
      id: 'system-theme',
      title: 'Use system default theme',
      description: 'Change the theme of the site to System Default',
      section: 'Theme',
      handler: () => {
        setThemeSetting("system");
      },
    },];
