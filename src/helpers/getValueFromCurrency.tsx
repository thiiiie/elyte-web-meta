export function extractNumericValue(currencyString: string): number {
  // Remove todos os caracteres não numéricos, exceto o ponto decimal
  if (!currencyString) return 0;
  const numericString = currencyString.replace(/[^\d,]/g, "");

  // Substitui a vírgula por ponto para garantir que parseFloat funcione corretamente
  const numericValue = Number.parseFloat(numericString.replace(",", "."));

  // Se o valor não for um número válido, retorna NaN
  return Number.isNaN(numericValue) ? 0 : numericValue;
}
