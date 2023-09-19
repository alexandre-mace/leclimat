"use client";

import Image from "next/image";

const SectionEmoji = ({
  emojiSrc,
  emojiAlt,
  emojiHeight,
  emojiWidth,
}: {
  emojiSrc: string;
  emojiAlt: string;
  emojiHeight?: number;
  emojiWidth?: number;
}) => {
  return (
    <Image
      loading={"eager"}
      className={"m-auto"}
      src={emojiSrc}
      alt={emojiAlt}
      height={emojiHeight}
      width={emojiWidth}
    />
  );
};

export default SectionEmoji;
