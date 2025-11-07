import { Button } from "./button";
import { cn } from "../../lib/utils";

export interface QuantitySelectorProps {
  value: number;
  onChange: (next: number) => void;
  min?: number;
  max?: number;
  className?: string;
}

export const QuantitySelector = ({
  value,
  onChange,
  min = 1,
  max,
  className,
}: QuantitySelectorProps) => {
  const decrease = () => {
    const next = Math.max(min, value - 1);
    if (next !== value) onChange(next);
  };

  const increase = () => {
    const next = typeof max === "number" ? Math.min(max, value + 1) : value + 1;
    if (next !== value) onChange(next);
  };

  return (
    <div
      className={cn(
        "inline-flex items-center border border-gray-300 rounded-md overflow-hidden bg-white",
        className,
      )}
    >
      <Button
        onClick={decrease}
        variant="outline"
        size="icon"
        aria-label="Decrease quantity"
        className="px-2"
      >
        -
      </Button>

      <div className="w-14 h-8 flex items-center justify-center text-sm font-medium">
        {value}
      </div>

      <Button
        onClick={increase}
        variant="outline"
        size="icon"
        aria-label="Increase quantity"
        className="px-2"
      >
        +
      </Button>
    </div>
  );
};

export default QuantitySelector;
