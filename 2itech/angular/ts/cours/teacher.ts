import { Person } from "./person";
import { Adress } from "./adress";

export class Teacher extends Person {

    constructor(
        _num: number,
        _lastName: string,
        _firstName: string,
        _adress: Adress,
        private _wage: number
    ) {
        super(_num, _lastName, _firstName, _adress);
    }

    get wage() {
        return this._wage
    }

    set wage(val: number) {
        this._wage = val
    }
}