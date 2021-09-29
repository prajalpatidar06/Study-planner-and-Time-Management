const express = require('express')
const { db } = require('./db/models')
const {cpRoute} = require('./routes/cpTask')
const {devRoute} = require('./routes/devTask')
const app = express()

app.use(express.urlencoded({force:true}))
app.use('/cptask', cpRoute)
app.use('/devtask', devRoute)

const PORT = 4545

db.sync()
.then(()=>{
    app.listen(PORT,()=>{
        console.log(`server started at http://localhost:${PORT}`)
    })
})