"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import {
  MapPin,
  Phone,
  Mail,
  Facebook,
  Instagram,
  Twitter,
  Linkedin,
  Clock,
  ChevronDown,
} from "lucide-react";
import contactData from "@/data/contactData";
import socialNetwork from "@/data/socialNetwork";
import horaryData from "@/data/horaryData";
import menuData from "@/data/menu/menuData";
import linksData from "@/data/menu/linksData";

export default function Footer() {
  return (
    <footer className="bg-sky-50 text-gray-700">
      <div className="container mx-auto px-6 py-12 grid gap-12 md:grid-cols-2 lg:grid-cols-4">
        <div className="space-y-4">
          <Image
            src="/logo2.png"
            alt="CDI Las Acacias"
            width={360}
            height={80}
            className="mx-auto lg:mx-0"
          />
          <p className="text-sm">
            Fortaleciendo la comunidad con servicios de calidad y calidez.
          </p>
          <div className="flex space-x-3">
            {socialNetwork.map((item, idx) => (
              <Link
                key={idx}
                href={item.url}
                target="_blank"
                className="p-2 bg-white rounded-full shadow hover:bg-sky-200 transition"
              >
                {React.createElement(item.icon, {
                  className: "w-5 h-5 text-sky-600",
                })}
              </Link>
            ))}
          </div>
        </div>

        <div className="space-y-4">
          <h3 className="text-lg font-semibold text-sky-600">Contacto</h3>
          <ul className="space-y-3">
            {contactData.map((item, idx) => (
              <li key={idx} className="flex items-start space-x-3">
                <span className="text-sky-600">
                  {React.createElement(item.icon, { className: "w-6 h-6" })}
                </span>
                <div>
                  <Link
                    href={item.url}
                    target="_blank"
                    className="hover:text-sky-800 font-medium"
                  >
                    {item.title}
                  </Link>
                  <p className="text-sm">
                    {idx === 0 && item.content2 ? item.content2 : item.content}
                  </p>
                </div>
              </li>
            ))}
          </ul>
        </div>
        <div className="space-y-4">
          <h3 className="text-lg font-semibold text-sky-600">Menú</h3>
          <ul className="space-y-2">
            {menuData.map((item, idx) => (
              <li key={idx}>
                <Link
                  href={item.url}
                  className="hover:text-sky-800 transition"
                >
                  {item.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="space-y-6">
          <div className="space-y-2">
            <h3 className="text-lg font-semibold text-sky-600">
              Enlaces de Interés
            </h3>
            <ul className="space-y-2">
              {linksData.map((group, idx) => (
                <li key={idx}>
                  <details className="group [&_summary::-webkit-details-marker]:hidden">
                    <summary className="flex justify-between items-center cursor-pointer font-medium hover:text-sky-800 transition">
                      {group.item}
                      <ChevronDown
                        className="w-4 h-4 text-sky-600 transition-transform group-open:rotate-180"
                      />
                    </summary>
                    <ul className="mt-2 ml-4 space-y-1">
                      {group.submenu.map((sub, sidx) => (
                        <li key={sidx}>
                          <Link
                            href={sub.url}
                            className="text-sm hover:text-sky-800 transition"
                          >
                            {sub.title}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </details>
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-2">
            <h3 className="text-lg font-semibold text-sky-600">
              Horarios de Atención
            </h3>
            <ul className="space-y-1">
              {horaryData.map((item, idx) => (
                <li
                  key={idx}
                  className="flex justify-between items-center text-sm"
                >
                  <span>{item.day}</span>
                  <span>{item.hours}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <div className="border-t border-sky-200 mt-12">
        <div className="container mx-auto px-6 py-6 text-center text-sm text-gray-500 space-y-1">
          <p>© ASIC Las Acacias 2025 | Todos los derechos reservados</p>
          <p>
            Diseñada y desarrollada por{" "}
            <span className="text-sky-600 font-semibold">
              Servicio Comunitario Informática IUTA Maracay
            </span>
          </p>
        </div>
      </div>
    </footer>
  );
}