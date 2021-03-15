
exports.min = function min (array) {
  if (array == undefined) {
    return 0
  }
  if (array.length == 0) {
    return 0;
  }
  array.sort((a, b) => a - b);
  return array[0];
}

exports.max = function max (array) {
  if (array == undefined) {
    return 0
  }
  if (array.length == 0) {
    return 0;
  }
  array.sort((a, b) => a - b);
  return array[array.length - 1];
}

exports.avg = function avg (array) {
  if (array == undefined) {
    return 0
  }
  if (array.length == 0) {
    return 0;
  }
  let avgNum = 0;
  for (let i = 0; i < array.length; i++) {
    avgNum += array[i];
  }
  return avgNum / array.length
}
