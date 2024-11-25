export const formatCurrency = (amount: number, locale = "tr-TR", currency = "TRY") => {
  return new Intl.NumberFormat(locale, {
    style: "currency",
    currency
  }).format(amount);
};
