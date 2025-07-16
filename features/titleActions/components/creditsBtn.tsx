import { Button } from "@/components/ui/button";
import { Scroll } from "lucide-react";

export const CreditsBtn = () => {
  return (
    <Button
      variant="secondary"
      size="menu"
    >
      <Scroll className="size-6" />
      <span>Credits</span>
    </Button>
  );
};
