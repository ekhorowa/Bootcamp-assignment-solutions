module.exports = {
	computeAverage: function (num1, num2, num3) {
	  return (num1 + num2 + num3) / 3;
  },

computeFactorial : function (num){
  var factorial = 1;
  for (var i = 1; i <= num ; i++){
    factorial *= i ;
  }
  return factorial;
},

convertTempCtoF : function (n){
  var celsius = (9/5*n) + 32 ;
return celsius;
},
convertTempFtoC: function (n){
  var farenheit = 5/9 * (n - 32);
return farenheit;
}
}
