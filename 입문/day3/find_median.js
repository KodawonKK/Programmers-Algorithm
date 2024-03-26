function solution(array) {
  array.sort(function (a, b) {
    return a - b;
  });
  let arrlength = Math.floor(array.length / 2);

  return array[arrlength];
  // return array;
}
