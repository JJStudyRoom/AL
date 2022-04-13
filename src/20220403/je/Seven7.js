/** 좌표 정렬 */
function solution(param){
    let answer = [...param]
        
    for (let i = param.length; i > 0; i--) {
        for (let j = 0; j < i - 1; j++) {
            const targetA = answer[j].slice(0)
            const targetB = answer[j + 1].slice(0)

            if (compareBigger(targetA, targetB)) {                 
                answer[j] = targetB
                answer[j + 1] = targetA
            }

        }
    }
    
    return answer
}

const compareBigger = (targetA, targetB) => targetA[0] > targetB[0]  || (targetA[0] === targetB[0] && targetA[1] > targetB[1])

console.log(solution([[2, 7], [1, 3], [1, 2], [2, 5], [3, 6]]))
