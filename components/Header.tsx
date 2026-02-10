import Image from "next/image";
import ShareButton from "@/components/ShareButton";

const Header = () => (
  <header className="sticky top-0 z-40 flex flex-wrap justify-between bg-white/80 dark:bg-slate-950/80 backdrop-blur-sm">
    <div className={"flex items-center gap-1 p-2"}>
      <a href="/" className={"p-3 font-medium flex items-center min-h-[44px]"}>
        <Image
          src={
            "https://em-content.zobj.net/source/apple/354/hourglass-not-done_23f3.png"
          }
          alt={"Sablier"}
          height={20}
          width={20}
          className={"inline-block"}
        />{" "}
        Le climat en 10 minutes
      </a>
      <ShareButton />
    </div>
    <div className="md:text-md flex items-center gap-2 p-2 text-sm">
      <div className={"mr-1"}>un outil du</div>
      <a
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center rounded-xl px-4 py-2 min-h-[44px] transition-colors md:hover:bg-slate-100 dark:md:hover:bg-slate-800"
        href="https://climatelab.fr"
      >
        <Image
          className="logo-img mr-1"
          src="https://em-content.zobj.net/thumbs/240/apple/285/alembic_2697-fe0f.png"
          alt="Alambic"
          width="27"
          height="27"
        />{" "}
        ClimateLab
      </a>
    </div>
  </header>
);

export default Header;
