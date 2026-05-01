"use client";

import { useEffect } from "react";
import { useLocale } from "@/message/localProvider";

export function HtmlLangUpdater() {
  const { locale } = useLocale();

  useEffect(() => {
    document.documentElement.lang = locale;
  }, [locale]);

  return null;
}
