/** 연속 부분 수열2 */
function solution (sum, arr) {
    let answer = 0

    for(let i=0; i < arr.length; i++){
        const target = arr[i]
        let targetSum = target

        if(target <= sum)   answer++

        for(let j= i+1; j<arr.length; j++){
            targetSum += arr[j]

            if(targetSum <= sum)    
                answer++
            else 
                break;
        }
    }


    return answer
}

console.log(solution(5, [1, 3, 1, 2, 3]))
