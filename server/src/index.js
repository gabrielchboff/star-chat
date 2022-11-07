const express = require('express')
const cors = require('cors')
const mongoose = require('mongoose')
const envpoints = require("./endpoints")

const app = express()
app.use(cors())
app.use(express.json())

const port = envpoints.port

mongoose.connect(envpoints.mongoURL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(() => {
    console.log('# Database connected')
}).catch((err) => {
    console.log(err);
});

const server = app.listen(port, () => {
    console.log(`# Server started at : ${port}`)
});

