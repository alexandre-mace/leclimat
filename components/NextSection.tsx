import Image from "next/image";

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
      <a
        className="bg-slate-900 hover:bg-slate-700 dark:bg-slate-100 dark:text-slate-900 dark:hover:bg-slate-300 text-lg focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50 text-white font-semibold h-12 px-6 rounded-lg w-full flex items-center justify-center sm:w-auto"
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
      </a>
    </div>
  );
};

export default NextSection;
