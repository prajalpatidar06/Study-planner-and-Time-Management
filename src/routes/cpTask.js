const { Router } = require("express")
const{
    createCPTask,
    updateCPStatus,
    showCPTasks,
    removeCPTask
} = require('./../controllers/tasks')

const route = Router()

route.get('/', (req,res)=>{
    showCPTasks().then((tasks)=>{
        res.send(tasks)
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
        res.send("can't update changes in table")
})

function updateStatus(id , status , req , res){
    let _st = (status == 'true')
    updateCPStatus( id , _st).then(()=>{
        res.send('update successfully')
    })
}

function createTask(title , req , res){
    createCPTask(title).then((task)=>{
        console.log(task)
        res.send(task)
    })
}

function removeTask(id , remove , req , res){
    if(remove == 'true'){
        removeCPTask(id).then(()=>{
            res.send('remove successfully')
        })
    }
    else
        res.send('Cant remove')
}

module.exports = {
    cpRoute: route
}