import type { ExploringItem } from "@/data/exploring";
import { ArrowUpRight } from "./Icons";

export function ExploringCard({ item }: { item: ExploringItem }) {
  return (
    <div className="explore" tabIndex={0}>
      <div className="explore__icon" aria-hidden="true">
        <ArrowUpRight width={15} height={15} />
      </div>
      <p className="explore__topic">{item.topic}</p>
      <p className="explore__note">{item.note}</p>
    </div>
  );
}
