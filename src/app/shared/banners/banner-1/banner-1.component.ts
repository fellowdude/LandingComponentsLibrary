import { Component, Input } from '@angular/core';
import { APP_BASE_HREF, CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-banner-1',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './banner-1.component.html',
  styleUrls: ['./banner-1.component.scss'],
  providers: [{provide: APP_BASE_HREF, useValue: '/'}],
})
export class Banner1Component {

  @Input() preTitle: string = 'Lorem Ipsum ad';
  @Input() title: string = 'Lorem Ipsum ad dolorem';
  @Input() detail: string = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente voluptates labore, perferendis tempora pariatur repellendus!';
  @Input() buttonInfo: any = {
    label: 'Lorem Ipsum',
    link: 'www.google.com'
  };
  @Input() imageLink: string = 'https://placehold.co/1080x720';
  
  banners: Array<string> = ['b_1','b_2','b_3'];
  bannerType: string = 'b_1';
  index: number = 0;

  constructor() {}

  ngOnInit(): void {
   setInterval(
    ()=>{
      this.bannerType = this.banners[this.index];
      this.index++;
      if(this.index > this.banners.length - 1){
        this.index = 0
      }
    }, 2500
   )
  }
}
