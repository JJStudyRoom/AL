// 회의실 배정
/** 
 * ▣ 입력설명
첫째 줄에 회의의 수 n(1<=n<=100,000)이 주어진다. 
둘째 줄부터 n+1 줄까지 각 회의의 정 보가 주어지는데 이것은 공백을 사이에 두고 회의의 시작시간과 끝나는 시간이 주어진다. 
회의의 시작시간과 끝나는 시간의 조건은 (시작시간 <= 끝나는 시간)입니다.

▣ 출력설명
첫째 줄에 최대 사용할 수 있는 회의 수를 출력하여라.

 * * */
function solution(n, m){
    let max = 0;

    function dfs(cur, cnt) {
        if(cur >= n) {
            max = Math.max(max, cnt)
            return;
        }

        let next = m[cur-1][1];
        dfs(next, cnt+1)
    }

    for(let i=0; i < n; i++) {
        dfs(m[i][0], 1);
    }
    
    return max
}

let m1 = [
    [1, 4],
    [2, 3],
    [3, 5], 
    [4, 6], 
    [5, 7],
];
//result: 3

let m2 = [
    [3, 3],
    [1, 3],
    [2, 3], 
];
//result: 3
console.log(solution(3, m2))
