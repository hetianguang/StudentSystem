function findStudent(aclass, studentInfo, updataStudentInfo, isUpdate) {
    for (let student of aclass.students) {
        if (student.stuNumber === studentInfo.stuNumber) {
            index = aclass.students.indexOf(student)
            updataStudentInfo = studentInfo
            isUpdate = 1
            break

        }
    }
    return {updataStudentInfo, isUpdate};
}
function updateClassScore(aclass, updataStudentInfo, studentScoreLsit) {
    aclass.students.splice(index, 1)
    aclass.students.push(updataStudentInfo)
    aclass.classAveScore = calcuateAveScore(aclass.students)
    aclass.classMidScore = calcuateMidScore(aclass.students)
    return studentScoreLsit
}
function addStudentToScoreList(aclass, studentInfo, studentScoreLsit) {
    aclass.students.push(studentInfo)
    aclass.classAveScore = calcuateAveScore(aclass.students)
    aclass.classMidScore = calcuateMidScore(aclass.students)
    return studentScoreLsit
}
/**
 * Created by tghe on 3/29/17.
 */

const addStudentInfo = (studentInfo,studentScoreLsit) => {

    let isUpdate = 0
    let updataStudentInfo = null
    let idnex = 0
    for(let aclass of studentScoreLsit) {
        if(aclass.className === studentInfo.className) {
            // newclass = aclass.students.map(student => {
            //      student.stuNumber === studentInfo.stuNumber ? studentInfo : student
            // })
            // aclass.students = newclass
            // aclass.classAveScore = calcuateAveScore(aclass.students)
            // aclass.classMidScore = calcuateMidScore(aclass.students)
            // return studentScoreLsit

            const __ret = findStudent(aclass, studentInfo, updataStudentInfo, isUpdate);
            updataStudentInfo = __ret.updataStudentInfo;
            isUpdate = __ret.isUpdate;
            if(isUpdate) {
                return updateClassScore(aclass, updataStudentInfo, studentScoreLsit);
            }
            return addStudentToScoreList(aclass, studentInfo, studentScoreLsit);
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
    return Number(parseFloat(total/students.length).toFixed(1))
}

const calcuateMidScore = students => {
    students.sort(function (a,b) {
    return b.studentScoreStatistics.totalScore - a.studentScoreStatistics.totalScore
})
    return students[parseInt(students.length/2)].studentScoreStatistics.totalScore
}
module.exports = addStudentInfo


