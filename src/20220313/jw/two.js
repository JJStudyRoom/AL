// 쇠막대기
/** 
 * 
 * ▣ 입력설명
한 줄에 쇠막대기와 레이저의 배치를 나타내는 괄호 표현이 공백없이 주어진다. 괄호 문자의 개수는 최대 100,000이다.
▣ 출력설명
잘려진 조각의 총 개수를 나타내는 정수를 한 줄에 출력한다.
▣ 입력예제 1 ()(((()())(())()))(())
 * */
function solution(str) {
  let answer = 0;
  let pipe_list = [];
  let str_list = str.split("");

  for (let item of str_list) {
    if (item == "(") {
      // 막대기 추가
      pipe_list.push(1);
    } else if (item == ")") {
      //레이저인지 막대기인지 확인
      //1이면 레이저가 된다. )가 나온거라면 레이저이거나 막대기 이거나 없는거이니까
      //1) undefined 이면 없는거! 예를 들어 ))일 수 있으니까
      //2) 1은 레이저
      //3) 1이상은 막대기가 된다.
      let dot = pipe_list.pop();
      dot = dot == undefined ? 0 : dot;

      if (dot == 1) {
        //레이저는 모든 막대기를 다 잘라줘야한다. +1
        for (let i = 0; i < pipe_list.length; i++) {
          pipe_list[i] += 1;
        }
      } else {
        //막대기라면 다 잘린 막대기이니까 더 해주면 된다.
        answer += dot;
      }
    }
  }

  return answer;
}

let m1 = "()(((()())(())()))(())";
//result: 17
let m2 = "(((()(()()))(())()))(()())";
//result: 24
console.log(solution(m2));
