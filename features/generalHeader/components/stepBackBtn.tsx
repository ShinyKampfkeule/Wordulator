import { Button } from "@/components/ui/button";
import { Play } from "lucide-react";
import Link from "next/link";

interface Props {
  destination: string;
}

export const StepBackBtn = ({ destination }: Props) => {
  return (
    <Link href={destination}>
      <Button variant="secondary">
        <Play className="rotate-180" />
      </Button>
    </Link>
  );
};
