requirejs ['calculator'], (Calculator) ->

  calc = new Calculator()
  sum = calc.add(4, 66, 8, 9)
  elem = document.getElementById 'sum'
  elem.innerHTML sum
