/** 후위식 연산(postfix) */
function solution(formula) {
    let stack = []

    if (formula) {
        for (let char of formula) {
            if (isNaN(char)) {
                let num = calculate(char, stack.splice(stack.length - 2, 2))
                stack.push(num)
            } else {
                stack.push(Number(char))
            }
        }
    }

    return stack[0]
}

function calculate(operator, nums) {
    switch (operator) {
        case '+':
            return nums[0] + nums[1]
        case '-':
            return nums[0] - nums[1]
        case '*':
            return nums[0] * nums[1]
        case '/':
            return nums[0] / nums[1]
        default:
            return nums[0]
    }
}

console.log(solution('352+*9-'))
