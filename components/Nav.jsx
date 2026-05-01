"use client";
import { useLocale } from "@/message/localProvider";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Nav = () => {
  const { t } = useLocale();

  const link = [
    { name: t("Header.home"), path: "/" },
    { name: t("Header.service"), path: "/services" },
    { name: t("Header.resume"), path: "/resume" },
    { name: t("Header.work"), path: "/work" },
    { name: t("Header.certificate"), path: "/certificate" },
    { name: t("Header.contact"), path: "/contact" },
  ];
  const pathName = usePathname();

  return (
    <div className="flex items-center gap-8">
      {link?.map((items, index) => {
        return (
          <Link
            href={items.path}
            key={index}
            className={`${
              items.path === pathName && "text-accent border-b-2 border-accent"
            } capitalize font-medium hover:text-accent transition-all`}
          >
            {items.name}
          </Link>
        );
      })}
    </div>
  );
};

export default Nav;
