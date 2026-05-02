import { getDataProjects } from "@/lib/data-dummy";
import { axiosInstance } from ".";
const config = { headers: { "Content-Type": "multipart/form-data" } };

import { getDataProjectFrontEnd } from "@/lib/data-dummy";
import { getDataProjectBE } from "@/lib/data-dummy";
import { getDataProjectsWordpress } from "@/lib/data-dummy";

export const workList = async () => {
  // const { data, status } = await axiosInstance.get("/project/get-project");
  // if (status !== 200) throw Error(`${data.message}`);
  // return data;

  const data = getDataProjects.map((item, index) => {
    return {
      ...item,
      num: index + 1,
    };
  });
  return data;
};

export const getProjectByCategory = async (category) => {
  console.log("category =>", category);

  const text = category;
  const result = text.replace(/%20/g, " ");

  console.log(result);

  if (result === "Service.feDeveloper") {
    return getDataProjectFrontEnd.map((item, index) => ({
      ...item,
      num: index + 1,
    }));
  } else if (result === "Service.beDeveloper") {
    return getDataProjectBE.map((item, index) => ({
      ...item,
      num: index + 1,
    }));
  } else if (result === "Service.wordPressDeveloper") {
    return getDataProjectsWordpress.map((item, index) => ({
      ...item,
      num: index + 1,
    }));
  }
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
