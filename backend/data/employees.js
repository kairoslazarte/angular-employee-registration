import bcrypt from 'bcryptjs'

const employees = [
  {
    first_name: 'System',
    middle_name: 'Admin',
    last_name: 'User',
    email: 'admin@example.com',
    employeeId: '224023',
    phone: '09063475261',
    password: bcrypt.hashSync('123456', 10),
  },
  {
    first_name: 'Fillip',
    last_name: 'Lazarte',
    email: 'filliplazarte@gmail.com',
    employeeId: '213211',
    phone: '09063473213',
    password: bcrypt.hashSync('123456', 10),
  },
  {
    first_name: 'Jezreel',
    middle_name: 'Tan',
    last_name: 'Pena',
    email: 'jezreel@gmail.com',
    employeeId: '23212',
    phone: '09062132122',
    password: bcrypt.hashSync('123456', 10),
  },
  {
    first_name: 'Faith',
    last_name: 'Mariquita',
    email: 'faith@yahoo.com',
    employeeId: '431221',
    phone: '09123456789',
    password: bcrypt.hashSync('123456', 10),
  },
]

export default employees