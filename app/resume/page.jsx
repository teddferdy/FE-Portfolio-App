"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { useQuery } from "@tanstack/react-query";
import { FaHtml5, FaCss3, FaReact, FaNodeJs } from "react-icons/fa";
import {
  SiNextdotjs,
  SiTailwindcss,
  SiVuedotjs,
  SiPostgresql,
  SiSequelize,
  SiExpress,
  SiJavascript,
  SiTypescript,
  SiGithub,
  SiMaterialformkdocs,
  SiVuetify,
} from "react-icons/si";

import Header from "@/components/Header";
import AbortController from "@/components/AbortController";
import { Skeleton } from "@/components/ui/skeleton";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { useLocale } from "@/i18n/localProvider";
import { getListExperience } from "@/service/experience";
import { getListEducation } from "@/service/education";
import { getListAboutMe } from "@/service/about-me";
import { getListSkills } from "@/service/skills";

// ─── Constants ───────────────────────────────────────────────
const PAGE_TRANSITION = { delay: 2.4, duration: 0.4, ease: "easeIn" };
const SKELETON_ITEMS = Array(8);

const ICONS_MAP = {
  "React Js": <FaReact />,
  "Node JS": <FaNodeJs />,
  "Express JS": <SiExpress />,
  "HTML 5": <FaHtml5 />,
  "CSS 3": <FaCss3 />,
  Tailwind: <SiTailwindcss />,
  JavaScript: <SiJavascript />,
  TypeScript: <SiTypescript />,
  Github: <SiGithub />,
  "Material UI": <SiMaterialformkdocs />,
  "Next Js": <SiNextdotjs />,
  "Vue JS": <SiVuedotjs />,
  Vuetify: <SiVuetify />,
  Postgresql: <SiPostgresql />,
  Sequelize: <SiSequelize />,
};

// ─── Helpers ─────────────────────────────────────────────────
const formatMonthYear = (value, t) => {
  if (!value) return "";
  const [monthKey, year] = value.split(" ");
  return `${t(monthKey)} ${year}`;
};

const formatDuration = (value, t) => {
  if (!value) return "";
  const [number, duration] = value.split(" ");
  return `${number} ${t(duration)}`;
};

// ─── Reusable UI ─────────────────────────────────────────────
const TabSkeleton = () => (
  <div className="flex flex-col gap-[20px] py-8 text-center xl:text-left">
    <Skeleton className="bg-pink-50/20 h-8 w-full rounded-md" />
    <Skeleton className="bg-pink-50/20 h-8 w-full rounded-md" />
    <div className="grid grid-cols-1 md:grid-cols-2 w-full gap-6 py-6">
      {[...SKELETON_ITEMS].map((_, i) => (
        <Skeleton key={i} className="bg-pink-50/20 h-72 w-full rounded-md" />
      ))}
    </div>
  </div>
);

const EmptyTab = () => (
  <div className="h-96 flex items-center justify-center bg-pink-50/20 rounded-md">
    <h1>No data available</h1>
  </div>
);

const TabError = ({ refetch }) => (
  <div className="h-screen">
    <AbortController refetch={refetch} />
  </div>
);

// ─── Tab Contents ─────────────────────────────────────────────
const ExperienceTab = ({ query, t }) => {
  if (query.isLoading || query.isFetching) return <TabSkeleton />;
  if (query.isError) return <TabError refetch={() => query.refetch()} />;
  if (!query.data?.length) return <EmptyTab />;

  return (
    <div className="flex flex-col gap-[30px] text-center xl:text-left">
      <h3 className="text-4xl font-bold">{t("Resume.experience.title")}</h3>
      <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
        {t("Resume.experience.description")}
      </p>
      <div className="h-[400px]">
        <ul className="grid grid-cols-1 gap-[30px]">
          {query.data
            .sort((a, b) => b.id - a.id)
            .map((item, index) => (
              <li
                key={index}
                className="bg-[#232329] h-auto py-6 px-10 rounded-xl flex flex-col items-center lg:items-start gap-1"
              >
                <h3 className="text-xl min-h-[60px] text-center lg:text-left">
                  {item.company}
                </h3>
                <div className="flex items-center gap-3">
                  <span className="w-[6px] h-[6px] rounded-full bg-accent" />
                  <p className="text-white/60">{item.position}</p>
                </div>
                <span className="text-accent">
                  {formatMonthYear(item.startDate, t)} -{" "}
                  {item.endDate === "General.present"
                    ? t("General.present")
                    : formatMonthYear(item.endDate, t)}
                </span>
                <div
                  className="text-white/60"
                  dangerouslySetInnerHTML={{ __html: item.description }}
                />
              </li>
            ))}
        </ul>
      </div>
    </div>
  );
};

