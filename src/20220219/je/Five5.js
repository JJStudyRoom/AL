/** 최대 매출 */
function solution(day, arr) {
    let max = 0
    let sum = 0
    let sumArr = []

    for(let i=0; i < arr.length; i++){
        const target = arr[i]

        sum += target
        sumArr.push(target)

        if(sumArr.length === day){
            max = max > sum ? max : sum
            sum -= sumArr.shift()
        }
    }

    return max
}

// (update) 미리 합산을 구한 상태에서 진행
function solution2(day, arr) {
    let max = 0
    
    if(arr){
        let sum = arr.slice(0, day).reduce((a, b) => a + b)

        for(let i= day; i < arr.length; i++){
            const target = arr[i]
            sum = sum + target - arr[i - day]
            max = max > sum ? max : sum
        }

    }

    return max
}

console.log(solution(3, [12, 15, 11, 20, 25, 10, 20, 19, 13, 15]))
console.log(solution2(3, [12, 15, 11, 20, 25, 10, 20, 19, 13, 15]))
