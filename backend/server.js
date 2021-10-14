const express = require('express')
const dotenv = require('dotenv');
const employees = require('./data/employees');

dotenv.config();

const app = express(); // main

app.get("/",(req,res)=>{
    res.send("API is running")
})

app.get("/api/employees",(req,res)=>{
    res.send(employees)
})

app.get("/api/employees/:id",(req,res)=>{
    const profile = employees.find((emp)=>emp._id === req.params.id)
    res.send(profile)
})

const PORT = process.env.PORT
app.listen(5000,console.log(`Server is running on port${PORT}`))