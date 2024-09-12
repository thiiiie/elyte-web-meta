export function birthDateMask(value: string) {
	const valor = value.replace(/\D/g, ""); // Remove tudo que não for dígito
	let valorFormatado = "";

	if (valor.length <= 2) {
		valorFormatado = valor;
	} else if (valor.length <= 4) {
		valorFormatado = `${valor.slice(0, 2)}/${valor.slice(2)}`;
	} else {
		valorFormatado = `${valor.slice(0, 2)}/${valor.slice(2, 4)}/${valor.slice(4, 8)}`;
	}

	return valorFormatado;
}
