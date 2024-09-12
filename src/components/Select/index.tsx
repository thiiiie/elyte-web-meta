import {
	Select as SHSelect,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from "@/components/ui/select";

interface SelectProps {
	label: string;
	placeholder: string;
	error?: string;
	value?: string;
	defaultValue?: string;
	options: {
		label: string;
		value: string;
	}[];
	onChange?: (value: string) => void;
}

export const Select = ({
	label,
	placeholder,
	error,
	options,
	onChange,
	...rest
}: SelectProps) => {
	return (
		<fieldset className="flex flex-col text-left items-left">
			<label className="text-sm text-details font-medium">{label}</label>

			<SHSelect onValueChange={onChange} {...rest}>
				<SelectTrigger>
					<SelectValue placeholder={placeholder} />
				</SelectTrigger>

				<SelectContent>
					{options.map((option) => (
						<SelectItem key={option.value} value={option.value}>
							{option.label}
						</SelectItem>
					))}
				</SelectContent>
			</SHSelect>

			{error && <p className="text-xs text-red-500">{error}</p>}
		</fieldset>
	);
};
