import React from "react";
import Britlex from "../assets/svg/Britlex.svg";

const Footer = () => {
  return (
    <footer className="border-t border-gray-200 mt-16">
      <div className="max-w-[1280px] mx-auto px-4 py-5 flex flex-wrap items-center justify-between gap-4">
        <div className="flex items-center">
          <img src={Britlex} alt="Britlex" className="h-8" />
        </div>

        <div className="flex flex-wrap items-center gap-3 text-sm text-gray-400">
          <a href="#" className="hover:text-gray-600 transition">
            Terms and Conditions
          </a>
          <span>•</span>
          <a href="#" className="hover:text-gray-600 transition">
            Privacy Policy
          </a>
          <span>•</span>
          <a href="#" className="hover:text-gray-600 transition">
            Cookie Policy
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
