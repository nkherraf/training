import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Personne } from 'src/app/interfaces/personne';
import { PersonService } from 'src/app/services/person.service';

@Component({
  selector: 'app-personne',
  templateUrl: './personne.component.html',
  styleUrls: ['./personne.component.css']
})
export class PersonneComponent implements OnInit {
  personnes: Personne[] = [];
  personne: Personne = {};
  path = this.router.url;
  firstInstance = true;
  constructor(private personServ: PersonService, private router: Router) { }

  ngOnInit(): void {
    this.initList();
    this.firstInstance = true;
  }

  addPerson(f: NgForm) {
    this.personServ.addPerson(this.personne).subscribe(() => {
      this.initList();
      // this.firstInstance = false;
      f.reset();
    });

  }
  remove(id: any) {
    this.personServ.delPers(id).subscribe(() => {
      this.initList();
    });
  }

  initList(f?: NgForm) {
    this.personServ.getPersons().subscribe((cont) => {
      this.personnes = cont;
    });
  }

}
