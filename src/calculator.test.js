const calculator = require("./calculator");


test ("initial total num to be 0", () => {
    expect(calculator.total).toBe(0); // la calculadora que començi per 0
});

test ("calculator suma number total", () => {
    // escenari
    calculator.sum(2);
    //acció
    let result = calculator.total;
    //resultat expect
    expect(result).toBe (2);    
});

test ("calculator resta number total", () => {
    calculator.resta(1);
    let result = calculator.total;
    expect(result).toBe (1);
});

test("calculator multiplicar number total", () => {
    calculator.mult(8);
    let result = calculator.total;
    expect(result).toBe (8);
});

test("calculator dividir number total", () => {
    calculator.div(2);
    let result = calculator.total;
    expect(result).toBe (4);
});