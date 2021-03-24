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