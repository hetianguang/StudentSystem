/**
 * Created by tghe on 4/7/17.
 */

const studentServers = require('../../student/consoleInout')
const express = require("express")
const bodyParser = require("body-parser")
let app = express()

app.use(bodyParser.urlencoded({extended: true}))
// 制定模版引擎
app.set("view engine", 'ejs')

// 指定模版位置
app.set('views', './src/web/view')

app.get('/', (req,res) => {
    res.render('index.ejs',{
        hintInfo: ''
    })
})

app.get('/addStudent', (req,res) => {

    res.render('addStudent.ejs')
})

app.post('/add',(req,res) => {
    let strString = `${req.body.name},${req.body.stuNo},${req.body.nation},${req.body.classNum},math:${req.body.math},chinese:${req.body.chinese},english:${req.body.english},program:${req.body.program}`
    console.log(strString)
    let addResult = studentServers.handleConsoleInput(strString)
    console.log(addResult)
    if(addResult) {
       res.render("index",{hintInfo: `学生${req.body.name}的成绩被添加`})
    }else{
        res.render('addStudent')
    }
})

app.get('/printStudent', (req,res) => {
    res.render("printStudent", {
        hintInfo: ''
    })
})

app.post('/print',(req,res) => {
    let resultformat = studentServers.handleConsoleOutput(req.body.stuNo)
    if(resultformat.lenth !== 0) {
        res.render("showStudentScore", {
            message: resultformat
        })
    }else {
        res.render("printStudent",{
            hintInfo: "please input true info"
        })
    }
})

let server = app.listen(3000,() => {
    console.log("请在浏览器访问：http://localhost:3000/")
})