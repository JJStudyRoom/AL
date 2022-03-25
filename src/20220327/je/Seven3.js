/** Special Sort(구글 인터뷰) */
function solution(param) {
    const positive = []
    const negative = []

    for (let num of param) {
        if (num > 0)
            positive.push(num)
        else
            negative.push(num)
    }


    return [...negative, ...positive]
}

console.log(solution([1, 2, 3, -3, -2, 5, 6, -6]))
