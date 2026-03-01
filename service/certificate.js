import { axiosInstance } from ".";
const config = { headers: { "Content-Type": "multipart/form-data" } };

import CertificateOfCompletion from "@/assets/img/Certificate of Completion – Build Responsive Real World Websites with HTML5 and CSS3.png";
import CertificateDicoding from "@/assets/img/dicoding-belajar-dasar-pemograman-web.png";
import CertificateCommandLine from "@/assets/img/progate-command-line-course.png";
import CertificateGit from "@/assets/img/progate-git-course.png";
import CertificateHTML from "@/assets/img/progate-html-course.png";
import CertificateJS from "@/assets/img/progate-js-course.png";
import CertificateReact from "@/assets/img/progate-react-course.png";

export const getListCertificate = async () => {
  // const { data, status } = await axiosInstance.get(
  //   `/certificate/get-certificate?isTable=false`
  // );

  // if (status !== 200) throw Error(`${data.message}`);
  // return data;

  const data = [
    {
      description:
        "Certificate of Completion – Build Responsive Real World Websites with HTML5 and CSS3",
      type: "Udemy",
      image: CertificateOfCompletion,
    },
    {
      description: "Belajar Dasar Pemograman Web",
      type: "Dicoding",
      image: CertificateDicoding,
    },
    {
      description: "Progate Command Line Course",
      type: "Progate",
      image: CertificateCommandLine,
    },
    {
      description: "Progate Git Course",
      type: "Progate",
      image: CertificateGit,
    },
    {
      description: "Progate HTML Course",
      type: "Progate",
      image: CertificateHTML,
    },
    {
      description: "Progate JavaScript Course",
      type: "Progate",
      image: CertificateJS,
    },
    {
      description: "Progate React Course",
      type: "Progate",
      image: CertificateReact,
    },
  ];

  return data;
};

// Get List Certificate In Table
export const getListTableCertificate = async ({ page, limit }) => {
  const { data, status } = await axiosInstance.get(
    `/certificate/get-certificate?isTable=true&page=${page}&limit=${limit}`,
  );

  if (status !== 200) throw Error(`${data.message}`);
  return data;
};

// Get By Id
export const getCertificateById = async (payload) => {
  const { data, status } = await axiosInstance.get(
    `/certificate/get-certificate/${payload.id}`,
  );

  if (status !== 200) throw Error(`${data.message}`);
  return data;
};

// Post Certificate
export const postCertificate = async (payload) => {
  const { data, status } = await axiosInstance.post(
    "/certificate/add-certificate",
    payload,
    config,
  );

  if (status !== 200 && status !== 201) throw Error(`${data.message}`);
  return data;
};

export const putCertificate = async ({ id, body }) => {
  const { data, status } = await axiosInstance.put(
    `/certificate/edit-certificate/${id}`,
    body,
    config,
  );

  if (status !== 200) throw Error(`${data.message}`);
  return data;
};

export const deleteCertificate = async ({ id }) => {
  const { data, status } = await axiosInstance.delete(
    `/certificate/delete-certificate/${id}`,
  );

  if (status !== 200) throw Error(`${data.message}`);
  return data;
};

export const typeCertificate = async () => {
  const data = [
    {
      value: "Formal Certificate",
      label: "Formal Certificate",
    },
    {
      value: "Online Courses",
      label: "Online Courses",
    },
    {
      value: "Volunteering",
      label: "Volunteering",
    },
    {
      value: "Community Workshops",
      label: "Community Workshops",
    },
    {
      value: "Mentorship Programs",
      label: "Mentorship Programs",
    },
    {
      value: "Bootcamp",
      label: "Bootcamp",
    },
  ];

  return data;
};
