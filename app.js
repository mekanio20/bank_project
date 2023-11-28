const express = require('express')
const bodyparser = require('body-parser')

const port = process.env.PORT || 5001
const app = express()

app.use(bodyparser.json())
app.use(bodyparser.urlencoded({ extended: true }))
app.use(express.static('public'))
app.set('view engine', 'ejs')

const database = require('./db')
const { Employees } = require('./model')

app.get('/', async (req, res) => {
    try {
        return res.status(200).render('index')
    } catch (error) {
        return res.status(500).send('Error occurred: ', error.message)
    }
})

app.get('/employees', async (req, res) => {
    try {

        const employees = await Employees.findAll()

        return res.status(200).render('employees', { employees: employees })

    } catch (error) {
        return res.status(500).send('Error occurred: ', error.message)
    }
})

app.get('/about', async (req, res) => {
    try {
        return res.status(200).render('about')
    } catch (error) {
        return res.status(500).send('Error occurred: ', error.message)
    }
})

app.get('/contact', async (req, res) => {
    try {
        return res.status(200).render('contact')
    } catch (error) {
        return res.status(500).send('Error occurred: ', error.message)
    }
})

// POST

app.post('/employees', async (req, res) => {
    try {
        const { name, role, phone, email, salary } = req.body

        await Employees.create({
            fullname: name,
            role: role,
            phone: phone,
            email: email,
            salary: salary
        })

        return res.status(201).redirect('/employees')

    } catch (error) {
        return res.status(500).send('Error occurred: ', error.message)
    }
})

// DELETE

app.get('/employees/:id', async (req, res) => {
    try {
        const { id } = req.params

        const employee = await Employees.destroy({ where: { id: id }})

        return res.status(200).redirect('/employees')

    } catch (error) {
        return res.status(500).send('Error occurred: ', error.message)        
    }
})

app.listen(port, async () => {
    await database.authenticate()
    await database.sync({ alter: true })
    console.log(`Server is running: http://localhost:${port}`);
})