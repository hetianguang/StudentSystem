/**
 * Created by tghe on 3/29/17.
 */

const parseStudentInfo = stString => {

    let stArr = stString.split(',')
    let subjectGrade = stArr[4].split(',')
    return {
        name: stArr[0],
        stuNumber: parseInt(stArr[1]),
        nation: stArr[2],
        className: parseInt(stArr[3]),
        subjectGrade: {
            math: parseInt(stArr[4].split(':')[1]),
            chinese: parseInt(stArr[5].split(':')[1]),
            english: parseInt(stArr[6].split(':')[1]),
            program: parseInt(stArr[7].split(':')[1])
        }
    }
}

module.exports = parseStudentInfo