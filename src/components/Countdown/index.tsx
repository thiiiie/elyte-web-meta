"use client";

import { useEffect, useState } from "react";

export const Countdown = () => {
	const [timeLeft, setTimeLeft] = useState(540);

	const minutes = String(Math.floor(timeLeft / 60)).padStart(2, "0");
	const seconds = String(timeLeft % 60).padStart(2, "0");

	useEffect(() => {
		if (timeLeft <= 0) return;

		const timeoutId = setTimeout(() => {
			setTimeLeft((state) => state - 1);
		}, 1000);

		return () => {
			clearTimeout(timeoutId);
		};
	}, [timeLeft]);

	return (
		<section className="flex flex-col items-center">
			<h2 className="text-xl font-medium mb-2 text-center">
				Sua oferta expira em
			</h2>

			<div className="flex items-center gap-2">
				<div className="w-[100px] bg-red-500 pt-4 text-center rounded-md">
					<span className="text-3xl font-bold text-primary-foreground">
						{minutes}
					</span>

					<p className="text-primary-foreground bg-gray-500 rounded-md mt-2">
						minutos
					</p>
				</div>

				<div className="w-[100px] bg-red-500 pt-4 text-center rounded-md">
					<span className="text-3xl font-bold text-primary-foreground">
						{seconds}
					</span>

					<p className="text-primary-foreground bg-gray-500 rounded-md mt-2">
						segundos
					</p>
				</div>
			</div>

			<p className="text-details text-center max-w-[400px] my-6">
				O não pagamento da tarifa resulta no cancelamento do contrato do
				empréstimo, impossibilitando uma nova contratação por um prazo máximo de
				30 dias
			</p>
		</section>
	);
};
