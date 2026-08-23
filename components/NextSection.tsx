import Image from "next/image";
import { LinkButton } from "@/components/ui/button";

const NextSection = ({
  anchor,
  content = "On continue",
  noMargin = false,
}: {
  anchor: string;
  content?: string;
  noMargin?: boolean;
}) => {
  return (
    <div
      className={`mt-6 sm:mt-56 flex justify-center space-x-6 ${
        noMargin ? "" : "mb-20 lg:mb-40"
      }`}
    >
      <LinkButton
        size="lg"
        className="h-12 w-full px-6 text-base sm:w-auto"
        href={anchor}
      >
        {content}{" "}
        <Image
          className={"ml-2"}
          src={"/images/Backhand Index Pointing Down.png"}
          alt={"Doigt qui pointe en bas"}
          width={20}
          height={20}
        />
      </LinkButton>
    </div>
  );
};

export default NextSection;
