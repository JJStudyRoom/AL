/** 장난꾸러기 현수 */
function solution(param) {
    let hyunsu = -1
    let partner = -1
    let before = Number.MIN_SAFE_INTEGER

    for (let i = 0; i < param.length; i++){
        const target = param[i]

        if (hyunsu > -1 && partner === -1 && before > target) {
            partner = i + 1
        } else if (hyunsu === -1 && before >= target) {
            hyunsu = i
        }

        before = target
    }

    return {hyunsu, partner}
}

console.log(solution([120, 125, 152, 130, 135, 135, 143, 127, 160]))
console.log(solution([120, 130, 150, 150, 130, 150]))

