"use client";
import { Fieldset } from "@/components/Fieldset";
import { Select } from "@/components/Select";
import { Button } from "@/components/ui/button";
import { currencyMask } from "@/helpers/currencyMask";
import { encryptData } from "@/helpers/encrypt";
import { storage } from "@/lib/storage";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { educationOptions } from "./_mocks/education-options";
import { ocupations } from "./_mocks/ocupations";

const formSchema = z.object({
	monthlyEarnings: z
		.string({ required_error: "Digite sua renda mensal" })
		.min(1, "Digite sua renda mensal"),
	payday: z
		.string({ required_error: "Digite o dia do seu pagamento" })
		.min(1, "Digite o dia do seu pagamento")
		.max(31, "Digite um dia válido"),
	ocupation: z
		.string({ required_error: "Selecione sua ocupação" })
		.min(1, "Selecione sua ocupação"),
	education: z
		.string({ required_error: "Selecione sua escolaridade" })
		.min(1, "Selecione sua escolaridade"),
});

type FormValues = z.infer<typeof formSchema>;

export const LoanInfoForm = () => {
	const {
		register,
		handleSubmit,
		setValue,
		formState: { errors },
	} = useForm<FormValues>({
		resolver: zodResolver(formSchema),
	});
	const router = useRouter();

	function onSubmit(data: FormValues) {
		const loanInfo = data;

		const encryptedReason = encryptData(JSON.stringify(loanInfo));

		localStorage.setItem(storage.keys.loanInfo, encryptedReason);
		router.push("/negative");
	}

	return (
		<form
			className="flex flex-col gap-4 mt-2"
			onSubmit={handleSubmit(onSubmit)}
		>
			<Fieldset
				label="Qual sua renda mensal?"
				placeholder="0,00"
				isCurrency
				error={errors.monthlyEarnings?.message}
				{...register("monthlyEarnings", {
					onChange: (e) => {
						e.target.value = currencyMask(e.target.value);
					},
				})}
			/>

			<Fieldset
				label="Qual dia do mês você recebe?"
				placeholder="Digite um dia"
				type="number"
				max={31}
				min={1}
				maxLength={2}
				error={errors.payday?.message}
				{...register("payday")}
			/>

			<Select
				label="Ocupação"
				options={ocupations}
				placeholder="Selecione"
				error={errors.ocupation?.message}
				onChange={(value) => setValue("ocupation", value)}
			/>

			<Select
				label="Escolaridade"
				options={educationOptions}
				placeholder="Selecione"
				error={errors.education?.message}
				onChange={(value) => setValue("education", value)}
			/>

			<Button type="submit" className="w-fit px-10">
				Continuar
			</Button>
		</form>
	);
};
