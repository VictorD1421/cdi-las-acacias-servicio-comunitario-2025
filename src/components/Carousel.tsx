"use client";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Heebo } from "next/font/google";
import { Button } from "@nextui-org/react";

const heebo = Heebo({
  weight: [
    "100","200","300","400","500","600","700","800","900"
  ],
  style: ["normal"],
  subsets: ["latin"],
});

interface Props {
  data: {
    title: string;
    subtitle: string;
    paragraph: string;
    background: string;
  }[];
  page: string;
  max_w_title: string; 
}

function SampleNextArrow({ onClick }: any) {
  return (
    <Button
      isIconOnly
      aria-label="Next Slide"
      onClick={onClick}
      className="
        absolute top-1/2 right-4 -translate-y-1/2
        w-12 h-12 p-0 rounded-full
        bg-sky-700 hover:bg-thrustwhorthy-brown
        shadow-md hover:shadow-lg
        opacity-0 group-hover:opacity-100
        transition-all duration-300
        group-hover:translate-x-2 hover:scale-110
        z-20
      "
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        stroke="#fff"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="w-6 h-6 rotate-180"
      >
        <path d="M15 18l-6-6 6-6" />
      </svg>
    </Button>
  );
}

function SamplePrevArrow({ onClick }: any) {
  return (
    <Button
      isIconOnly
      aria-label="Previous Slide"
      onClick={onClick}
      className="
        absolute top-1/2 left-4 -translate-y-1/2
        w-12 h-12 p-0 rounded-full
        bg-sky-700 hover:bg-thrustwhorthy-brown
        shadow-md hover:shadow-lg
        opacity-0 group-hover:opacity-100
        transition-all duration-300
        group-hover:-translate-x-2 hover:scale-110
        z-20
      "
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        stroke="#fff"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="w-6 h-6"
      >
        <path d="M15 18l-6-6 6-6" />
      </svg>
    </Button>
  );
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
    responsive: [
      {
        breakpoint: 640,   
        settings: {
          arrows: false 
        },
      },
    ],
  };

  return (
    <div className="relative w-full overflow-visible">
      <Slider className="group" {...settings}>
        {data.map((item, idx) => (
          <div key={idx} className="w-full">
            <div
              className={`
                w-full bg-cover bg-no-repeat bg-[77%_top] sm:bg-right-top 
                h-[320px] sm:h-[480px] md:h-[600px] lg:h-[720px] xl:h-[840px] 
                relative
              `}
              style={{
                backgroundImage: `url("/images/slider/${page}/${item.background}")`,
              }}
            >
              <div className="absolute inset-0 bg-black/50 flex flex-col justify-center items-center px-4">
                <h3
                  className={`
                    ${heebo.className}
                    text-xl sm:text-2xl md:text-3xl
                    text-white text-center
                    max-w-xl mb-4 drop-shadow
                  `}
                >
                  {item.title}
                </h3>

                {idx > 0 ? (
                  <h2
                    style={{ maxWidth: max_w_title }}
                    className={`
                      ${heebo.className}
                      text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl
                      font-semibold text-white text-center
                      mb-4 drop-shadow
                    `}
                  >
                    {item.subtitle}
                  </h2>
                ) : (
                  <h1
                    style={{ maxWidth: max_w_title }}
                    className={`
                      ${heebo.className}
                      text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl
                      font-semibold text-white text-center
                      mb-4 drop-shadow
                    `}
                  >
                    {item.subtitle}
                  </h1>
                )}

                <p
                  className={`
                    text-base sm:text-lg md:text-xl
                    text-white text-center
                    max-w-2xl drop-shadow
                  `}
                >
                  {item.paragraph}
                </p>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
}

/*

1. Props esperados
- data: Array de objetos con title, subtitle, paragraph y background. Define el contenido de cada slide.
- page: Nombre de la carpeta donde están las imágenes de fondo.
- max_w_title: Define el ancho máximo del título/subtítulo para mantener legibilidad.

2. Slider Settings
- Usa react-slick para crear el carrusel.
- fade: true activa transición suave entre slides.
- autoplay: true con autoplaySpeed: 15000 cambia cada 15 segundos.
- arrows: true muestra flechas personalizadas (SampleNextArrow, SamplePrevArrow).
- En pantallas menores a 640px (breakpoint), las flechas se ocultan.

3. Estilos y fuentes
- Se usa la fuente Heebo desde Google Fonts.
- Las clases de Tailwind CSS definen tamaños responsivos, sombras, colores y transiciones.
- El fondo de cada slide se carga dinámicamente desde /images/slider/${page}/${item.background}.

4. Cómo modificar contenido
- Para cambiar el texto o imágenes, edita el array data que se pasa como prop.
- Para cambiar el estilo, ajusta las clases Tailwind en los elementos deseados.
- Para cambiar la duración entre slides, modifica autoplaySpeed.
- Para cambiar la fuente, reemplaza la configuración de Heebo por otra fuente de Google Fonts.

5. Para modificar las informaciones de los slides
- Edita el array data en el componente padre que usa este Carousel.
- Cada objeto debe tener las propiedades title, subtitle, paragraph y background.
- Asegúrate de que las imágenes estén en la carpeta correcta según el prop page.
*/