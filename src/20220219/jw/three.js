//학급 회장(해쉬)
/**
 * 
 * ▣ 입력설명
첫 줄에는 반 학생수 N(5<=N<=50)이 주어집니다.
두 번째 줄에 N개의 투표용지에 쓰여져 있던 각 후보의 기호가 선생님이 발표한 순서대로 문자열로 입력됩니다.
 * *  */
function solution(str) {
  let answer = '';
  let list = str.split('');
  let map = new Map();

  for(let i=0; i<list.length; i++) {
    let key = list[i];
    let cnt = (map.get(key) || 0);
    map.set(key, ++cnt);
  }

  let score = 0;
  map.forEach((v, k)=>{
    if(score < v) {
      answer = k;
      score = v;
    }
  })
  return answer;
}

let m1 = 'BACBACCACCBDEDE';
//result : C
let result = solution(m1);
console.log(result);