import { Card } from "@/components/Card";
import PageLayout from "@/components/PageLayout";
import { LoanReasonForm } from "./_form";

export default function LoanReasonPage() {
	return (
		<PageLayout>
			<Card>
				<h1 className="text-left text-xl font-bold mb-4">
					Qual o motivo do empréstimo?
				</h1>
				<LoanReasonForm />
			</Card>
		</PageLayout>
	);
}
