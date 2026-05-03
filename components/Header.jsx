"use client";

import Link from "next/link";
import { useQuery } from "@tanstack/react-query";

import Nav from "./Nav";
import MobileNav from "./MobileNav";
import LanguageSwitcher from "./LanguageSwitcher";
import { Skeleton } from "./ui/skeleton";
import { title } from "@/service/home";
import { MENUS } from "@/constants/menus";

const renderLogo = (titleHome) => {
  if (titleHome.isLoading || titleHome.isFetching) {
    return <Skeleton className="bg-pink-50/20 h-8 w-40 rounded-md" />;
  }

  if (titleHome.isError) {
    return (
      <h1 className="text-4xl font-semibold">
        - <span className="text-accent">.</span>
      </h1>
    );
  }

  const name = titleHome.data?.data?.name;
  return (
    <Link href="/">
      <h1 className="text-4xl font-semibold">
        {name?.slice(0, 13) || "-"} <span className="text-accent">.</span>
      </h1>
    </Link>
  );
};

const Header = () => {
  const titleHome = useQuery({
    queryKey: ["title"],
    queryFn: title,
  });

  return (
    <header className="py-8 xl:py-4 text-white xl:bg-pink-50/20">
      <div className="container mx-auto flex items-center justify-between">
        {renderLogo(titleHome)}

        {/* Desktop Nav */}
        <div className="hidden xl:flex items-center gap-6">
          <Nav menus={MENUS} />
          <LanguageSwitcher />
        </div>

        {/* Mobile Nav */}
        <div className="xl:hidden flex items-center gap-4">
          <LanguageSwitcher />
          <MobileNav menus={MENUS} isHeaderDashboard={false} />
        </div>
      </div>
    </header>
  );
};

export default Header;
