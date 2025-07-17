import { MenuBtn } from "./menuBtn";
import { NxtLevelBtn } from "./nxtLevelBtn";

export const BtnContainer = () => {
  return (
    <div className="w-full flex flex-col items-center justify-center gap-2">
      <NxtLevelBtn />
      <MenuBtn />
    </div>
  );
};
