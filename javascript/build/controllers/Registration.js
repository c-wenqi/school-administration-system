"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _express = _interopRequireDefault(require("express"));

var RegistrationModel = require('../models/RegistrationModel').RegistrationModel;

var RegistrationController = _express["default"].Router();

var JSON5 = require('json5'); //Handler for registration


var registrationHandler = /*#__PURE__*/function () {
  var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(req, res) {
    var body, student, studentEmail, checkId;
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            body = req.body; //Replace all double backticks with double quotes

            body = body.replaceAll(/[”“]/g, '"'); //Convert to JSON

            body = JSON5.parse(body);
            student = body.students;
            studentEmail = student.map(function (student) {
              return student.email;
            }); //Check if exists row with the same class_code AND subject_code ANd teacher_email

            _context.next = 8;
            return RegistrationModel.findAll({
              attributes: ['rid'],
              where: {
                class_code: body["class"].classCode,
                subject_code: body.subject.subjectCode,
                teacher_email: body.teacher.email
              },
              raw: true
            });

          case 8:
            checkId = _context.sent;

            if (!(checkId.length === 0)) {
              _context.next = 15;
              break;
            }

            _context.next = 12;
            return RegistrationModel.create({
              class_code: body["class"].classCode,
              subject_code: body.subject.subjectCode,
              teacher_email: body.teacher.email,
              student_email: studentEmail
            });

          case 12:
            res.sendStatus(204);
            _context.next = 18;
            break;

          case 15:
            _context.next = 17;
            return RegistrationModel.update({
              class_code: body["class"].classCode,
              subject_code: body.subject.subjectCode,
              teacher_email: body.teacher.email,
              student_email: studentEmail
            }, {
              where: {
                rid: checkId[0].rid
              }
            });

          case 17:
            res.sendStatus(204);

          case 18:
            _context.next = 24;
            break;

          case 20:
            _context.prev = 20;
            _context.t0 = _context["catch"](0);
            console.log(_context.t0);

            if (_context.t0 instanceof TypeError) {
              res.sendStatus(400);
            } else {
              res.sendStatus(500);
            }

          case 24:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[0, 20]]);
  }));

  return function registrationHandler(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();

RegistrationController.post('/register', registrationHandler);
var _default = RegistrationController;
exports["default"] = _default;