
const addStudentInfo = (studentInfo, studentScoreLsit) => {

    let newClass = studentScoreLsit.find(classNumber => classNumber.className === studentInfo.className)
    if(newClass){
        let oldStudent = newClass.students.find(student =>
            student.stuNumber === studentInfo.stuNumber
        )
        if(oldStudent) {
            Object.assign(oldStudent,studentInfo)
            updateClassGrade(newClass);
            return studentScoreLsit
        }
        return addStudentToScoreList(newClass, studentInfo, studentScoreLsit);
    }
    addNewStudentToNewClass(studentScoreLsit, studentInfo);
    return studentScoreLsit
}


function addStudentToScoreList(aclass, studentInfo, studentScoreLsit) {
    aclass.students.push(studentInfo)
    aclass.classAveScore = calcuateAveScore(aclass.students)
    aclass.classMidScore = calcuateMidScore(aclass.students)
    return studentScoreLsit
}
function updateClassGrade(aclass) {
    aclass.classAveScore = calcuateAveScore(aclass.students)
    aclass.classMidScore = calcuateMidScore(aclass.students)
}

function addNewStudentToNewClass(studentScoreLsit, studentInfo) {
    studentScoreLsit.push({
        students: [studentInfo],
        className: studentInfo.className,
        classAveScore: studentInfo.studentScoreStatistics.totalScore,
        classMidScore: studentInfo.studentScoreStatistics.totalScore
    })
}

const calcuateAveScore = students => {

    let total = 0
    for (let student of students) {
        total += student.studentScoreStatistics.totalScore
    }
    return Number(parseFloat(total / students.length).toFixed(1))
}

const calcuateMidScore = students => {
    students.sort(function (a, b) {
        return b.studentScoreStatistics.totalScore - a.studentScoreStatistics.totalScore
    })
    return students[parseInt(students.length / 2)].studentScoreStatistics.totalScore
}


module.exports = addStudentInfo


