const { Router } = require("express")
const{
    createCPTask,
    updateCPStatus,
    showCPTasks,
    removeCPTask,
    clearCPTable
} = require('./../controllers/tasks')

const route = Router()

route.get('/', (req,res)=>{
    showCPTasks().then((tasks)=>{
        res.render('cptasks',{tasks})
    })
})

route.post('/' , (req,res)=>{
    const {title , id , status , remove} = req.body
    if(title)
        createTask(title ,req , res)
    else if(status && id)
        updateStatus(id , status ,req ,  res)
    else if(remove && id)
        removeTask(id , remove , req , res)
    else
        res.redirect('/cptask')
})

function updateStatus(id , status , req , res){
    let _st = (status == 'true')
    updateCPStatus( id , _st).then(()=>{
        res.redirect('/cptask')
    })
}

function createTask(title , req , res){
    createCPTask(title).then((task)=>{
        console.log(task)
        res.redirect('/cptask')
    })
}

function removeTask(id , remove , req , res){
    if(remove == 'true'){
        removeCPTask(id).then(()=>{
            res.render('/cptask')
        })
    }
    else
        res.render('/cptask')
}

route.get('/cleartable/:password' , (req,res)=>{
    console.log(req.params.password)
    let _pass = req.params.password
    if(_pass == 'Prajal@123'){
        clearCPTable().then(()=>{
            res.redirect('/cptask')
        })
    } 
    else{
        res.redirect('/cptask')
    }
})

module.exports = {
    cpRoute: route
}