import { Adress } from "./adress";
import { MiseEnForme } from "./mise-en-forme";

export abstract class Person implements MiseEnForme {
    constructor(private _num: number = 0, private _lastName: string = "", private _firstName: string = "", private _adress: Adress = new Adress()) {
        this.num = _num;
    }
    displayUpperCaseFirstName(): void {
        console.log(this.firstName.toUpperCase());
    }
    displayUpperCaseLastName(): void {
        console.log(this.lastName.toUpperCase());
    }

    get num() {
        return this._num
    }

    set num(val: number) {
        this._num = val<0?0:val;
    }

    get lastName() {
        return this._lastName
    }

    set lastName(val: string) {
        this._lastName = val
    }

    get firstName() {
        return this._firstName
    }

    set firstName(val: string) {
        this._firstName = val
    }

    get adress() {
        return this._adress
    }

    set adress(val: Adress) {
        this._adress = val
    }
}