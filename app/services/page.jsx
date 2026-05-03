"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { useQuery } from "@tanstack/react-query";
import { BsArrowDownRight } from "react-icons/bs";

import Header from "@/components/Header";
import { Skeleton } from "@/components/ui/skeleton";
import AbortController from "@/components/AbortController";
import { useLocale } from "@/i18n/localProvider";
import { getListService } from "@/service/service";

const PAGE_TRANSITION = { delay: 2.4, duration: 0.4, ease: "easeIn" };
const SKELETON_ITEMS = Array(8);

const renderService = (getServiceData, t) => {
  if (getServiceData.isLoading || getServiceData.isFetching) {
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 w-full gap-6 py-6">
        {[...SKELETON_ITEMS].map((_, i) => (
          <Skeleton key={i} className="bg-pink-50/20 h-72 w-full rounded-md" />
        ))}
      </div>
    );
  }

  if (getServiceData.isError) {
    return (
      <div className="h-screen">
        <AbortController refetch={() => getServiceData.refetch()} />
      </div>
    );
  }

  if (getServiceData.data?.data?.length > 0) {
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 gap-[60px]">
        {getServiceData.data.data.map((item, index) => {
          const numb = index + 1 < 10 ? `0${index + 1}` : `${index + 1}`;
          return (
            <div
              key={index}
              className="flex-1 flex flex-col justify-center gap-6 group"
            >
              <div className="w-full flex justify-between items-center">
                <div className="text-5xl font-extrabold text-outline text-transparent group-hover:text-outline-hover transition-all duration-500">
                  {numb}
                </div>
                <Link
                  href={{ pathname: `/work/${item.name}`, query: item.name }}
                  className="w-[70px] h-[70px] rounded-full bg-white group-hover:bg-accent transition-all duration-500 flex justify-center items-center hover:-rotate-45"
                >
                  <BsArrowDownRight className="text-primary text-3xl" />
                </Link>
              </div>

              <h2 className="text-[42px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500">
                {t(item.name)}
              </h2>

              <p className="text-white/60">{t(item.description)}</p>

              <div className="border-b border-white/20 w-full" />
            </div>
          );
        })}
      </div>
    );
  }

  return (
    <div className="h-96 flex items-center justify-center bg-pink-50/20 rounded-md">
      <h1>No data available</h1>
    </div>
  );
};

const Services = () => {
  const { t } = useLocale();

  const getServiceData = useQuery({
    queryKey: ["getListService"],
    queryFn: getListService,
  });

  return (
    <>
      <Header />
      <section className="min-h-[80vh] flex flex-col justify-center py-12 xl:py-10">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, transition: PAGE_TRANSITION }}
          >
            {renderService(getServiceData, t)}
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default Services;
