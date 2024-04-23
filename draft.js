function drawTriangle(height, symbol = '*', inverted = true) {
    if (inverted) { // Якщо параметр inverted true, малюємо інвертовану ялинку
        for (let i = height; i >= 1; i--) { 
            console.log(symbol.repeat(i)); 
        }
    } else { // Якщо параметр inverted false, малюємо неінвертовану ялинку
        for (let i = 1; i <= height; i++) { 
            console.log(symbol.repeat(i)); 
        }
    }
}
// ------ //
drawTriangle(5, '*', false); 
console.log(); 
drawTriangle(5, '*'); 