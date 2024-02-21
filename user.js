const express = require('express')
var app = express()
var fs= require('fs')
app.get('/',function(req,res){
    res.send("start")
})

app.get('/listUsers',function(req,res){
    res.send("list users")
    var data= fs.readFileSync(__dirname+'users.json')
    res.send(String(data))
})
app.get('/user/:id',function(req,res){
    res.send("select user")
})

app.get('/deleteUser',function(req,res){
    res.send("user deleted")
})

app.get('/addUser',function(req,res){
    res.send("user added")
})


var server= app.listen(7005, function()
{
    var host = server.address().address   
    var port = server.address().port 
})