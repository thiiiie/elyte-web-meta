export function validarCPF(cpf: string): boolean {
	// Verifica se o CPF possui 11 dígitos
	if (cpf.length !== 11) {
		return false;
	}

	// Verifica se todos os caracteres são números
	if (!/^\d+$/.test(cpf)) {
		return false;
	}

	// Calcula o primeiro dígito verificador
	let soma = 0;
	for (let i = 0; i < 9; i++) {
		soma += Number.parseInt(cpf.charAt(i)) * (10 - i);
	}
	let digito1 = 11 - (soma % 11);
	if (digito1 > 9) {
		digito1 = 0;
	}

	// Verifica se o primeiro dígito verificador está correto
	if (Number.parseInt(cpf.charAt(9)) !== digito1) {
		return false;
	}

	// Calcula o segundo dígito verificador
	soma = 0;
	for (let i = 0; i < 10; i++) {
		soma += Number.parseInt(cpf.charAt(i)) * (11 - i);
	}
	let digito2 = 11 - (soma % 11);
	if (digito2 > 9) {
		digito2 = 0;
	}

	// Verifica se o segundo dígito verificador está correto
	if (Number.parseInt(cpf.charAt(10)) !== digito2) {
		return false;
	}

	// Se passou por todas as verificações, o CPF é válido
	return true;
}
