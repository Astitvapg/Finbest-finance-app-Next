import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core'
import { RouterModule } from '@angular/router'
import { CommonModule } from '@angular/common'

import { Feature } from './feature/feature.component'
import { Check } from './check/check.component'
import { Accordion } from './accordion/accordion.component'
import { Quote } from './quote/quote.component'
import { Point } from './point/point.component'
import { Footer } from './footer/footer.component'
import { Highlight } from './highlight/highlight.component'
import { Announcement } from './announcement/announcement.component'
import { Navbar } from './navbar/navbar.component'
import { Social } from './social/social.component'

@NgModule({
  declarations: [
    Feature,
    Check,
    Accordion,
    Quote,
    Point,
    Footer,
    Highlight,
    Announcement,
    Navbar,
    Social,
  ],
  imports: [CommonModule, RouterModule],
  exports: [
    Feature,
    Check,
    Accordion,
    Quote,
    Point,
    Footer,
    Highlight,
    Announcement,
    Navbar,
    Social,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class ComponentsModule {}
