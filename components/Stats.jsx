"use client";

import CountUp from "react-countup";

import { cn } from "@/lib/utils";
import { useLocale } from "@/i18n/localProvider";

const Stats = ({ data = [] }) => {
  const { t } = useLocale();

  if (!data.length) return null;

  return (
    <section className="pt-4 pb-12 xl:pt-0 xl:pb-0">
      <div className="container mx-auto">
        <div className="flex flex-wrap gap-6 max-w-[80vw] mx-auto xl:max-w-none">
          {data?.map((item, index) => (
            <div
              key={index}
              className="flex-1 flex gap-4 items-center justify-center xl:justify-start"
            >
              <CountUp
                end={item.numb}
                duration={5}
                delay={2}
                className="text-4xl xl:text-6xl font-extrabold"
              />
              <p
                className={cn(
                  "leading-snug text-white/80",
                  item.text.length < 15 ? "max-w-[100px]" : "max-w-[150px]",
                )}
              >
                {t(item.text)}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;
