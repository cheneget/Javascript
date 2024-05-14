function sumPrices(items) {
    if (!Array.isArray(items) || items.length === 0) {
      return "Invalid items array.";
    }
  
    const total = items.reduce((acc, item) => acc + item.price, 0);
    return `Total cost: $${total.toFixed(2)}`;
  }
  const cart = [
    { price: 2.7 },
    { price: 25.24 },
    { price: -0.19 },
    { price: 49.19 },
  ];
  
  console.log(sumPrices(cart));