export const formatNumber = (number: number) => {
  return new Intl.NumberFormat('en-US', { maximumFractionDigits: 0 }).format(number);
};

export const formatCurrency = (number: number) => {
  const formatted = new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD', minimumFractionDigits: 0, maximumFractionDigits: 0 }).format(number);
  return formatted;
};
