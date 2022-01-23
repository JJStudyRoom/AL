//자릿수의 합
/**
 * ▣ 입력설명
첫 줄에 자연수의 개수 N(3<=N<=100)이 주어지고, 그 다음 줄에 N개의 자연수가 주어진다. 각 자연수의 크기는 10,000,000를 넘지 않는다.
 */
function solution(n, list){
    let answer = 0, sumNum = 0;

    for(let item of list) {
        let divNums = item.toString().split("");
        let sum = divNums.reduce((cur, next)=>{
            return cur + parseInt(next);
        }, 0);

        if(sum >= sumNum) {
            answer = item >= answer ? item : answer;
            sumNum = sum;
        }
    }
    return answer;
}

let m = [
    128, 460, 603, 40, 521, 137, 123
]
  
//result : 137
let result = solution(7, m);
console.log(result);