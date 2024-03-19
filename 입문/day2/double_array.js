function solution(numbers) {
  let answer = [];
  for (let i = 0; i < numbers.length; i++) {
    answer.push(numbers[i] * 2);
  }
  return answer;
}

function solution(numbers) {
  return numbers.reduce((a, b) => [...a, b * 2], []);
}

arr.reduce(callback(accumulator, currentValue, index, array), initialValue);
//배열.reduce(callback(누적값, 현재값, 인덱스, 요소), 초기값);
