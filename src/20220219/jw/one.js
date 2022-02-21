//연속 부분수열 2
/**
 * 
 * N개의 수로 이루어진 수열이 주어집니다.
이 수열에서 연속부분수열의 합이 특정숫자 M이하가 되는 경우가 몇 번 있는지 구하는 프로그 램을 작성하세요.
만약 N=5, M=5이고 수열이 다음과 같다면
13123
합이 5이하가 되는 연속부분수열은 {1}, {3}, {1}, {2}, {3}, {1, 3}, {3, 1}, {1, 2}, {2, 3}, {1, 3, 1}로 총 10가지입니다.

▣ 입력설명
첫째 줄에 N(1≤N≤100,000), M(1≤M≤100,000,000)이 주어진다. 수열의 원소값은 1,000을 넘지 않는 자연수이다.

 * *  */
function solution(n, m, arr){
    let answer = [];
    let lt = 0;

    while(lt < n) {
        let child = [], sum = 0;
        for(let i=lt; i<n; i++) {
            child.push(arr[i]);
            sum += arr[i];
            if(sum <= m) {
                answer.push(child.slice()); 
            } else {
                break;
            }
        }
        lt++;
    }
    return answer.length;
}

let m1 = [
    1, 3, 1, 2, 3
];
//result : 10
let result = solution(5, 5, m1);
console.log(result);