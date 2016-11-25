module.exports = {
arithGEO : function (d_array) {
  
  if(d_array.length < 1){
    return 0;
  }
  
  var arithmeticBaseComparison = d_array[1] - d_array[0];
  var geometricRatio = d_array[1] / d_array[0];
  var isArithmetricProgression
  var isGeometricProgression;

  for(var i = 2; i < d_array.length; i++) {
    if( d_array[i] - d_array[i - 1] === arithmeticBaseComparison )
      isArithmetricProgression = true;
    else
      isArithmetricProgression = false;
    
    if(d_array[i] / d_array[i - 1] === geometricRatio)
      isGeometricProgression = true;
    else
      isGeometricProgression = false;
  }
  
  if(isArithmetricProgression)
    return "Arithmetic";
  else if(isGeometricProgression)
    return "Geometric";
  else
  return -1;

}
}

