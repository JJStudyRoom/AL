/** 학급 회장 (해쉬) */
function solution (str) {
    const arr = str.split('')
    let dic = new Map()
    let max = 0
    let answer = ''

    for(const candidate of arr){
        let vote = dic.get(candidate) || 0
        vote += 1
        dic.set(candidate, vote)

        if(vote > max){
            max = vote
            answer = candidate
        }
    }

    return answer
}

console.log(solution(['BACBACCACCBDEDE']))
