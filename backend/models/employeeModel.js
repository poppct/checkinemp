const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

const employeeSchema = mongoose.Schema({
    fname: {
        type: String,
        required: true
    },
    lname: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    employee_id: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    pic: {
        type: String,
        required: true,
        default: "https://icon-library.com/images/anonymous-avatar-icon/anonymous-avatar-icon-25.jpg"
    },
    leave_remain: {
        type: Number,
        required: true,
        default: 10
    },
    isAdmin: {
        type: Boolean,
        required: true,
        default: false
    },
},
    { timestamps: true }
)

//encrypt func
employeeSchema.pre('save', async function (next) {
    if (!this.isModified('password')) {
        next()
    }

    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password, salt)
})

//decrypt func
employeeSchema.methods.matchPassword = async function (enterPassword) {
    return await bcrypt.compare(enterPassword,this.password)
}

const Employee = mongoose.model('Employee', employeeSchema)

module.exports = Employee;