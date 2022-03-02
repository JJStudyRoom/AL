/** 올바른 괄호 */
function solution(bracket) {
    let answer = bracket ? 'Yes' : 'NO'

    if (bracket) {
        let stack = []

        for (let char of bracket) {
            if (char === '(') {
                stack.push(char)
            } else if (char === ')') {
                if (stack.pop() !== '(') {
                    answer = 'NO'
                    break;
                }
            }
        }
        if(stack.length > 0)    answer = 'NO'
    }

    return answer
}

console.log(solution('(())()'))
console.log(solution('(()()))'))
console.log(solution('(()(()))(()'))