/**
 * Created by tghe on 3/29/17.
 */


describe("student test", () => {

    const parseStudentInfo = require('../../src/Student/parseStudentInfo.js')
    const calculateStudentScore = require('../../src/Student/calculateStudentScore.js')
    const getStudentAllInfo = require('../../src/Student/getStudentAllInfo.js')
    const addStudentInfo = require('../../src/Student/addStudentInfo.js')
    const getPrintStuNumber = require('../../src/Student/getPrintStuNumber.js')
    const getStudentScoreInfo = require('../../src/Student/getStudentScoreInfo.js')
    const outputFormat = require('../../src/Student/outputFormat.js')
    it('should return sudent info when get student string', () => {
        let stString = 'tigar,123,han,1,math:100,chinese:100,english:100,program:100'

        let expectResult = {
            name: 'tigar',
            stuNumber: 123,
            nation: 'han',
            className: 1,
            subjectGrade: {
                math: 100,
                chinese: 100,
                english: 100,
                program: 100
            }
        }

        expect(parseStudentInfo(stString)).toEqual(expectResult)
    })

    it('should return sudent average and total score when get student info', () => {
        let studentInfo = {
            name: 'tigar',
            stuNumber: 123,
            nation: 'han',
            className: 1,
            subjectGrade: {
                math: 100,
                chinese: 100,
                english: 100,
                program: 100
            }
        }

        let expectResult = {
            totalScore: 400,
            aveScore: 100
        }

        expect(calculateStudentScore(studentInfo)).toEqual(expectResult)
    })

    it('should return all student info when input student Stirng', () => {
        let stString = 'tigar,123,han,1,math:75,chinese:76,english:81,program:95'
        let studentInfo = {
            name: 'tigar',
            stuNumber: 123,
            nation: 'han',
            className: 1,
            subjectGrade: {
                math: 75,
                chinese: 76,
                english: 81,
                program: 95
            }
        }

        let studentScoreStatistics = {
            totalScore: 327,
            aveScore: 81.8
        }

        expectResult = {
            name: 'tigar',
            stuNumber: 123,
            nation: 'han',
            className: 1,
            subjectGrade: {
                math: 75,
                chinese: 76,
                english: 81,
                program: 95
            },
            studentScoreStatistics: studentScoreStatistics
        }

        expect(getStudentAllInfo(stString)).toEqual(expectResult)
    })

    it('should return  student info list ', () => {
        let studentScoreLsit = []
        let studentInfo = {
            name: 'tigar',
            stuNumber: 123,
            nation: 'han',
            className: 1,
            subjectGrade: {
                math: 100,
                chinese: 100,
                english: 100,
                program: 100
            },
            studentScoreStatistics: {
                totalScore: 400,
                aveScore: 100
            }
        }
        let studentInfo1 = {
            name: 'tian',
            stuNumber: 124,
            nation: 'han',
            className: 1,
            subjectGrade: {
                math: 98,
                chinese: 98,
                english: 98,
                program: 98
            },
            studentScoreStatistics: {
                totalScore: 392,
                aveScore: 98
            }
        }


        let expectResult = [
            {
                students: [studentInfo],
                className: 1,
                classAveScore: 400,
                classMidScore: 400
            }

        ]

        expect(addStudentInfo(studentInfo, studentScoreLsit)).toEqual(expectResult)
        let expectResult1 = [
            {
                students: [studentInfo,studentInfo1],
                className: 1,
                classAveScore: 396,
                classMidScore: 392
            }

        ]

        expect(addStudentInfo(studentInfo1, studentScoreLsit)).toEqual(expectResult1)

        let studentInfo3 = {
            name: 'tigar',
            stuNumber: 123,
            nation: 'han',
            className: 1,
            subjectGrade: {
                math: 75,
                chinese: 76,
                english: 81,
                program: 95
            },
            studentScoreStatistics: {
                totalScore: 327,
                aveScore: 81.8
            }
        }
        let expectResult2 = [
            {
                students: [studentInfo1,studentInfo3],
                className: 1,
                classAveScore: 359.5,
                classMidScore: 327
            }

        ]

        expect(addStudentInfo(studentInfo3, studentScoreLsit)).toEqual(expectResult2)

    })



    it("should return students number when iuput a string", () => {

        let strString = '123,124'
        let expectResult = ['123','124']

        expect(getPrintStuNumber(strString)).toEqual(expectResult)
    })
    it("should return null when iuput a string unlawful char", () => {

        let strString = '123,1#23'

        expect(getPrintStuNumber(strString)).toEqual(null)
    })



    it('should return print string when input array number', () => {

        let studentScoreLsit = [];
        let strStirng = ['123']
        let studentInfo = {
            name: 'tigar',
            stuNumber: 123,
            nation: 'han',
            className: 1,
            subjectGrade: {
                math: 100,
                chinese: 100,
                english: 100,
                program: 100
            },
            studentScoreStatistics: {
                totalScore: 400,
                aveScore: 100
            }
        }
        let studentInfo1 = {
            name: 'tian',
            stuNumber: 124,
            nation: 'han',
            className: 1,
            subjectGrade: {
                math: 98,
                chinese: 98,
                english: 98,
                program: 98
            },
            studentScoreStatistics: {
                totalScore: 392,
                aveScore: 98
            }
        }
        let studentScoreLsit1 = addStudentInfo(studentInfo, studentScoreLsit)
        let studentScoreLsit2 = addStudentInfo(studentInfo1, studentScoreLsit1)

        let expectResult = [{
            students: [studentInfo],
            className: 1,
            classAveScore: 396,
            classMidScore: 392
        }]

        expect(getStudentScoreInfo(strStirng,studentScoreLsit2)).toEqual(expectResult)

        let expectResult1 = [{
            students: [studentInfo,studentInfo1],
            className: 1,
            classAveScore: 396,
            classMidScore: 392
        }]

        expect(getStudentScoreInfo(['123','124'],studentScoreLsit2)).toEqual(expectResult1)
    })

    it('print format', () => {
        let studentInfo = {
            name: 'tigar',
            stuNumber: 123,
            nation: 'han',
            className: 1,
            subjectGrade: {
                math: 100,
                chinese: 100,
                english: 100,
                program: 100
            },
            studentScoreStatistics: {
                totalScore: 400,
                aveScore: 100
            }
        }
        let printScore = [{
            students: [studentInfo],
            className: 1,
            classAveScore: 400,
            classMidScore: 400
        }]

        expectResult = '成绩单'+'\n'+
                '姓名'+ '|'+'数学'+ '|'+'语文'+ '|'+'英语'+ '|'+'编程'+ '|'+'平均分'+ '|'+'总分'+ '\n'+
                '＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝' + '\n'+
                'tigar|100|100|100|100|100|400'+'\n'+
                '==========================================='+'\n'+
                '班级平均成绩:400'+'\n'+
                '班级中位数:400'

        expect(outputFormat(printScore)).toEqual(expectResult)
    })
})



