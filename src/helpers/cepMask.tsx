export function cepMask(value: string) {
	return value
		.replace(/\D/g, "")
		.replace(/(\d{5})(\d{3})/, "$1-$2")
		.replace(/(\d{5})-(\d{3})(\d)/, "$1-$2")
		.replace(/(\d{5})-(\d{3})/, "$1-$2")
		.replace(/(\d{5})-/, "$1-")
		.replace(/(\d{5})/, "$1");
}
