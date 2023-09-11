require('dotenv').config()
const express = require("express");
const app = express();
const cors = require('cors')
const fileupload = require("express-fileupload");
const router = require('./src/routes');
const port = process.env.APP_PORT || 3001;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }))
app.use(fileupload());
app.use('/uploads', express.static('uploads'));
app.use("/api/v1", router);


app.listen(port, () => console.log(`Running on port ${port}`))