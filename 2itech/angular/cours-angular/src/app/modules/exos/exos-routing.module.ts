import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CalcComponent } from './components/calc/calc.component';
import { CalculetteComponent } from './components/calculette/calculette.component';
import { TabComponent } from './components/tab/tab.component';

const routes: Routes = [
  { path: 'calcul/:op', component: CalcComponent },
  { path: 'calcul', component: CalcComponent },
  { path: 'tableau/:id', component: TabComponent },
  { path: 'tableau', component: TabComponent },
  { path:'calculette', component:CalculetteComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ExosRoutingModule { }
