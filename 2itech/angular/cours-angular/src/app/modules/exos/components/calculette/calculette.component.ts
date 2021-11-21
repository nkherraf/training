import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-calculette',
  templateUrl: './calculette.component.html',
  styleUrls: ['./calculette.component.css']
})
export class CalculetteComponent implements OnInit {
  val1: any;
  val2: any;
  op: string = '';
  result: any;
  err: string = '';
  constructor() { }

  ngOnInit(): void {
    console.log(this.result);
  }

  onSubmit(f: NgForm) {
    this.val1 = f.value.val1;
    this.val2 = f.value.val2;
    this.result = (this.val2==0 && this.op=="/")?undefined:eval(this.val1+this.op+this.val2);
    console.log(this.result);
    if(this.result===undefined) {
      this.err = 'Le calcul est impossible !';
    }
  }

  opTouched(opT: string) {
    this.op = opT;
  }
}
