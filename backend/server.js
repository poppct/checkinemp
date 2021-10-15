const express = require('express')
const dotenv = require('dotenv');
const employees = require('./data/employees');
const connectDB = require('./config/db')
const userRoutes = require('./routes/UserRoutes');
const employeesRoutes = require('./routes/EmployeesRoutes');
const { notFound, errorHandler } = require('./middlewares/errorMiddleware');

const app = express(); // main
dotenv.config();
connectDB();
app.use(express.json());


app.get("/",(req,res)=>{
    res.send("API is running")
})

// app.get("/api/employees",(req,res)=>{
//     res.send(employees)
// })

app.use('/api/users',userRoutes)
app.use('/api/employees',employeesRoutes)

// app.get("/api/employees/:id",(req,res)=>{
//     const profile = employees.find((emp)=>emp._id === req.params.id)
//     res.send(profile)
// })
app.use(notFound)
app.use(errorHandler)

const PORT = process.env.PORT
app.listen(5000,console.log(`Server is running on port${PORT}`))