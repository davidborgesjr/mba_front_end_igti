import { Component } from '@angular/core';
import {Exercise} from "./exercise";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  isConfiguration: boolean = false;
  exercises: Exercise[] = [{
    name: 'Abdonimal',
    duration: 30,
    repetitions: 3,
    preparation: 15,
    rest: 20
  }];
}
