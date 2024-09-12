interface ReasonCardProps {
	Icon: JSX.ElementType;
	label: string;
	selected?: boolean;
	onClick?: () => void;
}

export const ReasonCard = ({
	Icon,
	label,
	selected = false,
	onClick,
}: ReasonCardProps) => {
	return (
		<button
			onClick={onClick}
			data-selected={selected}
			className="p-4 flex flex-col text-primary items-center justify-between text-center gap-2 border-input-border border rounded-lg data-[selected=true]:border-primary data-[selected=true]:bg-gray-100 w-full"
			type="button"
		>
			<Icon className="text-4xl" />

			<p className="text-lg leading-4">{label}</p>
		</button>
	);
};
