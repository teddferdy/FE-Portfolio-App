"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useQuery } from "@tanstack/react-query";
import { CiMenuFries } from "react-icons/ci";
import { IoLogOut } from "react-icons/io5";

import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetTitle,
} from "@/components/ui/sheet";
import { cn } from "@/lib/utils";
import { useLocale } from "@/i18n/localProvider";
import { title } from "@/service/home";

const MobileNav = ({ handleLogout, isHeaderDashboard = false }) => {
  const pathName = usePathname();
  const { t } = useLocale();

  const titleHome = useQuery({
    queryKey: ["title"],
    queryFn: title,
  });

  const name = titleHome.data?.data?.name;

  const links = [
    { name: t("Header.home"), path: "/" },
    { name: t("Header.service"), path: "/services" },
    { name: t("Header.resume"), path: "/resume" },
    { name: t("Header.work"), path: "/work" },
    { name: t("Header.certificate"), path: "/certificate" },
    { name: t("Header.contact"), path: "/contact" },
  ];

  return (
    <Sheet>
      <SheetTrigger className="flex items-center justify-center">
        <CiMenuFries className="text-[32px] text-accent" />
      </SheetTrigger>
      <SheetContent className="flex flex-col overflow-scroll">
        <SheetTitle className="hidden">Mobile Navigation</SheetTitle>

        <div className="my-20 text-center text-2xl">
          <Link href="/">
            <h1 className="text-4xl font-semibold">
              {name?.slice(0, 13) || "Portfolio"}{" "}
              <span className="text-accent">.</span>
            </h1>
          </Link>
        </div>

        <nav className="flex flex-col justify-center gap-8">
          {links.map((item) => (
            <Link
              href={item.path}
              key={item.path}
              className={cn(
                "text-xl capitalize hover:text-accent transition-all flex items-center gap-4",
                item.path === pathName &&
                  "text-accent border-b-2 border-accent",
              )}
            >
              {item.icon}
              {item.name}
            </Link>
          ))}

          {isHeaderDashboard && (
            <button
              onClick={handleLogout}
              className="text-xl capitalize text-white hover:text-primary hover:border-accent hover:bg-accent transition-all flex items-center gap-4 p-2 rounded-md w-full text-left"
            >
              <IoLogOut />
              Log out
            </button>
          )}
        </nav>
      </SheetContent>
    </Sheet>
  );
};

export default MobileNav;
