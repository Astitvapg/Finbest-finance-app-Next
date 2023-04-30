import { Component } from '@angular/core'
import { Title, Meta } from '@angular/platform-browser'

@Component({
  selector: 'app-home',
  templateUrl: 'home.component.html',
  styleUrls: ['home.component.css'],
})
export class Home {
  rawfy2x: string = ' '
  rawmupm: string = ' '
  raw1ese: string = ' '
  rawc733: string = ' '
  rawgkgc: string = ' '
  rawyekq: string = ' '
  rawe5r3: string = ' '
  rawsf30: string = ' '
  rawbyc6: string = ' '
  rawuees: string = ' '
  raw9iwv: string = ' '
  rawz1oh: string = ' '
  constructor(private title: Title, private meta: Meta) {
    this.title.setTitle('Finbest')
    this.meta.addTags([
      {
        name: 'description',
        content: 'Description of the website',
      },
      {
        property: 'og:title',
        content: 'Finbest',
      },
      {
        property: 'og:description',
        content: 'Description of the website',
      },
    ])
  }
}
