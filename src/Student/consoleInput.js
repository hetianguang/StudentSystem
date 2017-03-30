/**
 * Created by tghe on 3/30/17.
 */


const getPrintStuNumber = require('./getPrintStuNumber')
const outputFormat = require('./outputFormat')
const getStudentScoreInfo = require('./getStudentScoreInfo')
const addStudentInfo = require('./addStudentInfo')
const getStudentAllInfo = require('./getStudentAllInfo')

let studentScoreLsit = []
let status = '0'

const inputStudentScore = stString => {
    let studentInfo = getStudentAllInfo(stString)
     studentScoreLsit = addStudentInfo(studentInfo,studentScoreLsit)
    console.log(studentScoreLsit)
    return studentScoreLsit
}

const outputStudentInfo = strString => {
    let str = getPrintStuNumber(strString)
    let studentScoreList = getStudentScoreInfo(str,studentScoreLsit)
    return outputFormat(studentScoreList)
}

const title = '1:添加学生成绩，2:打印学生成绩，3:退出系统'+'\n'

var readline = require('readline')
const rl = readline.createInterface( {
    input: process.stdin,
    output: process.stdout,
});
function consoleInput (text) {
    rl.question(text, function(answer) {
        switch (status) {
            case '0': {
                switch(answer) {
                    case '1':
                        status = '1'
                        consoleInput('请输入学生成绩：'+'\n')
                        return
                    case '2':
                        status = '2'
                        consoleInput('请输入打印成绩的学号：'+'\n')
                        break
                    case '3':
                        rl.close()
                }
                break
            }
            case '1': {
                if(answer.split(',').length !== 8) {
                    consoleInput('输入错误。。。请重新输入学生成绩：'+'\n')
                    return
                }
                handleConsoleInput(answer)
                status = '0'
                consoleInput(title)
                return
            }
            case '2': {
                let scoreList = handleConsoleOutput(answer)
                status = '0'
                console.log(scoreList)
                consoleInput(title)
                return
            }
        }
    })
}
const handleConsoleInput = text => {
    return inputStudentScore(text)
}

const handleConsoleOutput = text => {
    return outputStudentInfo(text)
}

consoleInput(title)