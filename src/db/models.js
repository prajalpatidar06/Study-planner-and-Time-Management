const Sequelize = require('sequelize')
// const {dbInfo} = require('./dbinfo.js')
const {dbheroku} = require('./dbheroku')

const db = new Sequelize(dbheroku)

const CPTasks = db.define('cptask',{
    id:{
        type: Sequelize.DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    title: {
        type: Sequelize.DataTypes.STRING(400),
        allowNull: false
    },
    status:{
        type: Sequelize.DataTypes.BOOLEAN,
        defaultValue: false
    },
})

const DevTasks = db.define('devtask',{
    id:{
        type: Sequelize.DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    title: {
        type: Sequelize.DataTypes.STRING(400),
        allowNull: false
    },
    status:{
        type: Sequelize.DataTypes.BOOLEAN,
        defaultValue: false
    },
})

module.exports = {
    db,
    CPTasks,
    DevTasks
}
