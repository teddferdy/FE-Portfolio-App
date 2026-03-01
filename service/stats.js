import { getDataStats } from "@/lib/data-dummy";
import { axiosInstance } from ".";

export const stats = async () => {
  // const { data, status } = await axiosInstance.get("/stats/get-stats");

  // if (status !== 200) throw Error(`${data.message}`);
  // return data;

  const data = getDataStats;

  return data;
};
