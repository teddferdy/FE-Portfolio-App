"use client";

import { useLocale } from "@/message/localProvider";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from "@/components/ui/dropdown-menu";

export default function LanguageSwitcher() {
  const { locale, changeLocale } = useLocale();

  const currentLabel = locale === "id" ? "🇮🇩 ID" : "🇺🇸 EN";

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" className="text-white border-white/30">
          {currentLabel}
        </Button>
      </DropdownMenuTrigger>

      <DropdownMenuContent align="end">
        <DropdownMenuItem
          onClick={() => changeLocale("en")}
          className={locale === "en" ? "font-semibold text-accent" : ""}
        >
          🇺🇸 English
        </DropdownMenuItem>
        <DropdownMenuItem
          onClick={() => changeLocale("id")}
          className={locale === "id" ? "font-semibold text-accent" : ""}
        >
          🇮🇩 Indonesia
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
