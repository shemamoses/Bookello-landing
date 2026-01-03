"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    if (!isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
    document.body.style.overflow = "unset";
  };

  const navLinkClass = isScrolled
    ? "text-slate-700 hover:text-blue-600"
    : "text-white/90 hover:text-white";

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 flex items-center justify-between whitespace-nowrap transition-all duration-300 px-6 py-4 md:px-10 ${
          isScrolled || isMenuOpen
            ? "bg-white shadow-lg border-b border-slate-100"
            : "bg-gradient-to-b from-black/20 to-transparent"
        }`}
      >
        <Link href="/" className="flex items-center gap-3 z-50">
          <div className={`size-9 ${isScrolled || isMenuOpen ? "text-blue-600" : "text-white"}`}>
            <span className="material-symbols-outlined text-[32px]">
              travel_explore
            </span>
          </div>
          <span className={`text-xl font-bold tracking-tight ${
            isScrolled || isMenuOpen ? "text-slate-800" : "text-white"
          }`}>
            Bookello
          </span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex flex-1 justify-end gap-10 items-center">
          <nav className="flex items-center gap-8">
            {["About", "Products", "Partners", "Contact"].map((item) => (
              <Link
                key={item}
                className={`text-sm font-semibold transition-colors duration-200 ${navLinkClass}`}
                href={`#${item.toLowerCase()}`}
              >
                {item}
              </Link>
            ))}
          </nav>
          <button className="flex items-center justify-center rounded-full h-11 px-6 bg-blue-600 text-white text-sm font-bold hover:bg-blue-700 transition-all duration-200 shadow-lg shadow-blue-600/25 hover:shadow-blue-600/40 hover:scale-[1.02]">
            Partner with us
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className={`md:hidden p-2 z-50 rounded-lg transition-colors ${
            isScrolled || isMenuOpen 
              ? "text-slate-700 hover:bg-slate-100" 
              : "text-white hover:bg-white/10"
          }`}
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          <span className="material-symbols-outlined text-[28px]">
            {isMenuOpen ? "close" : "menu"}
          </span>
        </button>
      </header>

      {/* Mobile Navigation Drawer */}
      <div
        className={`fixed inset-0 z-40 bg-white flex flex-col pt-24 px-6 md:hidden transition-all duration-300 ease-out ${
          isMenuOpen ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-full pointer-events-none"
        }`}
      >
        <nav className="flex flex-col gap-2">
          {["About", "Products", "Partners", "Contact"].map((item, index) => (
            <Link
              key={item}
              className="text-slate-700 hover:text-blue-600 hover:bg-blue-50 text-lg font-semibold py-4 px-4 rounded-xl transition-all duration-200"
              href={`#${item.toLowerCase()}`}
              onClick={closeMenu}
              style={{ animationDelay: `${index * 50}ms` }}
            >
              {item}
            </Link>
          ))}
        </nav>
        <div className="mt-8 pt-6 border-t border-slate-100">
          <button className="w-full flex cursor-pointer items-center justify-center rounded-full h-14 bg-blue-600 text-white text-base font-bold hover:bg-blue-700 transition-all duration-200 shadow-lg shadow-blue-600/25">
            Partner with us
          </button>
        </div>
      </div>
    </>
  );
}
