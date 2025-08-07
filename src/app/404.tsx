import { Button } from "@nextui-org/react";
import Link from "next/link";

export default function Custom404() {
  return (
    <div className="text-center px-12 pt-60 pb-14">
      <h1 className="text-3xl font-bold text-blue-green">
        404 - Página no encontrada
      </h1>
      <p className="mt-4 text-blue-green-50 mb-4">
        Lo sentimos, la página que buscas no existe o ha sido eliminada.
      </p>
      <Button
        as={Link}
        className="agendar-consulta bg-blue-green-50 hover:bg-blue-green font-bold text-white text-sm md:text-base h-auto py-3 px-2.5 md:px-5"
        href="/"
        variant="solid"
        target="_blank"
      >
        Volver al inicio
      </Button>
    </div>
  );
}
