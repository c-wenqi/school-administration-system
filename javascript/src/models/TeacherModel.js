const { Sequelize, Model } = require('sequelize');
import sequelize from '../config/database';
class TeacherModel extends Model { };

TeacherModel.init({
   name: {
        allowNull: false,
        type: Sequelize.STRING(50),
        primaryKey: false,

    },
    email : {
        allowNull: false,
        type: Sequelize.STRING(50),
        primaryKey: true,
        unique : true
    }
},
    {
         sequelize : sequelize,
         modelName:'TeacherModel',
         tableName: 'teacher',
         timestamps: false,
         logging: console.log
    });

TeacherModel.sync();
module.exports = {TeacherModel} 