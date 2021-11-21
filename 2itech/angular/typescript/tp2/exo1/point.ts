export class Point {
    private _abs: number;
    private _ord: number;
    constructor(abs, ord) {
        this._abs = abs;
        this._ord = ord;
    }

    public get abs(): number {
        return this._abs;
    }


    public get ord(): number {
        return this._ord;
    }


    public set abs(v: number) {
        this._abs = v;
    }


    public set ord(v: number) {
        this._ord = v;
    }


    calcDist(p: Point) {
        let abss = Math.pow(this.abs - p.abs, 2)
        let ords = Math.pow(this.ord - p.ord, 2)
        return Math.sqrt(abss + ords);
    }
    milieu(p: Point) {
        let newAbs = (this.abs + p.abs) / 2;
        let newOrd = (this.ord + p.ord) / 2;
        return new Point(newAbs, newOrd);
    }
}