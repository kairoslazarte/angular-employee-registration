import mongoose from 'mongoose'
import bcrypt from 'bcryptjs'

const employeeSchema = mongoose.Schema(
  {
    first_name: {
      type: String,
      required: true,
    },
    middle_name: {
      type: String,
      required: false,
    },
    last_name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    employeeId: {
      type: Number,
      required: true,
      unique: true
    },
    phone: {
      type: Number,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: false,
      default: "12345"
    },
  },
  {
    timestamps: true,
  }
)

employeeSchema.methods.matchPassword = async function (enteredPassword) {
  return await bcrypt.compare(enteredPassword, this.password)
}

employeeSchema.pre('save', async function (next) {
  if (!this.isModified('password')) {
    next()
  }

  const salt = await bcrypt.genSalt(10)
  this.password = await bcrypt.hash(this.password, salt)
})

const Employee = mongoose.model('Employee', employeeSchema)

export default Employee
