import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ExosRoutingModule } from './exos-routing.module';
import { TabComponent } from './components/tab/tab.component';
import { CalcComponent } from './components/calc/calc.component';
import { FormsModule } from '@angular/forms';
import { CalculetteComponent } from './components/calculette/calculette.component';


@NgModule({
  declarations: [
    TabComponent,
    CalcComponent,
    CalculetteComponent,
  ],
  imports: [
    CommonModule,
    ExosRoutingModule,
    FormsModule
  ]
})
export class ExosModule { }
