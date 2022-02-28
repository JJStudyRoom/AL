//괄호문자제거
/**
 * 입력된 문자열에서 소괄호 ( ) 사이에 존재하는 모든 문자를 제거하고 남은 문자만 출력하는 프로그램을 작성하세요.
▣ 입력설명
첫 줄에 문자열이 주어진다. 문자열의 길이는 100을 넘지 않는다.
▣ 출력설명
남은 문자만 출력한다.
 * *  */
function solution(str1){
    let answer = '';
    let list = [];

    let str1_list = str1.split('');
    for(let item of str1_list){
        if(item == '(') list.push(item);
        else if(item == ')') list.pop();
        else if(list.length == 0) answer += item;    
    }
    
    return answer;
}

let m1 = '(A(BC)D)EF(G(H)(IJ)K)LM(N)';
//result : EFLM

let result = solution(m1);
console.log(result);