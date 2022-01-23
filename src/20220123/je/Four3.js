function fn(...pArr){
    let answer = 0

    if(pArr && pArr.length){
        let point = getInitalValue(pArr[0])
        console.log(point)
        //row
        for(let i=1; i < pArr.length; i++){
            //column
            for(let j=0; j < pArr[i].length; j++){
                for(let k=j; k < pArr[i].length; k++){
                    const idx = point.indexOf(`${pArr[i][k]},${pArr[i][j]}`)
                    if(idx > -1)    point.splice(idx, 1)
                }
            }
        }
        console.log(point)
        answer = point.length
    }

    return answer
}

function getInitalValue (firstRow){
    let result = [];

    for(let m=0; m < firstRow.length; m++){
        for(let n=m+1; n < firstRow.length; n++){
            result.push(`${firstRow[m]},${firstRow[n]}`)
        }
    }

    return result
}

console.log(fn([3,4,1,2], [4,3,2,1], [3,1,4,2]))