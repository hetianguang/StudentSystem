/**
 * Created by tghe on 3/29/17.
 */

const calculateStudentScore = studentInfo => {


    let totalScore = calculateTotalScore(studentInfo)
    let aveScore = calcuateAveScore(studentInfo,totalScore)
    return {
        totalScore: totalScore,
        aveScore: aveScore
    }

}
function calculateTotalScore(studentInfo) {
    return studentInfo.subjectGrade.chinese + studentInfo.subjectGrade.english + studentInfo.subjectGrade.math + studentInfo.subjectGrade.program;
}
function calcuateAveScore(studentInfo,totalScore) {
    return Number(parseFloat(totalScore / 4).toFixed(1));
}

module.exports = calculateStudentScore