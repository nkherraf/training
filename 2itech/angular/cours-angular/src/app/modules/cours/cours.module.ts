import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { CoursRoutingModule } from './cours-routing.module';
import { ObservableComponent } from './components/observable/observable.component';
import { InternComponent } from './components/intern/intern.component';
import { AdressComponent } from './components/adress/adress.component';
import { FormulaireComponent } from './components/formulaire/formulaire.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FormComponent } from './components/form/form.component';
import { PersonneComponent } from './components/personne/personne.component';
import { EditPersonComponent } from './components/edit-person/edit-person.component';


@NgModule({
  declarations: [
    ObservableComponent,
    InternComponent,
    AdressComponent,
    FormulaireComponent,
    FormComponent,
    PersonneComponent,
    EditPersonComponent
  ],
  imports: [
    CommonModule,
    CoursRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ]
})
export class CoursModule { }
