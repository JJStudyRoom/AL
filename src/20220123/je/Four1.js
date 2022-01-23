function fn(cnt, arr){
    let maxNum = null;
    let maxSum = Number.MIN_SAFE_INTEGER;

    if(arr.length){
        for(let num of arr){
            const calcSum = returnSum(num)
            const bool = calcSum >= maxSum || false

            if(bool){
                maxNum = num >= maxNum ? num : maxNum
                maxSum = calcSum
            }
        }
    }

    return maxNum
}

function returnSum (num){
    let sum = 0;

    if(!isNaN(num)){
        const numStr = num.toString()
        for(let ch of numStr){
            sum += Number(ch)
        }
    }

    return sum
}

console.log(fn(7, [128, 460, 603, 40, 521,137,123]))