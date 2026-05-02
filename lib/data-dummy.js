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
    duration: "3 General.years",
    institution: "Resume.educeation.college.institution",
    degree: "Resume.educeation.college.degree",
    major: "Diploma III",
    startDate: "Month.aug 2016",
    endDate: "Month.nov 2019",
  },
  {
    duration: "3 General.month",
    institution: "Resume.educeation.glintsBootcamp.institution",
    degree: "Resume.educeation.glintsBootcamp.degree",
    major: "Frontend Developer",
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
    title: "Project.fitnessProject.title",
    category: "Project.fitnessProject.category",
    description: "Project.fitnessProject.description",
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
    title: "Project.movieProject.title",
    category: "Project.movieProject.category",
    description: "Project.movieProject.description",
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
    title: "Project.pokemonProject.title",
    category: "Project.pokemonProject.category",
    description: "Project.pokemonProject.description",
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
    title: "Project.posAppFe.title",
    category: "Project.posAppFe.category",
    description: "Project.posAppFe.description",
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
    title: "Project.portfolioAppFe.title",
    category: "Project.portfolioAppFe.category",
    description: "Project.portfolioAppFe.description",
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
    title: "Project.posAppBe.title",
    category: "Project.posAppBe.category",
    description: "Project.posAppBe.description",
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
    title: "Project.portfolioAppBe.title",
    category: "Project.portfolioAppBe.category",
    description: "Project.portfolioAppBe.description",
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
    title: "Project.yaoYao.title",
    category: "Project.yaoYao.category",
    description: "Project.yaoYao.description",
    image: YaoYao,
    stack: ["Wordpress", "Elementor"],
    projectLive: "https://yaoyao.id/",
  },
  {
    // num: 9,
    title: "Project.premiumInterindo.title",
    category: "Project.premiumInterindo.category",
    description: "Project.premiumInterindo.description",
    image: PremiumInterindo,
    stack: ["Wordpress", "Elementor"],
    projectLive: "https://premiuminterindo.com/",
  },
  {
    // num: 10,
    title: "Project.biSinergi.title",
    category: "Project.biSinergi.category",
    description: "Project.biSinergi.description",
    image: Bisinergi,
    stack: ["Wordpress", "Elementor"],
    projectLive: "https://bi-sinergi.com/",
  },
  {
    // num: 11,
    title: "Project.sanex.title",
    category: "Project.sanex.category",
    description: "Project.sanex.description",
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
