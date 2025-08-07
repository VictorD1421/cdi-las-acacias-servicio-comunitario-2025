"use client"

import React, { useState, useEffect, useCallback } from "react"
import Image from "next/image"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { useSwipeable } from "react-swipeable"
import { motion, AnimatePresence } from "framer-motion"
import { Heebo } from "next/font/google"
import type { WhyData, ImageItem } from "../data/why/whyHome"

const heebo = Heebo({
  weight: ["400", "500", "700"],
  subsets: ["latin"],
})

interface Props {
  data: WhyData
}

export default function Why({ data }: Props) {
  const { title, paragraphs, images } = data
  const [current, setCurrent] = useState(0)

  const subtitles = [
    "Universidades Públicas",
    "Universidades Privadas",
    "Servicios Comunitarios",
    "Pasantías Profesionales",
  ]
  const [subtitleIdx, setSubtitleIdx] = useState(0)
  useEffect(() => {
    const id = setInterval(
      () => setSubtitleIdx((i) => (i + 1) % subtitles.length),
      3000
    )
    return () => clearInterval(id)
  }, [])

  const prev = useCallback(
    () => setCurrent((i) => (i - 1 + images.length) % images.length),
    [images.length]
  )
  const next = useCallback(
    () => setCurrent((i) => (i + 1) % images.length),
    [images.length]
  )

  useEffect(() => {
    const id = setInterval(next, 10000)
    return () => clearInterval(id)
  }, [next])

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") prev()
      if (e.key === "ArrowRight") next()
    }
    window.addEventListener("keydown", onKey)
    return () => window.removeEventListener("keydown", onKey)
  }, [prev, next])

  const swipeHandlers = useSwipeable({
    onSwipedLeft: next,
    onSwipedRight: prev,
    trackMouse: true,
  })

  return (
    <section className="bg-sky-50 py-16 overflow-hidden">
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="space-y-8">
          <div className="bg-white rounded-xl border-t-4 border-sky-200 p-8 shadow-lg text-center">
            <h2
              className={`${heebo.className} text-3xl md:text-4xl font-bold text-sky-600 mb-2`}
            >
              {title}
            </h2>
            <div className="h-8 overflow-hidden mb-4">
              <AnimatePresence mode="wait">
                <motion.p
                  key={subtitleIdx}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.4 }}
                  className={`${heebo.className} text-xl font-medium text-gray-600`}
                >
                  {subtitles[subtitleIdx]}
                </motion.p>
              </AnimatePresence>
            </div>
          </div>

          {paragraphs.map((p, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ delay: idx * 0.1, duration: 0.5 }}
              className="bg-white rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow"
            >
              <p className="text-gray-700 leading-relaxed">{p}</p>
            </motion.div>
          ))}
        </div>

        <div
          {...swipeHandlers}
          className="relative w-full h-[400px] rounded-2xl perspective-group group"
        >
          <AnimatePresence initial={false} mode="wait">
            {images.map(
              (img: ImageItem, idx) =>
                idx === current && (
                  <motion.div
                    key={idx}
                    className="absolute inset-0"
                    initial={{ opacity: 0, x: -80 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 80 }}
                    transition={{ type: "spring", stiffness: 120, damping: 20 }}
                  >
                    <motion.div
                      className="relative w-full h-full overflow-hidden rounded-2xl shadow-xl"
                      whileHover={{ scale: 1.02, rotateY: 6 }}
                      whileTap={{ scale: 1, rotateY: 0 }}
                      transition={{ type: "spring", stiffness: 200 }}
                    >
                      <Image
                        src={img.src}
                        alt={img.alt}
                        fill
                        className="object-cover"
                        style={{ transformOrigin: "center center" }}
                      />
                      <motion.div
                        className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"
                        animate={{ opacity: [0.8, 0.6, 0.8] }}
                        transition={{
                          duration: 8,
                          ease: "easeInOut",
                          repeat: Infinity,
                          repeatType: "reverse",
                        }}
                      />
                      <div className="absolute bottom-0 w-full bg-black/40 text-white p-3 text-sm text-center">
                        {img.info}
                      </div>
                    </motion.div>
                  </motion.div>
                )
            )}
          </AnimatePresence>

          <div className="absolute bottom-4 right-4 flex space-x-2 opacity-0 group-hover:opacity-100 transition-opacity">
            <button
              onClick={prev}
              aria-label="Previous"
              className="p-3 bg-white/80 rounded-full hover:bg-white text-sky-600 shadow"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={next}
              aria-label="Next"
              className="p-3 bg-white/80 rounded-full hover:bg-white text-sky-600 shadow"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}