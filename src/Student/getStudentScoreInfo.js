/**
 * Created by tghe on 3/30/17.
 */

const getStudentScoreInfo = (strString,studentScoreLsit2) => {

    let result = []
    for(let studentNub of strString) {
        let studentNumber = parseInt(studentNub)
        for(let aclass of studentScoreLsit2) {
            let isfound = 0
            let studentInfo = {}
            for(let student of aclass.students) {
                if(student.stuNumber === studentNumber) {
                    studentInfo = student
                    isfound = 1
                }
            }
            if(isfound) {
                let isfoundResult = 0
                for(let resultaClass of result) {
                    if(resultaClass.className === aclass.className) {
                        resultaClass.students.push(studentInfo)
                        isfoundResult = 1
                    }
                }
                if(isfoundResult) {
                    break
                }
                result.push({
                    students: [studentInfo],
                    className: aclass.className,
                    classAveScore: aclass.classAveScore,
                    classMidScore: aclass.classMidScore
                })
            }

        }
    }
    return result
}

module.exports = getStudentScoreInfo
