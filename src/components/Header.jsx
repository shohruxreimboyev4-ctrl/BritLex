import React, { useState, useContext } from "react";
import { NavLink, Link, useNavigate, useLocation } from "react-router-dom";
import { LanguageContext } from "../context/LanguageContext";

import Britlex from "../assets/svg/Britlex.svg";

const Header = () => {
  const { t, lang, setLang } = useContext(LanguageContext);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLangOpen, setIsLangOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const toggleLang = () => setIsLangOpen(!isLangOpen);

  const navigate = useNavigate()
  const location = useLocation()

  const handleAnchor = (e, id) => {
    e.preventDefault()
    const scrollTo = () => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
    if (location.pathname !== '/') {
      navigate('/')
      // wait for route change and DOM render
      setTimeout(scrollTo, 220)
    } else {
      scrollTo()
    }
    setIsMenuOpen(false)
  }

  const languages = [
    {
      code: "uz",
      label: "UZ",
      flag: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTTEZc0KMJVFecicNTyhK9GoGCH4fWSMjo5dA&s",
    },
    {
      code: "ru",
      label: "RU",
      flag: "https://upload.wikimedia.org/wikipedia/commons/d/d4/Flag_of_Russia.png",
    },
    {
      code: "en",
      label: "EN",
      flag: "https://upload.wikimedia.org/wikipedia/commons/e/e2/Flag_of_the_United_States_%28Pantone%29.svg",
    },
  ];

  const navItems = [
    { to: "/", label: t("nav.home") },
    { to: "/about", label: t("nav.about") },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 bg-white shadow-sm z-50 border-b border-gray-200">
      <div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-[1280px]">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0 flex items-center">
            <Link to="/">
              <img src={Britlex} alt={t("header.brand")} className="h-8" />
            </Link>
          </div>

          <nav className="hidden md:flex items-center space-x-6 mx-auto">
            {navItems.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                className={({ isActive }) =>
                  `px-3 py-2 rounded-md text-sm font-medium ${
                    isActive
                      ? "text-blue-600 font-bold"
                      : "text-gray-700 hover:text-gray-900"
                  }`
                }
              >
                {item.label}
              </NavLink>
            ))}
            <a
              href="#skills"
              onClick={(e) => handleAnchor(e, 'skills')}
              className="text-gray-700 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium"
            >
              {t("nav.skills")}
            </a>
            <a
              href="#pricing"
              onClick={(e) => handleAnchor(e, 'pricing')}
              className="text-gray-700 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium"
            >
              {t("nav.pricing")}
            </a>
            <a
              href="#contacts"
              onClick={(e) => handleAnchor(e, 'contacts')}
              className="text-gray-700 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium"
            >
              {t("nav.contacts")}
            </a>
          </nav>

          <div className="flex items-center space-x-4">
            <div className="relative">
              <button
                onClick={toggleLang}
                className="border border-gray-300 rounded-md px-3 py-1 text-sm font-medium bg-white hover:bg-gray-50 flex items-center gap-1"
              >
                <img
                  src={languages.find((l) => l.code === lang)?.flag}
                  alt={lang}
                  className="w-4 h-4"
                />
                {lang.toUpperCase()}
              </button>
              {isLangOpen && (
                <div className="absolute right-0 mt-1 w-32 bg-white border border-gray-200 rounded-md shadow-lg z-50">
                  {languages.map((l) => (
                    <button
                      key={l.code}
                      onClick={() => {
                        setLang(l.code);
                        setIsLangOpen(false);
                      }}
                      className={`block w-full text-left px-3 py-2 text-sm hover:bg-gray-100 flex items-center gap-2 ${
                        lang === l.code ? "font-bold" : ""
                      }`}
                    >
                      <img src={l.flag} alt={l.label} className="w-4 h-4" />
                      {l.label}
                    </button>
                  ))}
                </div>
              )}
            </div>

            <button className="bg-white border border-gray-300 text-gray-700 hover:bg-gray-50 px-4 py-2 rounded-md text-sm font-medium transition">
              {t("nav.talk")}
            </button>

            <div className="md:hidden flex items-center">
              <button
                onClick={toggleMenu}
                className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-gray-900 hover:bg-gray-100 focus:outline-none"
              >
                <span className="sr-only">Open main menu</span>
                {isMenuOpen ? (
                  <svg
                    className="h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                ) : (
                  <svg
                    className="h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>
      </div>

      <div
        className={`md:hidden ${
          isMenuOpen ? "block" : "hidden"
        } bg-white border-t border-gray-200`}
      >
        <div className="px-4 pt-2 pb-4 space-y-1">
          {navItems.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              onClick={() => setIsMenuOpen(false)}
              className={({ isActive }) =>
                `block px-3 py-2 rounded-md text-base font-medium ${
                  isActive
                    ? "text-blue-600 font-bold"
                    : "text-gray-700 hover:text-gray-900 hover:bg-gray-50"
                }`
              }
            >
              {item.label}
            </NavLink>
          ))}
          <a
            href="#skills"
            onClick={(e) => handleAnchor(e, 'skills')}
            className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50"
          >
            {t("nav.skills")}
          </a>
          <a
            href="#pricing"
            onClick={(e) => handleAnchor(e, 'pricing')}
            className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50"
          >
            {t("nav.pricing")}
          </a>
          <a
            href="#contacts"
            onClick={(e) => handleAnchor(e, 'contacts')}
            className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50"
          >
            {t("nav.contacts")}
          </a>

          <div className="flex justify-between items-center mt-2">
            <div className="relative">
              <button
                onClick={() => setIsLangOpen(!isLangOpen)}
                className="border border-gray-300 rounded-md px-3 py-1 text-sm font-medium bg-white hover:bg-gray-50 flex items-center gap-1"
              >
                <img
                  src={languages.find((l) => l.code === lang)?.flag}
                  alt={lang}
                  className="w-4 h-4"
                />
                {lang.toUpperCase()}
              </button>
              {isLangOpen && (
                <div className="absolute mt-1 w-32 bg-white border border-gray-200 rounded-md shadow-lg z-50">
                  {languages.map((l) => (
                    <button
                      key={l.code}
                      onClick={() => {
                        setLang(l.code);
                        setIsLangOpen(false);
                        setIsMenuOpen(false);
                      }}
                      className={`block w-full text-left px-3 py-2 text-sm hover:bg-gray-100 flex items-center gap-2 ${
                        lang === l.code ? "font-bold" : ""
                      }`}
                    >
                      <img src={l.flag} alt={l.label} className="w-4 h-4" />
                      {l.label}
                    </button>
                  ))}
                </div>
              )}
            </div>

            <button className="bg-white border border-gray-300 text-gray-700 hover:bg-gray-50 px-4 py-2 rounded-md text-sm font-medium transition">
              {t("nav.talk")}
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
