import React from "react"
import { LucideIcon } from "lucide-react"
import { Heebo } from "next/font/google"

const heebo = Heebo({
  weight: ["400", "500", "700"],
  subsets: ["latin"],
})

interface Props {
  data: {
    title: string
    subtitle?: string
    content?: string
    options: {
      icon: LucideIcon
      title: string
      content: string
    }[]
  }
}

export default function Works({ data }: Props) {
  // determine lg grid columns based on number of items
  const cols =
    data.options.length > 5
      ? "lg:grid-cols-3"
      : data.options.length > 4
      ? "lg:grid-cols-5"
      : data.options.length > 3
      ? "lg:grid-cols-4"
      : "lg:grid-cols-3"

  return (
    <section className="relative bg-sky-50 pt-16 pb-20">
      {/* top wave divider */}
      <div className="absolute top-0 left-0 w-full overflow-hidden leading-none">
        <svg
          className="relative block w-[calc(100%+1px)] h-8"
          viewBox="0 0 100 10"
          preserveAspectRatio="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M0,0 L100,0 L100,10 L0,6 Z" fill="#EFF6FF" />
        </svg>
      </div>

      {/* header card */}
      <div className="container mx-auto px-4 -mt-8">
        <div className="bg-white rounded-xl shadow-lg border-t-4 border-sky-200 p-8 text-center">
          <h2
            className={`
              ${heebo.className}
              text-3xl md:text-4xl lg:text-5xl font-bold
              text-sky-600 mb-2
            `}
          >
            {data.title}
          </h2>
          {data.subtitle && (
            <p className="text-gray-700 text-base md:text-lg lg:text-xl">
              {data.subtitle}
            </p>
          )}
        </div>
      </div>

      {/* optional description below header */}
      {data.content && (
        <div className="container mx-auto px-4 mt-4">
          <p className="text-gray-600 text-center text-sm md:text-base lg:text-lg">
            {data.content}
          </p>
        </div>
      )}

      {/* options grid */}
      <div className="container mx-auto px-4 mt-12">
        <div
          className={`grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 ${cols} gap-8`}
        >
          {data.options.map((item, idx) => (
            <div key={idx} className="flex justify-center">
              <div className="group bg-white rounded-lg border border-gray-200 p-6 text-center transition-shadow shadow-sm hover:shadow-xl">
                <div className="mx-auto mb-4 flex h-20 w-20 items-center justify-center rounded-full border-2 border-gray-200 bg-white transition-colors group-hover:border-thrustwhorthy-brown">
                  {React.createElement(item.icon, {
                    className:
                      "h-10 w-10 text-sky-500 group-hover:text-thrustwhorthy-brown",
                  })}
                </div>
                <h3
                  className={`
                    ${heebo.className}
                    text-lg font-semibold text-sky-600
                    group-hover:text-xl transition-all duration-200 mb-2
                  `}
                >
                  {item.title}
                </h3>
                <p className="text-gray-600 text-sm group-hover:text-base transition-all duration-200">
                  {item.content}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}