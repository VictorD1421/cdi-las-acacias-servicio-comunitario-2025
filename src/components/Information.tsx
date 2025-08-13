"use client"

import React, { useEffect, useState } from "react"
import Image from "next/image"
import { motion, AnimatePresence } from "framer-motion"
import { Heebo } from "next/font/google"

const heebo = Heebo({
  weight: ["400", "500", "700"],
  subsets: ["latin"],
})

interface Props {
  data: {
    title: string
    subtitle?: string
    paragraphs: { text: string }[]
    images: string[]
  }
  page: string
  alt: string
}

// Hook to detect mobile screen
function useIsMobile(breakpoint = 768) {
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const checkSize = () => setIsMobile(window.innerWidth < breakpoint)
    checkSize()
    window.addEventListener("resize", checkSize)
    return () => window.removeEventListener("resize", checkSize)
  }, [breakpoint])

  return isMobile
}

const containerVariants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.2 } },
}

const textVariants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
}

export default function Information({ data, page, alt }: Props) {
  const { title, subtitle, paragraphs, images } = data
  const isMobile = useIsMobile()
  const [currentImage, setCurrentImage] = useState(0)

  useEffect(() => {
    if (!isMobile) return
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length)
    }, 15000) // 15 seconds
    return () => clearInterval(interval)
  }, [isMobile, images.length])

  return (
    <section className="relative bg-white pt-24 pb-32 overflow-hidden">
      <div className="absolute top-0 left-0 w-full overflow-hidden leading-none">
        <svg
          className="relative block w-[calc(100%+1px)] h-8 -translate-y-px"
          viewBox="0 0 100 10"
          preserveAspectRatio="none"
        >
          <path d="M0,0 L100,0 L100,10 L0,6 Z" fill="#F9FAFB" />
        </svg>
      </div>

      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center lg:items-start gap-12">
          {/* Text Section */}
          <motion.div
            className="flex-1 max-w-xl"
            variants={containerVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
          >
            <motion.h2
              variants={textVariants}
              className={`${heebo.className} text-4xl md:text-5xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-sky-600 to-indigo-500 mb-4`}
            >
              {title}
            </motion.h2>

            {subtitle && (
              <motion.h3
                variants={textVariants}
                className="text-lg md:text-xl text-gray-700 font-medium mb-6"
              >
                {subtitle}
              </motion.h3>
            )}

            {paragraphs.map((p, idx) => (
              <motion.p
                key={idx}
                variants={textVariants}
                className="text-gray-700 leading-relaxed mb-6 text-base md:text-lg"
              >
                {p.text}
              </motion.p>
            ))}
          </motion.div>

          {/* Image Section */}
          {isMobile ? (
            <div className="flex-1 w-full max-w-md mx-auto">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentImage}
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -50 }}
                  transition={{ duration: 0.8 }}
                  className="relative aspect-[4/3] rounded-xl overflow-hidden shadow-lg ring-4 ring-white"
                >
                  <Image
                    src={`/images/information/${page}/${images[currentImage]}`}
                    alt={alt}
                    fill
                    className="object-cover"
                  />
                </motion.div>
              </AnimatePresence>
            </div>
          ) : (
            <div className="flex-1 grid grid-cols-1 sm:grid-cols-2 gap-6">
              {images.map((src, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: i % 2 ? -30 : 30, scale: 0.9 }}
                  whileInView={{ opacity: 1, y: 0, scale: 1 }}
                  viewport={{ once: true, amount: 0.3 }}
                  whileHover={{
                    scale: 1.07,
                    y: -8,
                    rotate: [0, 2, -2, 0],
                  }}
                  transition={{
                    type: "spring",
                    stiffness: 250,
                    damping: 12,
                  }}
                  className="relative aspect-[4/3] rounded-xl overflow-hidden shadow-lg ring-4 ring-white cursor-pointer"
                >
                  <Image
                    src={`/images/information/${page}/${src}`}
                    alt={alt}
                    fill
                    className="object-cover"
                  />
                </motion.div>
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  )
}