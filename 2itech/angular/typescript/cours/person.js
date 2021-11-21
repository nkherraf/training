"use strict";
exports.__esModule = true;
exports.Person = void 0;
var adress_1 = require("./adress");
var Person = /** @class */ (function () {
    function Person(_num, _lastName, _firstName, _adress) {
        if (_num === void 0) { _num = 0; }
        if (_lastName === void 0) { _lastName = ""; }
        if (_firstName === void 0) { _firstName = ""; }
        if (_adress === void 0) { _adress = new adress_1.Adress(); }
        this._num = _num;
        this._lastName = _lastName;
        this._firstName = _firstName;
        this._adress = _adress;
        this.num = _num;
    }
    Person.prototype.displayUpperCaseFirstName = function () {
        console.log(this.firstName.toUpperCase());
    };
    Person.prototype.displayUpperCaseLastName = function () {
        console.log(this.lastName.toUpperCase());
    };
    Object.defineProperty(Person.prototype, "num", {
        get: function () {
            return this._num;
        },
        set: function (val) {
            this._num = val < 0 ? 0 : val;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Person.prototype, "lastName", {
        get: function () {
            return this._lastName;
        },
        set: function (val) {
            this._lastName = val;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Person.prototype, "firstName", {
        get: function () {
            return this._firstName;
        },
        set: function (val) {
            this._firstName = val;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Person.prototype, "adress", {
        get: function () {
            return this._adress;
        },
        set: function (val) {
            this._adress = val;
        },
        enumerable: false,
        configurable: true
    });
    return Person;
}());
exports.Person = Person;
