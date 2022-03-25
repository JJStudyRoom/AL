/** Least Recently Used(카카오 캐시 문제 변형) */
function solution(max, param) {
    let answer = []

    if (param.length) {
        for (let num of param) {
            const isDataIndex = answer.indexOf(num)
            
            if (isDataIndex > -1) {
                answer.splice(isDataIndex, 1)
            }

            if (answer.length === max) {
                answer.pop()
            }

            answer.unshift(num)
        }
    }

    return answer
}

console.log(solution(5, [1, 2, 3, 2, 6, 2, 3, 5, 7]))
