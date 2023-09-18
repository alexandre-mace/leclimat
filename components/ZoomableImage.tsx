"use client";

import Zoom from "react-medium-image-zoom";
import Image from "next/image";

const ZoomableImage = ({
  imageSrc,
  imageAlt,
  imageHeight,
  imageWidth,
}: {
  imageSrc: string;
  imageAlt: string;
  imageHeight: number;
  imageWidth: number;
}) => {
  return (
    <Zoom>
      <Image
        className={"rounded-2xl mx-auto"}
        src={imageSrc}
        alt={imageAlt}
        width={imageWidth}
        height={imageHeight}
      />
    </Zoom>
  );
};

export default ZoomableImage;
