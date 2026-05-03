"use client";

import { useQuery } from "@tanstack/react-query";
import { motion } from "framer-motion";
import React, { Fragment, useMemo } from "react";
import Header from "@/components/Header";

import Image from "next/image";
import Zoom from "react-medium-image-zoom";
import "react-medium-image-zoom/dist/styles.css";

import { getListCertificate } from "@/service/certificate";
import { Skeleton } from "@/components/ui/skeleton";
import AbortController from "@/components/AbortController";
import { useLocale } from "@/i18n/localProvider";

const array = Array(8).fill(null);

const Certificate = () => {
  const { t } = useLocale();
  // Query
  const getListCertificateData = useQuery({
    queryKey: ["getListCertificate"],
    queryFn: getListCertificate,
    keepPreviousData: true,
  });

  const RENDER_EXPERIENCE = useMemo(() => {
    if (
      getListCertificateData?.isLoading ||
      getListCertificateData?.isFetching
    ) {
      return (
        <div className="flex flex-col gap-[20px] py-8 text-center xl:text-left">
          <Skeleton className="bg-pink-50/20 h-8 w-full rounded-md" />
          <Skeleton className="bg-pink-50/20 h-8 w-full rounded-md" />
          <Skeleton className="bg-pink-50/20 h-8 w-full rounded-md" />
          <div className="grid grid-cols-1 md:grid-cols-2 w-full gap-6 py-6">
            {array.map((_, index) => {
              return (
                <Skeleton
                  className="bg-pink-50/20 h-72 w-full rounded-md"
                  key={index}
                />
              );
            })}
          </div>
        </div>
      );
    }

    if (getListCertificateData?.isError) {
      return (
        <div className="h-screen">
          <AbortController refetch={() => getListCertificateData.refetch()} />
        </div>
      );
    }

    if (
      getListCertificateData?.data &&
      getListCertificateData?.data?.length > 0
    ) {
      return (
        <div className="flex flex-col gap-[30px] text-center xl:text-left">
          <h3 className="text-4xl font-bold">{t("Ceritificate.title")}</h3>
          <div className="flex flex-col">
            <p className="text-white/60 mx-auto xl:mx-0">
              {t("Ceritificate.description")}
            </p>
            <p className="text-white/60 mx-auto xl:mx-0">
              {t("General.note")} : {t("General.clickImage")}
            </p>
          </div>
          <div className="h-[400px]">
            <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-[30px]">
              {getListCertificateData?.data?.map((items, index) => {
                return (
                  <Zoom key={index}>
                    <li className="bg-[#232329] py-6 px-10 rounded-xl flex flex-col items-center lg:items-start gap-3">
                      <div className="relative w-full h-52 rounded-md overflow-hidden">
                        <Image
                          src={items.image}
                          alt={items.description}
                          fill
                          className="object-cover"
                        />
                      </div>

                      <div className="flex items-center gap-3">
                        <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                        <p className="text-white/60">{items.description}</p>
                      </div>

                      <span className="text-accent">{items.type}</span>
                    </li>
                  </Zoom>
                );
              })}
            </ul>
          </div>
        </div>
      );
    }

    return (
      <div className="h-96 flex items-center justify-center bg-pink-50/20 rounded-md">
        <h1>{t("General.emptyData")}</h1>
      </div>
    );
  }, [getListCertificateData]);

  return (
    <Fragment>
      <Header />
      <motion.section
        initial={{
          opacity: 0,
        }}
        animate={{
          opacity: 1,
          transition: {
            delay: 2.4,
            duration: 0.4,
            ease: "easeInOut",
          },
        }}
        className="min-h-[80vh] flex flex-col justify-center py-12 xl:px-0"
      >
        <div className="container mx-auto">{RENDER_EXPERIENCE}</div>
      </motion.section>
    </Fragment>
  );
};

export default Certificate;
