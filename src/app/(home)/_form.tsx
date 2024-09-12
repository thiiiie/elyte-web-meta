"use client";

import { Card } from "@/components/Card";
import { CurrencyInput } from "@/components/CurrencyInput";
import { SelectInstallments } from "@/components/SelectInstallments";
import { Button } from "@/components/ui/button";
import { currencyMask } from "@/helpers/currencyMask";
import { encryptData } from "@/helpers/encrypt";
import { formatMoney } from "@/helpers/formatMoney";
import { storage } from "@/lib/storage";
import { useRouter } from "next/navigation";
import { useMemo, useState } from "react";
import { toast } from "sonner";
import { options } from "./_helpers/options";

export const HomeForm = () => {
	const [value, setValue] = useState("12.412,41");
	const [selectedOptions, setSelectedOptions] = useState(options);
	const router = useRouter();

	function onValueChange(e: React.ChangeEvent<HTMLInputElement>) {
		const value = e.target.value.replace(/\D/g, "");
		const limit = 5000000;

		if (Number(value) > limit) {
			return;
		}

		e.target.value = currencyMask(e.target.value);
		setValue(e.target.value);
	}

	function handleSelectOption(value: number) {
		setSelectedOptions((prevState) =>
			prevState.map((option) => {
				if (option.value === value) {
					return {
						...option,
						isSelected: true,
					};
				}

				return {
					...option,
					isSelected: false,
				};
			}),
		);
	}

	const getInstallmentValue = useMemo(() => {
		const selectedOption = selectedOptions.find((option) => option.isSelected);
		const numberValue = Number(value.replace(/\D/g, "")) / 100;

		if (!selectedOption) {
			return 0;
		}

		return formatMoney(numberValue / selectedOption.value);
	}, [selectedOptions, value]);

	function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
		e.preventDefault();

		const installment = selectedOptions.find((option) => option.isSelected);
		const price = Number(value.replace(/\D/g, ""));

		if (!installment) {
			toast.dismiss();
			toast.error("Parcelamento inválido", {
				description: "Selecione um parcelamento válido",
				position: "top-center",
				richColors: true,
			});
			return;
		}

		if (price < 15000) {
			toast.dismiss();
			toast.error("Valor inválido", {
				description: "Selecione um valor MAIOR que R$ 150,00",
				position: "top-center",
				richColors: true,
			});
			return;
		}

		const encryptedValue = encryptData(String(price));
		const encryptedInstallment = encryptData(JSON.stringify(installment));
		localStorage.setItem(storage.keys.installment, encryptedInstallment);
		localStorage.setItem(storage.keys.price, encryptedValue);

		router.push("/login");
	}

	return (
		<form
			onSubmit={handleSubmit}
			className="my-4 flex flex-col items-center p-6 w-full"
		>
			<h1 className="text-center text-2xl font-medium max-w-[400px]">
				Faça sua simulação em menos de 5 minutos!
			</h1>

			<Card>
				<h2 className="text-[22px] text-center font-medium">
					Quanto você deseja pegar emprestado?
				</h2>

				<CurrencyInput
					className="mt-6"
					placeholder="0,00"
					value={value}
					onChange={onValueChange}
				/>

				<p className="text-sm mt-2 text-details font-medium">
					O valor pode ser de R$ 150,00 à R$ 50.000,00.
				</p>
			</Card>

			<Card>
				<h2 className="text-[22px] text-center font-medium">
					Em quantas vezes você deseja pagar
				</h2>

				<SelectInstallments
					options={selectedOptions}
					onSelectOption={handleSelectOption}
				/>

				<p className="mt-6 text-lg text-details">
					Sua parcela mensal será de{" "}
					<strong className="text-primary">{getInstallmentValue}</strong>
				</p>
			</Card>

			<Button type="submit" className="px-14 mt-6">
				Continuar
			</Button>
		</form>
	);
};
