export interface ImageItem {
  src: string
  alt: string
  info: string
}

export interface WhyData {
  title: string
  paragraphs: string[]
  images: ImageItem[]
}

const whyHome: WhyData = {
  title: "Convenios Educativos y Comunitarios",
  paragraphs: [
    "Trabajamos en conjunto con instituciones educativas y organizaciones comunitarias para ofrecer programas de salud y bienestar. ",
    "Aquí los estudiantes pueden realizar sus pasantias y servicios sociales, contribuyendo al desarrollo de habilidades prácticas y al fortalecimiento de la atención comunitaria.",
    
  ],
  images: [
    {
      src: "/images/why/home/convenio1.jpg",
      alt: "Universidad de las Ciencias de la Salud.",
      info: "Estudiantes de la Universidad de las Ciencias de la Salud.",
    },
    {
      src: "/images/why/home/convenio2.jpg",
      alt: "Estudiantes del IUTA Maracay Informática.",
      info: "Estudiantes de Informática del IUTA Maracay realizando servicio comunitario.",
    },
    {
      src: "/images/why/home/convenio3.jpg",
      alt: "Estudiantes del IUTA Maracay Informática.",
      info: "Estudiantes de Informática del IUTA Maracay realizando servicio comunitario.",
    },
    {
      src: "/images/why/home/convenio4.jpg",
      alt: "Estudiantes de Administración de Personal - IUTA Maracay .",
      info: "Estudiantes de Administración de Personal - IUTA Maracay realizando servicio comunitario.",
    },
  ],
}

export default whyHome