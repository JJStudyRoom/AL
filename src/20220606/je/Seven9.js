/** 결혼식 */
function solution(param){
    let count = []

	if(param && param.length){
		const sortedParam = param.sort((a, b) => a[0] - b[0])

		for(let i=1; i<sortedParam.length; i++){
			//[ [ 5, 14 ], [ 12, 15 ], [ 14, 18 ], [ 15, 20 ], [ 20, 30 ] ]
			const target = sortedParam[i]
			const [start, end] = target

			for(let j=0; j < i; j++){
				const compareTarget = sortedParam[j]
				const [startCompare, endCompare] = compareTarget

				if((start < startCompare && startCompare < end) || (start < endCompare && endCompare < end)){
					count[j] = count[j] ? count[j] + 1 : 2
				}
			}
		}
	}

    return count.reduce((previous, current) => previous > current ? previous : current)
}

console.log(solution([[14, 18], [12, 15], [15, 20], [20, 30], [5, 14]]))