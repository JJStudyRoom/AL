/** 괄호문자제거 */
function solution(bracket) {
    let stack = []

    if (bracket) {
        for (let char of bracket) {
            if (char === '(') {
                stack.push([])
            } else if (char === ')') {
                stack.pop()
            } else {
                const target = Array.isArray(stack[stack.length - 1]) ? stack[stack.length - 1] : stack
                target.push(char)
            }
        }
    }
    
    return stack.join('')
}

console.log(solution('(A(BC)D)EF(G(H)(IJ)K)LM(N)'))