import { Card } from "@/components/Card";
import PageLayout from "@/components/PageLayout";
import { LoanInfoForm } from "./_form";

export default function LoanInfoPage() {
	return (
		<PageLayout>
			<Card>
				<h1 className="text-left text-xl font-bold mb-4">Quase lá</h1>

				<LoanInfoForm />
			</Card>
		</PageLayout>
	);
}
