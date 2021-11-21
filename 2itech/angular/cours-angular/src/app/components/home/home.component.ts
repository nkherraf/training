import { Component, OnInit } from '@angular/core';
import { Intern } from 'src/app/classes/intern';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  stagiaire: Intern = new Intern(42, "De Lillo","Lorenzo");
  tab: number[] = [-2, 5, 8, -3, 1, 16, -9];
  btnTxt: string = "Cliquez !";

  fN = "Lionel";
  lN = "Messi";

  personnes: Array<Intern> = [
    new Intern(100, 'Wick', 'John'),
    new Intern(101, 'Abruzzi', 'John'),
    new Intern(102, 'Marley', 'Bob'),
    new Intern(103, 'Segal', 'Steven')
  ];

  moy: number[] = [
    5,
    18,
    15,
    6,
    12,
    14
  ]
  constructor() { }

  ngOnInit(): void {
  }

  sayHello() {
    return "Hello !";
  }

  changeBtnContent() {
    this.btnTxt = "Pointeur dessus !";
  }
  changeBtnContentV2() {
    this.btnTxt = "Cliquez !";
  }
}
