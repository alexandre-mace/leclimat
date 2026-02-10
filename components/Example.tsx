import ZoomableImage from "@/components/ZoomableImage";
import Image from "next/image";

const Example = ({
  content,
  imageSrc,
  imageWidth,
  imageHeight,
  imageAlt,
}: {
  content: string;
  imageSrc: string;
  imageWidth: number;
  imageHeight: number;
  imageAlt: string;
}) => {
  return (
    <>
      <p className="mt-6 text-lg sm:text-xl md:text-2xl lg:text-3xl font-medium leading-normal mb-10 lg:mb-20 text-center max-w-4xl mx-auto px-4 sm:px-6">
        {content}
      </p>
      <figure className="mx-4 sm:mx-6 lg:mx-auto w-fit">
        <div
          className={
            "rounded-3xl w-fit mx-auto shadow-xl bg-white dark:bg-slate-800 p-4 sm:p-10 m-auto hover:shadow-2xl transition"
          }
        >
          <ZoomableImage>
            <Image
              className={"rounded-2xl mx-auto"}
              src={imageSrc}
              alt={imageAlt}
              width={imageWidth}
              height={imageHeight}
              sizes="(max-width: 768px) 100vw, 880px"
            />
          </ZoomableImage>
        </div>
        <figcaption className="mt-3 text-center text-sm text-slate-500 dark:text-slate-400">
          {imageAlt}
        </figcaption>
      </figure>
    </>
  );
};

export default Example;
