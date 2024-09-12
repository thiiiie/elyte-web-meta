"use client";

import { InfoCard } from "@/components/InfoCard";
import { currencyMask } from "@/helpers/currencyMask";
import { decryptData } from "@/helpers/encrypt";
import { formatMoney } from "@/helpers/formatMoney";
import { storage } from "@/lib/storage";
import { addMonths, format } from "date-fns";
import { useEffect, useMemo, useRef, useState } from "react";
import {
	PiCalendarBlank,
	PiCheckCircle,
	PiCurrencyCircleDollarLight,
	PiPixLogo,
	PiUserCircle,
} from "react-icons/pi";
import { LoadingUI } from "./(components)/_loading";

interface Info {
	price: string;
	installments: {
		value: number;
		isSelected: boolean;
	};
}

export const LoadingForm = () => {
	const now = useRef(Date.now());
	const nextMonth = useMemo(() => {
		const nextDateOfMonth = addMonths(now.current, 1);

		return format(nextDateOfMonth, "dd/MM/yyyy");
	}, []);

	const [info, setInfo] = useState<Info | null>(null);
	const installmentValue = useMemo(() => {
		if (!info) {
			return 0;
		}
		const price = Number(info.price) / 100;

		const installment = price / info.installments.value;
		console.log(installment, price);

		return formatMoney(installment, 2);
	}, [info]);

	useEffect(() => {
		const priceEncrypted = localStorage.getItem(storage.keys.price);
		const installmentsEncrypted = localStorage.getItem(
			storage.keys.installment,
		);

		if (!priceEncrypted || !installmentsEncrypted) {
			return;
		}

		const price = decryptData(priceEncrypted);

		const installments = JSON.parse(decryptData(installmentsEncrypted));

		setInfo({
			price: String(price),
			installments,
		});
	}, []);

	if (!info) {
		return <LoadingUI />;
	}

	return (
		<div className="grid grid-cols-2 p-3 mt-2 gap-4">
			<InfoCard
				title="Valor"
				Icon={PiCurrencyCircleDollarLight}
				description={`R$ ${currencyMask(String(info.price))}`}
			/>

			<InfoCard
				title="Parcelas"
				Icon={PiCalendarBlank}
				description={`${info.installments.value}x de ${installmentValue}`}
			/>

			<InfoCard
				title="1ª parcela"
				Icon={PiCalendarBlank}
				description={nextMonth}
			/>

			<InfoCard
				title="Status"
				Icon={PiCheckCircle}
				description="Pré-aprovado"
			/>

			<InfoCard title="Tipo" Icon={PiUserCircle} description="Pessoal" />

			<InfoCard title="Transferência" Icon={PiPixLogo} description="Pix" />
		</div>
	);
};
