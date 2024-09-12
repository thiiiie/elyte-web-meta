import { cn } from "@/lib/utils";
import { cva } from "class-variance-authority";
import { PiCalculatorDuotone } from "react-icons/pi";

const variantsDot = cva(undefined, {
	variants: {
		variant: {
			normal: "bg-gray-500 text-gray-500",
			green: "bg-green-600 text-green-500",
			red: "bg-red-500 text-red-500",
		},
	},
	defaultVariants: {
		variant: "normal",
	},
});

const textVariants = cva(undefined, {
	variants: {
		variant: {
			normal: "text-gray-500",
			green: "text-green-600",
			red: "text-red-500",
		},
	},
	defaultVariants: {
		variant: "normal",
	},
});

interface PaymentStepProps {
	variant?: "red" | "green" | "normal";
	title: string;
	description: string;
	Icon: React.ElementType;
}

export const PaymentStep = ({
	description,
	title,
	Icon,
	variant = "normal",
}: PaymentStepProps) => {
	return (
		<div className="flex items-center gap-4">
			<div
				data-danger={variant === "red"}
				className={variantsDot({
					className:
						"w-4 h-4 rounded-full data-[danger=true]:animate-shadowpulse",
					variant,
				})}
			/>

			<div
				className={textVariants({
					className: "flex items-center gap-2",
					variant,
				})}
			>
				<Icon className="text-[38px]" />

				<div>
					<h3>{title}</h3>
					<p className="text-sm max-w-[258px]">{description}</p>
				</div>
			</div>
		</div>
	);
};
