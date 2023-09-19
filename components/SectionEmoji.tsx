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
    <img
      className={"m-auto"}
      src={emojiSrc}
      alt={emojiAlt}
      height={emojiHeight}
      width={emojiWidth}
    />
  );
};

export default SectionEmoji;
