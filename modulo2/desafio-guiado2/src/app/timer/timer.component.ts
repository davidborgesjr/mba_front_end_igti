import {Component, Input, OnInit} from '@angular/core';
import {Exercise} from "../exercise";

@Component({
  selector: 'app-timer',
  templateUrl: './timer.component.html',
  styleUrls: ['./timer.component.css']
})
export class TimerComponent implements OnInit {

  @Input() exercises: Exercise[] = [];
  currentExercise: number = 0;
  currentRepetition: number = 0;
  phase: number = 0;

  constructor() { }

  ngOnInit(): void {
  }

}
