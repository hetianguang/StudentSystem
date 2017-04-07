/**
 * Created by tghe on 4/7/17.
 */

let express = require("express")
let app = express()

// 制定模版引擎
app.set("view engine", 'ejs')

// 指定模版位置
app.set('views', './src/web/view')

app.get('/', (req,res) => {
    res.render('index.ejs',{
        name:  'Hello Tigar'
    })
})


let server = app.listen(3000,() => {
    console.log("请在浏览器访问：http://localhost:3000/")
})