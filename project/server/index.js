const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

//local imports
const connectDB = require('./db').default;
const employeeRoutes = require('./controllers/employee.contoller')
const { errorHandler } = require('./middlewares')

const app = express();

//middleware
app.use(bodyParser.json());
app.use(cors({origin:'http://localhost:4200'}))
app.use('/api/employees', employeeRoutes)
app.use(errorHandler)

connectDB()
    .then(() => {
        console.log('DB connected!')
        app.listen(3000, () =>
            console.log('Server started at port 3000!')
        )
    })
    .catch(err => console.log(err))