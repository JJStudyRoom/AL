//모든 아나그램 찾기(해쉬, 투포인터, 슬라이딩 윈도우)
/**
 * S문자열에서 T문자열과 아나그램이 되는 S의 부분문자열의 개수를 구하는 프로그램을 작성하 세요. 아나그램 판별시 대소문자가 구분됩니다. 부분문자열은 연속된 문자열이어야 합니다.
▣ 입력설명
첫 줄에 첫 번째 S문자열이 입력되고, 두 번째 줄에 T문자열이 입력됩니다.
S문자열의 길이는 10,000을 넘지 않으며, T문자열은 S문자열보다 길이가 작거나 같습니다.
▣ 출력설명
S단어에 T문자열과 아나그램이 되는 부분문자열의 개수를 출력합니다.
 * 
 * */
function checkAnagram(str1, str2){
    let answer = true;
    let key_map = new Map();
    str1.split('').map((key)=>{
        let key_value = key_map.get(key) || 0;
        key_map.set(key, ++key_value);
    });

    str2.split('').map((key)=>{
        let key_value = key_map.get(key) || 0;
        key_map.set(key, --key_value);
    });

    key_map.forEach((v, k)=>{
        if(v !== 0) {
            answer = false;
        }
    });
    return answer;
};

function solution(str1, str2) {
  let answer = [];
  let str1_length = str1.length;
  let str2_length = str2.length;
  let max_length = str1_length - str2_length + 1;
  
  for (let rt = 0; rt < max_length; rt++) {
    let sub_str = str1.substr(rt, str2_length);
    let flag = checkAnagram(str2, sub_str);
    flag && answer.push(sub_str);
  }

  return answer.length;
}
 
let m1 = {
    str1: 'bacaAacba',
    str2: 'abc'
};
//result : 3

let result = solution(m1.str1, m1.str2);
console.log(result);