import { Button } from "@/components/ui/button";
import { Play } from "lucide-react";

export const NxtLevelBtn = () => {
  return (
    <Button
      variant="primary"
      size="menu"
    >
      <Play className="size-6" />
      <span>Next</span>
    </Button>
  );
};