const EducationTab = ({ query, t }) => {
  if (query.isLoading || query.isFetching) return <TabSkeleton />;
  if (query.isError) return <TabError refetch={() => query.refetch()} />;
  if (!query.data?.length) return <EmptyTab />;

  return (
    <div className="flex flex-col gap-[30px] text-center xl:text-left">
      <h3 className="text-4xl font-bold">{t("Resume.education.title")}</h3>
      <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
        {t("Resume.education.description")}
      </p>
      <div className="h-[400px]">
        <ul className="grid grid-cols-1 gap-[30px]">
          {query.data.map((item, index) => (
            <li
              key={index}
              className="bg-[#232329] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1"
            >
              <span className="text-accent">
                {formatDuration(item.duration, t)}
              </span>
              <h3 className="text-xl text-center lg:text-left">
                {t(item.institution)}
              </h3>
              <p className="text-white/60">{item.major}</p>
              <span className="text-accent">
                {formatMonthYear(item.startDate, t)} -{" "}
                {item.endDate === "General.present"
                  ? t("General.present")
                  : formatMonthYear(item.endDate, t)}
              </span>
              <div className="flex items-center gap-3">
                <span className="w-[6px] h-[6px] rounded-full bg-accent" />
                <p className="text-white/60">{t(item.degree)}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

const SkillsTab = ({ query, t }) => {
  if (query.isLoading || query.isFetching) return <TabSkeleton />;
  if (query.isError) return <TabError refetch={() => query.refetch()} />;
  if (!query.data?.length) return <EmptyTab />;

  return (
    <div className="flex flex-col gap-[30px] text-center xl:text-left">
      <h3 className="text-4xl font-bold">{t("Resume.skills.title")}</h3>
      <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
        {t("Resume.skills.description")}
      </p>
      <div className="h-[400px]">
        <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 xl:gap-[30px] gap-4">
          {query.data.map((item, index) => (
            <li key={index}>
              <TooltipProvider delayDuration={100}>
                <Tooltip>
                  <TooltipTrigger className="w-full h-[150px] bg-[#232329] rounded-xl flex justify-center items-center group">
                    <div className="text-6xl group-hover:text-accent transition-all duration-500">
                      {ICONS_MAP[item.name] ?? <span>?</span>}
                    </div>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p className="capitalize">{item.name}</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

const AboutMeTab = ({ query, t }) => {
  if (query.isLoading || query.isFetching) return <TabSkeleton />;
  if (query.isError) return <TabError refetch={() => query.refetch()} />;
  if (!query.data) return <EmptyTab />;

  const data = query.data;

  return (
    <div className="flex flex-col gap-[30px] text-center xl:text-left">
      <h3 className="text-4xl font-bold">{t("Resume.aboutMe.title")}</h3>
      <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
        {t("Resume.aboutMe.description")}
      </p>
      <div className="h-[400px]">
        <ul className="grid grid-cols-1 gap-y-6 gap-x-6 max-w-[620px] mx-auto xl:mx-0">
          {[
            { label: t("General.name"), value: data.name },
            { label: t("General.phone"), value: data.phoneNumber },
            {
              label: t("General.experience"),
              value: `${data.experience} ${t("General.years")}`,
            },
            { label: t("General.nationality"), value: data.nationality },
            { label: t("General.email"), value: data.email },
            {
              label: t("General.freelance"),
              value: data.freelance
                ? t("General.available")
                : t("General.notAvailable"),
            },
            {
              label: t("General.languages"),
              value:
                data.languages?.length > 0 ? data.languages.join(", ") : "-",
            },
          ].map(({ label, value }) => (
            <li
              key={label}
              className="flex items-center justify-center xl:justify-start gap-4"
            >
              <span className="text-white/60">{label}</span>
              <span className="text-xl">{value}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

// ─── Main Component ───────────────────────────────────────────
const Resume = () => {
  const { t } = useLocale();
  const [activeTab, setActiveTab] = useState("experience");

  const experienceQuery = useQuery({
    queryKey: ["getListExperience"],
    queryFn: getListExperience,
    enabled: activeTab === "experience",
  });

  const educationQuery = useQuery({
    queryKey: ["getListEducation"],
    queryFn: getListEducation,
    enabled: activeTab === "education",
  });

  const skillsQuery = useQuery({
    queryKey: ["getListSkills"],
    queryFn: getListSkills,
    enabled: activeTab === "skills",
  });

  const aboutQuery = useQuery({
    queryKey: ["getListAboutMe"],
    queryFn: getListAboutMe,
    enabled: activeTab === "about",
  });

  return (
    <>
      <Header />
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, transition: PAGE_TRANSITION }}
        className="min-h-[80vh] flex items-center justify-center py-12 xl:py-0"
      >
        <div className="container mx-auto">
          <Tabs
            defaultValue="experience"
            value={activeTab}
            className="flex flex-col xl:flex-row gap-[60px]"
            onValueChange={setActiveTab}
          >
            <TabsList className="flex flex-col w-full max-w-[380px] mx-auto xl:mx-0 gap-6">
              <TabsTrigger value="experience">
                {t("Resume.experience.title")}
              </TabsTrigger>
              <TabsTrigger value="education">
                {t("Resume.education.title")}
              </TabsTrigger>
              <TabsTrigger value="skills">
                {t("Resume.skills.title")}
              </TabsTrigger>
              <TabsTrigger value="about">
                {t("Resume.aboutMe.title")}
              </TabsTrigger>
            </TabsList>

            <div className="min-h-[70vh] w-full">
              <TabsContent value="experience">
                <ExperienceTab query={experienceQuery} t={t} />
              </TabsContent>
              <TabsContent value="education">
                <EducationTab query={educationQuery} t={t} />
              </TabsContent>
              <TabsContent value="skills" className="h-full">
                <SkillsTab query={skillsQuery} t={t} />
              </TabsContent>
              <TabsContent value="about" className="text-center xl:text-left">
                <AboutMeTab query={aboutQuery} t={t} />
              </TabsContent>
            </div>
          </Tabs>
        </div>
      </motion.div>
    </>
  );
};

export default Resume;
