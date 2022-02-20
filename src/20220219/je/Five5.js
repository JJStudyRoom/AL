/** 최대 매출 */
function solution (day, arr) {
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

console.log(solution(3, [12, 15, 11, 20, 25, 10, 20, 19, 13, 15]))
