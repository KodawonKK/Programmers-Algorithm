function solution(n) {
  let arr = [];
  for (let i = n; i >= 1; i--) {
    arr.push(i);
  }
  let filterArr = arr.filter((word) => word % 2 !== 0);
  filterArr.sort(function (a, b) {
    return a - b;
  });
  return filterArr;
}
