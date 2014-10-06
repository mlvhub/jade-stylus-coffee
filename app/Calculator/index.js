(function() {
  requirejs(['calculator'], function(Calculator) {
    var calc, elem, sum;
    calc = new Calculator();
    sum = calc.add(4, 66, 8, 9);
    elem = document.getElementById('sum');
    return elem.innerHTML(sum);
  });

}).call(this);
