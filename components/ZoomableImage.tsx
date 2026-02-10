"use client";

import Zoom from "react-medium-image-zoom";
import { ReactNode } from "react";
import { ZoomIn } from "lucide-react";

const ZoomableImage = ({ children }: { children: ReactNode }) => {
  return (
    <Zoom>
      <div className="group relative cursor-zoom-in">
        {children}
        <div className="absolute bottom-3 right-3 rounded-full bg-black/50 p-1.5 text-white opacity-0 transition-opacity group-hover:opacity-100">
          <ZoomIn size={16} />
        </div>
      </div>
    </Zoom>
  );
};

export default ZoomableImage;
