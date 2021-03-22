// const ADD = 'add'
// const SUB = 'sub'
// const MUL = 'mul'
// const DIV = 'div'

// function add(number1, number2) {
//   console.log(number1, number2)
//   let number1Parsed = number1
//   let number2Parsed = number2
//   if(typeof number1 !== 'number') number1Parsed = parseInt(number1)
//   if(typeof number2 !== 'number') number2Parsed = parseInt(number2)
//   // if(number1 === null) number1 = 0
//   return number1Parsed + number2Parsed
// }

// const number1 = prompt("Please enter a number:")
// const number2 = prompt("Please enter another number:")

// alert(add(number1,number2))

function add(number1, number2) {
  return number1 + number2
}

function sub(number1, number2){
  return number1 - number2
}

function mult(number1, number2){
  return number1 * number2
}

function div(number1, number2){
  return number1 / number2
}

function fahrenheitToCelsius(fahr){
  const cel = (fahr - 32) * (5 / 9) 
  return cel
}

function celsiusToFahrenheit(cel){
  return (cel*9/5)+32
}

const fahrenheitInput = parseInt(prompt('Enter a Fahrenheit number'))
const celsiusResult = fahrenheitToCelsius(fahrenheitInput)
alert(celsiusResult)

const number1 = parseInt(prompt('Enter a number:'))
const number2 = parseInt(prompt('Enter another number:'))
const result = add(number1, number2)
// alert(result)