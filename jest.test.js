import { capitalize, reverseString, calculator, caesarCipher, analyzeArray } from "./jest.js";


test('Capitalize: Happy path', () => {
	expect(
		capitalize('hello world!')
	).toBe('Hello world!');
});

test('Capitalize: First letter already capitalized', () => {
	expect(
		capitalize('HELLO!')
	).toBe('HELLO!');
});

test('Capitalize: First character is a number', () => {
	expect(
		capitalize('123movies')
	).toBe('123movies');
});

test('Capitalize: First character is a symbol', () => {
	expect(
		capitalize('! I am surprised')
	).toBe('! I am surprised');
});

test('Capitalize: Empty string', () => {
	expect(
		capitalize('')
	).toBe('');
});

test('Capitalize: Not a string', () => {
   expect(()=>{
		capitalize(['Hello'])
	}).toThrow(/^Parameter must be a string!$/);
});

test('ReverseString: Happy path', () => {
	expect(
		reverseString('hello world')
	).toBe('dlrow olleh');
});

test('ReverseString: Includes capital letters', () => {
	expect(
		reverseString('HeLlO worLd!')
	).toBe('!dLrow OlLeH');
});

test('ReverseString: Includes symbols and numbers', () => {
	expect(
		reverseString('I make $100,000 & I love cheese!')
	).toBe('!eseehc evol I & 000,001$ ekam I');
});

test('ReverseString: One character', () => {
	expect(
		reverseString('x')
	).toBe('x');
});

test('ReverseString: Empty string', () => {
	expect(
		reverseString('')
	).toBe('');
});

test('ReverseString: Not a string', () => {
	expect(()=>
		reverseString(['Hello'])
	).toThrow(/^Parameter must be a string!$/);
 });

test('Calculator: Addition happy path', () => {
	expect(
		calculator.add(4,7)
	).toBe(11);
});

test('Calculator: Addition parameters contain a non-number', () => {
	expect(
		calculator.add(4,'hello')
	).toBe(NaN);
});

test('Calculator: Addition negative numbers', () => {
	expect(
		calculator.add(-10,-2)
	).toBe(-12);
});

test('Calculator: Addition decimals', () => {
	expect(
		calculator.add(.1,.2)
	).toBeCloseTo(.3);
});

test('Calculator: Addition more than 2 numbers', () => {
	expect(()=>
		calculator.add(4,7,7)
	).toThrow(/^Need to pass in exactly two numbers to add!$/);
});

test('Calculator: Subtraction happy path', () => {
	expect(
		calculator.subtract(10,7)
	).toBe(3);
});

test('Calculator: Subtraction parameters contain a non-number', () => {
	expect(
		calculator.subtract(4,'hello')
	).toBe(NaN);
});

test('Calculator: Subtraction negative numbers', () => {
	expect(
		calculator.subtract(-10,-2)
	).toBe(-8);
});

test('Calculator: Subtraction decimals', () => {
	expect(
		calculator.subtract(1,.8)
	).toBeCloseTo(.2);
});

test('Calculator: Subtraction more than 2 numbers', () => {
	expect(()=>
		calculator.subtract(4,7,7)
	).toThrow(/^Need to pass in exactly two numbers to add!$/);
});

test('Calculator: Multiply happy path', () => {
	expect(
		calculator.multiply(10,7)
	).toBe(70);
});

test('Calculator: Multiply parameters contain a non-number', () => {
	expect(
		calculator.multiply(4,'hello')
	).toBe(NaN);
});

test('Calculator: Multiply negative numbers', () => {
	expect(
		calculator.multiply(-10, 2)
	).toBe(-20);
});

test('Calculator: Multiply decimals', () => {
	expect(
		calculator.multiply(.1,.2)
	).toBeCloseTo(.02);
});

test('Calculator: Multiply more than 2 numbers', () => {
	expect(()=>
		calculator.multiply(4,7,7)
	).toThrow(/^Need to pass in exactly two numbers to add!$/);
});

test('Calculator: Division happy path', () => {
	expect(
		calculator.divide(10,2)
	).toBe(5);
});

test('Calculator: Division parameters contain a non-number', () => {
	expect(
		calculator.divide(4,'hello')
	).toBe(NaN);
});

test('Calculator: Division negative numbers', () => {
	expect(
		calculator.divide(-50, 25)
	).toBe(-2);
});

test('Calculator: Division decimals', () => {
	expect(
		calculator.divide(.1,.2)
	).toBeCloseTo(.5);
});

test('Calculator: Division more than 2 numbers', () => {
	expect(()=>
		calculator.divide(4,7,7)
	).toThrow(/^Need to pass in exactly two numbers to add!$/);
});

test('Caesar Cipher: Happy path', () => {
	expect(
		caesarCipher('hello',5)
	).toBe('mjqqt');
});

test('Caesar Cipher: Empty string', () => {
	expect(
		caesarCipher('',5)
	).toBe('');
});

test('Caesar Cipher: Includes symbols', () => {
	expect(
		caesarCipher('hello world!',3)
	).toBe('khoor zruog!');
});

test('Caesar Cipher: Cipher loops around the alphabet', () => {
	expect(
		caesarCipher('zzz xyz',10)
	).toBe('jjj hij');
});

test('Caesar Cipher: Capitalization', () => {
	expect(
		caesarCipher('Hello, Ryan', 5)
	).toBe('Mjqqt, Wdfs');
});

test('Caesar Cipher: Shift is 26', () => {
	expect(
		caesarCipher('hello', 26)
	).toBe('hello');
});

test('Caesar Cipher: Shift is more than 26', () => {
	expect(
		caesarCipher('hello', 50)
	).toBe('fcjjm');
});

test('Caesar Cipher: Not a string', () => {
	expect(()=>{
		caesarCipher(['Hello'], 4)
	 }).toThrow(/^Parameter must be a string!$/);
});

test('AnalyzeArray: Happy path', () => {
	expect(
		analyzeArray([1,8,3,4,2,6])
	).toEqual({
		average: 4,
		min: 1,
		max: 8,
		length: 6
	  });
});

test('AnalyzeArray: Empty array', () => {
	expect(
		analyzeArray([])
	).toEqual({
		average: NaN,
		min: Infinity,
		max: -Infinity,
		length: 0
	  });
});

test('AnalyzeArray: Negative numbers', () => {
	expect(
		analyzeArray([-8,-6, 4,-10])
	).toEqual({
		average: -5,
		min: -10,
		max: 4,
		length: 4
	  });
});

test('AnalyzeArray: Infinity is an element', () => {
	expect(
		analyzeArray([1, 4, Infinity, 3])
	).toEqual({
		average: Infinity,
		min: 1,
		max: Infinity,
		length: 4
	  });
});

test('AnalyzeArray: NaN is an element', () => {
	expect(
		analyzeArray([1, 4, NaN, 3])
	).toEqual({
		average: NaN,
		min: 1,
		max: 4,
		length: 4
	  });
});

test('AnalyzeArray: Array contains a non-number', () => {
	expect(()=>{
		analyzeArray([1,6,2,5,'Hello!',4,6])
	 }).toThrow(/^Array contains a non-number!$/);
});

test('AnalyzeArray: Not an array', () => {
	expect(()=>{
		analyzeArray('testing')
	 }).toThrow(/^Parameter must be an array!$/);
});