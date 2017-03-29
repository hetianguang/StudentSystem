/**
 * Created by tghe on 3/29/17.
 */

const addStudentInfo = (studentInfo,studentScoreLsit) => {

    let isUpdate = 0
    let updataStudentInfo = null
    let idnex = 0
    for(let aclass of studentScoreLsit) {
        if(aclass.className === studentInfo.className) {
            for(let student of aclass.students) {
                if(student.stuNumber === studentInfo.stuNumber){
                    index = aclass.students.indexOf(student)
                    updataStudentInfo = studentInfo
                    isUpdate = 1
                    break

                }
            }
            if(isUpdate) {
                aclass.students.splice(index,1)
                aclass.students.push(updataStudentInfo)
                aclass.classAveScore = calcuateAveScore(aclass.students)
                aclass.classMidScore = calcuateMidScore(aclass.students)
                console.log("&&&&&&",aclass.students)
                return studentScoreLsit
            }
            aclass.students.push(studentInfo)
            aclass.classAveScore = calcuateAveScore(aclass.students)
            aclass.classMidScore = calcuateMidScore(aclass.students)
            return studentScoreLsit
        }
    }
    studentScoreLsit.push({
        students: [studentInfo],
        className: studentInfo.className,
        classAveScore: studentInfo.studentScoreStatistics.totalScore,
        classMidScore:studentInfo.studentScoreStatistics.totalScore
    })
    return studentScoreLsit
}

const calcuateAveScore = students => {

    let total = 0
    for(let student of students) {
        total += student.studentScoreStatistics.totalScore
    }
    console.log("********",total)
    return parseInt(total/students.length)
    console.log("********",total/students.length)
}

const calcuateMidScore = students => {
    students.sort(function (a,b) {
    return b.studentScoreStatistics.totalScore - a.studentScoreStatistics.totalScore
})
    return students[parseInt(students.length/2)].studentScoreStatistics.totalScore
}
module.exports = addStudentInfo


