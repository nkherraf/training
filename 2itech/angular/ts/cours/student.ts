import { Adress } from "./adress";
import { Person } from "./person";

export class Student extends Person {

    constructor(
        _num: number,
        _lastName: string,
        _firstName: string,
        _adress: Adress,
        private _level: string = ""
    ) {
        super(_num, _lastName, _firstName, _adress);

    }

    get level() {
        return this._level
    }

    set level(val: string) {
        this._level = val
    }

    displayUpperCaseFirstName() {
        console.log(this.firstName.toUpperCase()+"*");
    }
}