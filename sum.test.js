const sumTwoNumbers = require('./sum');

test('adds 1 + 2 to equal 3', () => expect(sumTwoNumbers(1, 2)).toBe(3));
test('adds -1 + -1 to equal -2', () => expect(sumTwoNumbers(-1, -1)).toBe(-2));
test('adds 0 + 0 to equal 0', () => expect(sumTwoNumbers(0, 0)).toBe(0));
test('adds 1000 + 234 to equal 1234', () => expect(sumTwoNumbers(1000, 234)).toBe(1234));
test('adds -10 + 5 to equal -5', () => expect(sumTwoNumbers(-10, 5)).toBe(-5));
test('adds 999 + 1 to equal 1000', () => expect(sumTwoNumbers(999, 1)).toBe(1000));
test('adds -5 + -10 to equal -15', () => expect(sumTwoNumbers(-5, -10)).toBe(-15));
test('adds 123 + 456 to equal 579', () => expect(sumTwoNumbers(123, 456)).toBe(579));
test('adds 7 + 8 to equal 15', () => expect(sumTwoNumbers(7, 8)).toBe(15));
test('adds -100 + 100 to equal 0', () => expect(sumTwoNumbers(-100, 100)).toBe(0));
