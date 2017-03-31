/**
 * Created by tghe on 3/29/17.
 */

const parseStudentInfo = stString => {

    let studentBasicInfoArray = stString.split(',')
    return {
        name: studentBasicInfoArray[0],
        stuNumber: parseInt(studentBasicInfoArray[1]),
        nation: studentBasicInfoArray[2],
        className: parseInt(studentBasicInfoArray[3]),
        subjectGrade: {
            math: parseInt(studentBasicInfoArray[4].split(':')[1]),
            chinese: parseInt(studentBasicInfoArray[5].split(':')[1]),
            english: parseInt(studentBasicInfoArray[6].split(':')[1]),
            program: parseInt(studentBasicInfoArray[7].split(':')[1])
        }
    }
}

module.exports = parseStudentInfo