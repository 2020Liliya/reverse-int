module.exports = function reverse(n) {
    let moduleNumber = String(Math.abs(n));
    let arrayNumber = moduleNumber.split('');
    arrayNumber.reverse();
    const newNumber = Number(arrayNumber.join(''));
    return newNumber;
}
