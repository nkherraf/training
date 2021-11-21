"use strict";
exports.__esModule = true;
exports.Adress = void 0;
var Adress = /** @class */ (function () {
    function Adress(_street, _zipCode, _city) {
        if (_street === void 0) { _street = ""; }
        if (_zipCode === void 0) { _zipCode = ""; }
        if (_city === void 0) { _city = ""; }
        this._street = _street;
        this._zipCode = _zipCode;
        this._city = _city;
    }
    Object.defineProperty(Adress.prototype, "street", {
        get: function () {
            return this._street;
        },
        set: function (val) {
            this._street = val;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Adress.prototype, "zipCode", {
        get: function () {
            return this._zipCode;
        },
        set: function (val) {
            this._zipCode = val;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Adress.prototype, "city", {
        get: function () {
            return this._city;
        },
        set: function (val) {
            this._city = val;
        },
        enumerable: false,
        configurable: true
    });
    return Adress;
}());
exports.Adress = Adress;
