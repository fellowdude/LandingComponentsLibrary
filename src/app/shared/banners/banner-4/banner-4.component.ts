import { Component, Input } from '@angular/core';
import { APP_BASE_HREF, CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-banner-4',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './banner-4.component.html',
  styleUrls: ['./banner-4.component.scss'],
  providers: [{provide: APP_BASE_HREF, useValue: '/'}],
})
export class Banner4Component {
  @Input() preTitle: string = 'Lorem Ipsum ad';
  @Input() title: string = 'Lorem Ipsum ad dolorem';
  @Input() detail: string = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente voluptates labore, perferendis tempora pariatur repellendus, commodi obcaecati doloribus esse quod harum, ratione vitae doloremque nulla libero mollitia voluptatem officiis modi!';
  @Input() buttonInfo: any = {
    label: 'Lorem Ipsum',
    link: 'www.google.com'
  };
  @Input() imageLink: string = 'https://placehold.co/500x600';
}
