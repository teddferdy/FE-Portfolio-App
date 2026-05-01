import en from "../message/en.json";
import id from "../message/id.json";

import Bisinergi from "@/assets/img/bi-sinergi.png";
import BisaNota from "@/assets/img/Bisa-Nota-App.png";
import FitnessApp from "@/assets/img/Fitness-App.png";
import MovieApp from "@/assets/img/Movie-App.png";
import PokemonAPI from "@/assets/img/Pokemon-App.png";
import PremiumInterindo from "@/assets/img/premium-interindo.png";
import Sanex from "@/assets/img/sanex.png";
import YaoYao from "@/assets/img/yao-yao-web.png";
import Portfolio from "@/assets/img/portfolio.png";

export const getDataProfile = {
  name: "Teddy Ferdian Abrar Amrullah",
  phoneNumber: "085926051064",
  experience: `${new Date().getFullYear() - 2021}`,
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
    description:
      "Frontend Developer specializing in building modern web and mobile applications using React.js and React Native. Experienced in delivering scalable, high-performance solutions, including projects in the banking industry.",
    photo: "/photo.jpg",
  },
};

export const getDataEducation = [
  {
    duration: "3 Years",
    institution: "Akademi Teknologi Warga Surakarta",
    degree: "Diploma of Engineering, Major In Mechanical Engineering",
    startDate: "Month.aug 2016",
    endDate: "Month.nov 2019",
  },
  {
    duration: "3 Months",
    institution: "Glints Academy",
    degree: "Front-end Developer Bootcamp",
    startDate: "Month.nov 2020",
    endDate: "Month.may 2021",
  },
];

export const getDataExperience = [
  {
    company: "PT. Infosys Solusi Terpadu",
    position: "FRONTEND DEVELOPER (Web & Mobile)",
    startDate: "Month.dec 2021",
    endDate: "General.present",
  },
  {
    company: "PT. Bixbox Teknologi Perkasa (Refactory.id)",
    position: "FRONTEND DEVELOPER (Web & Mobile )",
    startDate: "Month.sep 2021",
    endDate: "Month.dec 2021",
  },
  {
    company: "PT. Majapahit (BKPM)",
    position: "FRONTEND DEVELOPER (Vue.js)",
    startDate: "Month.apr 2021",
    endDate: "Month.aug 2021",
  },
  {
    company: "Rachacha Indonesia Company",
    position: "FULL STACK PHP INTERN",
    startDate: "Month.oct 2020",
    endDate: "Month.nov 2020",
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

export const getDataProjectFrontEnd = [
  {
    // num: 1,
    title: "Fitness React App",
    category: "Web Development (FE Developer)",
    description: "building Fitness App using React js",
    image: FitnessApp,
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
    // num: 2,
    title: "Movie Review App",
    category: "Web Development (FE Developer)",
    description: "building Movie Review App using React js",
    image: MovieApp,
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
    // num: 3,
    title: "Pokemon Web App",
    category: "Web Development (FE Developer)",
    description: "building Pokemon Web App using React js",
    image: PokemonAPI,
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
    // num: 4,
    title: "POS App (FE)",
    category: "Web Development (FullStack Developer)",
    description: "building POS App using Next js",
    image: BisaNota,
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
    // num: 5,
    title: "Portfolio App",
    category: "Web Development (FullStack Developer)",
    description: "building Portfolio App using Next js",
    image: Portfolio,
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
];

export const getDataProjectBE = [
  {
    // num: 6,
    title: "POS App (BE)",
    category: "Web Development (FullStack Developer)",
    description: "building POS App using Next js",
    image: BisaNota,
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
    // num: 7,
    title: "Portfolio App (BE)",
    category: "Web Development (FullStack Developer)",
    description: "building Portfolio App using Express js",
    image: Portfolio,
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

export const getDataProjectsWordpress = [
  {
    // num: 8,
    title: "Yao Yao Website",
    category: "Wordpress (Elementor)",
    description: "building Yao Yao Website using Wordpress",
    image: YaoYao,
    stack: ["Wordpress", "Elementor"],
    projectLive: "https://yaoyao.id/",
  },
  {
    // num: 9,
    title: "Premium Interindo Website",
    category: "Wordpress (Elementor)",
    description: "building Premium Interindo Website using Wordpress",
    image: PremiumInterindo,
    stack: ["Wordpress", "Elementor"],
    projectLive: "https://premiuminterindo.com/",
  },
  {
    // num: 10,
    title: "Bi-Sinergi Website",
    category: "Wordpress (Elementor)",
    description: "building Bi-Sinergi Website using Wordpress",
    image: Bisinergi,
    stack: ["Wordpress", "Elementor"],
    projectLive: "https://bi-sinergi.com/",
  },
  {
    // num: 11,
    title: "Sanex Website",
    category: "Wordpress (Elementor)",
    description: "building Sanex Website using Wordpress",
    image: Sanex,
    stack: ["Wordpress", "Elementor", "WooCommerce"],
    projectLive: "https://sanex.co.id/",
  },
];

export const getDataProjects = [
  ...getDataProjectFrontEnd,
  ...getDataProjectBE,
  ...getDataProjectsWordpress,
];

export const getDataService = {
  status: "200",
  data: [
    {
      name: "Service.feDeveloper",
      description: "Service.descFeDeveloper",
    },
    {
      name: "Service.beDeveloper",
      description: "Service.descBeDEveloper",
    },
    {
      name: "Service.wordPressDeveloper",
      description: "Service.descWordPressDeveloper",
    },
  ],
};

export const getDataStats = [
  {
    numb: new Date().getFullYear() - 2021,
    text: "Home.experience",
  },
  {
    numb: getDataProjects.length,
    text: "Home.project",
  },
  {
    numb: getDataSkills.length,
    text: "Home.technology",
  },
];
