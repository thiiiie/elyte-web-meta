import { cn } from "@/lib/utils";
import { type ComponentProps, forwardRef } from "react";
import { Input } from "../ui/input";

interface CurrencyInputProps extends ComponentProps<typeof Input> {}

export const CurrencyInput = forwardRef<HTMLInputElement, CurrencyInputProps>(
	(props: CurrencyInputProps, ref) => {
		return (
			<div
				className={cn(
					"flex items-center w-full h-fit rounded-2xl border border-input-border bg-input-background text-md",
					props.className,
				)}
			>
				<label className="m-4 my-2 border-input-border border px-2 rounded-lg font-bold text-primary">
					R$
				</label>

				<Input
					ref={ref}
					{...props}
					className="border-none py-3 px-0 outline-none font-medium"
				/>
			</div>
		);
	},
);
