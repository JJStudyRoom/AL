//공통원소 구하기
/**
 *  ▣ 입력설명
첫 번째 줄에 집합 A의 크기 N(1<=N<=30,000)이 주어집니다.
두 번째 줄에 N개의 원소가 주어집니다. 원소가 중복되어 주어지지 않습니다. 세 번째 줄에 집합 B의 크기 M(1<=M<=30,000)이 주어집니다.
네 번째 줄에 M개의 원소가 주어집니다. 원소가 중복되어 주어지지 않습니다. 각 집합의 원소는 1,000,000,000이하의 자연수입니다.

▣ 출력설명
두 집합의 공통원소를 오름차순 정렬하여 출력합니다.

 *  * *  */
function solution(arr1, arr2){
    let answer = [];
    let lt = 0, rt = 0;
    arr1.sort((a, b)=>a-b);
    arr2.sort((a, b)=>a-b);

    while(lt < arr1.length || rt < arr2.length) { 
        let lt_val = arr1[lt] || Number.MAX_SAFE_INTEGER;
        let rt_val = arr2[rt] || Number.MAX_SAFE_INTEGER;

        if(lt_val == rt_val) {
            answer.push(lt_val);
            lt++;
        } else if(lt_val < rt_val){
            lt++;
        } else {
            rt++;
        }
    }
    return answer;
}

let m1 = [
    1, 3, 9, 5, 2
];
let m2 = [
    3, 2, 5, 7, 8
];  
//result : 2 3 5
let result = solution(m1, m2);
console.log(result);