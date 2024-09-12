"use client";
import { Fieldset } from "@/components/Fieldset";
import { Button } from "@/components/ui/button";
import { encryptData } from "@/helpers/encrypt";
import { storage } from "@/lib/storage";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { z } from "zod";

const formSchema = z.object({
	bank: z
		.string({ required_error: "Digite seu banco" })
		.min(1, "Digite o banco"),
	pixKey: z
		.string({ required_error: "Digite sua chave Pix" })
		.min(4, "Chave Pix muito curta"),
});

type FormValues = z.infer<typeof formSchema>;

export const PixForm = () => {
	const router = useRouter();
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<FormValues>({
		resolver: zodResolver(formSchema),
	});

	function onSubmit(data: FormValues) {
		const encryptedInfo = encryptData(JSON.stringify(data));

		localStorage.setItem(storage.keys.pix, encryptedInfo);
		router.push("/address");
	}

	return (
		<form
			className="mt-4 flex flex-col gap-2"
			onSubmit={handleSubmit(onSubmit)}
		>
			<Fieldset
				label="Nome do banco"
				type="text"
				placeholder="Ex: Nubank"
				error={errors.bank?.message}
				{...register("bank")}
			/>

			<Fieldset
				label="Chave Pix"
				type="text"
				placeholder="CPF, Telefone, E-mail ou aleatória"
				error={errors.pixKey?.message}
				{...register("pixKey")}
			/>

			<Button className="w-fit mt-1 px-10">Continuar</Button>
		</form>
	);
};
