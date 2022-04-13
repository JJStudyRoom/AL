/** 회의실 배정 */
function solution(param) {
    let answer = 0

    const sortParam = param.sort((a, b) => {
        if(a[0] === b[0])   return a[1] - b[1]
        else   return a[0] - b[0]
    })

    const map = sortParam.reduce((acc, time) => {
        const key = time[0]
        const info = acc.get(key) ?? []
        acc.set(key, [...info, time[1]])
        return acc
    }, new Map()) ?? []

    const mapArray = [...map]

    mapArray.forEach((model) => {
        const times = findDeepSelfTime(map, model[0], model[1])
        answer = times.length > answer ? times.length : answer
    })

    return answer
}

function findDeepSelfTime(map, startTime, endTimeArray) {
    let result = []

    endTimeArray.forEach((endTime) => {
        let times = [[startTime, endTime]]
        if (map.has(endTime) && startTime !== endTime) {
            times = times.concat(findDeepSelfTime(map, endTime, map.get(endTime)))
        }

        if (times.length > result.length) {
            result = times
        }
    })

    return result
}

console.log(solution([[1, 4], [2, 3], [3, 5], [4, 6], [5, 7]]))
console.log(solution([[3, 3], [1, 3], [2, 3]]))
