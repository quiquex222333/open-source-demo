function sum(a, b) {
  return a + b;
}

function calculateDiscount(price, discountPercent) {
  return price - (price * discountPercent / 100);
}

module.exports = {
  sum,
  calculateDiscount
};