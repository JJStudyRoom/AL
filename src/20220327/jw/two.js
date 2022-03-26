// 삽입 정렬
/** 
 * N개이 숫자가 입력되면 오름차순으로 정렬하여 출력하는 프로그램을 작성하세요. 정렬하는 방법은 삽입정렬입니다.
▣ 입력설명
첫 번째 줄에 자연수 N(1<=N<=100)이 주어집니다.
두 번째 줄에 N개의 자연수가 공백을 사이에 두고 입력됩니다. 각 자연수는 정수형 범위 안에 있습니다.
▣ 출력설명
오름차순으로 정렬된 수열을 출력합니다.
 * * */
function solution(n, m){
    let answer = [];

    for(let i=1; i<n; i++) {
        let n_index = i-1;
        let cur = m[i];
        for(let j=i-1; j>=0; j--) {
            let next = m[j];
            if(cur > next) break;            
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
    return answer;
}

let m = [
    11, 7, 5, 6, 10, 9
];
//result: 5 6 7 9 10 11
console.log(solution(6, m))
