"use client";

import { cn } from "@/lib/utils";
import { useLocale } from "@/i18n/localProvider";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from "@/components/ui/dropdown-menu";

const LANGUAGES = [
  { code: "en", label: "🇺🇸 English", short: "🇺🇸 EN" },
  { code: "id", label: "🇮🇩 Indonesia", short: "🇮🇩 ID" },
];

export default function LanguageSwitcher() {
  const { locale, changeLocale } = useLocale();

  const currentLabel =
    LANGUAGES.find((l) => l.code === locale)?.short ?? "🇺🇸 EN";

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" className="text-white border-white/30">
          {currentLabel}
        </Button>
      </DropdownMenuTrigger>

      <DropdownMenuContent align="end">
        {LANGUAGES.map((lang) => (
          <DropdownMenuItem
            key={lang.code}
            onClick={() => changeLocale(lang.code)}
            className={cn(locale === lang.code && "font-semibold text-accent")}
          >
            {lang.label}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
