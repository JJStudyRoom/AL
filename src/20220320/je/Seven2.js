/** 버블정렬 (Bubble Sort) */
function solution(param){
    let answer = param.slice(0)

    if (param) {
        for (let i = answer.length; i > 0; i--) {
            for (let j = 0; j < i - 1; j++) {
                const current = answer[j]
                let next = answer[j + 1]

                if (current >= next) {
                    answer[j] = next
                    answer[j + 1] = current
                }
            }
        }
    }

    return answer
}

console.log(solution([13, 5, 11, 7, 23, 15]))

/**
 * 맨 처음부터 실행 / 마지막 길이가 줄어듬
 * 회전을 수행하고 나면 가장 큰 자료가 맨 뒤로 이동
 */