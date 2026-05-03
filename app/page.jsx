"use client";

import { FiDownload } from "react-icons/fi";
import { useQuery } from "@tanstack/react-query";

import Header from "@/components/Header";
import { Button } from "@/components/ui/button";
import Photo from "@/components/Photo";
import Social from "@/components/Social";
import Stats from "@/components/Stats";
import { title } from "@/service/home";
import { stats } from "@/service/stats";
import { useLocale } from "@/i18n/localProvider";
import ImageMe from "@/assets/img/me.jpg";

const SOCIAL_ICON_STYLES =
  "w-9 h-9 border border-accent rounded-full flex justify-center items-center text-accent text-base hover:bg-accent hover:text-primary hover:transition-all duration-500";

export default function Home() {
  const { locale, t } = useLocale();

  const titleHome = useQuery({ queryKey: ["title"], queryFn: title });
  const statsHome = useQuery({ queryKey: ["stats", locale], queryFn: stats });

  const homeData = titleHome?.data?.data;
  const statsData = statsHome?.data;

  return (
    <>
      <Header />
      <section className="h-full">
        <div className="container mx-auto h-full">
          <div className="flex flex-col xl:flex-row items-center justify-between py-8">
            <div className="text-center xl:text-left order-2 xl:order-none">
              <span className="text-xl">{homeData?.position || "-"}</span>
              <h1 className="h1">
                {t("Home.greetings")} <br />
                <span className="text-accent">{homeData?.name || "-"}</span>
              </h1>
              <p className="max-w-[500px] mb-9 text-white/80">
                {t(homeData?.description)}
              </p>

              <div className="flex flex-col lg:flex-row items-center gap-8">
                <a
                  href="/CV_Teddy.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  download
                >
                  <Button
                    variant="outline"
                    size="lg"
                    className="uppercase flex items-center gap-2"
                  >
                    <span>{t("Home.download")}</span>
                    <FiDownload className="text-xl" />
                  </Button>
                </a>

                <div className="mb-8 xl:mb-0">
                  <Social
                    containerStyles="flex gap-6"
                    iconStyles={SOCIAL_ICON_STYLES}
                  />
                </div>
              </div>
            </div>

            <div className="order-1 xl:order-none mb-8 xl:mb-0">
              <Photo src={ImageMe} />
            </div>
          </div>
        </div>
        <Stats data={statsData} />
      </section>
    </>
  );
}
