interface Props {
  playerSolution: string;
}

export const CalculatorDisplay = ({ playerSolution }: Props) => {
  return (
    <div className="flex items-center justify-end px-3 w-54 h-12 bg-foreground p-1 border-b-5 border-r-5 border-[#666666] rounded-md">
      <span className="text-background text-xl">{playerSolution}</span>
    </div>
  );
};
