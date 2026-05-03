"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { cn } from "@/lib/utils";
import { useLocale } from "@/i18n/localProvider";

const Nav = () => {
  const { t } = useLocale();
  const pathName = usePathname();

  const links = [
    { name: t("Header.home"), path: "/" },
    { name: t("Header.service"), path: "/services" },
    { name: t("Header.resume"), path: "/resume" },
    { name: t("Header.work"), path: "/work" },
    { name: t("Header.certificate"), path: "/certificate" },
    { name: t("Header.contact"), path: "/contact" },
  ];

  return (
    <nav className="flex items-center gap-8">
      {links.map((item) => (
        <Link
          href={item.path}
          key={item.path}
          className={cn(
            "capitalize font-medium hover:text-accent transition-all",
            item.path === pathName && "text-accent border-b-2 border-accent",
          )}
        >
          {item.name}
        </Link>
      ))}
    </nav>
  );
};

export default Nav;
