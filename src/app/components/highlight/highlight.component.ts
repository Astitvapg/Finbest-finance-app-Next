import { Component, Input } from '@angular/core'

@Component({
  selector: 'app-highlight',
  templateUrl: 'highlight.component.html',
  styleUrls: ['highlight.component.css'],
})
export class Highlight {
  @Input()
  Description: string = 'Using FinBest MeansYou are Investing Right'
  @Input()
  Title: string = 'Everything you get with Finbest'
  constructor() {}
}
