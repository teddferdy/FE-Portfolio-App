import { getDataContact, getDataProfile } from "@/lib/data-dummy";
import { axiosInstance } from ".";

export const getContact = async () => {
  // const { data, status } = await axiosInstance.get("/about-me/get-about-me");

  // if (status !== 200) throw Error(`${data.message}`);

  const formatDatas = getDataContact;
  return formatDatas;
};
