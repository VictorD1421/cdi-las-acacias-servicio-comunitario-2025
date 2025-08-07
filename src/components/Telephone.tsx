import Image from "next/image";
import Link from "next/link";

function Telephone() {
  const telephoneLink = process.env.NEXT_PUBLIC_TELEPHONE_URL || "#";

  return (
    <Link
      href={telephoneLink}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Llamar por teléfono"
      className="telefono flex"
    >
      <div className="telefono relative flex flex-row items-center justify-center gap-x-4 p-1 sm:p-2 rounded-md bg-transparent sm:bg-black/90 sm:backdrop-blur-sm sm:shadow-md z-50">
        <Image
          src="/telephone-logo.webp"
          width={50}
          height={50}
          alt="Icono de teléfono"
          priority
          className="telefono w-[40px] sm:w-[50px] h-auto drop-shadow-sm animate-pulse"
       />
        <p className="telefono hidden sm:flex text-sm text-white text-center drop-shadow max-w-28">
          ¡Llámanos directamente por este enlace!
        </p>
      </div>
    </Link>
  );
}

export default Telephone;
