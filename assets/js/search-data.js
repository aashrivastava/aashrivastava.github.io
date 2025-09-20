// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-home",
    title: "home",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-research",
          title: "research",
          description: "In reversed chronological order.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/publications/";
          },
        },{id: "news-joined-the-conceptualization-lab-to-be-advised-by-professor-ari-holtzman",
          title: 'Joined the Conceptualization Lab to be advised by Professor Ari Holtzman!',
          description: "",
          section: "News",},{id: "news-attended-and-presented-our-work-at-the-harms-and-risks-of-ai-in-military-workshop-at-mila-and-the-socially-responsible-language-modelling-research-workshop-at-neurips-2024",
          title: 'Attended and presented our work at the Harms and Risks of AI in...',
          description: "",
          section: "News",},{id: "news-joined-algoverse-ai-research-as-a-mentor-to-high-school-and-college-students-through-their-first-formal-ai-research-experiences",
          title: 'Joined Algoverse AI Research as a mentor to high school and college students...',
          description: "",
          section: "News",},{id: "news-our-work-absencebench-was-accepted-to-neurips-2025-as-a-spotlight",
          title: 'Our work, AbsenceBench was accepted to NeurIPS 2025 as a Spotlight!',
          description: "",
          section: "News",},{
        id: 'social-x',
        title: 'X',
        section: 'Socials',
        handler: () => {
          window.open("https://twitter.com/aryan_shri123", "_blank");
        },
      },{
        id: 'social-scholar',
        title: 'Google Scholar',
        section: 'Socials',
        handler: () => {
          window.open("https://scholar.google.com/citations?user=J6YX2YoAAAAJ", "_blank");
        },
      },{
        id: 'social-linkedin',
        title: 'LinkedIn',
        section: 'Socials',
        handler: () => {
          window.open("https://www.linkedin.com/in/aryan-shrivastava123", "_blank");
        },
      },{
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
