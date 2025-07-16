import { Button } from "@/components/ui/button";
import { Play, Scroll, Settings } from "lucide-react";
import Link from "next/link";
import { PlayBtn } from "./playBtn";
import { SettingsBtn } from "./settingsBtn";
import { CreditsBtn } from "./creditsBtn";

export const TitleActions = () => {
  return (
    <div className="flex flex-col gap-5 w-full grow items-center">
      <PlayBtn />
      <SettingsBtn />
      <CreditsBtn />
    </div>
  );
};
