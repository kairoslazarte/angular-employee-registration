import express from 'express'
const router = express.Router()
import {
  authUser,
  registerEmployee,
  getEmployees,
  deleteEmployee,
  getEmployeeId,
  updateEmployee,
} from '../controllers/employeeController.js'

router.route('/').post(registerEmployee).get(getEmployees)
router.post('/login', authUser)
router
  .route('/:id')
  .delete(deleteEmployee)
  .get(getEmployeeId)
  .put(updateEmployee)
export default router
