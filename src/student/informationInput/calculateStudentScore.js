/**
 * Created by tghe on 3/29/17.
 */

const calculateStudentScore = studentInfo => {

    let totalScore = studentInfo.subjectGrade.chinese + studentInfo.subjectGrade.english + studentInfo.subjectGrade.math + studentInfo.subjectGrade.program
    let aveScore = Number(parseFloat(totalScore/4).toFixed(1))
    return {
        totalScore: totalScore,
        aveScore: aveScore
    }

}

module.exports = calculateStudentScore