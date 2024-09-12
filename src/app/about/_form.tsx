"use client";
import { Fieldset } from "@/components/Fieldset";
import { Button } from "@/components/ui/button";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { birthDateMask } from "@/helpers/birthDateMask";
import { cpfMask } from "@/helpers/cpfMask";
import { decryptData, encryptData } from "@/helpers/encrypt";
import { formatPhone } from "@/helpers/formatPhone";
import { validarCPF } from "@/helpers/validateCPF";
import { storage } from "@/lib/storage";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";

const formSchema = z.object({
	cpf: z
		.string({ required_error: "Digite um CPF" })
		.min(11, "O CPF deve ter 11 dígitos"),
	name: z
		.string({ required_error: "Digite seu nome" })
		.min(1, "Digite seu nome"),
	birthdate: z
		.string({ required_error: "Digite seu aniversário" })
		.min(1, "Digite seu aniversário"),
	motherName: z
		.string({ required_error: "Digite o nome da sua mãe" })
		.min(1, "Digite o nome da sua mãe"),
	whatsapp: z
		.string({ required_error: "Digite seu WhatsApp" })
		.min(11, "Digite seu WhatsApp"),
	gender: z.string().default("male"),
});

type FormValues = z.infer<typeof formSchema>;

export const AboutForm = () => {
	const {
		register,
		handleSubmit,
		formState: { errors },
		setValue,
		setError,
	} = useForm<FormValues>({
		resolver: zodResolver(formSchema),
	});
	const [isValidCPF, setIsValidCPF] = useState(false);
	const [loading, setLoading] = useState(false);
	const router = useRouter();

	function handleChangeCPF(e: React.ChangeEvent<HTMLInputElement>) {
		setError("cpf", {
			message: undefined,
		});
		if (e.target.value.length >= 14) {
			setLoading(true);
			const isValid = validarCPF(e.target.value.replace(/\D/g, ""));

			setTimeout(() => {
				if (!isValid) {
					setError("cpf", {
						message: "CPF inválido",
					});
					setIsValidCPF(false);
				} else {
					setIsValidCPF(true);
				}
				setLoading(false);
			}, 1000);
		}

		e.target.value = cpfMask(e.target.value);
	}

	function onSubmit(data: FormValues) {
		const localUser = localStorage.getItem(storage.keys.user);
		let email = "";

		if (localUser) {
			const decryptedUser = decryptData(localUser);
			console.log(decryptedUser);
			email = JSON.parse(decryptedUser).email;
		}

		const user = {
			email,
			...data,
		};

		const encryptedUser = encryptData(JSON.stringify(user));

		localStorage.setItem(storage.keys.user, encryptedUser);
		router.push("/loan-reason");
	}

	return (
		<form
			className="flex flex-col gap-4 mt-2"
			onSubmit={handleSubmit(onSubmit)}
		>
			<Fieldset
				label="CPF"
				placeholder="000.000.000-00"
				error={errors.cpf?.message}
				loading={loading}
				{...register("cpf", {
					onChange: handleChangeCPF,
				})}
			/>

			{isValidCPF && (
				<>
					<Fieldset
						label="Nome completo"
						error={errors.name?.message}
						{...register("name")}
					/>

					<Fieldset
						label="Data de nascimento"
						placeholder="dd/mm/aaaa"
						error={errors.birthdate?.message}
						{...register("birthdate", {
							onChange: (e) => {
								e.target.value = birthDateMask(e.target.value);
							},
						})}
					/>

					<Fieldset
						label="Nome da mãe"
						error={errors.motherName?.message}
						{...register("motherName")}
					/>

					<Fieldset
						label="WhatsApp"
						placeholder="(00) 00000-0000"
						error={errors.whatsapp?.message}
						{...register("whatsapp", {
							onChange: (e) => {
								e.target.value = formatPhone(e.target.value);
							},
						})}
					/>

					<fieldset>
						<label className="text-sm text-details font-medium">Gênero</label>

						<RadioGroup
							defaultValue="male"
							className="flex items-center mt-2"
							onValueChange={(e) => setValue("gender", e)}
						>
							<div className="flex items-center space-x-2">
								<RadioGroupItem value="male" id="male" />
								<label htmlFor="male">Masculino</label>
							</div>

							<div className="flex items-center space-x-2">
								<RadioGroupItem value="female" id="female" />
								<label htmlFor="female">Feminino</label>
							</div>
						</RadioGroup>
					</fieldset>

					<Button type="submit" className="w-full">
						Concluir Cadastro
					</Button>
				</>
			)}
		</form>
	);
};
