/**
 * Created by tghe on 3/30/17.
 */

const inputStudentScore = stString => {
    let studentScoreLsit = []
    const addStudentInfo = require('./addStudentInfo')
    const getStudentAllInfo = require('./getStudentAllInfo')
    let studentInfo = getStudentAllInfo(stString)
     studentScoreLsit = addStudentInfo(studentInfo,studentScoreLsit)
    return studentScoreLsit
}

const consoleInput = () => {
    var readline = require('readline'),
    rl = readline.createInterface(process.stdin, process.stdout);
    rl.on('line', function(line) {
        switch (line.trim()) {
            case '1':
                console.log('请输入学生信息：');
                rl.on('line', function(line) {
                    let studentScoreLsit = inputStudentScore(line.trim())
                    console.log(studentScoreLsit)
                })
                break;
            default:
                console.log('Say what? I might have heard `' + line.trim() + '`');
                break;
        }
    })
}

consoleInput()