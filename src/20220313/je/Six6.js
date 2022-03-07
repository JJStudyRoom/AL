/** 공주 구하기 */

// 배열 크기에 따라 다음 순번 반환
function returnNextIdx(nextIdx, arrLength) {
    return nextIdx >= arrLength ? nextIdx - arrLength : nextIdx
}

// 순서대로 하나씩 제거 후 반환 (재귀호출)
function beInOrder(num, arr, startIdx) {
    if (arr.length === 1) {
        return arr[0]
    } else {
        const copyArr = arr.slice(0)
        const nextIdx = startIdx + num
        const targetIdx = returnNextIdx(nextIdx, copyArr.length)
        
        copyArr.splice(targetIdx, 1)
        
        const nextTargetIdx = returnNextIdx(targetIdx, copyArr.length)
        return beInOrder(num, copyArr, nextTargetIdx)
    }
}

function solution(people, num) {
    if (people) {
        let prince = Array.from({ length: people }, (v, i) => i + 1);
        return beInOrder(num - 1, prince, 0)
    }
}

console.log(solution(8, 3))