export default (expenses) => {
    if (expenses.length === 0) {
        return 0;
    } else {
        const amounts = expenses.map(d => d.amount);
        const amount = amounts.reduce((a, b) => a + b);
        return amount;
    }
}