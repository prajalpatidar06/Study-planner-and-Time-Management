const {Router} = require('express')
const { showCPTasks, updateCPStatus } = require('../controllers/tasks')
const{
    createDevTask,
    updateDevStatus,
    showDevTasks
} = require('./../controllers/tasks')

const route = Router()

route.get('/' , (req,res)=>{
    showDevTasks().then((tasks)=>{
        res.send(tasks)
    })
})

route.post('/' , (req,res)=>{
    const {title , status , id} = req.body

    if(title){
        createDevTask(title).then((task)=>{
            res.send(task)
        })
    }
    else{
        updateDevStatus(id , status).then(()=>{
            res.send('update satus')
        })
    }
})

module.exports = {
    devRoute: route
}