var fs = require('fs');

// [node, script, date, who, file name]
const args = process.argv

const foramt = `${args[3] === 'jw' ? '// [title]\n' : ''}/** [desc] */
function solution(param){
    let answer = param
    return answer
}

console.log(solution(param))
`

if (!fs.existsSync(`src/${args[2]}`)){
    fs.mkdirSync(`src/${args[2]}`, { recursive: true });
}

if (!fs.existsSync(`src/${args[2]}/${args[3]}`)){
    fs.mkdirSync(`src/${args[2]}/${args[3]}`, { recursive: true });
}

fs.writeFile(`src/${args[2]}/${args[3]}/${args[4] || 'one'}.js`, foramt, function (err) {
    if (err) throw err;
    console.log('File is created successfully.');
});