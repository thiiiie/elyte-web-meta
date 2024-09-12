export function maskInput(
  e: React.ChangeEvent<HTMLInputElement>,
  mask: string,
  maxLegth = 11,
) {
  const value = e.target.value.replace(/\D/g, '')

  if (value.length > maxLegth) {
    return (e.target.value = value)
  }

  let i = 0
  const newValue = mask.replace(/#/g, () => value[i++] || '')

  e.target.value = newValue
}
