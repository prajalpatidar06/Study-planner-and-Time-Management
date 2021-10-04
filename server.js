var express = require('express'),
    hbs = require('hbs'),
    app = express();

const { db } = require('./db/models')
const {cpRoute} = require('./routes/cpTask')
const {devRoute} = require('./routes/devTask')

app.use(express.urlencoded({force:true}))
app.use('/cptask', cpRoute)
app.use('/devtask', devRoute)
app.use(express.static(__dirname + '/public'))
hbs.registerPartials(__dirname + '/views/partials');
app.set('view engine' , 'hbs')

app.get('/' , (req,res)=>{
    res.render('index')
})

const PORT = process.env.PORT || 4545
db.sync()
.then(()=>{
    app.listen(PORT,()=>{
        console.log(`server started at http://localhost:${PORT}`)
    })
}).catch((err)=>{
    console.log(err)
})
