import { MadeWithLove } from "@/components/made-with-love";

const Footer = () => {
  return (
    <footer className={"mt-auto pt-16 pb-6 text-center lg:pt-32"}>
      <div className={"mx-auto text-3xl font-medium"}>
        Le climat en 10 minutes ⏳
      </div>
      <MadeWithLove className="mt-10 lg:mt-16" />
    </footer>
  );
};

export default Footer;
