import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  
  // Sans FormBuilder
  
  // personneForm = new FormGroup({
  //   //id: new FormControl(100),
  //   fName: new FormControl('', Validators.required),
  //   lName: new FormControl('', [Validators.required, Validators.pattern(/^[A-Z]{1}\w{1,}$/)]),
  //   adress: new FormGroup({
  //     street: new FormControl(),
  //     city: new FormControl(),
  //     zipCode: new FormControl(),
  //   }),
  // })
  // constructor() { }

  // Avec FormBuilder

  personneForm = this.fb.group({
    fName: [],
    lName: ['', [Validators.required, Validators.pattern(/^[A-Z]{1}\w{1,}$/)]],
    adress: this.fb.group({
      street: [],
      city: [],
      zipCode: [],
    })
  });
  data: Array<any> = []
  listDisplayed: any;

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
  }

  addPerson() {
    this.data.push(this.personneForm.value);
    this.display();
    this.personneForm.reset();
  }

  display() {
    this.listDisplayed = true;
  }

}
