/** 삽입 정렬 */
function solution(param) {
    let answer = param.slice(0)

    for (let i = 1; i < param.length; i++){
        const target = answer.splice(i, 1)[0]
        for (let j = 0; j <= i; j++){
            if (target < answer[j] || answer[j] === undefined) {
                answer.splice(j, 0, target)
                break;
            }
        }
    }

    return answer
}


console.log(solution([11, 7, 5, 6, 10, 9]))
console.log(solution([1, 5, 6, 7, 9, 10, 11]))


/**
 * 2번째부터 증가하면서 앞 숫자랑 비교
 * 비교 - 처음부터 순회하며 해당 위치 삽입
 */