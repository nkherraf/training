"use strict";
// import * as f from  "./functions";
exports.__esModule = true;
var student_1 = require("./student");
var adress_1 = require("./adress");
var teacher_1 = require("./teacher");
var LAdress = new adress_1.Adress("23 rue de la Clastre", "13150", "Boulbon");
var Lorenzo = new student_1.Student(42, "DE LILLO", "Lorenzo", LAdress, "DUT 2");
// console.log(Lorenzo);
var t1 = new teacher_1.Teacher(100, "PUJOL", "Marc", null, 2000);
var s1 = new student_1.Student(Lorenzo.num, Lorenzo.lastName, Lorenzo.firstName, Lorenzo.adress, "2e année");
var p1 = new student_1.Student(13, "SURREL", "Marie", null, "DUT 1");
var personnes = [p1, s1, t1];
// for (let obj of personnes) {
//     console.log(obj instanceof Student?obj.level:obj instanceof Teacher?obj.wage:obj.num);
// }
p1.displayUpperCaseLastName();
s1.displayUpperCaseFirstName();
