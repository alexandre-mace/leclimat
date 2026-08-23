"use client";

import { Share2 } from "lucide-react";
import { useCallback, useState } from "react";
import { Button } from "@/components/ui/button";

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
    <Button variant="ghost" size="sm" onPress={handleShare} aria-label="Partager">
      <Share2 data-icon="inline-start" />
      <span className="hidden sm:inline">{copied ? "Copié !" : "Partager"}</span>
    </Button>
  );
};

export default ShareButton;
