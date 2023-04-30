import { Component, Input } from '@angular/core'

@Component({
  selector: 'app-navbar',
  templateUrl: 'navbar.component.html',
  styleUrls: ['navbar.component.css'],
})
export class Navbar {
  @Input()
  Link_3: string = 'Prices\n'
  @Input()
  text1: string = 'Features'
  @Input()
  text12: string = 'Prices'
  @Input()
  Link_4: string = 'Contact\n'
  @Input()
  Branding_src: string = '/assets/playground_assets/pastedimage-cx4wqj.svg'
  @Input()
  Link_1: string = 'Features'
  @Input()
  text131: string = 'Log in'
  @Input()
  image_alt: string = 'image'
  @Input()
  pastedImage_src: string = '/assets/playground_assets/pastedimage-8o98.svg'
  @Input()
  text1311: string = 'Sign up'
  @Input()
  text13: string = 'Contact'
  @Input()
  Link_2: string = 'How it works'
  @Input()
  pastedImage_alt: string = 'pastedImage'
  @Input()
  image_src: string = '/assets/playground_assets/pastedimage-cx4wqj.svg'
  @Input()
  Branding_alt: string = 'pastedImage'
  @Input()
  text11: string = 'How it works'
  constructor() {}
}
