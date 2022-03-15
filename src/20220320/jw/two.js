// 선택 정렬
/** 
 * 
 * N개이 숫자가 입력되면 오름차순으로 정렬하여 출력하는 프로그램을 작성하세요. 정렬하는 방법은 선택정렬입니다.
▣ 입력설명
첫 번째 줄에 자연수 N(1<=N<=100)이 주어집니다.
두 번째 줄에 N개의 자연수가 공백을 사이에 두고 입력됩니다. 각 자연수는 정수형 범위 안에 있습니다.
 * 
 *  * */
function solution(n, m){
    for(let i=0; i<m.length; i++) {
        let cur = m[i];

        let min_index = i;
        let min_val = cur;
        for(let j=(i+1); j<m.length; j++) {
            if(min_val >= m[j]) {
                min_index = j;
                min_val = m[j];
            }
        }
    
        m[i] = min_val;
        m[min_index] = cur;
    }

    return m;
}

let m1 = [
    13, 5, 11, 7, 23, 15
]
//result: 5 7 11 13 15 23
console.log(solution(6, m1))
