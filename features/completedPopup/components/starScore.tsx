import { SingleStar } from "./singleStar";

export const StarScore = () => {
  return (
    <div className="w-full flex gap-2 items-center justify-center">
      <SingleStar
        frontStarStyle="top-3"
        backStarStyle="top-4"
      />
      <SingleStar
        frontStarStyle=""
        backStarStyle="top-1"
      />
      <SingleStar
        frontStarStyle="top-3"
        backStarStyle="top-4"
      />
    </div>
  );
};
