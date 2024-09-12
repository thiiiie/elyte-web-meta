import { Card } from "@/components/Card";
import PageLayout from "@/components/PageLayout";
import { PixForm } from "./_form";

export default function PixPage() {
	return (
		<PageLayout>
			<Card className="text-left">
				<h1 className="text-xl font-bold">Recebimento do crédito</h1>
				<p className="text-details">Chave Pix de qualquer banco</p>

				<PixForm />
			</Card>
		</PageLayout>
	);
}
