"use strict";
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
exports.__esModule = true;
exports.Intern = void 0;
var Intern = /** @class */ (function () {
    function Intern(_name, _grades) {
        if (_name === void 0) { _name = "Unknown Student"; }
        if (_grades === void 0) { _grades = [0, 0, 0]; }
        this._name = _name;
        this._grades = _grades;
        this.grades = _grades;
    }
    Object.defineProperty(Intern.prototype, "name", {
        get: function () {
            return this._name;
        },
        set: function (val) {
            this._name = val;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Intern.prototype, "grades", {
        get: function () {
            return this._grades;
        },
        set: function (val) {
            val.forEach(function (element, index) {
                val[index] = element < 0 ? 0 : element;
            });
            this._grades = val;
        },
        enumerable: false,
        configurable: true
    });
    Intern.prototype.gradesMean = function () {
        var n = this.grades.length;
        var tab = __spreadArray([], this.grades, true);
        return tab.map(function (val) { return val / n; }).reduce(function (pV, nV) { return pV + nV; });
    };
    Intern.prototype.findMax = function () {
        return Math.max.apply(Math, this.grades);
    };
    Intern.prototype.findMin = function () {
        return Math.min.apply(Math, this.grades);
    };
    return Intern;
}());
exports.Intern = Intern;
