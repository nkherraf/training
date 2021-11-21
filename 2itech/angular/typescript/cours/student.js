"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
exports.Student = void 0;
var person_1 = require("./person");
var Student = /** @class */ (function (_super) {
    __extends(Student, _super);
    function Student(_num, _lastName, _firstName, _adress, _level) {
        if (_level === void 0) { _level = ""; }
        var _this = _super.call(this, _num, _lastName, _firstName, _adress) || this;
        _this._level = _level;
        return _this;
    }
    Object.defineProperty(Student.prototype, "level", {
        get: function () {
            return this._level;
        },
        set: function (val) {
            this._level = val;
        },
        enumerable: false,
        configurable: true
    });
    Student.prototype.displayUpperCaseFirstName = function () {
        console.log(this.firstName.toUpperCase() + "*");
    };
    return Student;
}(person_1.Person));
exports.Student = Student;
