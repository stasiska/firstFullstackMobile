const config = require('./config/config')
const express = require('express')
const routes = require("./routes/routes")
const models = require('./models/index')
const fileUpload = require('express-fileupload')
const path = require('path')
const cors = require("cors");

const PORT = config.app.port;


const app = express();
app.use(cors());
app.use(express.json())

app.use(express.static(path.resolve(__dirname, 'static')))
app.use(fileUpload({}))
app.use(express.urlencoded({ extended: true })); // Для парсинга form-data


app.use('/api', routes)
 

const sequelize = require('./db/index')
app.listen(PORT, async ()=> {
    console.log(`server started on port ${PORT}` )
    await sequelize.sync();
} )