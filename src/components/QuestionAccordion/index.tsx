import {
	Accordion,
	AccordionContent,
	AccordionItem,
	AccordionTrigger,
} from "@/components/ui/accordion";

interface QuestionAccordionProps {
	title: string;
	children: React.ReactNode;
}

export const QuestionAccordion = ({
	title,
	children,
}: QuestionAccordionProps) => {
	return (
		<Accordion
			type="single"
			collapsible
			className="border-y border-input-border"
		>
			<AccordionItem value="item-1">
				<AccordionTrigger className="text-left">{title}</AccordionTrigger>
				<AccordionContent>{children}</AccordionContent>
			</AccordionItem>
		</Accordion>
	);
};
