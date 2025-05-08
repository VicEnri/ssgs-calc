const { add, subtract, multiply, divide, power } = require('../src/calculator');

describe('Calculator Functions', () => {
    test('add() should return the sum of two numbers', () => {
        expect(add(2, 3)).toBe(5);
        expect(add(-2, -3)).toBe(-5);
        expect(add(2, -3)).toBe(-1);
        expect(add(0, 0)).toBe(0);
    });

    test('subtract() should return the difference of two numbers', () => {
        expect(subtract(5, 3)).toBe(2);
        expect(subtract(-5, -3)).toBe(-2);
        expect(subtract(5, -3)).toBe(8);
        expect(subtract(0, 0)).toBe(0);
    });

    test('multiply() should return the product of two numbers', () => {
        expect(multiply(3, 4)).toBe(12);
        expect(multiply(-3, -4)).toBe(12);
        expect(multiply(3, -4)).toBe(-12);
        expect(multiply(3, 0)).toBe(0);
    });

    test('divide() should return the quotient of two numbers', () => {
        expect(divide(10, 2)).toBe(5);
        expect(divide(-10, -2)).toBe(5);
        expect(divide(10, -2)).toBe(-5);
    });

    test('divide() should throw an error when dividing by zero', () => {
        expect(() => divide(10, 0)).toThrow("Division by zero is not allowed.");
    });

    test('power() should return the result of raising a number to a power', () => {
        expect(power(2, 3)).toBe(8); // 2^3 = 8
        expect(power(2, 0)).toBe(1); // 2^0 = 1
        expect(power(2, -2)).toBe(0.25); // 2^-2 = 0.25
        expect(power(0, 5)).toBe(0); // 0^5 = 0
        expect(power(0, 0)).toBe(1); // 0^0 is conventionally 1
    });
});