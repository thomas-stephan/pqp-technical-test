export const ucfirst = (value: string): string => {
  return value[0].toUpperCase() + value.slice(1)
}

export const capitalize = (value: string): string => {
  return value
    .trim()
    .toLowerCase()
    .replace(/(?:^|\s|-|–|—|,)\S/g, (str) => str.toUpperCase())
}
