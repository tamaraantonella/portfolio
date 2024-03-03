import Image from "next/image";
import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <footer className="border md:h-fit border-t-[#33353F] border-l-transparent border-r-transparent border-b-transparent text-white">
      <div className="flex container lg:py-4 flex-wrap items-center justify-between mx-auto px-4 py-2">
        <p className="text-slate-600">Tamara Frazzetta</p>
        <p className="text-slate-600">All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
