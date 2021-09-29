const express = require('express')
const { db } = require('./db/models')
const {cpRoute} = require('./routes/cpTask')
const {devRoute} = require('./routes/devTask')
const app = express()

app.use(express.urlencoded({force:true}))
app.use('/cptask', cpRoute)
app.use('/devtask', devRoute)


db.sync()
.then(()=>{
    app.listen(4545,()=>{
        console.log("server started at http://localhost:4545")
    })
})