import asyncHandler from 'express-async-handler'
import generateToken from '../utils/generateToken.js'
import Employee from '../models/employeeModel.js'

const authUser = asyncHandler(async (req, res) => {
  const { email, phone, password } = req.body

  const employee = await Employee.findOne({ email })

  if (employee && (await employee.matchPassword(password))) {
    res.json({
      _id: employee._id,
      first_name: employee.first_name,
      middle_name: employee.middle_name,
      last_name: employee.last_name,
      phone: employee.phone,
      email: employee.email,
      employeeId: employee.employeeId,
      token: generateToken(employee._id),
    })
  } 
  else {
    res.status(401)
    throw new Error('Invalid email or password')
  }
})


const registerEmployee = asyncHandler(async (req, res) => {
  const { first_name, middle_name, last_name, employeeId, email, phone, password } = req.body

  const userExists_email = await Employee.findOne({ email })
  const userExists_phone = await Employee.findOne({ phone })
  const userExists_employeeId = await Employee.findOne({ employeeId })

  if (userExists_email) {
    res.status(400)
    throw new Error('Email is already registered!')
  }

  if (userExists_phone) {
    res.status(400)
    throw new Error('Phone is already registered')
  }

  if (userExists_employeeId) {
    res.status(400)
    throw new Error('Employee ID is already registered')
  }

  const employee = await Employee.create({
    first_name,
    middle_name,
    last_name,
    email,
    phone,
    password,
    employeeId
  })

  if (employee) {
    res.status(201).json({
      _id: employee._id,
      first_name: employee.first_name,
      middle_name: employee.middle_name,
      last_name: employee.last_name,
      email: employee.email,
      phone: employee.phone,
      employeeId: employee.employeeId,
      token: generateToken(employee._id),
    })
  } else {
    res.status(400)
    throw new Error('Invalid user data')
  }
})


const getEmployees = asyncHandler(async (req, res) => {
  const employees = await Employee.find({})
  res.json(employees)
})


const deleteEmployee = asyncHandler(async (req, res) => {
  const employee = await Employee.findById(req.params.id)

  if (employee) {
    await employee.remove()
    res.json({ message: 'Employee removed' })
  } else {
    res.status(404)
    throw new Error('Employee not found')
  }
})


const getEmployeeId = asyncHandler(async (req, res) => {
  const employee = await Employee.findById(req.params.id).select('-password')

  if (employee) {
    res.json(employee)
  } else {
    res.status(404)
    throw new Error('Employee not found')
  }
})


const updateEmployee = asyncHandler(async (req, res) => {
  const employee = await Employee.findById(req.params.id)

  if (employee) {

    employee.first_name = req.body.first_name || employee.first_name
    employee.middle_name = req.body.middle_name || employee.middle_name
    employee.last_name = req.body.last_name || employee.last_name
    employee.email = req.body.email || employee.email
    employee.phone = req.body.phone || employee.phone
    employee.employeeId = req.body.employeeId || employee.employeeId

    const updatedEmployee = await employee.save()

    res.json({
      _id: updatedEmployee._id,
      first_name: updatedEmployee.first_name,
      middle_name: updatedEmployee.middle_name,
      last_name: updatedEmployee.last_name,
      phone: updatedEmployee.phone,
      email: updatedEmployee.email,
      employeeId: updatedEmployee.employeeId
    })
  } else {
    res.status(404)
    throw new Error('Employee not found')
  }
})


export {
  authUser,
  registerEmployee,
  getEmployees,
  deleteEmployee,
  getEmployeeId,
  updateEmployee,
}
