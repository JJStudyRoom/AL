/** 교육과정 설계 */
function solution(order, subjects) { 
    let orderArr = Array.from(order)

    if (subjects) {
        for (let subject of subjects) {
            if (orderArr[0] === subject) {
                orderArr.shift()
            }
        }
    }
    
    return orderArr.length === 0 ? 'YES' : 'NO'
}

console.log(solution('CBA','CBDAGE'))