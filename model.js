const { DataTypes } = require('sequelize')
const database = require('./db')

const Employees = database.define('employees', {
    id: {type: DataTypes.INTEGER, allowNull: false, primaryKey: true, autoIncrement: true, unique: true},
    fullname: {type: DataTypes.STRING, allowNull: false},
    role: {type: DataTypes.STRING, allowNull: false},
    phone: {type: DataTypes.STRING, allowNull: false},
    email: {type: DataTypes.STRING, allowNull: false},
    salary: {type: DataTypes.STRING, allowNull: false}
})

module.exports = { Employees }