import Image from "next/image";
import Link from "next/link";

function Whatsapp() {
  const whatsappLink = process.env.NEXT_PUBLIC_WHATSAPP_URL || "#";

  return (
    <Link
      href={whatsappLink}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Contáctanos por WhatsApp"
      className="whatsapp flex"
    >
      <div className="whatsapp relative flex flex-row items-center justify-center gap-x-4 p-1 sm:p-2 rounded-md bg-transparent sm:bg-black/90 sm:backdrop-blur-sm sm:shadow-md z-50">
        <Image
          src="/whatsapp-logo.webp"
          width={50}
          height={50}
          alt="Icono de WhatsApp"
          priority
          className="w-[40px] sm:w-[50px] h-auto drop-shadow-sm animate-pulse"
        />
        <p className="hidden sm:flex text-sm text-white text-center drop-shadow max-w-28">
          ¡Contáctanos directamente por este enlace!
        </p>
      </div>
    </Link>
  );
}

export default Whatsapp;