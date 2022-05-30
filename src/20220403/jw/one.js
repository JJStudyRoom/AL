// 장난꾸러기 현수
/** 
 * 
 * ▣ 입력설명
첫 번째 줄에 자연수 N(5<=N<=100)이 주어진다.
두 번째 줄에 제일 앞에부터 일렬로 서있는 학생들의 키가 주어진다. 키(높이) 값 H는 (120<=H<=180)의 자연수 입니다.
▣ 출력설명
첫 번째 줄에 현수의 반 번호와 짝꿍의 반 번호를 차례로 출력합니다.
 * * */
function solution(m){
    let answer = '';
    // let index = Number.MIN_SAFE_INTEGER; //철수 index
    let pairIndex = Number.MIN_SAFE_INTEGER; //짝꿍 index

    let cur = m[0];
    let index = m.findIndex((item, i)=>{
        if( i > 0 && cur >= item){
            return i;
        }
        cur = item;
    });

    for(let j=index+1; j<m.length; j++) {
        if(cur <= m[j]){
            pairIndex = j;
            break;
        }
    }

    answer = `${index} ${pairIndex}`
    return answer;
}

let m1 = [
    120, 125, 152, 130, 135, 135, 143, 127, 160
];
//result: 3 8
let m2 = [
    120, 130, 150, 150, 130, 150
];
//result: 3 5
console.log(solution(m2))
