"use client"

import React from "react"
import Image from "next/image"
import { motion } from "framer-motion"
import { Heebo } from "next/font/google"

const heebo = Heebo({
  weight: ["400", "700"],
  subsets: ["latin"],
})

interface Props {
  data: {
    title: string
    subtitle: string
    options: { title: string; content: string; image: string }[]
  }
  page: string
  alt: string
}

const sectionContainer = {
  hidden: {},
  show: { transition: { staggerChildren: 0.15 } },
}

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0 },
}

export default function Services({ data, page, alt }: Props) {
  const isLastRow = Math.ceil(data.options.length % 3)

  return (
    <section className="relative bg-sky-50 pt-24 pb-32 overflow-hidden">
      <div className="absolute top-0 left-0 w-full overflow-hidden leading-none -translate-y-px">
        <svg
          className="relative block w-[calc(100%+1px)] h-8"
          viewBox="0 0 100 10"
          preserveAspectRatio="none"
        >
          <path d="M0,0 L100,0 L100,10 L0,6 Z" fill="#F9FAFB" />
        </svg>
      </div>

      <div className="container mx-auto px-4">
        <div className="max-w-4xl text-center mx-auto mb-12">
          <motion.h2
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className={`
              ${heebo.className}
              text-3xl md:text-4xl lg:text-6xl
              font-bold
              bg-clip-text text-transparent
              bg-gradient-to-r from-sky-600 to-teal-400
              mb-4
            `}
          >
            {data.title}
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.4 }}
            className="text-base md:text-lg lg:text-xl text-gray-700"
          >
            {data.subtitle}
          </motion.p>
        </div>

        <motion.div
          className={`
            grid grid-cols-1 md:grid-cols-4 lg:grid-cols-6 gap-6
            ${data.options.length > 3 ? "lg:gap-y-8" : "lg:gap-y-4"}
          `}
          variants={sectionContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
        >
          {data.options.map((item, index) => {
            const isLastItemInRow =
              index > data.options.length - isLastRow - 1

            return (
              <motion.div
                key={index}
                variants={cardVariants}
                whileHover={{
                  scale: 1.05,
                  rotate: [0, 2, -2, 0],
                  boxShadow: "0 20px 40px rgba(0,0,0,0.1)",
                }}
                transition={{ type: "spring", stiffness: 200, damping: 15 }}
                className={`
                  px-4 md:col-span-2
                  ${isLastItemInRow
                    ? isLastRow === 1
                      ? "md:col-start-3"
                      : index === data.options.length - 2
                      ? "md:col-start-2"
                      : "md:col-start-4"
                    : ""}
                `}
              >
                <div className="bg-white rounded-md overflow-hidden">
                  <div className="w-full max-w-[373px] mx-auto">
                    <Image
                      src={`/images/services/${page}/${item.image}`}
                      alt={alt}
                      width={373}
                      height={245}
                      className="object-cover"
                    />
                  </div>
                  <div className="p-8">
                    <h3
                      className={`
                        ${heebo.className}
                        text-xl font-semibold mb-4 text-gray-800
                      `}
                    >
                      {item.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {item.content}
                    </p>
                  </div>
                </div>
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}