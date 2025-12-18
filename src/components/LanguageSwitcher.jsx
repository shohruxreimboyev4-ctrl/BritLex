import React, { useContext } from "react";
import { LanguageContext } from "../context/LanguageContext";

const LanguageSwitcher = () => {
  const { lang, setLang } = useContext(LanguageContext);

  return (
    <div style={{ display: "flex", gap: 8 }}>
      <button onClick={() => setLang("uz")} aria-pressed={lang === "uz"}>
        UZ
      </button>
      <button onClick={() => setLang("ru")} aria-pressed={lang === "ru"}>
        RU
      </button>
      <button onClick={() => setLang("en")} aria-pressed={lang === "en"}>
        EN
      </button>
    </div>
  );
};

export default LanguageSwitcher;
