const {CPTasks , DevTasks , db} = require('./../db/models')

async function createCPTask(title){
    const users = await CPTasks.create({
        title
    })
    return users;
}

async function createDevTask(title){
    const users = await DevTasks.create({
        title
    })
    return users;
}

async function updateCPStatus(id , status){
    await CPTasks.update({status},{where:{id}})
}

async function updateDevStatus(id , status){
    await DevTasks.update({status},{where:{id}}).then(()=>{
        console.log('updated succesfully')
    })
}

async function showCPTasks(){
    return await CPTasks.findAll()
}

async function showDevTasks(){
    return await DevTasks.findAll()
}

async function removeCPTask(id){
    await CPTasks.destroy({
        where:{id}
    })
}

async function removeDevTask(id){
    await DevTasks.destroy({
        where:{id}
    })
}

module.exports = {
    createCPTask,
    createDevTask,
    updateCPStatus,
    updateDevStatus,
    showCPTasks,
    showDevTasks,
    removeCPTask,
    removeDevTask
}
