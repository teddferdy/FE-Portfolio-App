export const getDataProfile = {
  name: "Teddy Ferdian Abrar Amrullah",
  phoneNumber: "085926051064",
  experience: `${new Date().getFullYear() - 2021} Years`,
  nationality: "Indonesia",
  email: "teddy.ferdy@gmail.com",
  freelance: false,
  languages: ["Indonesia", "English"],
};

export const getDataContact = [
  {
    title: "Phone",
    description: getDataProfile.phoneNumber || "-",
  },
  {
    title: "Email",
    description: getDataProfile.email || "-",
  },
  {
    title: "Address",
    description: "Sanggrahan, Grogol, Sukoharjo, Central Java" || "-",
  },
];

export const getDataHome = {
  status: "200",
  data: {
    name: "Teddy Ferdian Abrar Amrullah",
    position: "Full Stack Developer",
    photo: "/photo.jpg",
  },
};

export const getDataEducation = [
  {
    duration: "3 Years",
    institution: "Akademi Teknologi Warga Surakarta",
    degree: "Diploma of Engineering, Major In Mechanical Engineering",
    startDate: "Aug 2016",
    endDate: "Nov 2019",
  },
  {
    duration: "3 Months",
    institution: "Glints Academy",
    degree: "Front-end Developer Bootcamp",
    startDate: "Nov 2020",
    endDate: "May 2021",
  },
];

export const getDataExperience = [
  {
    company: "PT. Infosys Solusi Terpadu",
    position: "FRONTEND DEVELOPER (Web & Mobile)",
    startDate: "Dec 2021",
    endDate: "Present",
  },
  {
    company: "PT. Bixbox Teknologi Perkasa (Refactory.id)",
    position: "FRONTEND DEVELOPER (Web & Mobile )",
    startDate: "Sep 2021",
    endDate: "Dec 2021",
  },
  {
    company: "PT. Majapahit (BKPM)",
    position: "FRONTEND DEVELOPER (Vue.js)",
    startDate: "Apr 2021",
    endDate: "Aug 2021",
  },
  {
    company: "Rachacha Indonesia Company",
    position: "FULL STACK PHP INTERN",
    startDate: "Oct 2020",
    endDate: "Nov 2020",
  },
];

export const getDataSkills = [
  {
    name: "HTML 5",
  },
  {
    name: "CSS 3",
  },
  {
    name: "JavaScript",
  },
  {
    name: "React Js",
  },
  {
    name: "Next JS",
  },
  { name: "Node JS" },
  {
    name: "Express JS",
  },
  {
    name: "Tailwind",
  },
  {
    name: "TypeScript",
  },
  {
    name: "Github",
  },
  {
    name: "Material UI",
  },
  {
    name: "Vue JS",
  },
  {
    name: "Vuetify",
  },
  {
    name: "Postgresql",
  },
  {
    name: "Sequelize",
  },
];

export const getDataProjects = [
  {
    num: 1,
    title: "Fitness React App",
    category: "Web Development (FE Developer)",
    description: "building Fitness App using React js",
    image: "/assets/project/e-commerce.png",
    stack: ["React js", "Material UI", "Rapid APi", "Rapid DB"],
    projectLive: "https://project-fitness-react-app.netlify.app/",
    github: [
      {
        name: "GitHub",
        url: "https://github.com/Teddy-FN/Project-fitness-app",
      },
    ],
  },
  {
    num: 2,
    title: "Movie Review App",
    category: "Web Development (FE Developer)",
    description: "building Movie Review App using React js",
    image: "/assets/project/e-commerce.png",
    stack: ["React js", "Redux Thunk", "Sass", "IMDB Api", "Axios"],
    projectLive: "https://movie-review-app-three.vercel.app/",
    github: [
      {
        name: "GitHub",
        url: "https://github.com/Teddy-FN/Movie-review-app",
      },
    ],
  },
  {
    num: 3,
    title: "Pokemon Web App",
    category: "Web Development (FE Developer)",
    description: "building Pokemon Web App using React js",
    image: "/assets/project/e-commerce.png",
    stack: [
      "React Typescript",
      "Redux Thunk",
      "Tailwind CSS",
      "PokeApi",
      "Axios",
      "Zod",
      "Zustand",
    ],
    projectLive: "https://react-pokemon-web-brown.vercel.app/",
    github: [
      {
        name: "GitHub",
        url: "https://github.com/Teddy-FN/React-Pokemon-web",
      },
    ],
  },
  {
    num: 4,
    title: "POS App (FE)",
    category: "Web Development (FullStack Developer)",
    description: "building POS App using Next js",
    image: "/assets/project/e-commerce.png",
    stack: [
      "React js",
      "React Query",
      "Tailwind CSS",
      "Axios",
      "Zod",
      "Zustand",
      "recharts",
      "React Hook Form",
      "Formik",
    ],
    projectLive: "https://bisa-nota-demo.vercel.app/",
    github: [
      {
        name: "GitHub",
        url: "https://github.com/teddferdy/FE-POS-App",
      },
    ],
  },
  {
    num: 5,
    title: "Portfolio App",
    category: "Web Development (FullStack Developer)",
    description: "building Portfolio App using Next js",
    image: "/assets/project/e-commerce.png",
    stack: [
      "Next js",
      "React Query",
      "Tailwind CSS",
      "Axios",
      "Zod",
      "Zustand",
    ],
    projectLive: "https://react-pokemon-web-brown.vercel.app/",
    github: [
      {
        name: "GitHub",
        url: "https://github.com/teddferdy/FE-Portfolio-App",
      },
    ],
  },

  // BE
  {
    num: 6,
    title: "POS App (BE)",
    category: "Web Development (FullStack Developer)",
    description: "building POS App using Next js",
    image: "/assets/project/e-commerce.png",
    stack: ["Express js", "googleapis", "sequelize", "PostgreSQL", "DBweaver"],
    projectLive: "",
    github: [
      {
        name: "GitHub",
        url: "https://github.com/teddferdy/BE-POS-App",
      },
    ],
  },
  {
    num: 7,
    title: "Portfolio App (BE)",
    category: "Web Development (FullStack Developer)",
    description: "building Portfolio App using Express js",
    image: "/assets/project/e-commerce.png",
    stack: [
      "Express js",
      "googleapis",
      "sequelize",
      "pg",
      "PostgreSQL",
      "DBweaver",
    ],
    projectLive: "",
    github: [
      {
        name: "GitHub",
        url: "https://github.com/teddferdy/BE-POS-App",
      },
    ],
  },
];

export const getDataService = {
  status: "200",
  data: [
    {
      name: "FE Developer",
      description:
        "Specialized in building fast, responsive, and user-friendly interfaces using modern technologies such as React.js, Next.js, and Tailwind CSS.",
    },
    {
      name: "BE Developer",
      description:
        "Experienced in developing secure and scalable server logic, API integrations, and database management using Node.js, Express.js, PostgreSQL, or MongoDB.",
    },
    {
      name: "Wordpress Developer",
      description:
        "Creating and managing WordPress-based websites, including theme customization, plugin development, performance optimization, and SEO configuration.",
    },
  ],
};

export const getDataStats = [
  {
    numb: new Date().getFullYear() - 2021,
    text: "Years Experience",
  },
  {
    numb: getDataProjects.length,
    text: "Project Completed",
  },
  {
    numb: getDataSkills.length,
    text: "Technologies Mastered",
  },
];
