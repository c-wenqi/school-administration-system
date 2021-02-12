const { Sequelize, Model } = require('sequelize');
import sequelize from '../config/database';
class SubjectModel extends Model { };

SubjectModel.init({
   subject_code: {
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
         modelName:'SubjectModel',
         tableName: 'subject',
         timestamps: false,
         logging: console.log
});
SubjectModel.sync();
module.exports = {SubjectModel} 