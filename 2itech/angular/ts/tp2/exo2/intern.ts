export class Intern {
    constructor(private _name: string = "Unknown Student", private _grades: number[] = [0,0,0]) {
        this.grades = _grades;
    }

    get name() {
        return this._name
    }

    set name(val: string) {
        this._name = val
    }

    get grades() {
        return this._grades
    }

    set grades(val: number[]) {
        val.forEach((element,index) => {
            val[index] = element<0?0:element;
        });
        this._grades = val
    }

    gradesMean() {
        let n: number = this.grades.length;
        let tab: number[] = [...this.grades];
        return tab.map(val => val/n).reduce((pV,nV) => pV + nV);
    }

    findMax() {
        return Math.max(...this.grades);
    }

    findMin() {
        return Math.min(...this.grades);
    }
}