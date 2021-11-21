import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { VehiculeRoutingModule } from './vehicule-routing.module';
import { CarComponent } from './components/car/car.component';
import { TruckComponent } from './components/truck/truck.component';


@NgModule({
  declarations: [
    CarComponent,
    TruckComponent
  ],
  imports: [
    CommonModule,
    VehiculeRoutingModule
  ]
})
export class VehiculeModule { }
