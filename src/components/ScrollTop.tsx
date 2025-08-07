"use client";
import { useState, useEffect } from "react";
import { Button, Tooltip } from "@nextui-org/react";
import { ChevronsUp } from "lucide-react";

export default function ScrollTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 300);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollToTop = () =>
    window.scrollTo({ top: 0, behavior: "smooth" });

  if (!visible) return null;

  return (
    <Tooltip content="Volver arriba" placement="left">
      <Button
        isIconOnly
        
        onPress={scrollToTop}
        aria-label="Scroll to top"
        className="
          fixed
          bottom-8
          right-8
          w-14 h-14
          bg-blue-green-600
          hover:bg-sky-50
          text-black
          ring-2 ring-black
          shadow-xl
          transition
          duration-200
          ease-in-out
          z-50
        "
      >
        <ChevronsUp size={24} />
      </Button>
    </Tooltip>
  );
}