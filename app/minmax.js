module.exports = {
min_max: function (d_array) {
  return [Math.min.apply(null, d_array), Math.max.apply(null, d_array)];
}
}
