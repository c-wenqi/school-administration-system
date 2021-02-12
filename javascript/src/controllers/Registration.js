import Express from 'express';
const RegistrationModel = require('../models/RegistrationModel').RegistrationModel;
const RegistrationController = Express.Router();
const JSON5 = require('json5');

//Handler for registration
const registrationHandler = async (req, res) => {
    try {
        let body = req.body;
        //Replace all double backticks with double quotes
        body = body.replaceAll(/[”“]/g, '"');
        //Convert to JSON
        body = JSON5.parse(body);
        let student = body.students;
        let studentEmail =  student.map(function(student) {
            return student.email;
        });
        //Check if exists row with the same class_code AND subject_code ANd teacher_email
        let checkId = await RegistrationModel.findAll({
            attributes: ['rid'],
            where: {
                class_code: body.class.classCode,
                subject_code: body.subject.subjectCode,
                teacher_email: body.teacher.email,
            },
            raw: true
        })
        //Create if not exist
        if (checkId.length === 0) {
            await RegistrationModel.create({
                class_code: body.class.classCode,
                subject_code: body.subject.subjectCode,
                teacher_email: body.teacher.email,
                student_email : studentEmail
            })
            res.sendStatus(204);
        }
        //Update student email column if exists
        else {
            await RegistrationModel.update(
                {
                class_code: body.class.classCode,
                subject_code: body.subject.subjectCode,
                teacher_email: body.teacher.email,
                student_email : studentEmail
            },
                { where: { rid: checkId[0].rid} }
            )
            res.sendStatus(204);
        }
    }
    //Error handling
    catch (error) {
        console.log(error);
        if (error instanceof TypeError) {
            res.sendStatus(400);
        }
        else {
            res.sendStatus(500);
       } 
    }
}

RegistrationController.post('/register', registrationHandler);

export default RegistrationController;