import { getDataHome } from "@/lib/data-dummy";
import { axiosInstance } from ".";

export const title = async () => {
  // UnComment
  // const { data, status } = await axiosInstance.get("/about-me/get-about-me");

  // if (status !== 200) throw Error(`${data.message}`);
  // return data;

  const data = getDataHome;

  return data;
};
