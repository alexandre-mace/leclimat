const Footer = () => {
  return (
    <footer className={"pt-16 lg:pt-32 mt-16 lg:mt-24 text-center pb-6"}>
      <div className={"mx-auto text-3xl font-medium"}>
        Le climat en 10 minutes ⏳
      </div>
      <div className={"mx-auto mt-10 lg:mt-32"}>
        Fait avec amour par{" "}
        <a
          className={"ml-1 underline hover:text-slate-700 dark:hover:text-slate-300"}
          target="_blank"
          rel="noopener noreferrer"
          href="https://github.com/alexandre-mace"
        >
          alexandre-mace
        </a>
      </div>
    </footer>
  );
};

export default Footer;
