/** 쇠막대기  */
function solution(iron) { 
    let answer = 0;

    if (iron) {
        let stick = []
        let beforeBracket = ''

        for (let bracket of iron) {
            if (bracket === "(") {
                stick.push(bracket)
            } else if(bracket === ")") {
                stick.pop()

                if (beforeBracket === ")") {
                    answer += 1
                } else {
                    answer += stick.length  
                }        
            }
            beforeBracket = bracket
        }
     }
    
    return answer
}

console.log(solution('()(((()())(())()))(())'))
console.log(solution('(((()(()()))(())()))(()())'))