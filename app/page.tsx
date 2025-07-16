import { TitleActions } from "@/features/titleActions/components/titleActions";
import { TitleHeader } from "@/features/titleHeader/components/titleHeader";

export default function Home() {
  return (
    <div className="h-screen w-screen flex flex-col justify-center items-center gap-5">
      <TitleHeader />
      <TitleActions />
    </div>
  );
}
