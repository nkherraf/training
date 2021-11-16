// import * as f from  "./functions";

// async function somme(a:number,b:number) {
//     return a+b;
// }

// async function sommeSquares(a:number, b: number) {
//     let result = 0;
//     await somme(2,3).then(res => result = res);
//     return result ** 2 ;
// }

// sommeSquares(2,3).then(res => console.log(res));

import { Person } from "./person";
import { Student } from "./student";
import { Adress } from "./adress";
import { Teacher } from "./teacher";

let LAdress: Adress = new Adress("23 rue de la Clastre", "13150", "Boulbon");
let Lorenzo: Person = new Student(42, "DE LILLO", "Lorenzo", LAdress,"DUT 2");

// console.log(Lorenzo);

let t1 = new Teacher(100, "PUJOL", "Marc", null, 2000);
let s1 = new Student(Lorenzo.num, Lorenzo.lastName, Lorenzo.firstName, Lorenzo.adress, "2e année");
let p1 = new Student(13, "SURREL", "Marie", null, "DUT 1");

let personnes: Person[] = [p1, s1, t1];

// for (let obj of personnes) {
//     console.log(obj instanceof Student?obj.level:obj instanceof Teacher?obj.wage:obj.num);
// }

p1.displayUpperCaseLastName();
s1.displayUpperCaseFirstName();

