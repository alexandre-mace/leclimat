"use client";

import Zoom from "react-medium-image-zoom";
import { ReactNode } from "react";

const ZoomableImage = ({ children }: { children: ReactNode }) => {
  return <Zoom>{children}</Zoom>;
};

export default ZoomableImage;
