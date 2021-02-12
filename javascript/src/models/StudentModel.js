const { Sequelize, Model } = require('sequelize');
import sequelize from '../config/database';
class StudentModel extends Model { };

StudentModel.init({
   name: {
        allowNull: false,
        type: Sequelize.STRING(50),
        primaryKey: false
    },
    email : {
        allowNull: false,
        type: Sequelize.STRING(50),
        primaryKey: true
    },
   
},
     {
         sequelize : sequelize,
         modelName:'StudentModel',
         tableName: 'student',
         timestamps: false,
         logging: console.log
});
StudentModel.sync();
module.exports = {StudentModel} 