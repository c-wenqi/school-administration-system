const { Sequelize, Model } = require('sequelize');
import sequelize from '../config/database';

class ClassModel extends Model { };

WorkloadModel.init({
   class_code: {
        allowNull: false,
        type: Sequelize.STRING(50),
        primaryKey: true,
        unique: true,
        references: {
            model: 'ClassModel',
            key: 'class_code',
            as :'class_code'
        },
        onDelete: 'CASCADE',
        onUpdate:'CASCADE',
    },
    subject_code : {
        allowNull: false,
        type: Sequelize.STRING(50),
        primaryKey: false,
        references: {
            model: 'SubjectModel',
            key: 'subject_code',
            as :'subject_code'
        },
        onDelete: 'CASCADE',
        onUpdate:'CASCADE',
    
    },
    teacher_email: {
        allowNull: false,
        type: Sequelize.STRING(50),
        primaryKey: false,
        references: {
            model: 'TeacherModel',
            key: 'email',
            as :'email'
        },
        onDelete: 'CASCADE',
        onUpdate:'CASCADE',
    },
    count_class: {
        allowNull: false,
        type: Sequelize.INTEGER,
        primaryKey : false
    },
    wid: {
        allowNull: false,
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
},
     {
         sequelize : sequelize,
         modelName:'WorkLoadModel',
         tableName: 'workload',
         timestamps: false,
         logging: console.log
});
ClassModel.sync();
module.exports = {ClassModel} 