function add(number1, number2) {
  return number1 + number2
}
// const add = (number1, number2) => number1 + number2

function sub(number1, number2) {
  return number1 - number2
}

function mul(number1, number2) {
  return number1 * number2
}

function div(number1, number2) {
  return number1 / number2
}

$(function() {
  $("form#add").submit(function(e) {
    e.preventDefault()
    const number1 = parseInt($("#add1").val())
    const number2 = parseInt($("#add2").val())
    const result = add(number1, number2)
    const factStyle1 = number1 + " + " + number2 + " = " + result
    const factStyle2 = `${number1} + ${number2} = ${result}`
    alert(factStyle2)
  })
})
