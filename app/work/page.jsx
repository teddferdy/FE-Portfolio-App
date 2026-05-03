"use client";

import { useQuery } from "@tanstack/react-query";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { BsArrowUpRight, BsGithub } from "react-icons/bs";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import Link from "next/link";
import Image from "next/image";

import Header from "@/components/Header";
import WorkSlideBtn from "@/components/WorkSlideBtn";
import EmptyData from "@/components/EmptyData";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { useLocale } from "@/i18n/localProvider";
import { workList } from "@/service/work";
import DummyImage from "@/assets/img/dummy-Images.jpg";

const PAGE_TRANSITION = { delay: 2.4, duration: 0.4, ease: "easeInOut" };

const Work = () => {
  const { t } = useLocale();

  const getWorkData = useQuery({
    queryKey: ["workList"],
    queryFn: workList,
  });

  const [project, setProject] = useState({});

  const handleSlideChange = (swiper) => {
    setProject(getWorkData.data[swiper.activeIndex]);
  };

  useEffect(() => {
    if (getWorkData.isSuccess && getWorkData.data?.length > 0) {
      setProject(getWorkData.data[0]);
    }
  }, [getWorkData.data, getWorkData.isSuccess]);

  return (
    <>
      <Header />
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, transition: PAGE_TRANSITION }}
        className="min-h-[80vh] flex flex-col justify-center py-12 xl:px-0"
      >
        <div className="container mx-auto">
          {getWorkData.data?.length > 0 ? (
            <div className="flex flex-col xl:flex-row xl:gap-[30px]">
              {/* Left — Project Info */}
              <div className="w-full xl:w-[50%] xl:h-[460px] flex flex-col xl:justify-between order-2 xl:order-none">
                <div className="flex flex-col gap-[30px]">
                  <div className="text-8xl leading-none font-extrabold text-transparent text-outline">
                    {project?.num}
                  </div>
                  <h2 className="text-[42px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500 capitalize">
                    {project?.title
                      ? `${t(project.title)} ${t("General.project")}`
                      : ""}
                  </h2>
                  <p className="font-bold leading-none text-white group-hover:text-accent transition-all duration-500 capitalize">
                    {project?.category
                      ? `${t("General.category")}: ${t(project.category)}`
                      : ""}
                  </p>
                  <p className="text-white/60">{t(project?.description)}</p>

                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {project?.stack?.map((item, index) => (
                      <li key={index} className="text-accent text-xl">
                        {item}
                        {index !== project.stack.length - 1 && ","}
                      </li>
                    ))}
                  </ul>

                  <div className="border border-white/20" />

                  <div className="flex items-center gap-4">
                    <Link href={project?.projectLive || ""} target="_blank">
                      <TooltipProvider delayDuration={100}>
                        <Tooltip>
                          <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group">
                            <BsArrowUpRight className="text-white text-3xl group-hover:text-accent" />
                          </TooltipTrigger>
                          <TooltipContent>
                            <p>{t("General.liveProject")}</p>
                          </TooltipContent>
                        </Tooltip>
                      </TooltipProvider>
                    </Link>

                    {project?.github?.map((item, index) => (
                      <Link href={item.url || ""} key={index}>
                        <TooltipProvider delayDuration={100}>
                          <Tooltip>
                            <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group">
                              <BsGithub className="text-white text-3xl group-hover:text-accent" />
                            </TooltipTrigger>
                            <TooltipContent>
                              <p>Github Repo {item.name}</p>
                            </TooltipContent>
                          </Tooltip>
                        </TooltipProvider>
                      </Link>
                    ))}
                  </div>
                </div>
              </div>

              {/* Right — Swiper */}
              <div className="w-full xl:w-[50%]">
                <Swiper
                  spaceBetween={30}
                  slidesPerView={1}
                  className="xl:h-[520px] mb-12"
                  onSlideChange={handleSlideChange}
                >
                  {getWorkData.data?.map((item, index) => (
                    <SwiperSlide key={index} className="w-full">
                      <div className="h-[460px] relative flex justify-center items-center bg-pink-50/20 rounded-lg overflow-hidden">
                        <Image
                          src={item.image || DummyImage}
                          alt={item.title}
                          fill
                          className="object-fill"
                        />
                        <div className="absolute inset-0 bg-black/10 z-10" />
                      </div>
                    </SwiperSlide>
                  ))}
                  <WorkSlideBtn
                    containerStyles="flex gap-2 absolute right-0 bottom-[calc(50%_-_22px)] xl:bottom-0 z-20 w-full justify-between xl:w-max xl:justify-none"
                    btnStyles="bg-accent hover:bg-accent-hover text-primary text-[22px] w-[44px] h-[44px] flex justify-center items-center transition-all duration-500"
                  />
                </Swiper>
              </div>
            </div>
          ) : (
            <EmptyData text="Work Empty" />
          )}
        </div>
      </motion.section>
    </>
  );
};

export default Work;
