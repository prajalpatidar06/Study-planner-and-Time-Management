const {Router, application} = require('express')
const{
    createDevTask,
    updateDevStatus,
    showDevTasks,
    removeDevTask,
    clearDevTable,
} = require('./../controllers/tasks')

const route = Router()

route.get('/' , (req,res)=>{
    showDevTasks().then((tasks)=>{
        res.render('devtasks' , {tasks})
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
        res.render('devtasks' , {error: "can't update changes in table"})
})

function updateStatus(id , status , req , res){
    let _st = (status == 'true')
    updateDevStatus( id , _st).then(()=>{
        res.render('devtasks' , {success:'update successfully'})
    })
}

function createTask(title , req , res){
    createDevTask(title).then((task)=>{
        console.log(task)
        res.redirect('/devtask')
    })
}

function removeTask(id , remove , req , res){
    if(remove == 'true'){
        removeDevTask(id).then(()=>{
            res.render('devtasks' , {success: "remove successfully"})
        })
    }
    else
        res.render('devtasks' , {error: "Cant remove"})
}

route.get('/cleartable/:password' , (req,res)=>{
    console.log(req.params.password)
    let _pass = req.params.password
    if(_pass == 'Prajal@123'){
        clearDevTable().then(()=>{
            res.render('devtasks',{success:'Table deleted succesfully'})
        })
    } 
    else{
        res.render('devtasks',{error: 'Unautharised request!'})
    }
})


module.exports = {
    devRoute: route
}