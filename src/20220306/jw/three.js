//크레인 인형뽑기(카카오 기출)
function solution(board, moves){
    let answer = 0;
    let selected_list = [];
    let n = board.length;

    let list = Array.from({length: n},()=>[]);

    //가로 세로 변경 
    for(let i=0; i<board.length; i++) {
        for(let j=0; j<board[i].length; j++) {
            let value = board[i][j];
            
            if(value > 0) {
                list[j].push(board[i][j]);
            }
        }
    }
    
    //인형 뽑기
    for(let i=0; i<moves.length; i++) {
        let select = Number(moves[i]) - 1;
        let doll = list[select].shift();
        if(doll > 0) {
            let last_doll = selected_list[selected_list.length-1];

            if(doll == last_doll) {
                selected_list.pop();
                answer++;
            } else {
                selected_list.push(doll);
            }
        }
    }

    //터지는 인형 개수는 *2 해주는 값이 된다.
    return answer * 2;
}

let board = [
    [0,0,0,0,0],
    [0,0,1,0,3],
    [0,2,5,0,1],
    [4,2,4,4,2],
    [3,5,1,3,1]
]
let moves = [1,5,3,5,1,2,1,4];
//result : 4

let result = solution(board, moves);
console.log(result);