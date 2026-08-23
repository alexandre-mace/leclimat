import Image from "next/image";
import { TextLink } from "@/components/ui/text-link";
import ZoomableImage from "@/components/ZoomableImage";
import NextSection from "@/components/NextSection";
import SectionEmoji from "@/components/SectionEmoji";

const formatSourceLabel = (url: string) => {
  try {
    const { hostname, pathname } = new URL(url);
    const domain = hostname.replace("www.", "");
    const path = pathname.replace(/\/$/, "");
    if (path && path !== "/") {
      const segments = path.split("/").filter(Boolean);
      const last = decodeURIComponent(segments[segments.length - 1])
        .replace(/[-_]/g, " ")
        .replace(/\.[^.]+$/, "");
      if (last.length > 40) return domain;
      return `${domain} — ${last}`;
    }
    return domain;
  } catch {
    return url;
  }
};

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
    <div className="max-w-full mx-auto px-4 sm:px-6 md:px-12 lg:px-28 mb-16 lg:mb-32">
      <div className="mx-auto mb-10 h-px w-16 bg-border" />
      <div
        id={id}
        className={`w-full lg:w-2/5 ${imageSrc ? "" : "m-auto text-center"} pt-10 ${
          reverse ? "lg:text-end lg:ml-auto" : ""
        }`}
      >
        {emojiSrc && emojiAlt && (
          <div
            className={`w-32 h-32 ${
              !imageSrc ? "mx-auto" : ""
            } p-[0.1875rem] rounded-full ring-1 ring-border shadow overflow-hidden flex justify-center items-center ${
              reverse && imageSrc ? "lg:ml-auto" : ""
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
          <span className="mt-8 block font-mono text-sm tracking-wider text-muted-foreground uppercase">
            {topic}
          </span>
        )}
        <h2 className="mt-6 text-3xl font-semibold tracking-tight text-balance sm:text-4xl lg:text-5xl">
          {title}
        </h2>
      </div>
      <div
        className="flex flex-col lg:flex-row gap-12 lg:gap-24 items-start relative mb-20 mt-16"
      >
        <div
          className={`${imageSrc ? "w-full lg:w-2/5" : "mx-auto"} ${
            reverse ? "lg:order-2" : ""
          }`}
        >
          <div
            dangerouslySetInnerHTML={description}
            className={`mt-10 text-lg leading-relaxed sm:text-xl lg:text-2xl ${
              imageSrc ? "" : "mx-auto"
            } font-medium leading-relaxed max-w-3xl space-y-6`}
          ></div>
          <div className={"mt-10"}>
            <div className={"font-mono text-xs tracking-wider text-muted-foreground uppercase"}>Sources</div>
            <ul>
              {sources.map((source, index) => (
                <li key={source + index} className={"mt-2"}>
                  <TextLink
                    target={"_blank"}
                    rel={"noopener noreferrer"}
                    className={"flex items-center gap-2"}
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
                    <span className={"inline-block break-all"}>{formatSourceLabel(source)}</span>
                  </TextLink>
                </li>
              ))}
            </ul>
          </div>
        </div>
        {imageSrc && imageAlt && imageHeight && imageWidth && (
          <div className={"w-full lg:w-3/5 static lg:sticky lg:top-20"}>
            <figure>
              <div
                className={
                  "m-auto rounded-3xl border bg-card p-10 shadow-sm transition hover:shadow-md"
                }
              >
                <ZoomableImage>
                  <Image
                    className={"rounded-2xl mx-auto"}
                    src={imageSrc}
                    alt={imageAlt}
                    width={imageWidth}
                    height={imageHeight}
                    sizes="(max-width: 1024px) 100vw, 60vw"
                  />
                </ZoomableImage>
              </div>
              <figcaption className="mt-3 text-center text-sm text-muted-foreground">
                {imageAlt}
              </figcaption>
            </figure>
          </div>
        )}
      </div>
      {nextSection && <NextSection anchor={nextSection} />}
    </div>
  );
};

export default Section;
