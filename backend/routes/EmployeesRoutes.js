const express = require('express');
const { getEmployee, updateEmployee, deleteEmployee } = require('../controllers/employeesController');
// const { registerUser, authUser } = require('../controllers/userControllers');

const router = express.Router();

router.route('/').get(getEmployee);
router.route('/:id').put(updateEmployee);
router.route('/:id').delete(deleteEmployee);

module.exports = router