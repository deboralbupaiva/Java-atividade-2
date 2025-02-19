function ehPrimo(num) {
    if (num < 2) return "Não é primo";
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) return "Não é primo";
    }
    return "É primo";
}
console.log(ehPrimo(7)); 