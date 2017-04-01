/**
 * Created by tghe on 3/29/17.
 */


const getStudentAllInfo = consoleInputString => {

    const parseStudentInfo = require('./parseStudentInfo.js')
    const calculateStudentScore = require('./calculateStudentScore.js')
    let studentInfo = parseStudentInfo(consoleInputString)
    let studentScoreStatistics = calculateStudentScore(studentInfo)

    return {
        name: studentInfo.name,
        stuNumber: studentInfo.stuNumber,
        nation: studentInfo.nation,
        className: studentInfo.className,
        subjectGrade: {
            math: studentInfo.subjectGrade.math,
            chinese: studentInfo.subjectGrade.chinese,
            english: studentInfo.subjectGrade.english,
            program: studentInfo.subjectGrade.program
        },
        studentScoreStatistics:studentScoreStatistics
    }
}

module.exports = getStudentAllInfo
