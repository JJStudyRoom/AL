//멘토링
/**
 * ▣ 입력설명
첫 번째 줄에 반 학생 수 N(1<=N<=20)과 M(1<=M<=10)이 주어진다.
두 번째 줄부터 M개의 줄에 걸쳐 수학테스트 결과가 학생번호로 주어진다. 학생번호가 제일 앞에서부터 1등, 2등, ...N등 순으로 표현된다.
만약 한 줄에 N=4이고, 테스트 결과가 3 4 1 2로 입력되었다면 3번 학생이 1등, 4번 학생이 2등, 1번 학생이 3등, 2번 학생이 4등을 의미합니다.
 */
function setScore(persons, person, upperPersons=[], isFrist = false) {
    let line = persons[person];
    for(let i=0; i<line.length; i++) {
        if(upperPersons.indexOf(i) == -1 && line[i]!=0) {
            line[i] = 1;
        } else {
            line[i] = 0;
        }
    }
};
function solution(n, m, arr){
    let answer = 0;
    let persons = [];
    // 초기 세팅 
    for(let i=0; i<n; i++) {
        let defaultArr = Array.from({length:n}, ()=>1);
        persons.push(defaultArr);
    }

    let cnt = m;

    for(let index=0; index<arr.length; index++) {
        let lineValuse = arr[index];
        let upperArray = [];
        for(let i=0; i<lineValuse.length; i++) {
            // person : 현재 등수에 사람 index
            // upperArray : 현재 등수보다 점수가 높은 사람들 index list
            let person = lineValuse[i]-1;
            upperArray.push(person);
            setScore(persons, person, upperArray, index==0);
        }
        
        cnt--;
    }
    
    for(let i=0; i<persons.length; i++) {
        for(let j=0; j<persons[i].length; j++) {
            if(persons[i][j] == 1) answer++;
        }
    }
    return answer;
}

let m = [
    [3, 4, 1, 2],
    [4, 3, 2, 1],
    [3, 1, 4, 2]
]
  
//result : 3
let result = solution(4, 3, m);
console.log(result);