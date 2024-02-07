export function formatCurrency(value) {
  const formatter = new Intl.NumberFormat("en", {
    style: "currency",
    currency: "EUR",
  });

  return formatter.format(value)
}
