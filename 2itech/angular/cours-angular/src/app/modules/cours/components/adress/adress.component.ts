import { Route } from '@angular/compiler/src/core';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-adress',
  templateUrl: './adress.component.html',
  styleUrls: ['./adress.component.css']
})
export class AdressComponent implements OnInit {

  street: any;
  city: any;
  zipCode: any;

  constructor(private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    // this.route.queryParamMap.subscribe(res => {
    //   this.street = res.get('rue');
    //   this.city = res.get('ville');
    //   this.zipCode = res.get('codePostal');
    // });
    this.street = this.route.snapshot.queryParams['rue'];
    this.city = this.route.snapshot.queryParams['ville'];
    this.zipCode = this.route.snapshot.queryParams['codePostal'];
  }

  goToMessi(): void {
    this.router.navigateByUrl('cours/intern/lionel/messi');
  }

}
