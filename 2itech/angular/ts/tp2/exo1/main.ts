// TP 1 Exo 1

import { Point } from './point';
import {TriplePts} from './triple-pts';

let a = new Point(1, 2);
let b = new Point(3, 4);
let c = new Point(0, 1);
console.log(b.milieu(a));


let d = new Point(0,3);
let e = new Point(3,0);
let f = new Point(3,3);
let testDroite = new TriplePts(d,f,e);
console.log(testDroite.testAlign());
console.log(testDroite.isIsocele());