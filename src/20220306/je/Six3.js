/** 크레인 인형뽑기(카카오 기출) */
const solution = (board) => (move) => {
    let answer = 0
    let stack = []

    for (let mv of move) {
        for (let i = 0; i < board.length; i++){
            const target = board[i][mv - 1]
            
            if (target > 0) {
                board[i][mv - 1] = 0
                
                if (stack[stack.length - 1] === target) {
                    answer += 2
                    stack.pop()
                } else {
                    stack.push(target)
                }
                break;
            }
        }
    }
    
    return answer
}

console.log(solution([[0,0,0,0,0],[0,0,1,0,3],[0,2,5,0,1],[4,2,4,4,2],[3,5,1,3,1]])([1,5,3,5,1,2,1,4]))