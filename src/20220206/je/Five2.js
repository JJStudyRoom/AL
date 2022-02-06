function solution (arr1, arr2) {
    let answer = []

    let p1 = p2 = 0
    const sort_arr1 = arr1.sort((a, b) => a - b) // 1 2 3 5 9
    const sort_arr2 = arr2.sort((a, b) => a - b) // 2 3 5 7 8

    while(p1 < arr1.length && p2 < arr2.length){
        const num1 = sort_arr1[p1]
        const num2 = sort_arr2[p2]

        if(num1 > num2){
            p2++;
        } else if (num1 < num2){
            p1++;
        } else {
            //num1 === num2
            answer.push(num1)
            p1++;
            p2++;
        }
    }

    return answer
}

console.log(solution([1, 3, 9, 5, 2], [3, 2, 5, 7, 8]))