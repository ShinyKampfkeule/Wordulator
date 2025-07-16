interface Props {
  index: number;
  levelName: string;
  previousLevelSolved: boolean;
}

export const EntryTitle = ({ index, levelName, previousLevelSolved }: Props) => {
  return (
    <div className="flex gap-2">
      <span>{index + 1}</span>
      <span>{previousLevelSolved ? levelName : "???"}</span>
    </div>
  );
};
