"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _database = _interopRequireDefault(require("../config/database"));

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

var _require = require('sequelize'),
    Sequelize = _require.Sequelize,
    Model = _require.Model;

var TeacherModel = /*#__PURE__*/function (_Model) {
  (0, _inherits2["default"])(TeacherModel, _Model);

  var _super = _createSuper(TeacherModel);

  function TeacherModel() {
    (0, _classCallCheck2["default"])(this, TeacherModel);
    return _super.apply(this, arguments);
  }

  return TeacherModel;
}(Model);

;
TeacherModel.init({
  name: {
    allowNull: false,
    type: Sequelize.STRING(50),
    primaryKey: false
  },
  email: {
    allowNull: false,
    type: Sequelize.STRING(50),
    primaryKey: true,
    unique: true
  }
}, {
  sequelize: _database["default"],
  modelName: 'TeacherModel',
  tableName: 'teacher',
  timestamps: false,
  logging: console.log
});
TeacherModel.sync();
module.exports = {
  TeacherModel: TeacherModel
};