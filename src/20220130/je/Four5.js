const solution = (order) => (arr)=> {
    let answer = 0
    let sums = {}
    
    for(let i=0; i < arr.length - 2; i++){
        for(let j=i+1; j < arr.length - 1; j++){
            for(let k=j+1; k < arr.length; k++){
                const sum = arr[i] + arr[j] + arr[k]
                sums[sum] = 1
            }
        }
    }
    sums = Object.keys(sums).sort((a, b) => b - a)

    answer = sums[order-1]

    return answer
}

console.log(solution(3)([13, 15, 34, 23, 45, 65, 33, 11, 26, 42]))