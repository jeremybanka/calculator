const someStringVariable = '...'

if(someStringVariable === 'somePossibility') {
  // this runs
}

switch(someStringVariable) {
  case 'somePossibility':
    // code here runs if someStringVariable === 'somePossibility'
    break
  case 'someOtherPossibility':
    // code here runs if someStringVariable === 'someOtherPossibility'
    break
  default:
    // if none of the cases above === someStringVariable
    break
}