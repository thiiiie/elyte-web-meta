import { cn } from "@/lib/utils";
import { Button } from "../ui/button";

export interface InstallmentOption {
	value: number;
	isSelected: boolean;
}

interface SelectInstallmentsProps {
	className?: string;
	options: InstallmentOption[];
	onSelectOption: (value: number) => void;
}

export const SelectInstallments = ({
	options,
	className,
	onSelectOption,
}: SelectInstallmentsProps) => {
	const selectVariant = (isSelected: boolean) => {
		if (isSelected) {
			return "default";
		}

		return "outline";
	};

	return (
		<div className={cn("grid grid-cols-3 gap-2 mt-6", className)}>
			{options.map((option) => (
				<Button
					type="button"
					onClick={() => onSelectOption(option.value)}
					className="py-1 rounded-lg"
					variant={selectVariant(option.isSelected)}
					key={option.value}
				>
					{option.value}x
				</Button>
			))}
		</div>
	);
};
