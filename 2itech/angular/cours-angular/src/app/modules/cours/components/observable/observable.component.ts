import { Component, OnInit } from '@angular/core';
import { interval, map, Observable, Observer, take } from 'rxjs';

@Component({
  selector: 'app-observable',
  templateUrl: './observable.component.html',
  styleUrls: ['./observable.component.css']
})
export class ObservableComponent implements OnInit {

  status: string = '';
  tab: number[] = [1];

  constructor() { }

  ngOnInit(): void {
    const observable: Observable<number> = interval(1000).pipe(
      take(10),
      map(el => el*2),

    );

    const observer: Observer<number> = {
      next: (value: number) => {
        this.tab.push(value);
      },
      error: (error: string) => {
        this.status = error;
      },
      complete: () => {
        this.status = 'fini';
      }
    };
    observable.subscribe(observer)
  }

}
