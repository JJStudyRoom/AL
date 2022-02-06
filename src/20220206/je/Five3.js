function solution (limit, arr) {
    let answer = 0

    if(arr.length){
        let pStart = pEnd = 0
        let sum = 0

        while(pStart < arr.length){
            sum += arr[pEnd]
            pEnd++;
            
            if(sum >= limit || pEnd >= arr.length){
                if(sum === limit){
                    answer++;
                }
                
                sum = 0
                pStart += 1;
                pEnd = pStart
            }
        }
    }

    return answer
}

/** 수열 - 순서가 있는 숫자 나열 */
console.log(solution(6, [1, 2, 1, 3, 1, 1, 1, 2]))
