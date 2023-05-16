export function capitalize(str){
	if (typeof(str) !== 'string'){
		throw Error('Parameter must be a string!')
	}
	return str ? str[0].toUpperCase() + str.slice(1) : ''
}

export function reverseString(str){
	if (typeof(str) !== 'string'){
		throw Error('Parameter must be a string!')
	}
	let newStr = ''
	while (str.length !== 0){
		newStr += str.at(-1);
		str = str.substring(0,str.length-1)
	}
	return newStr
}

export const calculator = {

	add: function(num1, num2){	
		if (arguments.length !== 2){
			throw Error('Need to pass in exactly two numbers to add!')
		}
		return typeof(num1) === 'number' && typeof(num2) === 'number' ? num1 + num2 : NaN 
	},
	subtract: function(num1, num2){	
		if (arguments.length !== 2){
			throw Error('Need to pass in exactly two numbers to add!')
		}
		return typeof(num1) === 'number' && typeof(num2) === 'number' ? num1 - num2 : NaN 
	},
	multiply: function(num1, num2){	
		if (arguments.length !== 2){
			throw Error('Need to pass in exactly two numbers to add!')
		}
		return typeof(num1) === 'number' && typeof(num2) === 'number' ? num1 * num2 : NaN 
	},
	divide: function(num1, num2){	
		if (arguments.length !== 2){
			throw Error('Need to pass in exactly two numbers to add!')
		}
		return typeof(num1) === 'number' && typeof(num2) === 'number' ? num1 / num2 : NaN 
	}
}

export function caesarCipher(str, shiftFactor){
	if (typeof(str) !== 'string'){
		throw Error('Parameter must be a string!')
	}
	let alphabet = 'abcdefghijklmnopqrstuvwxyz'
	let cipher = alphabet.slice(shiftFactor % 26) + alphabet.slice(0,shiftFactor%26)
	let returnStr = ''
	for (let char of str){
		if (alphabet.indexOf(char) !== -1){
			returnStr += cipher[alphabet.indexOf(char)]
		} else if (alphabet.indexOf(char.toLowerCase()) !== -1){
			returnStr += cipher.toUpperCase()[alphabet.toUpperCase().indexOf(char)]
		} else {
			returnStr += char
		}
	}
	return returnStr;
}

export function analyzeArray(arr){
	if (!Array.isArray(arr)){
		throw Error('Parameter must be an array!')
	}
	let analyzeObject = {}
	arr.forEach((element)=>{
		if (typeof(element) !== 'number'){
			throw Error('Array contains a non-number!')
		}
	})
	analyzeObject.average = arr.reduce((total, currentValue) => { return total + currentValue }, 0)/arr.length
	analyzeObject.length = arr.length
	let arrMax = -Infinity;
	let arrMin = Infinity;
	for (let num of arr){
		if (num > arrMax){
			arrMax = num;
		}
		if (num < arrMin){
			arrMin = num;
		}
	}
	analyzeObject.max = arrMax;
	analyzeObject.min = arrMin;
	return analyzeObject
}