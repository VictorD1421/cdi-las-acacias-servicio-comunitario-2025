"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  Menu as MenuIcon,
  X as CloseIcon,
  MapPin,
} from "lucide-react";
import menuData from "@/data/menu/menuData";

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const mapLink = process.env.NEXT_PUBLIC_MAP_URL;

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className="fixed inset-x-0 top-0 z-50 bg-white">
      <div
        className={`max-w-6xl mx-auto flex items-center justify-between px-4 py-4 ${
          scrolled ? "shadow-md" : "shadow-sm"
        } transition-shadow duration-300`}
      >
        <Link href="/" className="flex items-center">
          <div className="relative w-48 h-16 sm:w-56 sm:h-20 lg:w-64 lg:h-24">
            <Image
              src="/logo.png"
              alt="CDI Las Acacias"
              fill
              style={{ objectFit: "contain" }}
              priority
            />
          </div>
        </Link>

        <nav className="hidden md:flex space-x-8 text-sky-700 font-medium">
          {menuData.map((item, idx) => (
            <Link
              key={idx}
              href={item.url}
              className="hover:text-thrustwhorthy-brown transition-colors"
            >
              {item.title}
            </Link>
          ))}
        </nav>

        <div className="flex items-center space-x-4">
          {mapLink && (
            <Link
              href={mapLink}
              target="_blank"
              className="flex items-center justify-center bg-thrustwhorthy-brown text-white rounded-md px-4 py-2 hover:bg-vital-green transition-all duration-200"
            >
              {/* full text on sm+ screens */}
              <span className="hidden sm:inline-block">
                Cómo Llegar
              </span>

              {/* icon on xs screens */}
              <MapPin className="inline-block sm:hidden w-6 h-6" />
            </Link>
          )}

          <button
            className="md:hidden text-sky-700 p-2"
            onClick={() => setMobileOpen(true)}
          >
            <MenuIcon className="w-6 h-6" />
          </button>
        </div>
      </div>

      {mobileOpen && (
        <div className="fixed inset-0 z-40 flex flex-col items-center pt-24 space-y-8 bg-white bg-opacity-95">
          <button
            className="absolute top-6 right-6 p-2 text-sky-700"
            onClick={() => setMobileOpen(false)}
          >
            <CloseIcon className="w-6 h-6" />
          </button>

          <nav className="flex flex-col items-center space-y-6 text-lg font-medium text-sky-700">
            {menuData.map((item, idx) => (
              <Link
                key={idx}
                href={item.url}
                className="hover:text-sky-900 transition-colors"
                onClick={() => setMobileOpen(false)}
              >
                {item.title}
              </Link>
            ))}
          </nav>

          {mapLink && (
            <Link
              href={mapLink}
              target="_blank"
              className="flex items-center justify-center bg-thrustwhorthy-brown text-white rounded-md px-6 py-3 hover:bg-vital-green transition-all duration-200"
            >
              Cómo Llegar
            </Link>
          )}
        </div>
      )}
    </header>
  );
}