import { Component, Input } from '@angular/core';
import { APP_BASE_HREF, CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-banner-6',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './banner-6.component.html',
  styleUrls: ['./banner-6.component.scss'],
  providers: [{provide: APP_BASE_HREF, useValue: '/'}],
})
export class Banner6Component {
  @Input() preTitle: string = 'Lorem Ipsum ad';
  @Input() title: string = 'Lorem Ipsum ad dolorem';
  @Input() detail: string = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente voluptates labore, perferendis tempora pariatur repellendus!';
  @Input() buttonInfo: any = {
    label: 'Lorem Ipsum',
    link: 'www.google.com'
  };
  @Input() imageLink: string = 'https://placehold.co/1080x720';
}
