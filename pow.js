function pow(x, y) {
    // Валідація вхідних даних
    if (typeof x !== 'number' || typeof y !== 'number') {
        throw new Error('Both x and y should be numbers');
    }

    // Обробка випадків з нульовим ступенем
    if (y === 0) {
        if (x === 0) {
            throw new Error('0 to the power of 0 is undefined');
        }
        return 1;
    }

    // Обробка випадків з від'ємним ступенем
    if (y < 0) {
        return 1 / pow(x, -y);
    }

    // Обчислення степеня для додатних значень y
    let result = 1;
    for (let i = 0; i < y; i++) {
        result *= x;
    }

    return result;
}

console.log(pow(3, 3)); // 27
console.log(pow(2, -2)); // 0.25
console.log(pow(2, 0)); // 1
console.log(pow(0, 3)); // 0
try {
    console.log(pow(0, 0)); // Error
} catch (e) {
    console.error(e.message);
}
