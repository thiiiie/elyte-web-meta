export function currencyMask(value: string) {
	let valor: number | string = value;

	// Remove qualquer caractere que não seja dígito
	valor = valor.replace(/\D/g, "");

	// Adiciona zeros se necessário
	valor = `${(Number(valor) / 100).toFixed(2)}`;

	// Separa parte inteira e decimal
	valor = valor.replace(".", ",");

	// Adiciona o ponto como separador de milhar
	valor = valor.replace(/\B(?=(\d{3})+(?!\d))/g, ".");

	// Atualiza o valor do input
	return `${valor}`;
}
