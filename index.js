const express = require('express')

const app=express()

app.get('/hello/:user',(req,res)=>{
console.log(req.params.user)
res.send(`Hola mi pana ${req.params.user.toUpperCase}`)
})

app.get('/add/:x/:y',(req,res)=>{
    const {x,y} = req.params
    const result = parseInt(x) + parseInt(y)
    console.log(result)
    res.send(`Result> ${result}`)

})

app.get('/index',(req,res)=>{
    res.sendFile('./static/index.html',{
        root:__dirname
    });

  
})




var port=process.env.PORT || 3000
var Server=app.listen(port);
console.log(`Server on port ${port}`)

