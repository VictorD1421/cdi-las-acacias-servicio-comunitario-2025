"use client";

import Whatsapp from "@/components/Whatsapp";
import Telephone from "@/components/Telephone";

function FloatButtons() {
  return (
    <div className="fixed flex flex-col left-2.5 bottom-2.5 gap-2 z-50">
      <div className="flex flex-col sm:flex-row gap-2">
        <Telephone />
        <Whatsapp />
      </div>
    </div>
  );
}

export default FloatButtons;
