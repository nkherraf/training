import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-tab',
  templateUrl: './tab.component.html',
  styleUrls: ['./tab.component.css']
})
export class TabComponent implements OnInit {
  numbers = [2, 3, 8, 1];
  index: any;
  val: any;
  path: any = this.router.url;
  constructor(private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(cont => {
      let param = cont.get('id') ?? false;
      if (param) {
        this.index = Number(cont.get('id'));
        this.val = this.numbers[this.index];
      }
    });
  }

  prevVal(): void {
    this.router.navigate([this.path.slice(0, this.path.length - 1), this.index == 0 ? this.numbers.length - 1 : this.index - 1]);
  }

  nextVal(): void {
    this.router.navigate([this.path.slice(0, this.path.length - 1), this.index == this.numbers.length - 1 ? 0 : this.index + 1]);
  }

  onSubmit(f: NgForm) {
    this.router.navigate([this.path, f.value.val1]);
  }

}
