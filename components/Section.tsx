import Image from "next/image";
import ZoomableImage from "@/components/ZoomableImage";
import NextSection from "@/components/NextSection";
import SectionEmoji from "@/components/SectionEmoji";

const Section = ({
  id,
  topic,
  title,
  description,
  emojiSrc,
  emojiAlt,
  emojiHeight,
  emojiWidth,
  imageSrc,
  imageAlt,
  imageHeight,
  imageWidth,
  nextSection,
  reverse = false,
  sources,
}: {
  id: string;
  topic?: string;
  title: string;
  description: { __html: string | TrustedHTML };
  imageSrc?: string;
  imageAlt?: string;
  imageHeight?: number;
  imageWidth?: number;
  emojiSrc?: string;
  emojiAlt?: string;
  emojiHeight?: number;
  emojiWidth?: number;
  nextSection?: string;
  reverse?: boolean;
  sources: string[];
}) => {
  return (
    <div className="max-w-full mx-auto px-4 sm:px-6 md:px-28 min-h-screen mb-60">
      <div
        id={id}
        className={`w-2/5 ${imageSrc ? "" : "m-auto text-center"} pt-10 ${
          reverse ? "text-end ml-auto" : ""
        }`}
      >
        {emojiSrc && emojiAlt && (
          <div
            className={`w-32 h-32 ${
              !imageSrc ? "mx-auto" : ""
            } p-[0.1875rem] rounded-full ring-1 ring-slate-900/10 shadow overflow-hidden flex justify-center items-center ${
              reverse && imageSrc ? "ml-auto" : ""
            }`}
          >
            <SectionEmoji
              emojiSrc={emojiSrc}
              emojiAlt={emojiAlt}
              emojiHeight={emojiHeight}
              emojiWidth={emojiWidth}
            />
          </div>
        )}
        {topic && (
          <h2 className="mt-8 text-3xl font-semibold text-slate-400">
            {topic}
          </h2>
        )}
        <p className="mt-10 text-3xl sm:text-6xl text-slate-900 font-extrabold">
          {title}
        </p>
      </div>
      <div
        className="flex gap-24 items-start relative mb-40 mt-24
      "
      >
        <div
          className={`${imageSrc ? "w-2/5" : "mx-auto"}  ${
            reverse ? "order-2" : ""
          }`}
        >
          <div
            dangerouslySetInnerHTML={description}
            className={`mt-10 text-3xl ${
              imageSrc ? "" : "mx-auto"
            } font-medium leading-relaxed max-w-3xl space-y-96`}
          ></div>
          <div className={"mt-10"}>
            <div className={"text-lg font-medium"}>Sources</div>
            <ul>
              {sources.map((source, index) => (
                <li key={source + Math.random()} className={"mt-2"}>
                  <a
                    target={"_blank"}
                    className={
                      "underline flex gap-2 items-center hover:text-slate-700"
                    }
                    href={source}
                  >
                    <span className={"inline-block"}>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="w-5 h-5"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25"
                        />
                      </svg>
                    </span>
                    <span className={"inline-block"}>{source}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
        {imageSrc && imageAlt && imageHeight && imageWidth && (
          <div className={"w-3/5 sticky lg:top-28 xl:top-20"}>
            <div
              className={
                "rounded-3xl shadow-xl bg-white p-10 m-auto hover:shadow-2xl transition"
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
          </div>
        )}
      </div>
      {nextSection && <NextSection anchor={nextSection} />}
    </div>
  );
};

export default Section;
