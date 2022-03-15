// 공주 구하기
/** 
 * 예를 들어 총 8명의 왕자가 있고, 3을 외친 왕자가 제외된다고 하자. 처음에는 3번 왕자가 3 을 외쳐 제외된다. 이어 6, 1, 5, 2, 8, 4번 왕자가 차례대로 제외되고 마지막까지 남게 된 7 번 왕자에게 공주를 구하러갑니다.
N과 K가 주어질 때 공주를 구하러 갈 왕자의 번호를 출력하는 프로그램을 작성하시오.

▣ 입력설명
첫 줄에 자연수 N(5<=N<=1,000)과 K(2<=K<=9)가 주어진다.
 *  */
function solution(n, k){
    let answer = '';
    let queue = [];
    for(let i=1; i<=n; i++){
      queue.push(i);
    }

    let count = 1;
    while(queue.length > 1) { 
      let item = queue.shift();
      if(count == k) {
        count = 1;
        continue;
      }

      queue.push(item);
        count ++;
    }

    answer = queue[0];
    return answer;
}

//result: 7
console.log(solution(8, 3))
