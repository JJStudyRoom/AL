//뒤집은 소수
/**
 *
 * ▣ 입력설명
첫 줄에 자연수의 개수 N(3<=N<=100)이 주어지고, 그 다음 줄에 N개의 자연수가 주어진다. 각 자연수의 크기는 100,000를 넘지 않는다.
 *  */
function checkPrime(value) {
    if(value == 1) return false;
    for(let i=2; i<=value-1; i++) {
        if(value % i == 0) {
            return false;
        }
    }
    return true;
}

function solution(n, list=[]){
    let answer = [];
    
    for(let item of list) {
        let value = parseInt(item.toString().split("").reverse().join(""));
        if(checkPrime(value)) answer.push(value)
    
    }
    return answer;
}

let m = [
    32, 55, 62, 20, 250, 370, 200, 30, 100
]
  
//result : 23 2 73 2 3
let result = solution(9, m);
console.log(result);