import Image from "next/image";

const Header = () => (
  <header className="flex flex-wrap justify-between">
    <div className={"flex flex-wrap gap-2 p-2"}>
      <a href="/" className={"p-2 font-medium"}>
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
    </div>
    <div className="md:text-md flex items-center p-2 text-sm">
      <div className={"mr-3"}>un outil du</div>
      <a
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center rounded-xl bg-slate-100 px-4 py-2 transition-all md:hover:bg-slate-200"
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
