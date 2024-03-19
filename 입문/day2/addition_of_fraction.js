function solution(numer1, denom1, numer2, denom2) {
  //분자
  let topNum = numer1 * denom2 + numer2 * denom1;
  //분모
  let btmNum = denom1 * denom2;

  let maxnum = 1;

  for (let i = 1; i <= topNum; i++) {
    if (topNum % i === 0 && btmNum % i === 0) {
      maxnum = i;
    }
  }
  return [topNum / maxnum, btmNum / maxnum];
}
