"use client";

import React from "react";
import { Button } from "@heroui/react";
import Link from "next/link";
import Image from "next/image";

interface Props {
  data: { text: string };
  alt: string;
}

export default function Banner({ data, alt }: Props) {

  return (
    <section className="bg-sky-50 py-16">
      <div className="container mx-auto px-4 lg:flex lg:items-center lg:justify-between">
        <div className="lg:w-1/2 text-center lg:text-left space-y-4">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-blue-800">
            Dr. José María Vargas
          </h2>
          <p className="text-gray-700 text-base sm:text-lg">{data.text}</p>
        </div>
        <div className="mt-8 lg:mt-0 lg:w-1/2 flex justify-center">
          <div className="relative w-48 h-64 sm:w-56 sm:h-80 lg:w-64 lg:h-96 rounded-xl overflow-hidden shadow-lg">
            <Image
              src="/images/misc/DSC3079.png"
              alt={alt}
              fill
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}