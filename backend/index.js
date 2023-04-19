const express = require('express');
const app = express();
const port = process.env.PORT || 8989
const conn = require('./connect.js')
const UploadFile = require('./uploadFile')
const UserAuthRout = require('./router/UserAuthRout')
const UserDataRout = require('./router/UserDataRout')
const cors = require('cors')
app.use(cors())
app.use(express.json())

app.use('/UserData',UserDataRout);
app.use('/UserAuth',UserAuthRout);
// app.use('/upload', UploadFile);
app.listen(port, () => {
    console.log(`app listening at http://localhost:${port}`)
})