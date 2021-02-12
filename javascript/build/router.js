"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = _interopRequireDefault(require("express"));

var _HealthcheckController = _interopRequireDefault(require("./controllers/HealthcheckController"));

var _Registration = _interopRequireDefault(require("./controllers/Registration"));

var _WorkloadReport = _interopRequireDefault(require("./controllers/WorkloadReport"));

var router = _express["default"].Router(); //router.use('/', HealthcheckController);


router.use('/', _Registration["default"]);
router.use('/reports', _WorkloadReport["default"]);
var _default = router;
exports["default"] = _default;