export function formatCurrency(value) {
  const formatter = new Intl.NumberFormat("en", {
    style: "currency",
    currency: "EUR",
  });

  return formatter.format(value);
}

export function formatDate(dateStr) {
  const formatter = new Intl.DateTimeFormat("en", {
    day: "numeric",
    month: "short",
    hour: "2-digit",
    minute: "2-digit",
  });

  return formatter.format(new Date(dateStr));
}
