const farsiDigits = ["۰", "۱", "۲", "۳", "۴", "۵", "۶", "۷", "۸", "۹"];

export function toPersianNumberWithComma(n) {
  const numWithComma = numberWithComma(n);
  const persianNumber = toPersianNumber(numWithComma);
  return persianNumber;
}

export function numberWithComma(x) {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

export function toPersianNumber(n) {
  return n.toString().replace(/\d/g, (x) => farsiDigits[parseInt(x)]);
}
