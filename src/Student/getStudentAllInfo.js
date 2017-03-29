/**
 * Created by tghe on 3/29/17.
 */


const getStudentAllInfo = stString => {

    const parseStudentInfo = require('./parseStudentInfo.js')
    const calculateStudentScore = require('./calculateStudentScore.js')
    let studentInfo = parseStudentInfo(stString)
    let studentScoreStatistics = calculateStudentScore(studentInfo)

    return {
        studentInfo:studentInfo,
        studentScoreStatistics:studentScoreStatistics
    }
}

module.exports = getStudentAllInfo