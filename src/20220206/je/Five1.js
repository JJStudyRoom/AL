function solution (arr1, arr2) {
    let answer = []

    while(arr1.length + arr2.length > 0){
        const front_arr1 = getFrontNum(arr1)
        const front_arr2 = getFrontNum(arr2)
        let target = front_arr1 >= front_arr2 ? arr2 : arr1

        answer.push(target.shift())
    }

    return answer
}

function getFrontNum (arr){
    //오름차순 정렬
    return arr.length ? arr[0] : Number.MAX_SAFE_INTEGER;
}

console.log(solution([1, 3, 5], [2, 3, 6, 7, 9]))