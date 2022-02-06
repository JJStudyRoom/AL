//두 배열 합치기
/**
 * ▣ 입력설명
첫 번째 줄에 첫 번째 배열의 크기 N(1<=N<=100)이 주어집니다. 두 번째 줄에 N개의 배열 원소가 오름차순으로 주어집니다.
세 번째 줄에 두 번째 배열의 크기 M(1<=M<=100)이 주어집니다. 네 번째 줄에 M개의 배열 원소가 오름차순으로 주어집니다.
각 리스트의 원소는 int형 변수의 크기를 넘지 않습니다.
 * *  */
function solution(arr1, arr2){
    let answer = [];
    let lt = 0, rt = 0;
    let maxLength = arr1.length + arr2.length;

    while(lt < arr1.length || rt < arr2.length) {
        let lt_value = arr1[lt] || Number.MAX_SAFE_INTEGER
        let rt_value = arr2[rt] || Number.MAX_SAFE_INTEGER
        
        if(lt_value <= rt_value) {
            answer.push(lt_value);            
            lt++;
        } else if(lt_value > rt_value) {
            answer.push(rt_value);
            rt++;            
        }
    }
    return answer;
}

let m1 = [
    1, 3, 5
];
let m2 = [
    2, 3, 6, 7, 9
];  
//result : 1 2 3 3 5 6 7 9
let result = solution(m1, m2);
console.log(result);