import { Component, Input } from '@angular/core'

@Component({
  selector: 'app-point',
  templateUrl: 'point.component.html',
  styleUrls: ['point.component.css'],
})
export class Point {
  @Input()
  text: string = 'Duis aute irure dolor in reprehenderit'
  constructor() {}
}
