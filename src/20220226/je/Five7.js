/** 아나그램(해쉬) */

// sort
function solution (wordA, wordB) {    
    const sortedA = wordA?.split('').sort((a, b) => a.charCodeAt(0) - b.charCodeAt(0))
    const sortedB = wordB?.split('').sort((a, b) => a.charCodeAt(0) - b.charCodeAt(0))

    return sortedA.join('') === sortedB.join('') ? "YES" : "NO"
}

// hash
function solution2(wordA, wordB){
    const dic = new Map()

    if(wordA && wordB){
        // +
        for(let i=0; i < wordA.length; i++){
            const ch = wordA[i]
            let cnt = dic.get(ch) || 0
            dic.set(ch, ++cnt)
        }

        // -
        for(let j=0;  j < wordB.length; j++){
            const ch = wordB[j]
            let cnt = dic.get(ch) || 0
            
            if(cnt < 2)
                dic.delete(ch) 
            else
                dic.set(ch, --cnt)
        }
    }
    

    return dic.size === 0 ? "YES" : "NO"
}

console.log(solution('AbaAeCe', 'baeeACA'))
console.log(solution2('abaCC', 'Caaab'))