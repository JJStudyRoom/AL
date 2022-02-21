//최대 매출
/**
 * 
 * ▣ 입력설명
첫 줄에 N(5<=N<=100,000)과 K(2<=K<=N)가 주어집니다.
두 번째 줄에 N개의 숫자열이 주어집니다. 각 숫자는 500이하의 음이 아닌 정수입니다.
 * *  */
function solution(n, m, arr) {
  let answer = 0;
  let lt = 0;
  let sum = 0;

  // 초기
  for (let i = 0; i < m; i++) {
    sum += arr[i];
  }

  for (let rt = m; rt < n; rt++) {
    sum -= arr[lt++];
    sum += arr[rt];
    answer = Math.max(answer, sum);
  }
  return answer;
}

let m1 = [
    12, 15, 11, 20, 25, 10, 20, 19, 13, 15
];
//result : 56
let result = solution(10, 3, m1);
console.log(result);