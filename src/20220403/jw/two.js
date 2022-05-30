// 좌표 정렬
/** 
 * N개의 평면상의 좌표(x, y)가 주어지면 모든 좌표를 오름차순으로 정렬하는 프로그램을 작성하 세요. 정렬기준은 먼저 x값의 의해서 정렬하고, x값이 같을 경우 y값에 의해 정렬합니다.
▣ 입력설명
첫째 줄에 좌표의 개수인 N(3<=N<=100,000)이 주어집니다.
두 번째 줄부터 N개의 좌표가 x, y 순으로 주어집니다. x, y값은 양수만 입력됩니다.
▣ 출력설명
N개의 좌표를 정렬하여 출력하세요.
 * * */
function solution(m){
    let n = m.length;
    let answer = [];
    for(let i=1; i<n; i++) {
        let n_index = i;
        let cur = m[i];
        for(let j=i-1; j>=0; j--) {
            let next = m[j];
            if(cur[0] > next[0]) break;  
            else if(cur[0] == next[0] && cur[1] > next[1]) break;       
            n_index = j;
        }
        
        if(n_index!=i) { 
            for(let j=i; j>n_index; j--) {
                let cur = m[j];
                let pre = m[j-1];

                m[j] = pre;
                m[j-1] = cur;
            }
        }
    }
    answer = m;
    return answer.map(item=>console.log(item))
}

let m1 = [
    [2,7],
    [1,3],
    [1,2], 
    [2,5], 
    [3,6],
];
//result: 
/***
 * 1 2
 * 1 3
 * 2 5
 * 2 7 
 * 3 6
 */

console.log(solution(m1))
