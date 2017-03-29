/**
 * Created by tghe on 3/29/17.
 */


describe("student test", () => {
    // var readline = require('readline'),
    //     rl = readline.createInterface(process.stdin, process.stdout);
    // rl.question('What is your favorite food?', function(answer) {
    //     console.log('Oh, so your favorite food is ' + answer);
    // });
    //
    // it('should return hello console when input hello console on console', () => {
    //
    //    expect(userInput).toEqual('hello console')
    // })

    const parseStudentInfo = require('../../src/Student/parseStudentInfo.js')
    const calculateStudentScore = require('../../src/Student/calculateStudentScore.js')
    const getStudentAllInfo = require('../../src/Student/getStudentAllInfo.js')
    const addStudentInfo = require('../../src/Student/addStudentInfo.js')
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
        let stString = 'tigar,123,han,1,math:100,chinese:100,english:100,program:100'
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

        let studentScoreStatistics = {
            totalScore: 400,
            aveScore: 100
        }

        expectResult = {
            studentInfo: studentInfo,
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
                totalScore: 382,
                aveScore: 92
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
                classAveScore: 391,
                classMidScore: 382
            }

        ]
        // let studentScoreLsit1 = addStudentInfo(studentInfo,studentScoreLsit)

        expect(addStudentInfo(studentInfo1, studentScoreLsit)).toEqual(expectResult1)

    })
})



