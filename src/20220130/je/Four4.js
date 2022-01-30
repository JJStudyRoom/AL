const solution = (param) => (pArr)=> {
    let answer = 0  //maxCnt
    let cnt = pArr.length
    const limit = param

    if(pArr.length){
        const arr = pArr.sort((a, b) => (a[0] + a[1]) - (b[0] + b[1]))

        for(let i=0; i < cnt; i++){
            let discountTarget = arr[i][0] / 2
            let sum = discountTarget + arr[i][1]
            let maxCnt = 1

            for(let j= 0; j < cnt; j++){
                if(i !== j){
                    const newSum = sum + arr[j][0] + arr[j][1]

                    if(limit >= newSum){
                        sum = newSum
                        maxCnt += 1;
                        
                        if(limit === newSum){
                            answer = maxCnt > answer ? maxCnt : answer
                            break;
                        }
                    }
                }
            }
        }
    }

    return answer
}

console.log(solution(28)([[6,6], [2,2], [4,3], [4,5], [10,3]]))