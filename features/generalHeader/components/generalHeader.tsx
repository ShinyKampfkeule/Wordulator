import { JSX } from "react";
import { SettingsBtn } from "./settingsBtn";
import { StepBackBtn } from "./stepBackBtn";

interface Props {
  destination: string;
  titleComponent: JSX.Element;
}

export const GeneralHeader = ({ destination, titleComponent }: Props) => {
  return (
    <div className="w-full h-20 flex justify-between items-center px-5">
      <StepBackBtn destination={destination} />
      {titleComponent}
      <SettingsBtn />
    </div>
  );
};
