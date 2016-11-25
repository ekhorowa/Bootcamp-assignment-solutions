module.exports = {
arithGEO : function(d_array) {
  
  if (d_array.length < 1){
    return 0;
  }
  
  var arithmeticBaseComparison = d_array[1] - d_array[0];
  var geometricRatio = d_array[1] / d_array[0];
  var isArithmetricProgression
  var isGeometricProgression;

  for(var i = 0; i < d_array.length - 1; i++) {
    if( d_array[i + 1] - d_array[i] === arithmeticBaseComparison )
      isArithmetricProgression = true;
    else
      isArithmetricProgression = false;
    
    if(d_array[i + 1] / geometricRatio === d_array[i])
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
};