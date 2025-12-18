import React, { createContext, useState, useMemo } from "react";
import uz from "../locales/uz.json";
import ru from "../locales/ru.json";
import en from "../locales/en.json";

export const LanguageContext = createContext();

const locales = { uz, ru, en };

export const LanguageProvider = ({ children }) => {
  const [lang, setLang] = useState("en");

  const value = useMemo(
    () => ({
      lang,
      setLang,
      t: (key) => {
        const parts = key.split(".");
        let obj = locales[lang] || locales.en;
        for (const p of parts) {
          obj = obj?.[p];
          if (obj == null) return key;
        }
        return obj;
      },
    }),
    [lang]
  );

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
};

export default LanguageProvider;
