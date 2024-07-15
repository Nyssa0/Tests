function calculateTotalPrice(order) {
    let total = 0;
    for (let i = 0; i < order.length; i++) {
        const item = order[i];
        total += item.price * item.quantity;
    }
    return total;
}

module.exports = {
    calculateTotalPrice,
};
