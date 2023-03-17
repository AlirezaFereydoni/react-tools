export default (price: number) =>
    new Intl.NumberFormat('fa-IR', { maximumSignificantDigits: 3 }).format(price);
