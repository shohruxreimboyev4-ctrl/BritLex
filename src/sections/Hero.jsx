import React, { useContext } from "react";
import { LanguageContext } from "../context/LanguageContext";
import hero from "../assets/img/hero.png";
import bulb from "../assets/svg/bulb.svg";

const Hero = () => {
  const { t } = useContext(LanguageContext);

  return (
    <section className="pt-[100px] pb-10 px-4">
      <div className="max-w-[1280px] mx-auto flex flex-col-reverse md:flex-row items-center gap-10">
        <div className="flex-1 text-center md:text-left relative">
          <img
            src={bulb}
            alt="idea"
            className="hidden md:block absolute -right-4 top-2 w-20"
          />

          <h1 className="text-[28px] sm:text-[36px] md:text-[48px] lg:text-[56px] font-bold leading-tight">
            {t("hero.title1")} <br />
            {t("hero.title2")} <br />
            {t("hero.title3")}
          </h1>

          <p className="mt-6 text-[#8F95A5] text-sm sm:text-base max-w-[420px] mx-auto md:mx-0">
            {t("hero.desc")}
          </p>

          <button className="mt-8 bg-[#263238] text-white px-8 py-4 rounded-lg text-sm sm:text-base hover:opacity-90 transition">
            {t("hero.btn")}
          </button>
        </div>

        <div className="flex-1 flex justify-center">
          <img
            src={hero}
            alt="Learn Language"
            className="w-full max-w-[420px] md:max-w-[520px]"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
