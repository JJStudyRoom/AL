/** 선택정렬(Selection sort) */
function solution(param) {
    let answer = param.slice(0)

    if (param) {
        for (let i = 0; i < answer.length; i++) {
            let min = answer[i]
            let min_idx = i
            
            for (let j = i; j < answer.length; j++) {
                if (min >= answer[j]) {
                    min = answer[j]
                    min_idx = j
                }
            }

            min = answer[i]  //temp
            answer[i] = answer[min_idx]
            answer[min_idx] = min
        }
    }

    return answer
}

console.log(solution([13, 5, 11, 7, 23, 15]))

/** 
 * 제일 작은 값을 찾는다.
 * 맨 앞에 위치한 값과 교체한다.
 */