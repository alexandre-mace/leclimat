"use client";

import { Share2 } from "lucide-react";
import { useCallback, useState } from "react";

const ShareButton = () => {
  const [copied, setCopied] = useState(false);

  const handleShare = useCallback(async () => {
    const shareData = {
      title: "Le climat en 10 minutes",
      text: "S'informer sur la responsabilité humaine, les conséquences du changement climatique et les solutions en 10 minutes.",
      url: window.location.href,
    };

    if (navigator.share) {
      try {
        await navigator.share(shareData);
      } catch {
        // User cancelled share
      }
    } else {
      await navigator.clipboard.writeText(window.location.href);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  }, []);

  return (
    <button
      onClick={handleShare}
      className="flex items-center gap-1.5 rounded-xl px-4 py-2 min-h-[44px] text-sm transition-colors md:hover:bg-slate-100 dark:md:hover:bg-slate-800"
      aria-label="Partager"
    >
      <Share2 size={16} />
      <span className="hidden sm:inline">{copied ? "Copié !" : "Partager"}</span>
    </button>
  );
};

export default ShareButton;
