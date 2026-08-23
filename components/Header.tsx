import ShareButton from "@/components/ShareButton";
import ScrollProgress from "@/components/ScrollProgress";
import { Brand } from "@/components/brand";
import { ClimateLabBadge } from "@/components/climatelab-badge";

const Header = () => (
  <header className="sticky top-0 z-40 bg-background/80 backdrop-blur-sm">
    <div className="flex flex-wrap items-center justify-between px-3 py-2">
      <div className="flex items-center gap-1">
        <Brand
          name="Le climat en 10 minutes"
          logo="https://em-content.zobj.net/source/apple/354/hourglass-not-done_23f3.png"
        />
        <ShareButton />
      </div>
      <ClimateLabBadge />
    </div>
    <ScrollProgress />
  </header>
);

export default Header;
