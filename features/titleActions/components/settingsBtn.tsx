import { Button } from "@/components/ui/button";
import { Settings } from "lucide-react";

export const SettingsBtn = () => {
  return (
    <Button
      variant="secondary"
      size="menu"
    >
      <Settings className="size-6" />
      <span>Settings</span>
    </Button>
  );
};
