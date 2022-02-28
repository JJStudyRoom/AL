//올바른 괄호
/**
 * 
 * 괄호가 입력되면 올바른 괄호이면 “YES", 올바르지 않으면 ”NO"를 출력합니다.
(())() 이것은 괄호의 쌍이 올바르게 위치하는 거지만, (()()))은 올바른 괄호가 아니다.
▣ 입력설명
첫 번째 줄에 괄호 문자열이 입력됩니다. 문자열의 최대 길이는 30이다.
▣ 출력설명
첫 번째 줄에 YES, NO를 출력한다.

 * *  */
function solution(str1){
    let list = [];

    //홀수라면 NO
    if(str1.length % 2 == 1) return 'NO';
    else {
        let str1_list = str1.split('');
        for(let item of str1_list){
            if(item == '(') list.push(item);
            else list.pop();
        }
    }

    if(list.length > 0) return 'NO';
    
    return 'YES';
}

let m1 = '(()(()))(())';
//result : NO

let result = solution(m1);
console.log(result);