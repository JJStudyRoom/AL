/** 모든 아나그램 찾기(해쉬, 투포인터, 슬라이딩 윈도우) */

const sortedWord = (str) => str.split('').sort((a, b) => a.charCodeAt(0) - b.charCodeAt(0)).join('')

function solution(S, T) {

    let answer = 0

    if(S && T){
        const size = T.length
        const sortedT = sortedWord(T)
        
        for(let i=0; i <= S.length - size; i++){
            const sortedTarget = sortedWord(S.substr(i, size))
            if(sortedT === sortedTarget)    answer++
        }

    }
    return answer

}

console.log(solution('bacaAacba', 'abc'))