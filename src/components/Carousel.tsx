"use client"

import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import { Heebo } from "next/font/google"
import { Button } from "@nextui-org/react"

const heebo = Heebo({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  style: ["normal"],
  subsets: ["latin"],
})

interface Props {
  data: {
    title: string
    subtitle: string
    paragraph: string
    background: string
  }[]
  page: string
  max_w_title: string
}

function SampleNextArrow({ onClick }: any) {
  return (
    <Button
      isIconOnly
      aria-label="Next Slide"
      onClick={onClick}
      className="absolute top-1/2 right-4 -translate-y-1/2 w-10 h-10 sm:w-12 sm:h-12 p-0 rounded-full bg-sky-700 hover:bg-thrustwhorthy-brown shadow-md hover:shadow-lg opacity-0 group-hover:opacity-100 transition-all duration-300 group-hover:translate-x-2 hover:scale-110 z-20"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        stroke="#fff"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="w-5 h-5 sm:w-6 sm:h-6 rotate-180"
      >
        <path d="M15 18l-6-6 6-6" />
      </svg>
    </Button>
  )
}

function SamplePrevArrow({ onClick }: any) {
  return (
    <Button
      isIconOnly
      aria-label="Previous Slide"
      onClick={onClick}
      className="absolute top-1/2 left-4 -translate-y-1/2 w-10 h-10 sm:w-12 sm:h-12 p-0 rounded-full bg-sky-700 hover:bg-thrustwhorthy-brown shadow-md hover:shadow-lg opacity-0 group-hover:opacity-100 transition-all duration-300 group-hover:-translate-x-2 hover:scale-110 z-20"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        stroke="#fff"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="w-5 h-5 sm:w-6 sm:h-6"
      >
        <path d="M15 18l-6-6 6-6" />
      </svg>
    </Button>
  )
}

export default function Carousel({ data, page, max_w_title }: Props) {
  const settings = {
    dots: false,
    fade: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 15000,
    pauseOnHover: true,
    arrows: true,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    swipe: true,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          arrows: false,
          swipe: true,
        },
      },
    ],
  }

  return (
    <div className="relative w-full overflow-visible">
      <Slider className="group" {...settings}>
        {data.map((item, idx) => (
          <div key={idx} className="w-full">
            <div
              className={`w-full bg-cover bg-no-repeat bg-center sm:bg-right-top h-[320px] sm:h-[480px] md:h-[600px] lg:h-[720px] xl:h-[840px] relative`}
              style={{
                backgroundImage: `url("/images/slider/${page}/${item.background}")`,
              }}
            >
              <div className="absolute inset-0 bg-black/50 flex flex-col justify-center items-center px-4 py-6 sm:py-12 text-center">
                <h3
                  className={`${heebo.className} text-lg sm:text-xl md:text-2xl text-white mb-2 sm:mb-4 drop-shadow max-w-xl`}
                >
                  {item.title}
                </h3>

                {idx > 0 ? (
                  <h2
                    style={{ maxWidth: max_w_title }}
                    className={`${heebo.className} text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-semibold text-white mb-2 sm:mb-4 drop-shadow`}
                  >
                    {item.subtitle}
                  </h2>
                ) : (
                  <h1
                    style={{ maxWidth: max_w_title }}
                    className={`${heebo.className} text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-semibold text-white mb-2 sm:mb-4 drop-shadow`}
                  >
                    {item.subtitle}
                  </h1>
                )}

                <p className="text-sm sm:text-base md:text-lg text-white max-w-2xl drop-shadow px-2">
                  {item.paragraph}
                </p>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  )
}