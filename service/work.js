import { axiosInstance } from ".";
const config = { headers: { "Content-Type": "multipart/form-data" } };

export const workList = async () => {
  // const { data, status } = await axiosInstance.get("/project/get-project");
  // if (status !== 200) throw Error(`${data.message}`);
  // return data;

  const data = [
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
      stack: [
        "Express js",
        "googleapis",
        "sequelize",
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
  return data;
};

export const getProjectByCategory = async (category) => {
  const { data, status } = await axiosInstance.get(
    `/project/get-project-by-category/${category}`,
  );

  if (status !== 200) {
    throw new Error(data.message || "Error fetching projects");
  }

  return data;
};

export const getListProject = async () => {
  const { data, status } = await axiosInstance.get(
    `/project/get-project?isTable=false`,
  );

  if (status !== 200) throw Error(`${data.message}`);
  return data;
};

// Get List project In Table
export const getListTableProject = async ({ page, limit }) => {
  const { data, status } = await axiosInstance.get(
    `/project/get-project?isTable=true&page=${page}&limit=${limit}`,
  );

  if (status !== 200) throw Error(`${data.message}`);
  return data;
};

// Get By Id
export const getProjectById = async (payload) => {
  const { data, status } = await axiosInstance.get(
    `/project/get-project/${payload.id}`,
  );

  if (status !== 200) throw Error(`${data.message}`);
  return data;
};

// Post project
export const postProject = async (payload) => {
  console.log("PAYLOAD =>", payload);

  const { data, status } = await axiosInstance.post(
    "/project/add-project",
    payload,
    config,
  );

  if (status !== 200 && status !== 201) throw Error(`${data.message}`);
  return data;
};

export const putProject = async ({ id, body }) => {
  const { data, status } = await axiosInstance.put(
    `/project/edit-project/${id}`,
    body,
  );

  if (status !== 200) throw Error(`${data.message}`);
  return data;
};

export const deleteProject = async ({ id }) => {
  const { data, status } = await axiosInstance.delete(
    `/project/delete-project/${id}`,
  );

  if (status !== 200) throw Error(`${data.message}`);
  return data;
};
