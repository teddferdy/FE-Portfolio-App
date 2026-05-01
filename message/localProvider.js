"use client";

import { createContext, useContext, useEffect, useState, useMemo } from "react";
import en from "./en.json";
import id from "./id.json";

const LocaleContext = createContext();

const messages = { en, id };
const DEFAULT_LOCALE = "en";

export const LocaleProvider = ({ children }) => {
  const [locale, setLocale] = useState(DEFAULT_LOCALE);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem("locale");

    if (saved && messages[saved]) {
      setLocale(saved);
    } else {
      const browserLang = navigator.language.split("-")[0];

      if (messages[browserLang]) {
        setLocale(browserLang);
      }
    }

    setMounted(true);
  }, []);

  const changeLocale = (lang) => {
    if (!messages[lang]) return; // guard

    localStorage.setItem("locale", lang);
    setLocale(lang);
  };

  const t = useMemo(() => {
    return (key) => {
      const keys = key.split(".");

      let value = messages[locale];
      let fallback = messages[DEFAULT_LOCALE];

      for (const k of keys) {
        value = value?.[k];
        fallback = fallback?.[k];
      }

      return value || fallback || key;
    };
  }, [locale]);

  // ⛔ prevent hydration mismatch / flicker
  if (!mounted) {
    return (
      <LocaleContext.Provider
        value={{
          locale: DEFAULT_LOCALE,
          changeLocale: () => {},
          t: (key) => key,
        }}
      >
        {children}
      </LocaleContext.Provider>
    );
  }

  return (
    <LocaleContext.Provider value={{ locale, changeLocale, t }}>
      {children}
    </LocaleContext.Provider>
  );
};

export const useLocale = () => {
  const context = useContext(LocaleContext);

  if (!context) {
    return {
      locale: "en",
      changeLocale: () => {},
      t: (key) => key,
    };
  }

  return context;
};
