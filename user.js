const { urlencoded } = require('body-parser')
const express = require('express')
var app = express()
var fs= require('fs')

var bodyParser= require('body-parser')
var urlEncoded= bodyParser.urlencoded({extended:false})


app.get('/',function(req,res){
    res.send("start")
})

app.get('/form', function(req,res)
{
    res.sendFile(__dirname+'/form.html', )
    
})


app.get('/listUsers',function(req,res){
    // res.send("list users")
    var data= fs.readFileSync(__dirname+"/users.json")

    res.send(String(data))
})
app.get('/userById/:id',function(req,res){
    // res.send("select user")
    var arr =["1", "2", "3"]
    if (arr.includes(String(req.params.id)))
    {
    var data= fs.readFileSync(__dirname+"/users.json") //as byte
    data= JSON.parse(String(data)) //parse to change string to key value format
    
    var user = data['user'+req.params.id]
   

    res.send(user)
    }
    else
    {
      res.send("user id error")
    }
})

app.delete('/deleteUser/:id',function(req,res){
    var data= fs.readFileSync(__dirname+"/users.json") 
    data= JSON.parse(String(data))
    

    var user = data['user'+req.params.id]
    delete data['user'+req.params.id]
    res.send(data)
})



var server= app.listen(7005, function()
{
    var host = server.address().address   
    var port = server.address().port 
})

app.post('/addUser', urlEncoded,function(req,res) ///postman 
{
    var addData={name:"", password:"", jobList:""}
    addData.name=req.body.name
    addData.password=req.body.password
    addData.jobList= req.body.jobList
    var data= fs.readFileSync(__dirname+"/users.json") 
    data= JSON.parse(String(data))
    data['user4']= addData
    res.send(data)
})