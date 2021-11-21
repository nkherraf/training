import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdressComponent } from './components/adress/adress.component';
import { EditPersonComponent } from './components/edit-person/edit-person.component';
import { FormComponent } from './components/form/form.component';
import { FormulaireComponent } from './components/formulaire/formulaire.component';
import { InternComponent } from './components/intern/intern.component';
import { ObservableComponent } from './components/observable/observable.component';
import { PersonneComponent } from './components/personne/personne.component';

const routes: Routes = [
  { path: 'intern', component: InternComponent },
  { path: 'intern/:fName/:lName', component: InternComponent },
  { path: 'intern/:id', component: InternComponent },
  { path: 'observable', component: ObservableComponent },
  { path: 'adress', component: AdressComponent },
  { path: 'formulaire', component: FormulaireComponent },
  { path: 'form', component: FormComponent },
  { path: 'personnes', component: PersonneComponent },
  { path:'personnes/edit/:id', component: EditPersonComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CoursRoutingModule { }
