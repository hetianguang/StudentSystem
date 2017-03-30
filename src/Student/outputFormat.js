/**
 * Created by tghe on 3/30/17.
 */

const outputFormat = printScore => {
    let result = ''
    for(let aclass of printScore) {
        result +='成绩单'+'\n'+
        '姓名'+ '|'+'数学'+ '|'+'语文'+ '|'+'英语'+ '|'+'编程'+ '|'+'平均分'+ '|'+'总分'+ '\n'+
        '＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝' + '\n'
        for(let student of aclass.students) {
            result += `${student.name}|${student.subjectGrade.math}|${student.subjectGrade.chinese}|${student.subjectGrade.english}|${student.subjectGrade.program}|${student.studentScoreStatistics.aveScore}|${student.studentScoreStatistics.totalScore}`+'\n'
        }
        result += '==========================================='+'\n'
        result += `班级平均成绩:${aclass.classAveScore}`+'\n' + `班级中位数:${aclass.classMidScore}`
    }

    return result
}

module.exports = outputFormat
