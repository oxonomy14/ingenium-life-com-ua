import { currencyConfig } from '@/config/currency';

export function convertRubToUah(amount: number) {
  return amount * currencyConfig.rubToUah;
}

export function formatCurrency(amount: number, currency: 'RUB' | 'UAH') {
  return new Intl.NumberFormat('uk-UA', {
    style: 'currency',
    currency,
    maximumFractionDigits: 0,
  }).format(amount);
}

export function formatRub(amount: number) {
  return formatCurrency(amount, 'RUB');
}

export function formatUah(amount: number) {
  return formatCurrency(amount, 'UAH');
}

export function convertAndFormatRubToUah(amount: number) {
  const uah = convertRubToUah(amount);

  return formatUah(uah);
}
