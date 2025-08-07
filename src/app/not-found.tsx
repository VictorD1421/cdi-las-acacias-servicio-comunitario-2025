// app/not-found.tsx
"use client"

import React from "react"
import Link from "next/link"
import { motion } from "framer-motion"
import { Heebo } from "next/font/google"
import { Button } from "@nextui-org/react"

const heebo = Heebo({
  weight: ["400", "500", "700"],
  subsets: ["latin"],
})

export default function NotFound() {
  return (
    <section className="relative bg-white min-h-screen flex items-center justify-center px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="max-w-md text-center"
      >
        <h1
          className={`
            ${heebo.className}
            text-4xl md:text-5xl font-extrabold
            bg-clip-text text-transparent
            bg-gradient-to-r from-sky-600 to-indigo-500
            mb-4
          `}
        >
          404 - Página no encontrada
        </h1>
        <p className="text-gray-700 mb-6">
          Lo sentimos, la página que buscas no existe o ha sido eliminada.
        </p>
        <Button
          as={Link}
          href="/"
          variant="solid"
          className="
            bg-blue-green-50 hover:bg-blue-green
            text-white font-bold
            text-sm md:text-base
            py-3 px-6
            rounded-lg
            transition-colors duration-200
          "
        >
          Volver al inicio
        </Button>
      </motion.div>
    </section>
  )
}