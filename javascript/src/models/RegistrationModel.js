const { Sequelize, Model, DataTypes } = require('sequelize');
//const sequelize = require('../config/database').sequelize;
import sequelize from '../config/database';
class RegistrationModel extends Model { };

RegistrationModel.init({
    student_email: {
        allowNull: false,
        type: DataTypes.JSON,
    },
   teacher_email: {
        allowNull: false,
        type: Sequelize.STRING(50), 
        references: {
            model: 'TeacherModel',
            key: 'email',
            as :'teacher_email'
       },
       onDelete: 'CASCADE',
       onUpdate:'CASCADE'
    
    },
    class_code: {
        allowNull: false,
        type: Sequelize.STRING(50),
        references: {
            model: 'ClassModel',
            key: 'class_code',
            as :'class_code'
        },
        onDelete: 'CASCADE',
        onUpdate:'CASCADE',
    },
    subject_code: {
        allowNull: false,
        type: Sequelize.STRING(50),
        
        references: {
            model: 'SubjectModel',
            key: 'subject_code',
            as :'subject_code'
        },
        onDelete: 'CASCADE',
        onUpdate:'CASCADE',
    },
    rid: {
        allowNull: false,
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
},
    
     {
         sequelize :sequelize,
         modelName:'RegistrationModel',
         tableName: 'registration',
         timestamps: false,
         logging: console.log
    });
   
RegistrationModel.sync();
module.exports = {RegistrationModel} 