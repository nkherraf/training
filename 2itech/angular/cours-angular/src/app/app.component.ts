import { Component } from '@angular/core';
import { Intern } from './classes/intern';

// Décorateur

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'My first Angular Website';
}
