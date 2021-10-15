const asyncHandler = require('express-async-handler')
const Employee = require('../models/employeeModel')

const getEmployee = asyncHandler(async (req, res) => {
    const employee = await Employee.find()
    res.json(employee);
})

const updateEmployee = asyncHandler(async (req, res) => {
    const { fname, lname, email, employee_id, password, leave_remain } = req.body

    const emp = await Employee.findById(req.params.id)

    if (emp._id.toString() !== req.params.id) {
        res.status(401)
        throw new Error("No permission")
    }

    if (emp) {
        const updateEmp = await Employee.update({_id:req.params.id},{ fname, lname, email, employee_id, password, leave_remain })
        res.json(updateEmp);
    } else {
        res.status(404)
        throw new Error("Error not found employee")
    }
})

const deleteEmployee = asyncHandler(async (req, res) => {
    const { fname, lname, email, employee_id, password, leave_remain } = req.body

    const emp = await Employee.findById(req.params.id)

    if (emp._id.toString() !== req.params.id) {
        res.status(401)
        throw new Error("No permission")
    }

    if (emp) {
        // emp.fname = fname;
        // emp.lname = lname;
        // emp.email = email;
        // emp.employee_id = employee_id;
        // emp.password = password;
        // emp.leave_remain = leave_remain;
        const updateEmp = await Employee.deleteOne({_id:emp._id})
        res.json({message:"removed"});
    } else {
        res.status(404)
        throw new Error("Error not found employee")
    }
})

module.exports = { getEmployee, updateEmployee,deleteEmployee }