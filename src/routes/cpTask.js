const { Router } = require("express")
const{
    createCPTask,
    updateCPStatus,
    showCPTasks
} = require('./../controllers/tasks')

const route = Router()

route.get('/', (req,res)=>{
    showCPTasks().then((tasks)=>{
        res.send(tasks)
    })
})

route.post('/' , (req,res)=>{
    const {status ,title , id} = req.body
    if(title){
        createCPTask(title).then((task)=>{
            console.log(task)
            res.send(task)
        })
    }
    else{
        updateCPStatus( id , status).then(()=>{
            res.redirect('/')
        })
    }
})

module.exports = {
    cpRoute: route
}