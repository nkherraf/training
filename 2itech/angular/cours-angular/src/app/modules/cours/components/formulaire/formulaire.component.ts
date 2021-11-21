import { Component, OnInit } from '@angular/core';
import { Form, NgForm } from '@angular/forms';
import { Personne } from 'src/app/interfaces/personne';

@Component({
  selector: 'app-formulaire',
  templateUrl: './formulaire.component.html',
  styleUrls: ['./formulaire.component.css']
})
export class FormulaireComponent implements OnInit {
  nom: string = 'Wick';
  personne: Personne = {};
  personnes: Personne[] = [];
  listDisplayed: boolean = false;
  firstInstance: boolean = true;
  constructor() { }

  ngOnInit(): void {

  }

  addPerson(f: NgForm) {
    this.personnes.push(this.personne);
    this.firstInstance = false;
    this.displayList();
    this.personne= {};
  }

  displayList() {
    this.listDisplayed=true;
    // this.listDisplayed=this.listDisplayed?false:true;
  }

}
