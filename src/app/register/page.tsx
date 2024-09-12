import { Card } from "@/components/Card";
import PageLayout from "@/components/PageLayout";
import { RegisterForm } from "./_form";

export default function RegisterPage() {
	return (
		<PageLayout>
			<Card className="text-left flex flex-col gap-1">
				<h1 className="text-xl font-bold">Cadastro sem compromisso!</h1>
				<p className="text-details">
					Preencha os campos abaixo para criar sua conta.
				</p>

				<RegisterForm />
			</Card>
		</PageLayout>
	);
}
