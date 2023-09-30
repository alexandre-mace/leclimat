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
      <p className="mt-6 text-3xl font-medium leading-normal mb-20 text-center max-w-4xl mx-auto">
        {content}
      </p>
      <div
        className={
          "rounded-3xl w-fit mx-auto shadow-xl bg-white p-10 m-auto hover:shadow-2xl transition"
        }
      >
        <ZoomableImage>
          <Image
            className={"rounded-2xl mx-auto"}
            src={imageSrc}
            alt={imageAlt}
            width={imageWidth}
            height={imageHeight}
          />
        </ZoomableImage>
      </div>
    </>
  );
};

export default Example;
