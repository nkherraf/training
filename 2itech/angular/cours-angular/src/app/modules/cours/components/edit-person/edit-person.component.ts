import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Personne } from 'src/app/interfaces/personne';
import { PersonService } from 'src/app/services/person.service';

@Component({
  selector: 'app-edit-person',
  templateUrl: './edit-person.component.html',
  styleUrls: ['./edit-person.component.css']
})
export class EditPersonComponent implements OnInit {
  pers: Personne = {}
  constructor(private personServe: PersonService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe((p) => {
      this.personServe.getPersonById(p.get('id')).subscribe({
        next: (cont) => {
          this.pers = cont;
        },
        error: (err) => {
          console.error(err);
          
          this.router.navigateByUrl('cours/personnes');
        }
      });
    })
  }

  updatePers() {
    this.personServe.updatePerson(this.pers).subscribe(() => {
      this.router.navigateByUrl('cours/personnes');
    })
  }

}
