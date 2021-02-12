const { Sequelize, Model } = require('sequelize');
import sequelize from '../config/database';
class ClassModel extends Model { };

ClassModel.init({
   class_code: {
        allowNull: false,
        type: Sequelize.STRING(50),
        primaryKey: true,
        unique : true
    },
    name : {
        allowNull: false,
        type: Sequelize.STRING(50),
        primaryKey: false
    }
   
},
     {
         sequelize : sequelize,
         modelName:'ClassModel',
         tableName: 'class',
         timestamps: false,
         logging: console.log
});
ClassModel.sync();
module.exports = {ClassModel} 