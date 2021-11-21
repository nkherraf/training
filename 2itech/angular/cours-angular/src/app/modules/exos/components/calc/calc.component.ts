import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-calc',
  templateUrl: './calc.component.html',
  styleUrls: ['./calc.component.css']
})
export class CalcComponent implements OnInit {

  calcul: any;
  val1: any;
  val2: any;
  result: any;
  err: any;

  constructor(private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe((res) => {
      this.calcul = res.get('op');
      this.route.queryParamMap.subscribe((res2) => {
        this.val1 = Number(res2.get('val1'));
        this.val2 = Number(res2.get('val2'));
        switch (this.calcul) {
          case 'plus':
            this.result = this.val1 + this.val2;
            this.calcul = '+';
            break;
          case 'fois':
            this.result = this.val1 * this.val2;
            this.calcul = 'x';
            break;
          case 'moins':
            this.result = this.val1 - this.val2;
            this.calcul = '-';
            break;
          case 'div':
            this.result = this.val2!=0?this.val1 / this.val2:'Impossible';
            this.calcul = '/';
            break;
          case null:
            break;
          default:
            this.err ="L'opération demandée n'est pas mathématique !"
            break;
        }
      });
    });
  }

  onSubmit(form: NgForm) {
    let parent = this.router.url+'/';
    let link = parent+form.value['op']+'?val1='+form.value['val1']+'&val2='+form.value['val2'];
    this.router.navigateByUrl(link);
  }

}
