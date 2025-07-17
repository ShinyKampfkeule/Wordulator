import { Star } from "lucide-react";

interface Props {
  frontStarStyle: string;
  backStarStyle: string;
}

export const SingleStar = ({ frontStarStyle, backStarStyle }: Props) => {
  return (
    <div className="relative w-16 h-18">
      <Star className={"size-16 absolute left-1 fill-[#4F5506] text-[#4F5506] " + backStarStyle} />
      <Star className={"size-16 absolute fill-[#EEFF00] text-[#EEFF00] " + frontStarStyle} />
    </div>
  );
};
