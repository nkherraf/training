import { Point } from "./point";

export class TriplePts {
    private _ptA: Point;
    private _ptB: Point;
    private _ptC: Point;

    get ptA() {
        return this._ptA
    }

    set ptA(val: Point) {
        this._ptA = val
    }

    get ptB() {
        return this._ptB
    }

    set ptB(val: Point) {
        this._ptB = val
    }

    get ptC() {
        return this._ptC
    }

    set ptC(val: Point) {
        this._ptC = val
    }

    constructor(ptA: Point, ptB: Point, ptC: Point) {
        this._ptA = ptA;
        this._ptB = ptB;
        this._ptC = ptC;
    }

    testAlign(): boolean {
        let distAB = this._ptA.calcDist(this._ptB);
        let distAC = this._ptA.calcDist(this._ptC);
        let distBC = this._ptB.calcDist(this._ptC);
        // switch (true) {
        //     case distAB == distAC + distBC:
        //         return true;
        //     case distAC == distBC + distAB:
        //         return true;
        //     case distBC == distAB + distAC:
        //         return true;
        //     default:
        //         return false;
        // }
        return (distAB == distAC + distBC || distAC == distBC + distAB || distBC == distAB + distAC);
    }

    isIsocele(): boolean {
        let distAB = this._ptA.calcDist(this._ptB);
        let distAC = this._ptA.calcDist(this._ptC);
        let distBC = this._ptB.calcDist(this._ptC);
        // switch (true) {
        //     case this.testAlign():
        //         return false;
        //     case distAB == distAC:
        //         return true;
        //     case distAC == distBC:
        //         return true;
        //     case distBC == distAB:
        //         return true;
        //     default:
        //         return false;
        // }
        return (distAB == distAC || distAC == distBC|| distBC == distAB);
    }
}