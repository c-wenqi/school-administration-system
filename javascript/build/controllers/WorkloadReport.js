"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _express = _interopRequireDefault(require("express"));

var _database = _interopRequireDefault(require("../config/database"));

var WorkloadReportController = _express["default"].Router();

var _require = require('sequelize'),
    QueryTypes = _require.QueryTypes; //Generate JSON for workload report


var workloadReportHandler = /*#__PURE__*/function () {
  var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(req, res) {
    var result, counter, arr, groupBy;
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            _context.next = 3;
            return _database["default"].query("SELECT teacher.name AS tname, subject.subject_code,subject.name AS sname  FROM workload LEFT JOIN teacher ON workload.teacher_email =teacher.email LEFT JOIN subject ON workload.subject_code=subject.subject_code", {
              type: QueryTypes.SELECT
            });

          case 3:
            result = _context.sent;
            //Get count for numberOfClasses
            counter = {};
            arr = [];
            result.forEach(function (obj) {
              var key = JSON.stringify(obj);
              counter[key] = (counter[key] || 0) + 1;
            });
            Object.keys(counter).forEach(function (k, v) {
              v = v + 1;
              k = k.toString().replace('}', '') + ',"numberOfClasses":' + v + '}';
              arr.push(k);
            }); //Format data

            arr = arr.toString().replaceAll("'", '');
            arr = arr.replaceAll("subject_code", "subjectCode");
            arr = arr.replaceAll("sname", "subjectName");
            arr = JSON.parse('[' + JSON.parse(JSON.stringify(arr)) + ']');

            groupBy = function groupBy(array, key) {
              return array.reduce(function (result, item) {
                (result[item[key]] = result[item[key]] || []).push(item);
                return result;
              }, {});
            };

            console.log(groupBy(arr, 'tname')); //Send result back to client 

            res.status(200).send(groupBy(arr, 'tname'));
            _context.next = 21;
            break;

          case 17:
            _context.prev = 17;
            _context.t0 = _context["catch"](0);
            console.log(_context.t0);
            res.sendStatus(400);

          case 21:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[0, 17]]);
  }));

  return function workloadReportHandler(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();

WorkloadReportController.get('/workload', workloadReportHandler);
var _default = WorkloadReportController;
exports["default"] = _default;