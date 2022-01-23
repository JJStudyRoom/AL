function fn(cnt, arr){
    let result = [];

    if(arr.length){
        for(let num of arr){
            let rev_num = getReverse(num)
            if(chkUnique(rev_num)){
                result.push(rev_num)
            }
        }
    }

    return result
}

function getReverse(num){
    let result = num
    
    if(!isNaN(num)){
        result = Number(num.toString().split('').reverse().join(''))
    }

    return result
}

function chkUnique(num){
    let bool = num > 1 //true

    for(let i=2; i < num; i++){
        if(num % i === 0){
            bool = false
            break;
        }
    }

    return bool
}

console.log(fn(9, [32, 55, 62, 20, 250, 370, 200, 30, 100]))