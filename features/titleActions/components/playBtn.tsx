import { Button } from "@/components/ui/button";
import { Play } from "lucide-react";
import Link from "next/link";

export const PlayBtn = () => {
  return (
    <Link href="/levelSelect">
      <Button
        className="cursor-pointer"
        variant="primary"
        size="menu"
      >
        <Play className="size-6" />
        <span>Play</span>
      </Button>
    </Link>
  );
};
