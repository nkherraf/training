import { Intern } from "./intern";

export class Training {
    
    constructor(private _title: string = "Unknown Training",private _nbrDays: number = 1,private _interns: Intern[] = [new Intern(), new Intern()]) {}

    get title() {
      return this._title
    }
    
    set title(val: string) {
      this._title = val
    }
    
    get nbrDays() {
      return this._nbrDays
    }
    
    set nbrDays(val: number) {
      this._nbrDays = val
    }
    
    get interns() {
      return this._interns
    }
    
    set interns(val: Intern[]) {
      this._interns = val
    }

    trainingGradesMean() {
        let result: number = 0;
        for (const el of this.interns) {
            result+=el.gradesMean();
        }
        return result/this.interns.length;
    }

    whichInternMax() {
        let tab: number[] = [];
        for (const el of this.interns) {
            tab.push(el.gradesMean());
        }
        return tab.indexOf(Math.max(...tab));
    }
}