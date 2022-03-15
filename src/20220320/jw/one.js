// 교육과정 설계
/** 
 * 
 * ▣ 입력설명
첫 줄에 한 줄에 필수과목의 순서가 주어집니다. 모든 과목은 영문 대문자입니다. 
두 번 째 줄부터 현수가 짠 수업설계가 주어집니다.(수업설계의 길이는 30이하이다)
 * */
function solution(n, m){
    let answer = 'NO';
    let must_list = n.split('');
    let class_list = m.split('');

    let prev_index = -1;
    must_list.map((item)=>{
        let cur_index = class_list.indexOf(item);
        if(cur_index == -1) {
            answer = 'NO';
            return;
        } else {
            if(cur_index >= prev_index) {
                answer = 'YES';
            } else {
                answer = 'NO';
                return;
            }
        }
        prev_index = cur_index;
    });

    return answer;
}

//result: YES
console.log(solution('CBA', 'CBDAGE'))
