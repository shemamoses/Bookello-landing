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

  return (
    <>
      <header
        className={`sticky top-0 z-50 flex items-center justify-between whitespace-nowrap border-b transition-all duration-300 px-6 py-3 md:px-10 ${
          isScrolled || isMenuOpen
            ? "bg-white/95 backdrop-blur-md border-border-light shadow-sm"
            : "bg-transparent border-transparent"
        }`}
      >
        <div className="flex items-center gap-4 z-50">
          <div className="size-8 text-primary">
            <span className="material-symbols-outlined text-3xl">
              travel_explore
            </span>
          </div>
          <h2 className={`text-lg font-bold leading-tight tracking-[-0.015em] ${
            isScrolled || isMenuOpen ? "text-text-light" : "text-white"
          }`}>
            Bookello
          </h2>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex flex-1 justify-end gap-8 items-center">
          <nav className="flex items-center gap-9">
            <Link
              className={`text-sm font-medium leading-normal hover:text-primary transition-colors ${
                isScrolled ? "text-text-light" : "text-white"
              }`}
              href="#"
            >
              About
            </Link>
            <Link
              className={`text-sm font-medium leading-normal hover:text-primary transition-colors ${
                isScrolled ? "text-text-light" : "text-white"
              }`}
              href="#"
            >
              Products
            </Link>
            <Link
              className={`text-sm font-medium leading-normal hover:text-primary transition-colors ${
                isScrolled ? "text-text-light" : "text-white"
              }`}
              href="#"
            >
              Partners
            </Link>
            <Link
              className={`text-sm font-medium leading-normal hover:text-primary transition-colors ${
                isScrolled ? "text-text-light" : "text-white"
              }`}
              href="#"
            >
              Contact
            </Link>
          </nav>
          <button className="flex min-w-[84px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 px-5 bg-primary text-white text-sm font-bold leading-normal tracking-[0.015em] hover:bg-primary-dark transition-colors shadow-md shadow-primary/20">
            <span className="truncate">Partner with us</span>
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className={`md:hidden p-2 z-50 relative ${
            isScrolled || isMenuOpen ? "text-text-light" : "text-white"
          }`}
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          <span className="material-symbols-outlined absolute transition-all duration-300 transform">
            {isMenuOpen ? "close" : "menu"}
          </span>
          <span className="material-symbols-outlined opacity-0">menu</span>
        </button>
      </header>

      {/* Mobile Navigation Drawer */}
      <div
        className={`fixed inset-0 z-40 bg-white flex flex-col pt-24 px-6 md:hidden transition-transform duration-300 ease-in-out ${
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <nav className="flex flex-col gap-6 text-lg font-medium">
          <Link
            className="text-text-light hover:text-primary border-b border-border-light pb-4 transition-colors"
            href="#"
            onClick={closeMenu}
          >
            About
          </Link>
          <Link
            className="text-text-light hover:text-primary border-b border-border-light pb-4 transition-colors"
            href="#"
            onClick={closeMenu}
          >
            Products
          </Link>
          <Link
            className="text-text-light hover:text-primary border-b border-border-light pb-4 transition-colors"
            href="#"
            onClick={closeMenu}
          >
            Partners
          </Link>
          <Link
            className="text-text-light hover:text-primary border-b border-border-light pb-4 transition-colors"
            href="#"
            onClick={closeMenu}
          >
            Contact
          </Link>
        </nav>
        <div className="mt-8">
          <button className="w-full flex cursor-pointer items-center justify-center rounded-lg h-12 bg-primary text-white text-base font-bold hover:bg-primary-dark transition-colors shadow-lg">
            Partner with us
          </button>
        </div>
      </div>
    </>
  );
}
