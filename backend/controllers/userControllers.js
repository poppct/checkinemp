const asyncHandler = require('express-async-handler')
const Employee = require('../models/employeeModel');
const generateToken = require('../utils/genToken');

const registerUser = asyncHandler(async (req, res) => {
    const { fname, lname, email, employee_id, password, pic, leave_remain, isAdmin } = req.body;

    const checkExistUser = await Employee.findOne({ email: email });

    if (checkExistUser) {
        res.status(400)
        throw new Error('Employee already exist')
    }

    const emp = await Employee.create({
        fname,
        lname,
        email,
        employee_id,
        password,
        pic,
        leave_remain,
        isAdmin
    })

    if (emp) {
        res.status(201).json({
            _id: emp._id,
            fname: emp.fname,
            email: emp.email,
            employee_id: emp.employee_id,
            password: emp.password,
            pic: emp.pic,
            leave_remain: emp.leave_remain,
            isAdmin: emp.isAdmin,
            token:generateToken(emp._id)
        })
    } else {
        res.status(400)
        throw new Error("Error,something wrong")
    }
})

const authUser = asyncHandler(async (req, res) => {
    const { employee_id, password } = req.body

    const emp = await Employee.findOne({ employee_id: employee_id })
    const decryptedPass = await emp.matchPassword(password)
    console.log('encrypt pass:', decryptedPass);

    if (emp && decryptedPass) {
        res.json({
            _id: emp._id,
            fname: emp.fname,
            lname: emp.lname,
            email: emp.email,
            employee_id: emp.employee_id,
            password: emp.password,
            pic: emp.pic,
            leave_remain: emp.leave_remain,
            isAdmin: emp.isAdmin,
            token:generateToken(emp._id)
        })
    } else {
        res.status(400)
        throw new Error("Invalid employee_id or password")
    }
})

module.exports = { registerUser, authUser };