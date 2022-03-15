// 후위식 연산(postfix)
/** 
 * 후위연산식이 주어지면 연산한 결과를 출력하는 프로그램을 작성하세요.
만약 3*(5+2)-9 을 후위연산식으로 표현하면 352+*9- 로 표현되며 그 결과는 12입니다.
▣ 입력설명
첫 줄에 후위연산식이 주어집니다. 연산식의 길이는 50을 넘지 않습니다. 식은 1~9의 숫자와 +, -, *, / 연산자로만 이루어진다.
 */
function solution(str){
    let answer = '';
    let list = [];
    let str_list = str.split('');

    for(let item of str_list) {
        if(['+', '-', '*', '/'].indexOf(item) > -1) {
            let b = parseInt(list.pop());
            let a = parseInt(list.pop());
            let c;
            switch (item) {
              case "+":
                c = a + b;
                break;
              case "-":
                c = a - b;
                break;
              case "*":
                c = a * b;
                break;
              case "/":
                c = a / b;
                break;
            }
            if(c != undefined) list.push(c);
        } else {
            list.push(item);
        }
    }

    answer = list[0];
    return answer;
}

let m1 = '352+*9-';
//result: 12
console.log(solution(m1))
