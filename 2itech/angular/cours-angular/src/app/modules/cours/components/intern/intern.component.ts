import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route } from '@angular/router';

@Component({
  selector: 'app-intern',
  templateUrl: './intern.component.html',
  styleUrls: ['./intern.component.css']
})
export class InternComponent implements OnInit {
  lName: any;
  fName: any;
  id: any;
  tabId: number[] = [
    1,2,3,4
  ]
  constructor(private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(res => {
      this.lName = res.get('lName') ?? '';
      this.fName = res.get('fName') ?? '';
    });
    // this.id = isNaN(Number(this.route.snapshot.params['id']))?'':Number(this.route.snapshot.params['id']);
    // this.fName = this.route.snapshot.params['fName'];
    // this.lName = this.route.snapshot.params['lName'];
  }

}
