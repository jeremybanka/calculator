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
  
  $("form#add").on('submit', function(e) {
    e.preventDefault()
    const number1 = parseInt($("#add1").val())
    const number2 = parseInt($("#add2").val())
    const result = add(number1, number2)
    const factStyle1 = number1 + " + " + number2 + " = " + result
    const factStyle2 = `${number1} + ${number2} = ${result}`
    $('#add.output').text(result)
  })

  $("form#sub").on('submit', function(e) {
    e.preventDefault()
    const number1 = parseInt($("#sub1").val())
    const number2 = parseInt($("#sub2").val())
    const result = sub(number1, number2)    
    $('#sub.output').text(result) 
  })

  $("form#mul").on("submit", function(e) {
    e.preventDefault()
    const number1 = parseInt($("#mul1").val())
    const number2 = parseInt($("#mul2").val())
    const result = mul(number1, number2)    
    $('#mul.output').text(result) 
  })

  $("form#div").on("submit", function(e) {
    e.preventDefault()
    const number1 = parseInt($("#div1").val())
    const number2 = parseInt($("#div2").val())
    const result = div(number1, number2)    
    $('#div.output').text(result) 
  })
})
