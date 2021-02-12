import Express from 'express';
const WorkloadReportController = Express.Router();
import sequelize from '../config/database';
const { QueryTypes } = require('sequelize');

//Generate JSON for workload report
const workloadReportHandler = async (req, res) => {
    try {
        //Raw mysql query with Sequelize
        let result = await sequelize.query("SELECT teacher.name AS tname, subject.subject_code,subject.name AS sname  FROM workload LEFT JOIN teacher ON workload.teacher_email =teacher.email LEFT JOIN subject ON workload.subject_code=subject.subject_code", { type: QueryTypes.SELECT });
        //Get count for numberOfClasses
        let counter = {};
        let arr = [];
        result.forEach(function (obj) {
            var key = JSON.stringify(obj);
            counter[key] = (counter[key] || 0) + 1;
        })
        Object.keys(counter).forEach(function (k, v) {
            v = v + 1;
              k = k.toString().replace('}', '') + ',"numberOfClasses":' + v  + '}';
              arr.push(k);  
        }); 
        //Format data
        arr = arr.toString().replaceAll("'", '');
        arr = arr.replaceAll("subject_code", "subjectCode");
        arr = arr.replaceAll("sname", "subjectName");
        arr = JSON.parse('[' + JSON.parse(JSON.stringify(arr)) + ']');

        let groupBy = function(array, key) {
            return array.reduce(function(result, item) {
                (result[item[key]] = result[item[key]] || []).push(item);
              return result;
            }, {});
        };
        console.log(groupBy(arr, 'tname'));
        //Send result back to client 
        res.status(200).send(groupBy(arr,'tname'));

    }
    catch (error) {
        console.log(error);
        res.sendStatus(400);
    }       
}

WorkloadReportController.get('/workload', workloadReportHandler);

export default WorkloadReportController;