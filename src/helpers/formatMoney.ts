export function formatMoney(value?: number, digits = 1) {
	if (value) {
		return value.toLocaleString("pt-BR", {
			style: "currency",
			currency: "BRL",
			maximumFractionDigits: digits,
		});
	}

	return (0).toLocaleString("pt-BR", {
		style: "currency",
		currency: "BRL",
	});
}
