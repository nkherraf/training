export class Adress {
    constructor(private _street: string = "", private _zipCode: string = "", private _city: string = "") { }

    get street() {
        return this._street
    }

    set street(val: string) {
        this._street = val
    }

    get zipCode() {
        return this._zipCode
    }

    set zipCode(val: string) {
        this._zipCode = val
    }

    get city() {
        return this._city
    }

    set city(val: string) {
        this._city = val
    }
}