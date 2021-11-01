import {Component, Input} from '@angular/core';
import {Exercise} from "../exercise";

@Component({
  selector: 'app-config',
  templateUrl: './config.component.html',
  styleUrls: ['./config.component.css']
})
export class ConfigComponent{

  @Input() exercises: Exercise[] = [];
  exercise: Exercise = {
    name: '',
    duration: 30,
    repetitions: 3,
    preparation: 15,
    rest: 30
  };

  constructor() { }

  add(): void{
    this.exercises.push(this.exercise);
    this.exercise = {...this.exercise, name: ''};
  }

  delete(index: number) {
    this.exercises.splice(index, 1);
  }

  formatPhase(phase: number){
    switch (phase){
      case 0: return 'Preparação';
      case 1: return 'Exercício';
      case 1: return 'Descanso';
    }
  }
}
