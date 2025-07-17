import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";
import Link from "next/link";

export const MenuBtn = () => {
  return (
    <Link href="/levelSelect">
      <Button
        variant="accent"
        size="menu"
      >
        <Menu className="size-6" />
        <span>Menu</span>
      </Button>
    </Link>
  );
};
